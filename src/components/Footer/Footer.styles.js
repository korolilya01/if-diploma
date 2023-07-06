import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(() => ({
  root: {
    order: 3,
    backgroundColor: 'var(--dark-blue)',
  },
  list: {
    display: 'flex',
    gap: 110,
    '@media (max-width: 768px)': {
      justifyContent: 'center',
      gap: 20,
      marginBottom: 0,
    },
    '@media (max-width: 480px)': {
      gap: 8,
    },
  },
  links: {
    maxWidth: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    '@media (max-width: 768px)': {
      display: 'block',
      margin: 'auto',
    },
  },
  text: {
    color: 'var(--white)',
    fontSize: 20,
    marginBottom: 20,
    '@media (max-width: 1200px)': {
      fontSize: 18,
    },
    '@media (max-width: 768px)': {
      display: 'none',
    },
    '&:hover': {
      color: 'var(--blue)',
    },
  },
  textTitle: {
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      display: 'flex',
      fontSize: 15,
      textDecorationLine: 'underline',
    },
  },
  textBottom: {
    fontSize: 14,
    marginTop: 64,
    '@media (max-width: 1200px)': {
      fontSize: 14,
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      fontSize: 12,
      marginBottom: 0,
      marginTop: 32,
    },
  },
  itemBot: {
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  svg: {
    width: 96,
    height: 20,
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      margin: '0 auto 32px',
    },
  },
}));
