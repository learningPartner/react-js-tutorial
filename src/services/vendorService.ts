import axios from "axios"
import type { VendorModel } from "../components/PostApi";
import { apiUrlClient } from "./axiosInstance";


// export const vendorService = {
//     getAllvendors: async () =>{
//         debugger;
//         const result = await axios.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors");
//         return result.data;
//     },
//     createNewVendor: async (obj:VendorModel)=>{
//          debugger;
//         const result = await axios.post("https://api.freeprojectapi.com/api/BusBooking/PostBusVendor",obj);
//         return result;
//     }
// }


export const vendorService = {
    getAllvendors: async () =>{
        debugger;
        const result = await apiUrlClient.get("/GetBusVendors");
        return result.data;
    },
    createNewVendor: async (obj:VendorModel)=>{
         debugger;
        const result = await apiUrlClient.post("/PostBusVendor",obj);
        return result;
    }
}