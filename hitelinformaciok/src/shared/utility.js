export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const mapErrorCodeToMessage = (errorCode) => {
  return ERROR[errorCode];
};

const ERROR = {
  EMAIL_NOT_FOUND: 'Nem található a megadott e-mail cím!',
  INVALID_PASSWORD: 'Hibás jelszót adtál meg!',
  USER_DISABLED: 'A felhasználót fiókja inaktív!',
  INVALID_EMAIL: 'Helytelen e-mail formátumot adtál meg!',
  EMAIL_EXISTS: 'Az e-mail cím már használatban van!',
  OPERATION_NOT_ALLOWED: 'Jelszóval történő bejelentkezés nem engedélyezett!',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'Szokatalan tevékenység miatt a felhasználó bejelentkezése letiltva!',
};
