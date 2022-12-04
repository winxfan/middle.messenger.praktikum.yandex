import { queryStringify, QueryStringifyEntry } from "./queryStringify";

export type HTTPTransportOptions = {
  method: METHODS,
  timeout: number,
  data: QueryStringifyEntry,
  headers: {
    'Content-Type': string,
  }
}

export enum METHODS {
  "GET" = "get",
  "POST" = "post",
  "PUT" = "put",
  "DELETE" = "delete",
}

export class HTTPTransport {
  constructor() {
    this.request.bind(this)
    this.get.bind(this)
    this.post.bind(this)
    this.put.bind(this)
    this.delete.bind(this)
  }

  get(url: string, options: Omit<HTTPTransportOptions, 'method'>) {
    if (!options) {
      throw new Error('options not found')
    }

    const newData = options.data ? queryStringify(options.data) : ''

    return this.request(url + newData, {...options, method: METHODS.GET}, options.timeout);
  };

  put(url: string, options: Omit<HTTPTransportOptions, 'method'>){
    if (!options) {
      throw new Error('options not found')
    }

    const newData = options.data ? queryStringify(options.data) : ''

    return this.request(url + newData, {...options, method: METHODS.PUT}, options.timeout);
  };

  post(url: string, options: Omit<HTTPTransportOptions, 'method'>){
    if (!options) {
      throw new Error('options not found')
    }

    const newData = options.data ? queryStringify(options.data) : ''

    return this.request(url + newData, {...options, method: METHODS.POST}, options.timeout);
  };

  delete(url: string, options: Omit<HTTPTransportOptions, 'method'>){
    if (!options) {
      throw new Error('options not found')
    }

    const newData = options.data ? queryStringify(options.data) : ''

    return this.request(url + newData, {...options, method: METHODS.DELETE}, options.timeout);
  };

  request(url: string, options: HTTPTransportOptions, timeout: number) {
    const {
      method = METHODS.GET, headers = {}, data = {}
    } = options;

    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url)

      Object.keys(headers)?.forEach(([key, value]) => {
        console.log(key, value)
        if (value !== 'unknown') {
          xhr.setRequestHeader(key, value);
        }
      })

      xhr.timeout = timeout;

      xhr.onabort = resolve;
      xhr.onerror = resolve;
      xhr.ontimeout = resolve;

      xhr.onload = function() {
        resolve(xhr);
      };

      if(method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as XMLHttpRequestBodyInit);
      }
    })
  };
}

new HTTPTransport().get('https://jsonplaceholder.typicode.com/posts', {
  timeout: 3000,
  data: { a: 1, b: 2, c: { d: 123 }, k: [1, 2, 3] },
  headers: {
    'Content-Type': 'text/plain'
  }
}).then(console.log)
