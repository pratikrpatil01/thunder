const sum = (data) => {
  const results = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );
  return results;
};

export { sum };
