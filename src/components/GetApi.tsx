import { useEffect, useState } from "react";
import axios from "axios";

function GetApi() {
  const [userList, setUserList] = useState<UserModel[]>([]);
   const [postList, setPostList] = useState<any>([]);
  const [vendorList, setVendorList] = useState<UserModel[]>([]);

  useEffect(() => {
    debugger;
    getAllUsers();
    getVendors();
    getAllPosts();
  }, []);

  const getAllUsers = async () => {
    debugger;
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList = await response.json();
    setUserList(userList);
  };

  const getAllPosts = async () => {
    debugger;
    const result =  await axios.get("https://jsonplaceholder.typicode.com/posts");
     debugger;
    setPostList(result.data)
  }

  const getVendors = async () => {
    const res = await fetch(
      "https://api.freeprojectapi.com/api/BusBooking/GetBusVendors",
    );
    const data = await res.json();
    setVendorList(data);
  };

  return (
    <div>
      <h2>GET API Integration Using Fetch api</h2>
      <div className="row">
        <div className="col-4">
          <ul>
            {userList.map((user: UserModel) => {
              return (
                <li>
                  {user.name} - {user.email}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-3">
            <ul>
                {
                    postList.map((post:any)=>{
                        return <li>{post.title}</li>
                    })
                }
            </ul>
        </div>
        <div className="col-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Vendor Name</th>
                <th>Email</th>
                <th>Contact No</th>
              </tr>
            </thead>
            <tbody>
              {vendorList.map((item: any) => {
                return (
                  <tr>
                    <td> {item.vendorName}</td>
                    <td>{item.emailId}</td>
                    <td>{item.contactNo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GetApi;

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}
