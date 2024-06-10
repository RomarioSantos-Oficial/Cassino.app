import React, { useState } from "react";
import styles from "./SearchForm.module.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite sua busca"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;
