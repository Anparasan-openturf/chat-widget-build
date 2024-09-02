import React from "react";
import { MiddleContainer } from "../../container";
import WelcomeContent from "./WelcomeContent";
import NavbarContent from "../../components/Navbar";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import Footer from "../../components/Footer";
import { playgroundrs } from "../../assets/constants";
import PlaygroundMenu from "./PlaygroundMenu";
import ContentRenderer from "./ContentRenderer";

function HomePage() {
  return (
    <div className="overflow-y-scroll hide-scrollbar h-screen">
      <NavbarContent>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            cn("", {
              "text-[#6A2588] font-medium": isActive,
            })
          }
        >
          Home
        </NavLink>
        <PlaygroundMenu />
      </NavbarContent>
      <MiddleContainer isWelcome={true}>
        <WelcomeContent />
      </MiddleContainer>
      {playgroundrs.map((e, i) => (
        <MiddleContainer key={e.link} bgColor={"bg-[#F9FAFB]"}>
          <ContentRenderer {...e} reverse={i % 2 === 0} />
        </MiddleContainer>
      ))}
      <Footer />
    </div>
  );
}

export default HomePage;
