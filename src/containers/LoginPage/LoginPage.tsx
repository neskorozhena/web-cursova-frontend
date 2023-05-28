import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikProps,
} from 'formik';
import * as Styled from './LoginPage.styles';
import { selectors } from './reducer';
import { INITIAL_AUTHORIZATION_MODAL_FORM_STATE } from './constants';
import Loader from '../../components/Loader';
import * as actions from './actions';

interface FormValues {
  userName: string;
  password: string;
}

const LoginPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const loading = useSelector(selectors.loading);

  const validateForm = (values: FormValues) => {
    const { userName, password } = values;
    const errors: FormikErrors<FormValues> = {};

    if (!userName) {
      errors.userName = t('LoginPage.USERNAME_EMPTY_ERROR');
    }
    if (!password) {
      errors.password = t('LoginPage.PASSWORD_EMPTY_ERROR');
    }

    return errors;
  };

  const handleSubmitPhoneForm = async (values: FormValues) => {
    dispatch(
      actions.auth.request({
        username: values.userName,
        password: values.password,
      })
    );
  };

  const pageContent = (
    <Styled.LoginPagePhoneConfirmation>
      <div className="authHeader">
        <div className="title">{t('LoginPage.LOGIN_TITLE')}</div>
      </div>
      <Formik
        initialValues={INITIAL_AUTHORIZATION_MODAL_FORM_STATE}
        onSubmit={handleSubmitPhoneForm}
        validate={validateForm}
        validateOnChange={false}
      >
        {(props: FormikProps<FormValues>) => (
          <Form className="form-container">
            <div className="form-block">
              <label className="form-label" htmlFor="userName">
                {t('LoginPage.USERNAME_LABEL')}
              </label>
              <Field
                id="userName"
                name="userName"
                type="text"
                className={`input ${props.errors.userName && 'input-error'}`}
              />
              <ErrorMessage
                name="userName"
                render={(msg: string) => (
                  <div className="error-message-label">{msg}</div>
                )}
              />
            </div>
            <div className="form-block">
              <label className="form-label" htmlFor="password">
                {t('LoginPage.PASSWORD_LABEL')}
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className={`input ${props.errors.password && 'input-error'}`}
              />
              <ErrorMessage
                name="password"
                render={(msg: string) => (
                  <div className="error-message-label">{msg}</div>
                )}
              />
            </div>
            <Styled.FormSubmitButton type="submit">
              {t('LoginPage.LOGIN_TITLE')}
            </Styled.FormSubmitButton>
          </Form>
        )}
      </Formik>
    </Styled.LoginPagePhoneConfirmation>
  );

  return (
    <>
      <Styled.LoginPageContainer>
        <Styled.LoginPageContent>{pageContent}</Styled.LoginPageContent>
      </Styled.LoginPageContainer>
      {loading && <Loader />}
    </>
  );
};

export default LoginPage;
