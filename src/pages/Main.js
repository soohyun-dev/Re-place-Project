import { useEffect, useState } from "react";
import { regionAPI } from "../API/api";
import Nav from "../components/Nav";

const Main = () => {
  const [regions, setRegions] = useState([]);
  const handleAPI = async () => {
    const result = await regionAPI();
    setRegions(
      result.map((region) => {
        return region["name"];
      })
    );
  };

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <>
      <Nav />
      <div>
        <h1>{regions.join(" ")}</h1>
      </div>
    </>
  );
};

export default Main;
