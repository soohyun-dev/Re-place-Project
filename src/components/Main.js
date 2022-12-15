import { useEffect, useState } from "react";
import { tmpAPI } from "../API/api";

const Main = () => {
  const [test, setTest] = useState("");
  const handleAPI = async () => {
    const result = await tmpAPI();
    console.log(result.response.body.items.item[0]["addr1"]);
    setTest(result.response.body.items.item[0]["addr1"]);
  };

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <>
      <div>
        <h1>{test}</h1>
      </div>
    </>
  );
};

export default Main;
