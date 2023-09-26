import { useSelector } from "react-redux";

const SinglePopup = ({ userId, Popup }) => {
  const all = useSelector((state) => state.users);
  console.log(all, " hye all users are here");
  console.log(userId, " user id is that");
  const singleUser = all.filter((user) => {
    return user.id === userId;
  });
  return (
    <div className="p-4">
      <h2 className="py-1 text-white text-xl font-medium ">
        {" "}
        <span className="text-black pr-2"> Name: </span>
        {singleUser[0].name}
      </h2>
      <h2 className="py-1 text-white text-xl font-medium ">
        {" "}
        <span className="text-black pr-2"> Age:</span>
        {singleUser[0].age}
      </h2>
      <h2 className="py-1 text-white text-xl font-medium ">
        {" "}
        <span className="text-black pr-2"> Email:</span>
        {singleUser[0].email}
      </h2>
      <h2 className="py-1 text-white text-xl font-medium ">
        {" "}
        <span className="text-black pr-2">Salary:</span> {singleUser[0].salary}
      </h2>
      <h2 className="py-1 text-white text-xl font-medium ">
        {" "}
        <span className="text-black pr-2">Gender:</span> {singleUser[0].gender}
      </h2>
    </div>
  );
};

export default SinglePopup;
