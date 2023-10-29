import { useQuery } from "@tanstack/react-query";
import { strToPath } from "@utils";
import { apiClient } from "apiClient";
import { Brand } from "models/brand";

type BrandListResponse = {
  success: boolean;
  data: {
    brands: Brand[];
  };
};

export const useGetAllBrand = () =>
  useQuery({
    queryKey: ["brands"],
    queryFn: async () =>
      (
        await apiClient.get<BrandListResponse>(`api/brands`)
      ).data.data.brands.map((brand) => ({
        ...brand,
        slug: strToPath(brand.name),
      })),
  });
