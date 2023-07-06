export const config = [
  {
    name: 'Name',
    placeholder: 'Username',
    type: 'text',
    required: true,
  },
  {
    name: 'Email',
    placeholder: 'userEmail@gmail.com',
    pattern: '\\w+@\\w+\\.\\w+',
    type: 'email',
    required: true,
  },
  {
    name: 'Your birthdate',
    placeholder: 'DD.MM.YYYY',
    pattern: '^\\d{2}\\.\\d{2}\\.\\d{4}$',
    required: true,
    type: 'text',
  },
  {
    name: 'Password',
    placeholder: 'Password',
    required: true,
    type: 'password',
  },
];
