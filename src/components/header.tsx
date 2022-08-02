import { useSelector } from "react-redux";
import logo from "../assets/clef-logo.png";
import { logOut } from "../utils/auth";

const Header = () => {
  const token = useSelector(({ auth }) => auth.token);

  return (
    <header className="flex text-dark-blue p-5 justify-between align-baseline bg-sky-300 drop-shadow-md">
      <div className="flex gap-5">
        <img src={logo} alt="logo" className="rounded-xl w-10" />
        <h1 className=" text-3xl font-bold">Clef</h1>
      </div>
      {token && (
        <nav className="flex  gap-10 ">
          <button
            className="bg-dark-blue text-white px-5 rounded-md"
            onClick={() => logOut()}
          >
            Log Out
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
