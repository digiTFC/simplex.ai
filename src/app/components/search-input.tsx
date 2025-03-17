import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="flex gap-3 w-fit py-3 px-5 h-fit dark:bg-klightGrey max-w-[100px] bg-white  dark:text-white  rounded-xl">
      <IoSearchOutline size={20} />
      <input
        type="text"
        className="bg-transparent outline-none hidden md:block"
        placeholder="search here..."
      />
    </div>
  );
};

export default SearchInput;
