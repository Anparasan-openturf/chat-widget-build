import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { playgroundrs } from "../../assets/constants";
import useMenu from "../../hooks/useMenu";
import { cn } from "../../utils/cn";

const PlaygroundMenu = () => {
  const { menuRef, menuClass, toggleMenu, isMenuOpen } = useMenu();

  return (
    <div className="relative">
      <button onClick={toggleMenu}>
        Playgrounds{" "}
        {isMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      <div
        ref={menuRef}
        className={`${menuClass} cursor-default absolute flex flex-col right-5 top-5 w-36 items-end p-2.5 bg-transparent`}
      >
        {playgroundrs
          .filter((e) => !e?.disabled)
          .map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive, isPending }) =>
                cn(
                  "text-sm hover:text-base font-normal hover:text-[#6A2588] hover:font-medium transition-all h-7",
                  {
                    "text-[#6A2588] font-medium": isActive,
                  }
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default PlaygroundMenu;
