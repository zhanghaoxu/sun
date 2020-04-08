import Config from 'react-native-config';
class Request {
  _request(options) {
    const url = options.url;
    if (!url) {
      throw new Error('无效的请求参数：缺少url');
    }
    delete options.url;

    let defaultHeaders = {
      'moon-platform': 'app',
      'Content-Type': 'application/json',
    };

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

    return fetch(Config.API_SERVICE_BASE_URL + url, options)
      .then(response => {
        console.warn('response', response);
        return response.json();
      })
      .then(json => {
        console.warn('josn:', json);
        if (json.code === 200) {
          return json.data;
        } else if (json.code === -2) {
        }
      })
      .catch(e => {
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
