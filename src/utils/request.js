import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';
import loading from '@/utils/loading';
import toast from '@/utils/toast';

const baseUrl = Config.API_SERVICE_BASE_URL;
class Request {
  async _getUserToken() {
    let userToken = await AsyncStorage.getItem('userToken');
    return userToken;
  }
  async _request(options) {
    const url = options.url;
    if (!url) {
      throw new Error('无效的请求参数：缺少url');
    }
    delete options.url;

    let defaultHeaders = {
      'moon-platform': 'app',
      'Content-Type': 'application/json',
    };

    if (options.needAuth) {
      let userToken = await this._getUserToken();
      if (!userToken) {
        return new Promise(function(resolve, reject) {
          reject({
            code: '-4001',
            msg: '接口认证限制',
          });
        });
      }
      defaultHeaders['moon-session'] = userToken;
    }

    if (!options.headers || typeof options.headers !== 'object') {
      options.headers = defaultHeaders;
    } else {
      options.headers = Object.assign({}, defaultHeaders, options.headers);
    }

    const data = options.data;
    if (data) {
      if (typeof data !== 'object') {
        throw new Error('options.data数据格式错误，支持Object/FormData');
      }

      const isUploadFile = data instanceof FormData;
      //文件上传
      if (isUploadFile) {
        options.body = data;
        // 使用默认
        delete options.headers['Content-Type'];
      } else {
        //非文件上传 统一使用json
        options.body = data instanceof FormData ? data : JSON.stringify(data);
      }
    }

    if (options.loading) {
      loading.show();
    }

    return new Promise(function(resolve, reject) {
      fetch(baseUrl + url, options)
        .then(response => {
          loading.hide();
          const {status} = response;
          //成功
          if (status === 200) {
            return response.json();
          } else {
            throw new Error(status);
          }
        })
        .then(json => {
          if (json.code === 200) {
            resolve(json.data);
          } else {
            throw new Error(json.msg ? json.msg : '服务端错误');
          }
        })
        .catch(e => {
          loading.hide();
          reject(e);
          toast.showError(
            e.message ? `请求出错:${e.message}` : '网络错误或请求被拦截！',
          );
        });
    });
  }

  post(options) {
    options.method = 'POST';
    return this._request(options);
  }

  get(options) {
    options.method = 'GET';
    return this._request(options);
  }
}

export default new Request();
