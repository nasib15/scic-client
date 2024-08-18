/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import useAxios from "../hooks/useAxios";

export default function BrandDropdown({ setBrand, setCurrentPage }) {
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
    setCurrentPage(1);
  };

  return (
    <Select
      className="basic-single"
      options={brands}
      isSearchable={false}
      placeholder="Select a brand"
      onChange={handleChange}
    />
  );
}
