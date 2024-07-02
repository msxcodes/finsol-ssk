import Image from "next/image";
import { ThemeToggle } from "../theme-button/theme-toggle";
import { Button } from "../ui/button";
import logo from "../../../public/ssk-logo.png";

const Header = () => {
  return (
    <header className="mb-2  md:pl-0">
      <div className="relative flex max-w-screen-2xl flex-col overflow-hidden py-3 md:mx-auto md:flex-row md:items-center">
        <div className="w-max flex items-center pl-4 md:pl-0 whitespace-nowrap gap-1 text-2xl font-black z-10">
          <Image src={logo} width={28} height={28} alt="" />
          <span className="flex items-center font-bold size-full mt-1">
            SSK
          </span>
        </div>

        <input type="checkbox" className="peer hidden" id="navbar-open" />

        <label
          className="absolute flex gap-4 top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span>
            <ThemeToggle />
          </span>
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-    q24 md:max-h-full md:flex-row md:items-center border-b md:border-none md:pb-0 pb-2"
        >
          <ul className="flex flex-col gap-1 md:gap-4 my-2 md:my-0 text-xs font-medium items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="text-gray-600 dark:text-white hover:text-blue-600">
              <a href="#">Services</a>
            </li>
            <li className="text-gray-600 dark:text-white hover:text-blue-600">
              <a href="#">Features</a>
            </li>
            <li className="text-gray-600 dark:text-white hover:text-blue-600">
              <a href="#">How It Works</a>
            </li>
            <li className="text-gray-600 dark:text-white hover:text-blue-600">
              <a href="#">Support</a>
            </li>
          </ul>
          <div className="ml-5 flex items-center gap-2 mt-4 md:mt-0">
            <span className="hidden md:block">
              <ThemeToggle />
            </span>
            <Button className="bg-transparent hover:bg-transparent text-primary font-semibold">
              Sign Up
            </Button>
            <Button
              className="rounded-full text-xs font-semibold h-8"
              size={"default"}
            >
              Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
