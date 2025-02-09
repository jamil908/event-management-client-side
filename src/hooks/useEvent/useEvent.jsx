

import { useQuery,  } from "@tanstack/react-query";
// import { useEffect } from "react";
import useAxiosPublic from "../axiosPublic/useAxiosPublic";
// import { io } from "socket.io-client";


// const socket = io('http://localhost:5000'); // Connect to the server

// socket.on('connect', () => {
//   console.log('Connected to Socket.IO server');
// });
// socket.on("connect", () => {
//   console.log("Connected to WebSocket server:", socket.id);
// });
const useEvent = () => {
  const axiosPublic = useAxiosPublic();

  // TanStack Query দিয়ে events fetch করা
  const { data: events = [], isLoading, error, refetch } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data;
    },
  });

  // useEffect(() => {
  //   // ✅ **Socket.IO দিয়ে real-time event update**
  //   socket.on("eventUpdated", (updatedEvent) => {
  //     // console.log(updatedEvent)
  //     // নতুন ইভেন্ট ডাটা রিফ্রেশ করতে React Query এর refetch() কল করা
  //     refetch();
  //   });

  //   return () => {
  //     socket.off("eventUpdated"); // Memory leak এড়ানোর জন্য unsubscribe করা
  //   };
  // }, [refetch]);
  

  return { events, isLoading, error,refetch };
};

export default useEvent;
