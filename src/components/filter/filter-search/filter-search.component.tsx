import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./filter-search.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

declare type FilterSearchProps = {
  searchTerm?: string;
  onSearchChanged: (searchTerm: string) => void;
};

const FilterSearch = ({
  searchTerm,
  onSearchChanged,
}: FilterSearchProps): JSX.Element => {
  const [sortMenu, setSortMenu] = useState(false);

  return (
    <div className={styles.SearchWrapper} onClick={() => setSortMenu(true)}>
      <div className={styles.SearchIcon}>
        <FontAwesomeIcon icon={faSearch} size={"lg"} />
      </div>

      <input
        value={searchTerm ?? ""}
        placeholder={"Cari nama atau bank"}
        className={styles.SearchInput}
        onChange={(e) => onSearchChanged(e.target.value)}
      />
    </div>
  );
};

const FilterSearchMemo = React.memo(FilterSearch);

export { FilterSearchMemo as FilterSearch };
