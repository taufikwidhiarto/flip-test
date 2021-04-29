import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styles from "./dropdown.module.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { DropdownItemDto } from "../../../types";

declare type DropdownProps = {
  items: DropdownItemDto[];
  selectedItem?: string;
  placeholder?: string;
  onDropdownChanged: (selected: string) => void;
} & React.PropsWithoutRef<JSX.IntrinsicElements["div"]>;

const Dropdown = ({
  items,
  selectedItem,
  onDropdownChanged,
  placeholder = "URUTKAN",
  ...props
}: DropdownProps): JSX.Element => {
  const dropdownRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef != null) {
      const target = event.target as HTMLDivElement;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        if (showDropdown) {
          setShowDropdown(false);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleItemClick = (select: string): void => {
    onDropdownChanged(select);
    setShowDropdown(false);
  };

  const listing = items.map((x) => (
    <div
      className={`${styles.MenuItem} ${
        x.value === selectedItem && styles.checked
      }`}
      key={x.id}
      onClick={() => handleItemClick(x.value)}
    >
      {x.value}
    </div>
  ));

  return (
    <div {...props} className={styles.DropdownWrapper}>
      <div
        className={styles.DropdownHeader}
        onClick={() => setShowDropdown(true)}
      >
        {selectedItem ?? placeholder}
        <div className={styles.HeaderIcon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>

      {showDropdown && (
        <div ref={dropdownRef} className={styles.DropdownContent}>
          {listing}
        </div>
      )}
    </div>
  );
};

const DropdownMemo = React.memo(Dropdown);

export { DropdownMemo as Dropdown };
