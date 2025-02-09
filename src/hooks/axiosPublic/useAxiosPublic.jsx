import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const axiosPublic = axios.create({
    // baseURL: 'https://y-roan-one.vercel.app'
    baseURL: 'http://localhost:5000'
})

const useAxiosPublic = () => {
    
    return axiosPublic;
};

export default useAxiosPublic;