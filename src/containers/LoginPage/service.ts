import axios from 'axios';

export class LoginService {
  static API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

  static auth = async (username: string, password: string) => {
    const response = await axios({
      method: 'post',
      url: `${LoginService.API_BASE_URL}/token/`,
      data: {
        username,
        password,
      },
    });
    return response.data;
  };

  static refreshTokens = async (refreshToken: string) => {
    console.log(refreshToken);
    const response = await axios({
      method: 'post',
      url: `${LoginService.API_BASE_URL}/token/refresh/`,
      data: {
        refresh: refreshToken,
      },
    });
    return response.data;
  };

  static getUserInfo = async () => {
    const response = await axios({
      method: 'get',
      url: `${LoginService.API_BASE_URL}/user/`,
    });
    return response.data;
  };
}
