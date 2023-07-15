import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetUserSearchBooksQuery } from '../../store/slices/api.slice';
import { userSearchBooks } from '../../store/slices/userSearchBooks.slice';

import { Icon } from '../Icon';
import { Input } from '../Input';

import './Header.scss';
import { authSelector } from '../../store/selectors/authorization.selector';

export const Header = ({ children }) => {
  const [searchParams, setSearchParams] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: books } = useGetUserSearchBooksQuery(searchParams);

  const userData = useSelector(authSelector);

  const isLogIn = () => {
    if (!userData.name) {
      navigate('/checkAccount');
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInfo = e.target.search.value;
    setSearchParams(searchInfo);
    navigate('/userBooks');
  };

  // Filter the books based on the search queries
  const filteredBooks = books?.filter((book) => {
    const { name, author } = book;
    const lowerSearchQuery = searchParams?.toLowerCase();
    return (
      name.toLowerCase().includes(lowerSearchQuery) ||
      author.toLowerCase().includes(lowerSearchQuery)
    );
  });

  useEffect(() => {
    dispatch(userSearchBooks(filteredBooks));
  }, [dispatch, filteredBooks]);

  return (
    <header className="header">
      <Icon
        onClick={() => navigate('/allbooks')}
        className="header__logo"
        iconHref="#logo"
      />
      <form className="header__form" onSubmit={handleSubmit}>
        <Input
          onChange={isLogIn}
          id="search"
          labelId="search"
          inputClassName="header__search"
          type="search"
          name="searchBook"
          placeholder="Search by author, title, name"
        />
      </form>
      <nav className="header__nav">{children}</nav>
    </header>
  );
};
