import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { useGetUserSearchBooksQuery } from '../../store/slices/api.slice';
import { userSearchBooks } from '../../store/slices/userSearchBooks.slice';

import { Icon } from '../Utils/Icon';
import { Input } from '../Utils/Input';

import { routeLinks } from '../../constants/routeLinks';

import './Header.scss';

export const Header = ({ children }) => {
  const [searchParams, setSearchParams] = useState(null);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: books } = useGetUserSearchBooksQuery(searchParams);

  const navigateToPage = (event) => {
    if (location.pathname === routeLinks.startPage) {
      if (event.type === 'change') {
        navigate(routeLinks.checkAccount);
      }
      if (event.type === 'click') {
        return null;
      }
    } else {
      navigate(routeLinks.allBooks);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInfo = e.target.search.value;
    setSearchParams(searchInfo);
    navigate(routeLinks.userBooks);
  };

  // Filtering books based on the search queries
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
        onClick={navigateToPage}
        className="header__logo"
        iconHref="#logo"
      />
      <form className="header__form" onSubmit={handleSubmit}>
        <Input
          onChange={navigateToPage}
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
