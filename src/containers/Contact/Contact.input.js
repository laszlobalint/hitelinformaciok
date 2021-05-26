export const contactFormControls = {
  name: {
    elementType: 'input',
    elementConfig: {
      id: 'NAME',
      name: 'NAME',
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
      id: 'EMAIL',
      name: 'EMAIL',
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
      id: 'PHONE',
      name: 'PHONE',
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
      id: 'MESSAGE',
      name: 'MESSAGE',
      placeholder: 'Írja le üzenetetét és kérdéseit. Kollégáink egy napon belül megkeresik...',
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
