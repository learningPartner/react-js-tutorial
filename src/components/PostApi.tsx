import { useEffect, useState } from "react";
import Jumbotron from "../reusableComponents/Jumbotron";

import axios from "axios";

interface VendorModel {
  vendorId: number;
  vendorName: string;
  contactNo: string;
  emailId: string;
}

function PostApi() {
  const [vendorList, setVendorList] = useState<VendorModel[]>([]);
  const [vendorObj,setvendorObj] = useState<VendorModel>({contactNo:'',emailId:'',vendorId:0,vendorName:''})

  useEffect(() => {
    getALlVendors();
  }, []);

  const getALlVendors = async () => {
    const result = await axios.get(
      "https://api.freeprojectapi.com/api/BusBooking/GetBusVendors",
    );
    setVendorList(result.data);
  };

  const createNewvendor = async () =>{
    debugger;
    const result =  await axios.post('https://api.freeprojectapi.com/api/BusBooking/PostBusVendor', vendorObj);
    debugger;
    if(result.status == 201) {
         alert("Vendor Created Success");
          getALlVendors();
    } else {
        alert("API Error")
    }
   
  }

  const updateVendorName = (event:any) => {
    setvendorObj(oldObj => ({...oldObj,vendorName: event.target.value}))
  }
  const updateVendorMobile = (event:any) => {
    setvendorObj(oldObj => ({...oldObj,contactNo: event.target.value}))
  }

  const updateFormValue = (event:any, fieldName: string) => {
    setvendorObj(oldObj => ({...oldObj, [fieldName]: event.target.value}))
  }

  return (
    <div>
      <Jumbotron
        info="Post Api Integration with Form and API call Integration"
        title="POST API"
      ></Jumbotron>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-7">
            <div className="card shadow-sm">
              <div className="card-header bg-warning text-dark">
                <h5 className="mb-0">Vendor List</h5>
              </div>
              <div className="card-body">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Vendor Name</th>
                      <th>Contact No</th>
                      <th>Email Id</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendorList.map((data: VendorModel) => {
                      return (
                        <tr>
                          <td>{data.vendorName}</td>
                          <td>{data.contactNo}</td>
                          <td>{data.emailId}</td>
                          <td>
                            <button className="btn btn-sm btn-warning me-2">
                              Edit
                            </button>
                            <button className="btn btn-sm btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-5">
            <div className="card shadow-sm">
              <div className="card-header bg-warning text-dark">
                <h5 className="mb-0">Vendor Form</h5>
              </div>
             vendorName - {vendorObj.vendorName} --  mmobile - {vendorObj.contactNo}
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Vendor Name</label>
                    <input
                      type="text"
                      onChange={(eve)=>updateFormValue(eve,'vendorName')}
                      className="form-control"
                      placeholder="Enter vendor name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact No</label>
                    <input
                      type="text"
                       onChange={(eve)=>updateFormValue(eve,'contactNo')}
                      className="form-control"
                      placeholder="Enter contact number"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Id</label>
                    <input
                      type="email"
                       onChange={(eve)=>updateFormValue(eve,'emailId')}
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="d-flex gap-2">
                    <button type="button" onClick={createNewvendor} className="btn btn-warning">
                      Save
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      Clear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostApi;
