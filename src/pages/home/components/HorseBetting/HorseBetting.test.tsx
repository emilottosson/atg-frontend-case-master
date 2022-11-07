import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HorseBetting from './HorseBetting';

test('Check if dropdown exists', () => {
  render(<HorseBetting />);
  const selectElement = screen.getByRole('combobox');

  expect(selectElement).toBeInTheDocument();
});

test('Check if value changes when user using dropdown', () => {
  render(<HorseBetting />);
  const selectElement = screen.getByRole('combobox');

  expect(selectElement).toHaveValue('');
  userEvent.selectOptions(selectElement, 'V75');
  expect(selectElement).toHaveValue('V75');
  userEvent.selectOptions(selectElement, 'V86');
  expect(selectElement).toHaveValue('V86');
  userEvent.selectOptions(selectElement, 'GS75');
  expect(selectElement).toHaveValue('GS75');
});
