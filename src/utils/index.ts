export const strToPath = (str: string) =>
  str.replaceAll(" ", "-").toLowerCase();

export const pathToStr = (path: string) => {
  path = path
    .split("-")
    .map((word) => {
      const firstLetter = word[0];
      word.replace(firstLetter, firstLetter.toUpperCase());
      return word;
    })
    .join("-");
  return path.replaceAll("-", " ");
};

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(price);
};
