export const getAge = (birthDate: string) => {
  const date = new Date();
  const time = new Date(birthDate).getTime();

  const diff: any = (date - time) / 3.15576e10;
  return Math.floor(diff);
};
