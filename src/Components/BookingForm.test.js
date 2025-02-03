import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm
        date=""
        time=""
        guests={1}
        occasion=""
        availableTimes={['19:00', '20:00', '21:00']}
        handleDateChange={() => {}}
        handleTimeChange={() => {}}
        handleGuestsChange={() => {}}
        handleOccasionChange={() => {}}
        handleSubmit={() => {}}
    />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});