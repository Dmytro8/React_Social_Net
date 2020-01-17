export const required = value => {
  return value ? undefined : "The field is required";
};

export const maxLengthCreator = maxLength => value => {
  return value.length > maxLength
    ? `Max length is ${maxLength} symbols`
    : undefined;
};

export const emptyField = value => {
  return value ? undefined : "The field can't be empty";
};
