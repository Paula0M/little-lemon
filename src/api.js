// Simulated API functions
export const fetchAPI = async (date) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Convert date to string if it's a Date object
    const dateString = date instanceof Date ? date.toISOString().split('T')[0] : date;
    
    // Simulate different available times based on the date
    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];
    
    // Randomly remove some times to simulate availability
    return availableTimes.filter(() => Math.random() > 0.3);
};

export const submitAPI = async (formData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful submission
    return true;
};
