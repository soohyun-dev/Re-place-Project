import { useEffect, useState } from "react";
import { regionAPI, regionsAPI } from "../API/api";
import Nav from "../components/Nav";
import RegionList from "../components/RegionList";

const Main = () => {
  const [regions, setRegions] = useState([]);
  const handleAPI = async () => {
    const result = await regionAPI();
    setRegions(
      result.map((region) => {
        return [region["code"], region["name"]];
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

  console.log(regions);
  return (
    <>
      <Nav />
      <section>
        <RegionList region={regions} />
      </section>
    </>
  );
};

export default Main;
