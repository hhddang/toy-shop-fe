export class Toy {
  id!: string;
  name!: string;
  imageList!: string[];
  price!: number;
  isNew?: boolean = false;
  isDiscounted?: boolean = false;
  discount?: number;
  oldPrice?: number;
}

export const TOY_LIST: Toy[] = [
  {
    id: "60182",
    name: "Mountain Claiming Car 01",
    imageList: [
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/r/b/rb18b-6-gr_14.7.23.jpg",
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/3e75d17be04cbebee9a78c36b24b6eea/r/b/rb18b-6-gr_1_.jpg",
    ],
    price: 160000,
    isNew: true,
    isDiscounted: true,
    discount: 20,
    oldPrice: 219000,
  },
  {
    id: "60187",
    name: "Mountain Claiming Car 02",
    imageList: [
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/6/9/6941848230584_copy.jpg",
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/6/9/6941848230584_copy_4.jpg",
    ],
    price: 170000,
  },
  {
    id: "60193",
    name: "Mountain Claiming Car 03",
    imageList: [
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/v/t/vt63118-20.6.23_2_.jpg",
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/6/3/63118-1.jpg",
    ],
    price: 159000,
    isDiscounted: true,
    discount: 20,
    oldPrice: 179000,
  },
  {
    id: "60112",
    name: "Mountain Claiming Car 04",
    imageList: [
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/r/b/rb18b-6-gr_14.7.23.jpg",
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/3e75d17be04cbebee9a78c36b24b6eea/r/b/rb18b-6-gr_1_.jpg",
    ],
    price: 160000,
    isNew: true,
    isDiscounted: true,
    discount: 20,
    oldPrice: 219000,
  },
  {
    id: "60157",
    name: "Mountain Claiming Car 05",
    imageList: [
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/6/9/6941848230584_copy.jpg",
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/6/9/6941848230584_copy_4.jpg",
    ],
    price: 170000,
  },
  {
    id: "60142",
    name: "Mountain Claiming Car 06",
    imageList: [
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/v/t/vt63118-20.6.23_2_.jpg",
      "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/6/3/63118-1.jpg",
    ],
    price: 159000,
    isDiscounted: true,
    discount: 20,
    oldPrice: 179000,
  },
];
