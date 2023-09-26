import { useState } from "react";
import userImg from "../Assets/user.jpg";
import { useDispatch } from "react-redux";
import { CreateUsers } from "../Features/UserDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const initialUserData = {
  name: "",
  age: "",
  salary: "",
  email: "",
  gender: "male",
};
const CreateUser = () => {
  const [userData, setUserData] = useState(initialUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const putData = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    if (userData.name && userData.age && userData.salary && userData.email) {
      try {
        await dispatch(CreateUsers(userData));
        setUserData({});
        toast.success("Data added successfully!");
        setTimeout(() => {
          navigate("/read");
        }, 500);
      } catch (error) {
        toast.error(error);
      }
    }
  };
  console.log("hey the dat is that", userData);
  return (
    <div className="mx-auto w-11/12 my-8">
      <h1 className="text-2xl text-center py-4">Create your data here</h1>
      <div>
        <ToastContainer />
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-12 gap-8 my-2 items-center">
        <div>
          <img src={userImg} className="w-full" alt="" />
        </div>
        <div>
          <form onSubmit={sendData}>
            <input
              onChange={putData}
              name="name"
              type="text"
              placeholder="Enter your name."
              className="px-3 py-2 border border-gray-500 outline-green-500 w-full my-3"
            />
            <input
              onChange={putData}
              type="text"
              name="age"
              placeholder="Enter your age."
              className="px-3 py-2 border border-gray-500 outline-green-500 w-full my-3"
            />{" "}
            <input
              onChange={putData}
              type="text"
              name="salary"
              placeholder="Enter your salary."
              className="px-3 py-2 border border-gray-500 outline-green-500 w-full my-3"
            />{" "}
            <input
              onChange={putData}
              type="text"
              name="email"
              placeholder="Enter your email."
              className="px-3 py-2 border border-gray-500 outline-green-500 w-full my-3"
            />
            <div className="flex items-center">
              <div className=" flex items-center">
                <input
                  onChange={putData}
                  className="mr-[2px]"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={userData.gender === "male"}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="ml-2 flex items-center">
                <input
                  onChange={putData}
                  className="mr-[2px]"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={userData.gender === "female"}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <button
              type="submit"
              className="px-3 py-2 w-full bg-green-500 text-white my-3"
            >
              Send Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
