import React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { MiddleContainer } from "../../container";
import { aboutUs, followUs, playgroundrs } from "../../assets/constants";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

const Header = ({ children }) => (
  <h3 className="mb-2 text-2xl font-semibold text-[#6A2588]">{children}</h3>
);

const Container = ({ children, title, ...rest }) => (
  <div {...rest}>
    <Header>{title}</Header>
    {children}
  </div>
);

const Footer = () => {
  const handleClick = () => {
    window.location.href =
      "mailto:info@openturf.in?subject=Hello%20Subject&body=Hello%20Body";
  };

  return (
    <MiddleContainer bgColor={"bg-white"}>
      <div className="text-stone-800 grid grid-cols-2 gap-8 md:grid-cols-4">
        {/* Our locations */}
        <Container title="Our locations" className="col-span-2">
          <div className="flex gap-2">
            <PlaceOutlinedIcon />
            <p>
              UAE Office: G131C, Technohub 1,
              <br />
              Dubai Technology Entrepreneur Campus (Dtec),
              <br />
              Dubai Silicon Oasis, Dubai, UAE
            </p>
          </div>
          <br />
          <div className="flex gap-2">
            <PlaceOutlinedIcon />
            <p>
              India Office: 10th floor, RMZ Latitude Commercial Building,
              <br />
              Bellary Rd, Hebbal, Bengaluru, Karnataka 560024,
              <br />
              INDIA
            </p>
          </div>
          <br />
          <div className="flex gap-2">
            <PlaceOutlinedIcon />
            <p>Grafenaustrasse 11 6300 Zug, Switzerland</p>
          </div>
        </Container>

        {/* About us */}
        <Container title="About us" className="">
          <div className="flex flex-col items-start gap-1">
            {aboutUs.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6A2588] hover:underline cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </Container>

        {/* Quick links */}
        <Container title="Quick Links" className="">
          <div className="flex flex-col gap-1">
            {playgroundrs
              .filter((e) => !e?.disabled)
              .map((item) => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  className={({ isActive, isPending }) =>
                    cn("hover:text-[#6A2588] hover:underline", {
                      "text-[#6A2588] font-medium": isActive,
                    })
                  }
                >
                  {item.label}
                </NavLink>
              ))}
          </div>
        </Container>

        {/* Mail us */}
        <Container title="Mail us" className="md:col-span-2">
          <div className="flex justify-start items-center gap-2">
            <EmailOutlinedIcon
              onClick={handleClick}
              className="cursor-pointer"
            />
            <p className="">info@openturf.in</p>
          </div>
        </Container>

        {/* Follow us */}
        <Container title="Follow us on" className="">
          <div className="flex justify-start items-center gap-2">
            {followUs.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6A2588] hover:underline cursor-pointer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </MiddleContainer>
  );
};

export default Footer;
