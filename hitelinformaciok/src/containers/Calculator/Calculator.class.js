import CryptoJS from 'crypto-js';

const API_KEY = 'FDI6KhA0D2YnrMhoDzAcTrUyd3ELKBhM';
const API_SECRET = 'isJk3PHdafDM7VUvoKS_6bneOD3V1Wa0';
const IV_MESSAGE = 'a';
const MODE = 'dev';
const UNIQE = true;
const MAX_LOAN_AMOUNT = 10000000;

export class Purpose {
  HASZNALT_VASARLAS = 1;
  UJ_VASARLAS = 2;
  EPITES = 3;
  FELUJITAS = 4;
  BOVITES = 5;
  KORSZERUSITES = 6;
  SZABAD_FELHASZNALAS = 7;
  HITELKIVALTAS = 8;
  LAKÁSTAKARÉK = 9;
}

export class PersonalLoanPurpose {
  SZABAD_FELHASZNALAS = 9;
  KISOSSZEGU_KOLCSON = 10;
  HITELKIVALTAS = 11;
}

export class WidgetPlace {
  FOOLDAL = 'Főoldal';
  TALALATI_LISTA = 'Találati lista';
  ADATLAP = 'Adatlap';
  ISMERETLEN = 'Ismeretlen';
}

/**
 * @param int     limit             Találatok (1-3)
 * @param int     loanAmount        Hitelösszeg
 * @param int     duration          Futamidő (hó)
 * @param string  creditPurpose     Hiteltípus
 * @param string  calculatorUrl     Kalkulátor link
 * @param int     widgetMode        Megjelenés (1-4)
 * @param array   banks             Bankazonosítók
 * @param string  cssFile           Stíluslap neve
 * @param array   css               Stílusszabályok
 * @return string --> return        Eredmény
 */
export const getMinimalOffersURL = (
  limit,
  loanAmount,
  duration,
  creditPurpose,
  calculatorUrl,
  widgetMode = 1,
  banks = [],
  cssFile = 'calculator',
  css = [],
  productType = null,
  method = 'minimalOffers',
) => {
  const params = {
    limit,
    loanAmount,
    duration,
    creditPurpose,
    calculatorUrl,
    widgetMode,
    banks,
    cssFile,
    css,
    productType,
    method,
  };

  return getURL(params);
};

/**
 * @param number  limit             Találatok (1-3)
 * @param number  price             Hitelösszeg
 * @param number  loanAmount        Hitelösszeg
 * @param number  duration          Futamidő (hó)
 * @param string  creditPurpose     Hiteltípus
 * @param string  calculatorUrl     Kalkulátor link
 * @param number  widgetMode        Megjelenés (1-4)
 * @param enum    widgetPlace       Wdiget helye
 * @param array   banks             Bankazonosítók
 * @param string  cssFile           Stíluslap neve
 * @param array   css               Stílusszabályok
 * @return string --> return        Eredmény
 */
export const getOffersURL = (
  limit,
  price,
  loanAmount,
  duration,
  creditPurpose,
  calculatorUrl,
  widgetMode = 1,
  widgetPlace = WidgetPlace.ISMERETLEN,
  banks = [],
  cssFile = 'calculator',
  css = [],
  method = 'offers',
) => {
  const params = {
    limit,
    price,
    loanAmount,
    duration,
    creditPurpose,
    calculatorUrl,
    widgetMode,
    widgetPlace,
    banks,
    cssFile,
    css,
    method,
  };

  return getURL(params);
};

/**
 * @param int     uid                Ügyfélazonosító
 * @param int     price              Ingatlanár
 * @param int     duration           Futamidő (hó)
 * @param string  creditPurpose      Hiteltípus
 * @param bool    new_tab        	   Új ablakban
 * @param string  calculatorUrl      Kalkulátor link
 * @param string  cssFile            Stíluslap neve
 * @param array   css                Stílusszabályok
 * @param bool    supported          Csak támogatott hitelek
 * @param int     calculatorType     Kalkulátor típus
 * @param string  email              E-mail cím
 * @param string  productType        Terméktípus
 * @return string --> return         Eredmény
 */
