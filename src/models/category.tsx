export class Category {
  id!: string;
  name!: string;
  rootCategoryId?: string;
  slug?: string;
  subCategoryList?: Category[];
}

export const CATEGORY_LIST: Category[] = [
  {
    id: "1",
    name: "Movie Toys",
  },
  {
    id: "2",
    name: "Assemble Toys",
  },
  {
    id: "3",
    name: "Activity Toys",
  },
  {
    id: "4",
    name: "Bikes and Scooters",
  },

  {
    id: "5",
    name: "Super Heroes",
    rootCategoryId: "1",
  },
  {
    id: "6",
    name: "Monsters",
    rootCategoryId: "1",
  },

  {
    id: "7",
    name: "Robots",
    rootCategoryId: "1",
  },

  {
    id: "8",
    name: "Lego",
    rootCategoryId: "2",
  },
  {
    id: "9",
    name: "Semiblock",
    rootCategoryId: "2",
  },

  {
    id: "10",
    name: "Indoor",
    rootCategoryId: "3",
  },
  {
    id: "11",
    name: "Outdoor",
    rootCategoryId: "3",
  },

  {
    id: "12",
    name: "Bikes",
    rootCategoryId: "4",
  },
  {
    id: "13",
    name: "Scooters",
    rootCategoryId: "4",
  },
  {
    id: "14",
    name: "Patin",
    rootCategoryId: "4",
  },
].map((category) => ({
  ...category,
  slug: category.name.replaceAll(" ", "-").toLowerCase(),
}));

export const TOP_CATEGORY_LIST = (function () {
  const topCategoryList = CATEGORY_LIST.filter(
    (category) => !category.rootCategoryId
  ).map((topCategory) => {
    const subCategoryList = CATEGORY_LIST.filter(
      (category) => category.rootCategoryId == topCategory.id
    );
    return { ...topCategory, subCategoryList };
  });

  return topCategoryList;
})();
