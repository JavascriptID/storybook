import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { withState } from 'recompose';
import { opacify } from 'polished';

import { Icons } from '@storybook/components';

const FilterField = styled.input(({ theme }) => ({
  // resets
  appearance: 'none',
  border: 'none',
  boxSizing: 'inherit',
  display: ' block',
  outline: 'none',
  width: ' 100%',
  margin: ' 0',
  background: 'transparent',
  padding: 0,
  fontSize: 'inherit',

  '&:-webkit-autofill': { WebkitBoxShadow: `0 0 0 3em ${theme.color.lightest} inset` },

  '::placeholder': {
    color: theme.color.mediumdark,
  },

  '&:placeholder-shown ~ button': {
    // hide cancel button using CSS only
    opacity: 0,
  },
}));

const CancelButton = styled.button(({ theme }) => ({
  border: 0,
  margin: 0,
  padding: 4,
  textDecoration: 'none',

  background: theme.appBorderColor,
  borderRadius: '1em',
  cursor: 'pointer',
  opacity: 1,
  transition: 'all 150ms ease-out',

  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: 2,

  '> svg': {
    display: 'block',
    height: 8,
    width: 8,
    color: theme.color.dark,
    transition: 'all 150ms ease-out',
  },

  '&:hover': {
    background: opacify(0.1, theme.appBorderColor),
    '> svg': {
      color: theme.color.darker,
    },
  },
}));

const FilterForm = styled.form(({ theme, focussed }) => ({
  transition: 'all 150ms ease-out',
  borderBottom: focussed ? `1px solid transparent` : '1px solid transparent',
  borderBottomColor: focussed ? theme.color.dark : opacify(0.1, theme.appBorderColor),
  outline: 0,
  position: 'relative',

  input: {
    color: theme.color.darkest,
    fontSize: theme.typography.size.s2 - 1,
    lineHeight: '20px',
    paddingTop: '2px',
    paddingBottom: '2px',
    paddingLeft: '20px',
  },

  '> svg': {
    transition: 'all 150ms ease-out',
    position: 'absolute',
    top: '50%',
    height: '12px',
    width: '12px',
    transform: 'translateY(-50%)',
    zIndex: '1',

    background: 'transparent',

    path: {
      transition: 'all 150ms ease-out',
      fill: focussed ? theme.color.dark : theme.color.mediumdark,
    },
  },
}));

export const PureSidebarSearch = ({ focussed, onSetFocussed, className, onReset, ...props }) => (
  <FilterForm autoComplete="off" focussed={focussed} className={className} onReset={onReset}>
    <FilterField
      type="text"
      autocomplete="off"
      id="storybook-explorer-searchfield"
      onFocus={() => onSetFocussed(true)}
      onBlur={() => onSetFocussed(false)}
      {...props}
      placeholder={focussed ? 'Type to search...' : 'Press "/" to search...'}
    />
    <Icons icon="search" />
    <CancelButton type="reset" value="reset">
      <Icons icon="closeAlt" />
    </CancelButton>
  </FilterForm>
);

PureSidebarSearch.propTypes = {
  onReset: PropTypes.func,
  focussed: PropTypes.bool.isRequired,
  onSetFocussed: PropTypes.func.isRequired,
  className: PropTypes.string,
};

PureSidebarSearch.defaultProps = {
  className: null,
  onReset: null,
};

export default withState('focussed', 'onSetFocussed', false)(PureSidebarSearch);
