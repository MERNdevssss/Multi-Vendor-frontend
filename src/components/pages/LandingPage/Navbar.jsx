import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavbarLandingPage = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleNavClick = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 items-center">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-center"
      >
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center justify-center hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-center"
      >
        <Link
          to="/products"
          onClick={handleNavClick}
          className="flex items-center justify-center hover:text-blue-500 transition-colors"
        >
          Product
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-center"
      >
        <Link
          to="/pricing"
          onClick={handleNavClick}
          className="flex items-center justify-center hover:text-blue-500 transition-colors"
        >
          Pricing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-medium bg-blue-600 rounded-md p-2 text-white text-center"
      >
        <Link
          to="/register"
          onClick={handleNavClick}
          className="flex items-center justify-center hover:text-blue-500 transition-colors"
        >
          Get Started
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-50 bg-white sm:rounded-none  shadow-md mx-auto max-w-screen px-4 py-2 text-black lg:px-24 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mr-2"
          >
            <path
              d="M50,0 Q40,40 0,50 Q40,60 50,100 Q60,60 100,50 Q60,40 50,0 Z"
              fill="#000000"
            />
          </svg>
          DispatchPro
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
};
export default NavbarLandingPage;
