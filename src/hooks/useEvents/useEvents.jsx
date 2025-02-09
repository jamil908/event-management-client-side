

import { useQuery,  } from "@tanstack/react-query";
import useAxiosPublic from "../axiosPublic/useAxiosPublic";



const useEvent = () => {
  const axiosPublic = useAxiosPublic();

  // TanStack Query  events fetch 
  const { data: allEvents = [], isLoading, error, refetch } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data;
    },
  });


  return { allEvents, isLoading, error,refetch };
};

export default useEvent;
