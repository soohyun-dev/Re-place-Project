import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { regionsAPI } from "../API/api";
import Nav from "./Nav";

const RegionContent = () => {
  const [place, setPlace] = useState([]);
  const location = useLocation();
  const code = location.state.code;

  const handleAPI = async () => {
    const result = await regionsAPI(code);
    setPlace(
      result.map((region) => {
        return [region["addr1"], region["title"]];
      })
    );
  };

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <>
      <Nav />
      {place.map((PLACE) => {
        return <div>{PLACE}</div>;
      })}
    </>
  );
};

export default RegionContent;
