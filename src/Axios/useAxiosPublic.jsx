import axios from "axios";


const AxiosPublic=axios.create({
    baseURL:'https://macapowderbd.vercel.app'
})
const useAxiosPublic = () => {
    return AxiosPublic
};


export default useAxiosPublic;