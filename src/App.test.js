import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  render(<App />);
  const title = await screen.findByText(/Ultima busqueda/i)
  expect(title).toBeInTheDocument()
});

test('search form could used', async () => {
      render(<App />)
      const input = await screen.findByRole('textbox')
      const button = await screen.findByRole('button')
      
      fireEvent.change(input, {target: {value: 'Matrix'}})
      fireEvent.click(button)

      const title = await screen.findByText('Matrix')
      expect(title).toBeVisible()
})
