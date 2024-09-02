import { useEffect, useRef, useState } from "react";

function useMenu() {
  const menuRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("custom-menu");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setMenuClass("custom-menu");
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!isMenuOpen);
    setMenuClass(!isMenuOpen ? "custom-menu active" : "custom-menu");
  };
  return { menuRef, isMenuOpen, setMenuOpen, toggleMenu, menuClass };
}

export default useMenu;
