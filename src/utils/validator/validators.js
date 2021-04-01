export const requiredField = value => {
    if (value) return undefined;

    return 'Field is required';

}

export const maxLengthCreator = (maxLength) => (value) => {
    // debugger
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;

    return undefined;

}