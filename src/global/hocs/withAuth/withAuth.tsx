import React, { Component } from 'react';
import axios from 'axios';
import { getFromLocalStorage, setToLocalStorage } from '../../helpers';
import { LoginService } from '../../../containers/LoginPage/service';

const withAuth = (WrappedComponent: any) => {
  class ComposedComponent extends Component {
    requestInterceptor = axios.interceptors.request.use((req: any) => {
      if (getFromLocalStorage('accessToken')) {
        req.headers.Authorization = `Bearer ${getFromLocalStorage(
          'accessToken'
        )}`;
      }
      return req;
    });

    responseInterceptor = axios.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        const { status } = err.response;
        console.log(err);
        if (
          (status === 401 || status === 403) &&
          getFromLocalStorage('refreshToken')
        ) {
          const response = await LoginService.refreshTokens(
            getFromLocalStorage('refreshToken')
          );
          console.log(response);
          if (response) {
            setToLocalStorage('accessToken', response.access);
            window.location.reload();
          } else {
            setToLocalStorage('accessToken', null);
            setToLocalStorage('refreshToken', null);
            window.location.href = '/login';
          }
        }

        if (status === 500) {
          return Promise.reject(err);
        }
        return Promise.reject(err);
      }
    );

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return ComposedComponent;
};

export default withAuth;
