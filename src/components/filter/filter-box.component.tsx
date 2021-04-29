import React from "react";
import styles from "./filter-box.module.css";
import { Searchbar } from "../common/searchbar/searchbar.component";
import { Dropdown } from "../common/dropdown/dropdown.component";
import { DropdownItemDto, FilterDto } from "../../types";

declare type FilterBoxProps = {
  searchTerm?: string;
  onSearchChanged: (filter: Partial<FilterDto>) => void;
  sortItems: DropdownItemDto[];
  selectedSort?: string;
};

const FilterBox = ({
  searchTerm,
  onSearchChanged,
  sortItems,
  selectedSort,
}: FilterBoxProps): JSX.Element => {
  return (
    <>
      <div className={styles.FilterWrapper}>
        <Searchbar
          style={{ borderRadius: "6px" }}
          className={styles.FilterSearch}
          searchTerm={searchTerm}
          onSearchChanged={(search) => onSearchChanged({ search })}
        />
        <Dropdown
          style={{ width: "200px", borderLeft: "1px solid #ccc" }}
          items={sortItems}
          selectedItem={selectedSort}
          onDropdownChanged={(sort) => onSearchChanged({ sort })}
        />
      </div>
    </>
  );
};

const FilterBoxMemo = React.memo(FilterBox);

export { FilterBoxMemo as FilterBox };
