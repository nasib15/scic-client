/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import useAxios from "../hooks/useAxios";

export default function BrandDropdown({
  brand,
  setBrand,
  setCurrentPage,
  setCategory,
  setSort,
  setSearch,
}) {
  const axiosFetch = useAxios();
  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const { data } = await axiosFetch("/categories?brand=brand");
      return data;
    },
  });

  const handleChange = (selectedOption) => {
    setBrand(selectedOption.value);
    setCategory("");
    setSort("");
    setSearch("");
    setCurrentPage(1);
  };

  return (
    <Select
      className="basic-single"
      classNamePrefix="Select"
      options={brands}
      value={brand}
      isSearchable={false}
      placeholder="Select a brand"
      onChange={handleChange}
    />
  );
}
