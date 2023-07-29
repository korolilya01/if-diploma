import { routeLinks } from '../../../../constants/routeLinks';

const { allBooks, orders } = routeLinks;
export const headerMenu = [
  {
    path: allBooks,
    content: 'All books',
  },
  {
    path: orders,
    content: 'Your orders',
  },
];
