"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  const SearchBar = () => {
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      if (name) {
        router.push(`/list?name=${name}`);
      }
    };
  };

  return (
    <form
      className="flex items-center gap-4 bg-gray-100 text-black p-2 flex-1 rounded-md"
      onSubmit={SearchBar}
    >
      <input
        type="text"
        name="name"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none"
      />
      <button>
        <IoSearchOutline style={{ fontSize: 20, color: "black" }} />
      </button>
    </form>
  );
}
