export const numberInIndianFormat = (x) => {
    return x.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};
