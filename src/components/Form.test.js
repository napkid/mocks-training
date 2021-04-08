import { act, fireEvent, render, waitFor } from "@testing-library/react";
import Form from "./Form";

it('should work please :-)', async () => {
    const mockOnSubmit = jest.fn();
    const { getByRole, getByPlaceholderText } = render(<Form onSubmit={mockOnSubmit} />);
    act(() => {
        fireEvent.input(getByPlaceholderText('Titre'), { target: { value: 'test' } });
        fireEvent.input(getByPlaceholderText('Corps'), { target: { value: 'test' } });
        fireEvent.input(getByRole('spinbutton'), { target: { value: 23 } });
        fireEvent.submit(getByRole('button'));
    })
    await waitFor(() => expect(mockOnSubmit).toBeCalled())
})