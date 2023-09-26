import { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../Features/UserDetail";
import SinglePopup from "./SinglePopup";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state);
  const [popup, setShowPopup] = useState(false);
  const [userid, setUserid] = useState(null);
  useEffect(() => {
    dispatch(showUser());
  }, []);
  return (
    <div className={`relative ${popup ? "bg-gray-800" : null}`}>
      <div className="mx-auto w-11/12 my-4">
        {popup && (
          <div className="mx-auto flex justify-center ">
            <div className="z-20 w-[300px] h-[300px] bg-blue-600 absolute ">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-500 px-2 py-1 m-2 text-white rounded"
              >
                Close
              </button>
              <SinglePopup userId={userid} Popup={popup} />
            </div>
          </div>
        )}
        <h1 className="text-4xl text-center my-3">All Data</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 my-4">
          {users &&
            users.map((user) => (
              <div key={user.id} className="border border-gray-500 p-4">
                <h1 className="text-xl font-medium py-2">Name: {user.name}</h1>
                <h1 className="text-xl font-medium py-2">Age: {user.age}</h1>
                <h1 className="text-xl font-medium py-2">
                  Email: {user.email}
                </h1>
                <h1 className="text-xl font-medium py-2">
                  Salary: {user.salary}
                </h1>
                <h1 className="text-xl font-medium py-2">
                  Gender: {user.gender}
                </h1>
                <div className="flex justify-between">
                  <button
                    onClick={() => [setUserid(user.id), setShowPopup(true)]}
                    className="bg-blue-500 px-2 py-1 text-sm rounded text-white"
                  >
                    View
                  </button>
                  <Link
                    to={`/edit/${user.id}`}
                    className="bg-green-500 px-2 py-1 text-sm rounded text-white"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => dispatch(deleteUser(user.id))}
                    className="bg-red-500 px-2 py-1 text-sm rounded text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
        {loading && !error && (
          <h1 className="text-2xl text-center font-medium text-green-600">
            loading......
          </h1>
        )}
        {error && !loading && (
          <h1 className="text-center text-red-500 text-xl font-medium">
            Sorry! {error}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Read;

// !== null &&
// users.length !== 0 &&
// !loading &
