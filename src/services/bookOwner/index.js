export const checkBookInList = (accounts, id) => {
  let ownedBook = null;
  let bookOwner = null;

  for (let i = 0; i < accounts.length; i++) {
    ownedBook = accounts[i].yourBooks.find((item) => item.id === id);
    bookOwner = accounts[i];
    if (ownedBook) {
      break;
    }
  }
  const { yourBooks, waitingBooks } = bookOwner;

  const isBookInYourList = yourBooks.find((item) => item.id === id);
  const isBookInWaitingList = waitingBooks.find((item) => item.id === id);

  return [isBookInYourList, isBookInWaitingList, bookOwner];
};
