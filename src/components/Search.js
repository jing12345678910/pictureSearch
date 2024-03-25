import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Search = ({ search, setInput }) => {
   const { t } = useTranslation();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button onClick={search}>{t("search")}</button>
    </div>
  );
};

export default Search;
