export const getSalutationOptions = ()=> {
    return [
        { value: 'notToSay', label: 'Prefer not to use Salutation' },
        { value: 'Mister', label: 'Mr.' },
        { value: 'Miss', label: 'Ms.' },
    ];
}

export const getDateOptions = () => {
    const dateOptions = [];
    for (let i = 1; i <= 31; i++) {
        dateOptions.push({ value: i, label: i.toString() });
    }
    return dateOptions;
};

export const getMonthOptions = () => {
    return [
        { value: 1, label: "January" },
        { value: 2, label: "February" },
        { value: 3, label: "March" },
        { value: 4, label: "April" },
        { value: 5, label: "May" },
        { value: 6, label: "June" },
        { value: 7, label: "July" },
        { value: 8, label: "August" },
        { value: 9, label: "September" },
        { value: 10, label: "October" },
        { value: 11, label: "November" },
        { value: 12, label: "December" },
    ];
};

export const getYearOptions = () => {
    const yearOptions = [];
    const currentYear = new Date().getFullYear();
    const startYear = 1920; // or any start year you prefer

    for (let i = startYear; i <= currentYear; i++) {
        yearOptions.push({ value: i, label: i.toString() });
    }
    return yearOptions;
};
