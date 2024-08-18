/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import useAxios from "../hooks/useAxios";

export default function CategoryDropdown({ setCategory, setCurrentPage }) {
  const axiosFetch = useAxios();
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosFetch("/categories?category=category");
      return data;
    },
  });

  const handleChange = (selectedOption) => {
    console.log(selectedOption.value);
    setCategory(selectedOption.value);
    setCurrentPage(1);
  };

  return (
    <Select
      options={categories}
      isSearchable={false}
      placeholder="Select a category"
      onChange={handleChange}
    />
  );
}
