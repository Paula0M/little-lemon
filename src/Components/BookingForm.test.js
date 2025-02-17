import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    // Common setup for all tests
    const defaultProps = {
        name: "",
        setName: () => {},
        date: "",
        setDate: () => {},
        time: "",
        setTime: () => {},
        guests: 1,
        setGuests: () => {},
        occasion: "Birthday",
        setOccasion: () => {},
        availableTimes: [],
        dispatch: () => {},
        handleSubmit: () => {}
    };

    test('renders the BookingForm heading', () => {
        render(<BookingForm {...defaultProps} />);
        const headingElement = screen.getByText("Book A Table");
        expect(headingElement).toBeInTheDocument();
    });

    test('validates name field is required', () => {
        render(<BookingForm {...defaultProps} />);
        const nameInput = screen.getByLabelText(/name/i);
        expect(nameInput).toBeRequired();
    });
});
