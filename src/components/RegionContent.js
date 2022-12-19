import { useLocation } from "react-router-dom";
import Nav from "./Nav";

const RegionContent = () => {
  const location = useLocation();
  const code = location.state.code;
  const name = location.state.name;
  console.log(code, name);

  return (
    <>
      <Nav />
      <div>{(code, name)}</div>
    </>
  );
};

export default RegionContent;
