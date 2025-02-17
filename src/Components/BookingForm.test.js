import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    const defaultProps = {
        name: "",
        setName: jest.fn(),
        date: "",
        setDate: jest.fn(),
        time: "",
        setTime: jest.fn(),
        guests: 1,
        setGuests: jest.fn(),
        occasion: "Birthday",
        setOccasion: jest.fn(),
        availableTimes: ["17:00", "18:00", "19:00"],
        dispatch: jest.fn(),
        handleSubmit: jest.fn()
    };

    // HTML Attribute Tests
    test('validates name field attributes', () => {
        render(<BookingForm {...defaultProps} />);
        const nameInput = screen.getByLabelText(/name/i);
        expect(nameInput).toBeRequired();
        expect(nameInput).toHaveAttribute('type', 'text');
        expect(nameInput).toHaveAttribute('id', 'name');
    });

    test('validates date field attributes', () => {
        render(<BookingForm {...defaultProps} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toBeRequired();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'res-date');
    });

    test('validates time field attributes', () => {
        render(<BookingForm {...defaultProps} />);
        const timeInput = screen.getByLabelText(/choose time/i);
        expect(timeInput).toBeRequired();
        expect(timeInput).toHaveAttribute('id', 'res-time');
    });

    test('validates guests field attributes', () => {
        render(<BookingForm {...defaultProps} />);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toBeRequired();
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        expect(guestsInput).toHaveAttribute('id', 'guests');
    });

    test('validates occasion field attributes', () => {
        render(<BookingForm {...defaultProps} />);
        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).toBeRequired();
        expect(occasionSelect).toHaveAttribute('id', 'occasion');
    });

    // Form Validation Tests
    test('validates form with invalid name', () => {
        render(<BookingForm {...defaultProps} />);
        
        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: 'J' }
        });

        const submitButton = screen.getByRole('button', { name: 'OnClick' });
        expect(submitButton).toHaveAttribute('aria-disabled', 'true');
        expect(submitButton).toHaveAttribute('disabled');
    });

    test('validates form with empty name', () => {
        render(<BookingForm {...defaultProps} />);
        
        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: '' }
        });

        const submitButton = screen.getByRole('button', { name: 'OnClick' });
        expect(submitButton).toHaveAttribute('aria-disabled', 'true');
        expect(submitButton).toHaveAttribute('disabled');
    });

    test('validates form with invalid number of guests', () => {
        render(<BookingForm {...defaultProps} />);
        
        fireEvent.change(screen.getByLabelText(/number of guests/i), {
            target: { value: '11' }
        });

        const submitButton = screen.getByRole('button', { name: 'OnClick' });
        expect(submitButton).toHaveAttribute('aria-disabled', 'true');
        expect(submitButton).toHaveAttribute('disabled');
    });

    test('validates form with too few guests', () => {
        render(<BookingForm {...defaultProps} />);
        
        fireEvent.change(screen.getByLabelText(/number of guests/i), {
            target: { value: '0' }
        });

        const submitButton = screen.getByRole('button', { name: 'OnClick' });
        expect(submitButton).toHaveAttribute('aria-disabled', 'true');
        expect(submitButton).toHaveAttribute('disabled');
    });

    test('validates date is not in the past', () => {
        render(<BookingForm {...defaultProps} />);
        
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 1);
        const pastDateString = pastDate.toISOString().split('T')[0];

        fireEvent.change(screen.getByLabelText(/choose date/i), {
            target: { value: pastDateString }
        });

        const submitButton = screen.getByRole('button', { name: 'OnClick' });
        expect(submitButton).toHaveAttribute('aria-disabled', 'true');
        expect(submitButton).toHaveAttribute('disabled');
    });

    // State Update Tests
    test('updates name state when changed', () => {
        render(<BookingForm {...defaultProps} />);
        
        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: 'John Doe' }
        });

        expect(defaultProps.setName).toHaveBeenCalledWith('John Doe');
    });

    test('updates date state when changed', () => {
        render(<BookingForm {...defaultProps} />);
        
        fireEvent.change(screen.getByLabelText(/choose date/i), {
            target: { value: '2024-02-01' }
        });

        expect(defaultProps.setDate).toHaveBeenCalledWith('2024-02-01');
    });

    test('updates guests state when changed', () => {
        render(<BookingForm {...defaultProps} />);
        
        fireEvent.change(screen.getByLabelText(/number of guests/i), {
            target: { value: '4' }
        });

        expect(defaultProps.setGuests).toHaveBeenCalledWith('4');
    });

    test('updates time state when changed', () => {
        render(<BookingForm {...defaultProps} />);
        
        fireEvent.change(screen.getByLabelText(/choose time/i), {
            target: { value: '17:00' }
        });

        expect(defaultProps.setTime).toHaveBeenCalledWith('17:00');
    });

    test('updates occasion state when changed', () => {
        render(<BookingForm {...defaultProps} />);
        
        fireEvent.change(screen.getByLabelText(/occasion/i), {
            target: { value: 'Anniversary' }
        });

        expect(defaultProps.setOccasion).toHaveBeenCalledWith('Anniversary');
    });

    // Button State Tests
    test('button has correct default attributes', () => {
        render(<BookingForm {...defaultProps} />);
        const submitButton = screen.getByRole('button', { name: 'OnClick' });
        expect(submitButton).toHaveAttribute('aria-disabled', 'true');
        expect(submitButton).toHaveAttribute('disabled');
        expect(submitButton).toHaveAttribute('type', 'submit');
        expect(submitButton).toHaveAttribute('aria-label', 'OnClick');
    });
});
