import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetUserSearchBooksQuery } from '../../store/slices/api.slice';
import { userSearchBooks } from '../../store/slices/userSearchBooks.slice';

import { Icon } from '../Icon';
import { Input } from '../Input';

import './Header.scss';

export const Header = ({ children }) => {
  const [searchParams, setSearchParams] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: books } = useGetUserSearchBooksQuery(searchParams);

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
      <Icon className="header__logo" iconHref="#logo" />
      <form onSubmit={handleSubmit}>
        <Input
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
