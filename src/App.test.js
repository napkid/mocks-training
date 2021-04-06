import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import restCaller from './services/restCaller';

jest.mock('./services/restCaller');

describe('PatientForm', () => {
  beforeEach(() => {
    render(
      <App />
    );
  });

  it('should display errors when fields are empty', async () => {
    fireEvent.submit(screen.getByRole('button'));
    expect(await screen.findAllByText('This field is required')).toHaveLength(3);
  });

  it('should not post when fields are empty', async () => {
    fireEvent.input(screen.getByPlaceholderText('Titre'), { target: { value: 'test' } });
    fireEvent.input(screen.getByPlaceholderText('Corps'), { target: { value: 'test' } });
    fireEvent.input(screen.getByRole('spinbutton'), { target: { value: 44 } });
    fireEvent.submit(screen.getByRole('button'));
    expect(restCaller).toHaveBeenCalledTimes(1);
  });

})

