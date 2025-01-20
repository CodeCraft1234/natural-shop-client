import axios from "axios";

const AxiosPublic=axios.create({
    baseURL:'https://astha-homeo.vercel.app'
})
const useAxiosPublic = () => {
    return AxiosPublic
};


export default useAxiosPublic;