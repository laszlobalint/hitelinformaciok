export const subscriptionFormControls = {
  name: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Írja be a nevét...',
    },
    label: 'Teljes név',
    value: '',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    valid: false,
    touched: false,
  },
  email: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Írja be az e-mail címét...',
    },
    value: '',
    label: 'E-mail cím ',
    validation: {
      required: true,
      isEmail: true,
      minLength: 3,
      maxLength: 50,
    },
    valid: false,
    touched: false,
  },
  phone: {
    elementType: 'input',
    elementConfig: {
      type: 'tel',
      placeholder: '(+36)-?0/_ _ _ _ - _ _ _',
    },
    value: '',
    label: 'Telefonszám',
    validation: {
      required: true,
      minLength: 7,
      maxLength: 30,
    },
    valid: false,
    touched: false,
  },
  message: {
    elementType: 'textarea',
    elementConfig: {
      placeholder: 'Írja le üzenetetét és/vagy kérdését...',
      rows: 4,
      cols: 36,
    },
    value: '',
    label: 'Üzenet',
    validation: {
      required: false,
    },
    valid: true,
    touched: false,
  },
};
