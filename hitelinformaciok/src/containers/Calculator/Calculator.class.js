import CryptoJS from 'crypto-js';

const API_KEY = 'FDI6KhA0D2YnrMhoDzAcTrUyd3ELKBhM';
const API_SECRET = 'isJk3PHdafDM7VUvoKS_6bneOD3V1Wa0';
const IV_MESSAGE = 'a';
const MODE = 'dev';
const UNIQUE = true;
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
 * @param string  method            Metódus
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
 * @param number  uid                Ügyfélazonosító
 * @param number  price              Ingatlanár
 * @param number  duration           Futamidő (hó)
 * @param number  credit_purpose     Hiteltípus
 * @param boolean new_tab        	   Új ablakban
 * @param string  cssFile            Stíluslap neve
 * @param array   css                Stílusszabályok
 * @param boolean supported          Csak támogatott hitelek
 * @param string  email              E-mail cím
 * @param string  productType        Terméktípus
 * @param number  calculatorType     Kalkulátor típus
   @param string  method             Metódus
 * @param boolean uniqe              Bankonként egy ajánlat
 * @return string --> return         Eredmény
 */
export const getCalculatorURL = (
  uid,
  price,
  duration,
  credit_purpose,
  new_tab = false,
  cssFile = 'calculator',
  css = [],
  supported = false,
  email = null,
  productType = null,
  calculatorType = 0,
  method = 'calculator',
  unique = UNIQUE,
) => {
  let params = {
    uid,
    price,
    duration,
    credit_purpose,
    new_tab,
    cssFile,
    css,
    supported,
    email,
    productType,
    method,
    calculatorType,
    unique,
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
  const ciphertextB64 = encrypt(JSON.stringify(params)).toString().replace(/\+/g, '%2B').replace(/\//g, '%2F').replace(/=/g, '%3D');

  return `${getApiEndpoint()}/api/embed/?token=${API_KEY}&data=${ciphertextB64}`;
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

  return encrypt(JSON.stringify(data)).toString().replace(/\+/g, '%2B').replace(/\//g, '%2F').replace(/=/g, '%3D');
};

function encrypt(stringData) {
  const iv = CryptoJS.SHA256(IV_MESSAGE).toString(CryptoJS.enc.Hex).substring(0, 16);
  const encrypted = CryptoJS.AES.encrypt(stringData, CryptoJS.enc.Utf8.parse(API_SECRET), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    pad: CryptoJS.pad.Pkcs7,
  });

  return encrypted;
}

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
