import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./searchbar.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

declare type SearchbarProps = {
  searchTerm?: string;
  placeholder?: string;
  onSearchChanged: (searchTerm: string) => void;
} & React.PropsWithoutRef<JSX.IntrinsicElements["div"]>;

const Searchbar = ({
  searchTerm,
  placeholder = "Cari nama atau bank",
  onSearchChanged,
  ...props
}: SearchbarProps): JSX.Element => {
  return (
    <div {...props} className={styles.SearchbarWrapper}>
      <div className={styles.SearchbarIcon}>
        <FontAwesomeIcon icon={faSearch} size={"lg"} />
      </div>

      <input
        value={searchTerm ?? ""}
        placeholder={placeholder}
        className={styles.SearchInput}
        onChange={(e) => onSearchChanged(e.target.value)}
      />
    </div>
  );
};

const SearchbarMemo = React.memo(Searchbar);

export { SearchbarMemo as Searchbar };
