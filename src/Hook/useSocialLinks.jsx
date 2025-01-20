import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useSocialLinks = () => {
  const AxiosPublic = useAxiosPublic();

  const { refetch, data: socialLink = null } = useQuery({
    queryKey: ['socialLinks'],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/socialLinks`);
      return res.data; // Expecting a single object from the backend
    },
  });

  return [socialLink, refetch];
};

export default useSocialLinks;
