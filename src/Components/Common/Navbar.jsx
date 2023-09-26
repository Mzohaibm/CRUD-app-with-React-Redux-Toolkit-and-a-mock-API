import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="mx-auto w-11/12">
      <div className="flex justify-between my-2 items-center">
        <div>
          <h1 className="text-xl font-bold text-red-500">Crud App</h1>
        </div>
        <div className="flex justify-between w-[30%]">
          <Link to="/create" className="text-xl font-bold text-green-500">
            Create Post
          </Link>
          <Link to="/read" className="text-xl font-bold text-green-500">
            All Post
          </Link>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(search(setSearch(e.target.value)))}
            className="px-3 py-2 border border-green-500 outline-green-500"
            type="text"
            placeholder="Search here"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
