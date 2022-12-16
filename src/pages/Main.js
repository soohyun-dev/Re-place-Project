import { useEffect, useState } from "react";
import { regionAPI } from "../API/api";

const Main = () => {
  const [siRegions, setSiRegions] = useState([]);
  const [doRegions, setDoRegions] = useState([]);
  const handleAPI = async () => {
    const result = await regionAPI();
    setSiRegions(
      result.map((region) => {
        if (region["rnum"] < 9) return region["name"];
      })
    );
    setDoRegions(
      result.map((region) => {
        if (region["rnum"] >= 9) return region["name"];
      })
    );
  };

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <>
      <div>
        <h1>{siRegions.join(" ")}</h1>
        <h1>{doRegions.join(" ")}</h1>
      </div>
    </>
  );
};

export default Main;
