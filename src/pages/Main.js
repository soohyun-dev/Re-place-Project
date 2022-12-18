import { useEffect, useState } from "react";
import { regionAPI, regionsAPI } from "../API/api";
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
  const handlesAPI = async () => {
    const result = await regionsAPI();
    console.log(result);
  };

  useEffect(() => {
    handleAPI();
    handlesAPI();
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
