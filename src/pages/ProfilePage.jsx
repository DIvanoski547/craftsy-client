import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <span>Welcome {user.username}</span>
      <span>email: {user.email}</span>
    </>
  );
}

export default ProfilePage;
