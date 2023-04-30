import { useParams } from "react-router-dom";
// -- user details component
const UserDetails = () => {
  // noob way
  // const params = useParams();
  // const id = params.userId;
  // console.log(params);

  // pro way
  const { userId } = useParams();
  const id = userId;

  return (
    <>
      <p>Details about user {id}</p>
    </>
  );
};

export default UserDetails;
