

import { useQuery,  } from "@tanstack/react-query";
import useAxiosPublic from "../axiosPublic/useAxiosPublic";

const useEvent = () => {
  const axiosPublic = useAxiosPublic();

  // TanStack Query events fetch
  const { data: events = [], isLoading, error, refetch } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data;
    },
  });

  

  return { events, isLoading, error,refetch };
};

export default useEvent;
