"use client";

import React from "react";
import { X } from "lucide-react";
import Link from "next/link";

const reset = () => {
  const form: HTMLFormElement | null = document.querySelector(".search-form");

  if (form) form.reset();
};

const ClearForm = () => {
  return (
    <button type="reset" onClick={reset}>
      <Link href="/">
        <X className=" text-white bg-black size-9 p-2 rounded-full" />
      </Link>
    </button>
  );
};

export default ClearForm;
