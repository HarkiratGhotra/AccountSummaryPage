import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
  it('should display Header Text', () => {

    render(<Header />);
    expect(screen.getByText('Demo Acccount and Document Preference Delivery')).toBeInTheDocument();
  });
});
