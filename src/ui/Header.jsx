import { Link } from "react-router-dom";
import UserName from "../features/user/UserName";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-semibold tracking-widest">
        React fast pizza cp.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};
export default Header;
