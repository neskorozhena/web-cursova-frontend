import {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input';
import { LOCAL_STORAGE_KEY } from './constants';
import { LoginService } from '../containers/LoginPage/service';

/**
 * The function checks if localStorage is available.
 *
 * @returns boolean
 */
export const isLocalStorageAvailable = (): boolean => {
  if (typeof window !== 'undefined') {
    if (window.localStorage) {
      try {
        const testKey = 'testKey';
        const testValue = 'testValue';
        window.localStorage.setItem(testKey, testValue);
        const result = window.localStorage.getItem(testKey);
        if (result === testValue) {
          window.localStorage.removeItem(testKey);
          return true;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  return false;
};

/**
 * The function get properties from localStorage.
 *
 * @param key: string // property name
 * @returns property
 */
export const getFromLocalStorage = (key: string) => {
  if (isLocalStorageAvailable()) {
    const localObject = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'
    );
    return key === LOCAL_STORAGE_KEY ? localObject : localObject[key];
  }
};

/**
 * The function set properties to localStorage.
 *
 * @param key: string // property key
 * @param item: any // property value
 */
export const setToLocalStorage = (key: string, item: any) => {
  if (isLocalStorageAvailable()) {
    const localObject = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'
    );
    localObject[key] = item;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localObject));
  }
};

/**
 * The function updates access/refresh tokens
 */

export const getUpdatedRefreshToken = async () => {
  console.log('getUpdatedRefreshToken');
  if (getFromLocalStorage('refreshToken')) {
    const response = await LoginService.refreshTokens(
      getFromLocalStorage('refreshToken')
    );
    if (response) {
      setToLocalStorage('accessToken', response.access);
    } else {
      setToLocalStorage('accessToken', null);
      setToLocalStorage('refreshToken', null);
      window.location.href = '/login';
    }
  }
};

/**
 * The function checks and formats phone number
 *
 * @param phone: string
 */
export const formatPhoneNumberToBeValid = (phone: string) => {
  const formatted = phone;
  if (isValidPhoneNumber(phone)) {
    return formatted;
  }
  if (isValidPhoneNumber(`+7${phone}`)) {
    return `+7${phone}`;
  }
  if (isValidPhoneNumber(`+${phone}`)) {
    return `+${phone}`;
  }
  return null;
};

/**
 * The function checks and formats bin number
 *
 * @param bin: string
 */
export const formatBinNumberToBeValid = (bin: string) => {
  const formatted = bin;
  if (bin.length === 12) {
    return formatted;
  }
  return null;
};

/**
 * The function checks and formats bik number
 *
 * @param bik: string
 */
export const formatBikNumberToBeValid = (bik: string) => {
  const formatted = bik;

  if (/^[A-Z]+$/i.test(bik) && bik.length === 8) {
    return formatted;
  }
  return null;
};

/**
 * The function checks and formats iik number
 *
 * @param iik: string
 */
export const formatIikNumberToBeValid = (iik: string) => {
  const formatted = iik;
  if (iik.length === 20 && /^[KZ][0-9A-Z]+$/i.test(iik)) {
    return formatted;
  }
  return null;
};

/**
 * The function formats phone number to have 11 symbols length
 *
 * @param phone: string
 */
export const formatPhoneNumberForRequest = (phone: string) => {
  const formattedValid = formatPhoneNumberToBeValid(phone);
  if (formattedValid) {
    const formatted = formatPhoneNumber(formattedValid);
    const formattedIntl = formatPhoneNumberIntl(formattedValid);
    if (formatted.length === 11) {
      return formatted;
    }
    if (formattedIntl.length === 11) {
      return formattedIntl;
    }
    if (formattedValid.length > 11 && formattedValid.length < 14) {
      return formattedValid.slice(formattedValid.length - 11);
    }
  }
  return null;
};

/**
 * The function converts date to DD.MM.YY HH:MM format
 *
 * @param time: {string}
 * @param withSec? : {boolean}
 */
export const formatTime = (time: string, withSec?: boolean) => {
  const date = new Date(time);
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const year = date.getFullYear();
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes =
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  const seconds =
    date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;
  return withSec
    ? `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
    : `${day}.${month}.${year} ${hours}:${minutes}`;
};

export const formatDate = (yesterday?: boolean) => {
  const date = yesterday
    ? new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
    : new Date();
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const formatTimeForTimer = (hour: string[], tomorrow?: boolean) => {
  const today = new Date();
  const next = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const date = !tomorrow ? today : next;
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const year = date.getFullYear();
  const getGMT = date.toString().split('GMT')[1].split(' ')[0].slice(1, 3);

  return getGMT === '00'
    ? `${year}-${month}-${day}T${hour[0]}:${hour[1]}:00Z`
    : `${year}-${month}-${day}T${hour[0]}:${hour[1]}:00+${getGMT}:00`;
};

export const convertSeconds = (seconds: number) => {
  if (seconds < 3600) {
    return new Date(seconds * 1000).toISOString().substring(14, 19);
  }
  return new Date(seconds * 1000).toISOString().substring(11, 19);
};

export const getCurrentOrderProducts = () => {
  if (isLocalStorageAvailable()) {
    return getFromLocalStorage('') || {};
  }
};

export const updateOrderProducts = (updatedCart: any) => {
  setToLocalStorage('', updatedCart);
};

export const addToProducts = (productInfo?: any) => {
  const updatedProducts = productInfo
    ? productInfo?.reduce((accum: any, item: any) => {
        accum[item.sku] = {
          ...item,
          pharmacyCount: item.pharmacyCount,
          visiblePrice: true,
          currentPrice: item.pharmacyCount * item.price,
          proposal: item.proposal
            ? {
                ...item.proposal,
                visiblePrice: true,
              }
            : null,
        };
        return accum;
      }, {})
    : {};
  updateOrderProducts(updatedProducts);
};

export const clearProducts = () => {
  updateOrderProducts({});
};

export const changeCountInProduct = (
  option: 'plus' | 'minus' | 'set',
  sku: any,
  count?: number
) => {
  const currentProducts = getCurrentOrderProducts();
  const currentCount = currentProducts[sku]?.pharmacyCount ?? 1;
  const currentPrice = currentProducts[sku]?.price ?? 1;
  const allQuantity = currentProducts[sku]?.allQuantity;
  if (option === 'minus' && currentCount === 0) {
    return currentCount;
  }
  let countDesired;
  if (option === 'plus' && currentCount >= allQuantity) {
    return currentCount;
  }
  if (option === 'plus') {
    countDesired = currentCount + 1;
  } else if (option === 'minus') {
    countDesired = currentCount - 1;
  } else countDesired = count;

  updateOrderProducts({
    ...currentProducts,
    [sku]: {
      ...currentProducts[sku],
      pharmacyCount: countDesired,
      currentPrice: currentPrice * countDesired,
    },
  });
  return countDesired;
};

export const changeCountAnnalogInProduct = (
  option: 'plus' | 'minus' | 'set',
  sku: any,
  count?: number
) => {
  const currentProducts = getCurrentOrderProducts();
  const currentCount = currentProducts[sku]?.proposal.pharmacyCount;
  const currentPrice = currentProducts[sku]?.proposal.price ?? 1;
  const allQuantity = currentProducts[sku]?.proposal.allQuantity;
  if (option === 'minus' && currentCount === 1) {
    return currentCount;
  }
  let countDesired;
  if (option === 'plus' && currentCount >= allQuantity) {
    return currentCount;
  }
  if (option === 'plus') {
    countDesired = currentCount + 1;
  } else if (option === 'minus') {
    countDesired = currentCount - 1;
  } else countDesired = count;

  updateOrderProducts({
    ...currentProducts,
    [sku]: {
      ...currentProducts[sku],
      proposal: {
        ...currentProducts[sku].proposal,
        pharmacyCount: countDesired,
        currentPrice: currentPrice * countDesired,
      },
    },
  });
  return countDesired;
};

export const changeOperatorCountInProduct = (
  option: 'plus' | 'minus' | 'set',
  sku: any,
  count?: number
) => {
  const currentProducts = getCurrentOrderProducts();
  const currentCount = currentProducts[sku]?.quantity;
  const currentPrice = currentProducts[sku]?.price;
  const allQuantity = currentProducts[sku]?.allQuantity;
  if (option === 'minus' && currentCount === 1) {
    return currentCount;
  }
  let countDesired;
  if (option === 'plus' && currentCount >= allQuantity) {
    return currentCount;
  }
  if (option === 'plus') {
    countDesired = currentCount + 1;
  } else if (option === 'minus') {
    countDesired = currentCount - 1;
  } else countDesired = count;

  updateOrderProducts({
    ...currentProducts,
    [sku]: {
      ...currentProducts[sku],
      quantity: countDesired,
      pharmacyCount: countDesired,
      currentPrice: currentPrice * countDesired,
    },
  });
  return countDesired;
};

export const changeOperatorCountAnalogInProduct = (
  option: 'plus' | 'minus' | 'set',
  sku: any,
  count?: number
) => {
  const currentProducts = getCurrentOrderProducts();
  const currentCount = currentProducts[sku]?.proposal.count;
  const currentPrice = currentProducts[sku]?.proposal.price;
  const allQuantity = currentProducts[sku]?.proposal.allQuantity;
  if (option === 'minus' && currentCount === 1) {
    return currentCount;
  }
  let countDesired;
  if (option === 'plus' && currentCount >= allQuantity) {
    return currentCount;
  }
  if (option === 'plus') {
    countDesired = currentCount + 1;
  } else if (option === 'minus') {
    countDesired = currentCount - 1;
  } else countDesired = count;

  updateOrderProducts({
    ...currentProducts,
    [sku]: {
      ...currentProducts[sku],
      proposal: {
        ...currentProducts[sku].proposal,
        count: countDesired,
        pharmacyCount: countDesired,
        currentPrice: currentPrice * countDesired,
      },
    },
  });
  return countDesired;
};

export const addAnalog = (analog: any, count: number, sku: string) => {
  const currentProducts = getCurrentOrderProducts();
  updateOrderProducts({
    ...currentProducts,
    [sku]: {
      ...currentProducts[sku],
      proposal: {
        ...analog,
        count,
        pharmacyCount: count,
        visiblePrice: true,
        currentPrice: analog.price * count,
        skuName: analog.skuName,
      },
    },
  });
};

export const addNewProduct = (product: any, quantity: number) => {
  const currentProducts = getCurrentOrderProducts();
  updateOrderProducts({
    ...currentProducts,
    [product.sku]: {
      ...product,
      quantity,
      amount: `${product.price * quantity} ₸`,
      visiblePrice: true,
      pharmacyCount: quantity,
      currentPrice: product.price * quantity,
    },
  });
};

export const deleteFromOrder = (
  sku: string,
  analog: boolean,
  skuForAnalog?: string
) => {
  if (!analog) {
    const currentOrder = getCurrentOrderProducts();
    const { [sku]: removed, ...updatedOrder } = currentOrder;
    updateOrderProducts(updatedOrder);
  } else {
    const currentOrder = getCurrentOrderProducts();
    updateOrderProducts({
      ...currentOrder,
      [sku]: {
        ...currentOrder[sku],
        proposal: null,
      },
    });
  }
};

export const changeVisiblePriceProduct = (product: any, value: boolean) => {
  const currentProducts = getCurrentOrderProducts();
  updateOrderProducts({
    ...currentProducts,
    [product.sku]: {
      ...product,
      visiblePrice: value,
    },
  });
};

export const changeVisiblePriceAnalog = (product: any, value: boolean) => {
  const currentProducts = getCurrentOrderProducts();
  updateOrderProducts({
    ...currentProducts,
    [product.sku]: {
      ...product,
      proposal: {
        ...product.proposal,
        visiblePrice: value,
      },
    },
  });
};

export const changeEditSource = (edit: boolean) => {
  return edit;
};

export const getTrimmedFields = (str: string) => {
  return str ? str?.trim() : str;
};

export const isCodeValid = (code: string | undefined) => {
  const reg = /^([a-zA-Z0-9_]+)$/;
  return code ? reg.test(getTrimmedFields(code)) : false;
};
