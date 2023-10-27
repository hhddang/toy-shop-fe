import { strToPath } from "@utils";
import { Brand } from "models/brand";

type BrandNameSlug = {
  text: string;
  slug: string;
};

export default class BrandService {
  private static brandList: Brand[] = [
    {
      id: "03f2",
      name: "Lego",
      image:
        "https://u6wdnj9wggobj.vcdn.cloud/media/mageplaza/brand/Icon-up-web-MKD_160x80_-lego-CITY.png",
    },
    {
      id: "03f3",
      name: "Pony",
      image:
        "https://u6wdnj9wggobj.vcdn.cloud/media/mageplaza/brand/Icon-up-web-MKD_160x80_LITTE-PONY.png",
    },
    {
      id: "03f4",
      name: "Slimy",
      image:
        "https://u6wdnj9wggobj.vcdn.cloud/media/mageplaza/brand/Icon-up-web-MKD_160x80_SLIMY.png",
    },
    {
      id: "03f5",
      name: "Tobot",
      image: "https://u6wdnj9wggobj.vcdn.cloud/media/mageplaza/brand/Tobot.png",
    },
    {
      id: "03f6",
      name: "Barbie",
      image:
        "https://u6wdnj9wggobj.vcdn.cloud/media/mageplaza/brand/Icon-up-web-MKD_116x58_barbe.png",
    },
    {
      id: "03f7",
      name: "Coolkids",
      image:
        "https://u6wdnj9wggobj.vcdn.cloud/media/mageplaza/brand/3._coolkids108x54.png",
    },
  ];

  public static getAll = (): Brand[] => this.brandList;

  public static getNameList = (): string[] =>
    this.brandList.map((brand) => brand.name);

  public static getNameSlugList = (): BrandNameSlug[] =>
    this.brandList.map((brand) => ({
      text: brand.name,
      slug: strToPath(brand.name),
    }));
}
