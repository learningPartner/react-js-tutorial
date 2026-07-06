import { useParams } from "react-router";

function User() {

    const {userid} =  useParams<{userid:string}>();


    return  <> <h1>Hello - <br />
    user id = {userid}</h1> </>
}

export default User;