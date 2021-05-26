export const newPostFormControls = {
  title: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Add meg a cikk címét...',
    },
    value: '',
    label: 'Cím',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 70,
    },
    valid: false,
    touched: false,
  },
  category: {
    elementType: 'select',
    elementConfig: {
      options: [
        { value: '', displayValue: '' },
        { value: 'residental', displayValue: 'Lakossági' },
        { value: 'business', displayValue: 'Vállalati' },
      ],
    },
    value: '',
    label: 'Kategória',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
};
