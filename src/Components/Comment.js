const Comment = ({ data }) => {
  return (
    <div className="flex p-3 m-2 shadow-lg bg-gray-50 rounded-md my-2">
      <img className="w-10 h-10"
        alt="logo"
        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
      />
      <div>
        <p className="font-bold">{data.name}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Comment;
