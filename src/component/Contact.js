import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Contact = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h1>This is contact page</h1>
      <h2>{data.name}</h2>
      <h2>{data.email}</h2>
    </div>
  );
};

export default Contact;
