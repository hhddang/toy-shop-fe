# Toy shop FE

## Features

Vite - React - Typescript <br/>
**Routing:** react-router-dom <br/>
**Styling:** Bootstrap, React Bootstrap, Swiper <br/>
**Fetching** data: axios, react-query <br/>

## Fetching data from API service

### 1. Add backend URI

Create _.env_ file with content:

```
VITE_BE_URI=http://localhost:4000
```

A constant must be begin with `VITE_` to be used in Vite project <br/>

Remember to put _.env_ in _.gitignore_

### 2. Create an API client

Package installing:

```
npm i axios
```

Create file named _apiClient.ts_ with content:

```
import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});
```

To call a constant in _.env_ file, use`import.meta.env.CONSTANT`

### 3. Create hooks

This is example of brand hooks and using react-query<br/>

Package installing:

```
npm i @tanstack/react-query
```

Create file named _src/hooks/brandHooks.ts_ with content:

```
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
```

### 4. Wrap your app within Query Client Provider

Edit _src/main.tsx_ as below:

```
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}>
    <RouterProvider router={router} /> //your app
</QueryClientProvider>
```

### 5. Use hook to fetch data in your components

For example:

```
import { useGetAllBrand } from "@hooks/brandHooks";
export default MyComponent = () => {
    const { data: brandList, isLoading, error } = useGetAllBrand();
    return !isLoading && !error && (
        <>
            {brandList!.map((brand, index) => (
              <p key={index}> {brand.name} </p>
            ))}
        </>
    )
}
```