export const getCalculatorURL = (
  uid,
  price,
  duration,
  creditPurpose,
  newTab = false,
  cssFile = null,
  css = [],
  supported = false,
  calculatorType = 0,
  email = null,
  productType = null,
  method = 'calculator',
) => {
  let params = {
    uid,
    price,
    duration,
    creditPurpose,
    newTab,
    cssFile,
    css,
    supported,
    calculatorType,
    email,
    productType,
    method,
  };
  if (calculatorType === 0) {
    params.calculatorType = 'calculator';
  } else if (calculatorType === 1) {
    params.calculatorType = 'ltp';
  } else if (calculatorType === 2) {
    params.calculatorType = 'nok';
  }

  return getURL(params);
};

/**
 * @param int     price              Ingatlanár
 * @param string  calculatorUrl      Kalkulátor link
 * @param string  cssFile            Stíluslap neve
 * @param array   css                Stílusszabályok
 * @return string --> return         Eredmény
 */
export const getMiniCalculatorURL = (price, calculatorUrl, cssFile, css, method = 'minicalculator') => {
  let params = { price, calculatorUrl, cssFile, css, method };

  return getURL(params);
};

export const getURL = (params) => {
  Object.keys(params).forEach((key) => params[key] === null && delete params[key]);
  if (params.banks?.length === 0) delete params.banks;
  params.uniqe = UNIQE;

  const encryptedData = encrypt(JSON.stringify(params));
  return 'https://www.hitel.hu/api/embed?token=FDI6KhA0D2YnrMhoDzAcTrUyd3ELKBhM&data=kk9s3dhASNjlCAD3KHecgPHVBZRYZ96WX3aWC%2BZ7VM3Jzh79UVM6aW2IHHBjeFVqnfz1NqEmhvwMNMq5SLD5PsIhuVKXfp1gJpGkICOBAghuW4YGtvs9N8kUgaObh9KdoCRqLEYUEBQAV7UXn9u5SRI5zLc69H59cIUZN6QDMfPzEMjoATCmcBqSUxIA90xoMeld242et%2FmVQwcu9FQr3Sq0wUuMtrur3wAVtO%2BR8G7NikWTgQkdF1MQQsDoyzujD1UIyG6%2BPUs7MH4JUYlVUvm9b9ynbtjjn9GwpekFJuUzlPqtvz7cvDYy2g5A%2BQxQcKJiBoIl6VBVlQ7f%2FuTiVA%3D%3D';
  // return `${getApiEndpoint()}/api/embed/?token=${API_KEY}&data=${encodeURIComponent(encryptedData)}`;
};

/**
 * @param string   $name          Felhasználónév
 * @param string   $email         E-mail cím
 * @param string   $phone         Telefonszám
 * @param string   $zipCode       Irányítószám
 * @param string   $availability  Elérhetőség
 * @return string --> return      Eredmény
 */
export const getEncryptedUserData = (name, email, phone, zipCode, availability) => {
  const data = { name, email, phone, zipCode, availability };

  return encrypt(JSON.stringify(data));
};

export const encrypt = (data) => {
  const iv = CryptoJS.SHA256(IV_MESSAGE).toString(CryptoJS.enc.Hex).substring(0, 16);
  const encrypted = CryptoJS.AES.encrypt(data, API_SECRET, {
    iv,
    mode: CryptoJS.mode.CBC,
  });

  return encrypted;
};

export const getApiEndpoint = () => {
  switch (MODE) {
    case 'local':
      return 'http://www.hitel.hu';
    case 'dev':
      return 'http://www.hitel.hu';
    case 'production_https':
      return 'http://www.hitel.hu';
    case 'dev_analytics':
      return 'http://www.hitel.hu';
    case 'production':
      return 'https://www.hitel.hu';
    default:
      return 'https://www.hitel.hu';
  }
};

export const getLoanAmount = (price) => {
  let loanAmount = price * 0.8;
  if (loanAmount > MAX_LOAN_AMOUNT) loanAmount = MAX_LOAN_AMOUNT;

  return loanAmount;
};
