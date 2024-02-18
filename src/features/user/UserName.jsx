import { useSelector } from "react-redux";
import { getUserName } from "./userSlice";

export default function UserName() {
  const userName = useSelector(getUserName);

  return <p className="hidden text-sm font-semibold md:block">{userName}</p>;
}
