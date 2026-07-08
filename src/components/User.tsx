import { useParams } from "react-router";
import MyList from "../reusableComponents/MyList";
import Alert from "../reusableComponents/Alert";

function User() {
  const { userid } = useParams<{ userid: string }>();
    const cityList = ['Pune','Nagpur','Mumbai','Thane'];
  return (
    <>
      {" "}
      <h1>
        Hello - <br />
        user id = {userid}
      </h1>
      <br />
      <MyList listItem={cityList}></MyList>
      <hr />
      <Alert alertClassName="alert-danger" alertTitle="Error" aletrtMessage="API Error"></Alert>
    </>
  );
}

export default User;
