import { useSelector } from "react-redux";
import Login from "./login";
import Search from "./search";

export default function Home() {
  const token = useSelector(({ auth }) => auth.token);

  return !token ? <Login /> : <Search />;
}
