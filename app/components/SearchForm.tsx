import React from "react";
import { Search } from "lucide-react";
import ClearForm from "./ClearForm";
import Form from "next/form";

//the props params comes from page.tsx. Component in page.tsx and layout.tsx receives an inbuild nextjs prop called searchParams.
//This returnts a promise with the input value in from the URL.
//Also, the query variable name is necessary to access searchParams.query.
const SearchForm = async ({
  params,
}: {
  params: Promise<{ query?: string }>;
}) => {
  const query = (await params)?.query;
  return (
    <>
      <Form className="search-form my-5 flex relative items-center" action="/">
        <input
          type="text"
          placeholder="Search Startup"
          defaultValue={query}
          className="rounded-2xl bg-white w-90 p-2 outline-none border-black border-4 placeholder:text-lg placeholder:font-bold"
          name="query"
        />
        <div className="flex gap-1 absolute right-2">
          {query ? <ClearForm /> : <></>}
          <button type="submit" className="hover:cursor-pointer">
            <Search className=" text-white bg-black size-9 p-2 rounded-full" />
          </button>
        </div>
      </Form>
    </>
  );
};

export default SearchForm;
