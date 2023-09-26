import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import CreateUser from "./Components/CreateUser";
import Read from "./Components/Read";
import UpdateUser from "./Components/UpdateUser";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/create" element={<CreateUser />} />
          <Route path="/read" element={<Read />} />
          <Route path="/edit/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
