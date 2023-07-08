export const config = [
  {
    name: 'name',
    labelName: 'Name',
    placeholder: 'Username',
    type: 'text',
    required: true,
  },
  {
    name: 'birthdate',
    labelName: 'Your birthdate',
    userLabelName: 'Birthdate',
    placeholder: 'DD.MM.YYYY',
    pattern: '^\\d{2}\\.\\d{2}\\.\\d{4}$',
    required: true,
    type: 'text',
  },
  {
    name: 'email',
    labelName: 'Email',
    placeholder: 'userEmail@gmail.com',
    pattern: '\\w+@\\w+\\.\\w+',
    type: 'email',
    required: true,
  },
  {
    name: 'password',
    labelName: 'Password',
    placeholder: 'Password',
    required: true,
    type: 'text',
  },
];
