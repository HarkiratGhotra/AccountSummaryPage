import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Context } from '../../Context/Context';
import DocumentPreference from './DocumentPreference';

describe('DocumentPreference component', () => {
  it('should display Table data', () => {
    const updateAccount = { value: 'ps7jCLmR5M1ZiED5tpBwjJyuXzSmrjs7N73Y-0ckd7c=' };
    render(
      <Context.Provider value={{ updateAccount }}>
        <DocumentPreference />
      </Context.Provider>
    );
    expect(screen.getByText('Document Type')).toBeInTheDocument();
  });
});
