import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import useAxios from "../hooks/useAxios";

export default function CategoryDropdown() {
  const axiosFetch = useAxios();
  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const { data } = await axiosFetch("/categories?brands=brands");
      return data;
    },
  });

  console.log(brands);

  return (
    <Select
      className="basic-single"
      classNamePrefix="Select"
      options={brands}
      isSearchable={false}
      placeholder="Select a brand"
    />
  );
}
