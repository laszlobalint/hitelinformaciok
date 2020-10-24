export const loginFormControls = {
  email: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Add meg az e-mail címet...',
    },
    value: '',
    validation: {
      required: true,
      isEmail: true,
      minLength: 5,
      maxLength: 30,
    },
    valid: false,
    touched: false,
  },
  password: {
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Add meg a jelszót...',
    },
    value: '',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 30,
    },
    valid: false,
    touched: false,
  },
};
