const logOfTen = (number) => {
  return number < 10 ?  10 : number < 100 ? 100 : number < 1000 ? 1000 : number < 10000 ? 10000 : number < 100000 ? 100000 : number < 1000000 ? 1000000 : 'Enter a valid date';
};

export default logOfTen;
