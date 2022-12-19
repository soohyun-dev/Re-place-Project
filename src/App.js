import { Route, Routes } from "react-router-dom";
import RegionContent from "./components/RegionContent";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/region/:name" element={<RegionContent />}></Route>
      </Routes>
    </>
  );
}

export default App;
