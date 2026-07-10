import axios from "axios";

export const apiUrlClient = axios.create({
    baseURL:"https://api.freeprojectapi.com/api/BusBooking"
})