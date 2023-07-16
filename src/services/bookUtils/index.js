import {
  addWaitingBooks,
  addYourBooks,
  removeYourBooksSlice,
} from '../../store/slices/accounts.slice';
import { addBookStatusSlice } from '../../store/slices/bookStatus.slice';

export const addBook = (dispatch, yourBooksList, auth, status, book) => {
  const user = yourBooksList.find((item) => auth.email === item.email);
  const booksList = user.yourBooks;
  const booksWaitingList = user.waitingBooks;
  const idNew = book.id;

  const timeToRemoveBook = 20 * 24 * 60 * 60 * 1000;

  if (!status[idNew]) {
    //original value is false, on the first iteration gets here
    dispatch(addYourBooks({ name: auth.name, payload: book }));
    dispatch(addBookStatusSlice({ id: book.id, status: true }));
    setTimeout(() => {
      dispatch(removeYourBooksSlice(book.id)); //remove a book from current user's list
      dispatch(addBookStatusSlice({ id: book.id, status: false })); //add a status 'available' to the book
    }, timeToRemoveBook);
  } else if (
    booksList.some((item) => JSON.stringify(item) === JSON.stringify(book))
  ) {
    return null;
  } else if (
    !booksWaitingList.some(
      (item) => JSON.stringify(item) === JSON.stringify(book),
    )
  ) {
    dispatch(addWaitingBooks({ name: auth.name, payload: book }));
  }
};
