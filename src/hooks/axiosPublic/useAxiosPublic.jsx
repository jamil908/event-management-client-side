import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://event-management-server-side-wine.vercel.app'
})

const useAxiosPublic = () => {
    
    return axiosPublic;
};

export default useAxiosPublic;