// BookingForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders booking form', () => {
  render(<BookingForm />);
  expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
});

test('displays error when fields are empty', () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByText(/Reserve/i));
  expect(screen.getByRole('alert')).toHaveTextContent('All fields are required.');
});