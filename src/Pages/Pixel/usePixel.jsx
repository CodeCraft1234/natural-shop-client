import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Axios/useAxiosPublic";

const usePixel= () => {

    const AxiosPublic=useAxiosPublic()
    const { refetch, data: pixel=[]}=useQuery({
        queryKey:['pixel'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/pixel`)
            return res.data
        }
    })

        return [pixel,refetch]

}
export default usePixel;