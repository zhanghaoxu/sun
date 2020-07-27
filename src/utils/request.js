import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';
import loading from '@/utils/loading';
import toast from '@/utils/toast';

const baseUrl = 'http://192.168.0.147:7001'; //Config.API_SERVICE_BASE_URL;
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
        throw new Error('数据格式错误');
      }
      if (options.headers['Content-Type'] !== 'application/json') {
        throw new Error('暂不支持的content-type');
      }
      options.body = JSON.stringify(data);
    }

    if (options.loading) {
      loading.show();
    }

    return fetch(baseUrl + url, options)
      .then(response => {
        loading.hide();
        return response.json();
      })
      .then(json => {
        if (json.code === 200) {
          return json.data;
        } else if (json.code === -2) {
          return null;

          //NavigationService.navigate('Auth');
        } else {
          toast.show(json.msg ? json.msg : '服务端错误');
          return null;
        }
      })
      .catch(e => {
        loading.hide();
        toast.show('网络错误');
        console.log(e);
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
