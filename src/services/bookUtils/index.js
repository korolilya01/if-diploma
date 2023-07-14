import {
  addWaitingBooks,
  addYourBooks,
} from '../../store/slices/accounts.slice';
import { addBookStatusSlice } from '../../store/slices/bookStatus.slice';

export const addBook = (dispatch, yourBooksList, auth, status, book) => {
  const user = yourBooksList.find((item) => auth.email === item.email);
  const booksList = user.yourBooks;
  const booksWaitingList = user.waitingBooks;
  const idNew = book.id;

  if (!status[idNew]) {
    dispatch(addYourBooks({ name: auth.name, payload: book }));
    dispatch(addBookStatusSlice({ id: book.id, status: true }));
  } else if (booksList.includes(book)) {
    return;
  } else if (!booksWaitingList.includes(book)) {
    dispatch(addWaitingBooks({ name: auth.name, payload: book }));
  }
};
