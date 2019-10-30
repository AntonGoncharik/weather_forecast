export const roundUp = num => {
    if (isAN(num)) {
        return num.toFixed(1);
    } else {
        return num;
    }
};

const isAN = (value) => (value instanceof Number || typeof value === 'number') && !isNaN(value);