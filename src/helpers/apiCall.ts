import axios from 'axios';

interface IRquest {
  data?: Object;
  query?: Object;
}

class APICall {
  static apiUrl = process.env.NEXT_PUBLIC_API_URL;

  static get = async (url: string, request: IRquest, token: string | null | undefined) =>
    await axios({
      baseURL: this.apiUrl,
      method: 'GET',
      url,
      params: request.query,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    });

  static post = async (url: string, request: IRquest, token: string | null | undefined) => await axios({
      baseURL: this.apiUrl,
      method: 'POST',
      url,
      params: request.query,
      data: request.data,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    });

  static put = async (url: string, request: IRquest, token: string | null | undefined) =>
    await axios({
      baseURL: this.apiUrl,
      method: 'PUT',
      url,
      params: request.query,
      data: request.data,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    });

  static delete = async (url: string, request: IRquest, token: string | null | undefined) =>
    await axios({
      baseURL: this.apiUrl,
      method: 'DELETE',
      url,
      params: request.query,
      data: request.data,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    });
}

export default APICall;
