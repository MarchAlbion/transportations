export const isEmpty = (
  from: string,
  to: string,
  type: string,
  description: string,
  date: string
) => {
  const isEmpty =
    from === "" ||
    to === "" ||
    type === "" ||
    description === "" ||
    date === "";
  return isEmpty;
};
