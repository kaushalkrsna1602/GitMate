import { useDispatch } from "react-redux";

const ProfileCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  return (
    <div className="card w-full sm:w-95 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-xl text-white border border-gray-700 rounded-xl overflow-hidden">
      <figure className="relative w-full h-auto max-h-[500px]">
        <img
          src={photoUrl}
          alt="User Photo"
          className="w-full h-auto max-h-[300px] object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body p-5 space-y-2">
        <h2 className="card-title text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {firstName} {lastName}
        </h2>
        {age && gender && <p className="text-gray-400 text-sm">{age}, {gender}</p>}
        {about && <p className="text-gray-300 text-sm">{about}</p>}
      </div>
    </div>
  );
};

export default ProfileCard;
