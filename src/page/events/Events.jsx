



import { io } from "socket.io-client";
import React, { useState, useEffect } from "react";
import useEvents from "../../hooks/useEvents/useEvents";

const socket = io("https://event-management-server-side-wine.vercel.app");

const Events = () => {
  const { allEvents, loading } = useEvents();
  const [localEvents, setLocalEvents] = useState([]);

  useEffect(() => {
    if (allEvents && allEvents.length > 0) {
      setLocalEvents(allEvents);
    }
  }, [allEvents]);

  useEffect(() => {
    const handleEventUpdate = (updatedEvent) => {
      setLocalEvents((prevEvents) =>
        prevEvents.map((event) =>
          event._id === updatedEvent._id ? updatedEvent : event
        )
      );
    };

    socket.on("eventUpdated", handleEventUpdate);

    return () => {
      socket.off("eventUpdated", handleEventUpdate);
    };
  }, []);

  if (loading) return <p className="text-center">Loading events...</p>;

  const handleJoinEvent = (eventId) => {
    if (!eventId || eventId.length !== 24) {
      console.error("Invalid Event ID:", eventId);
      return;
    }else{

   
    fetch(`https://event-management-server-side-wine.vercel.app/join-event/${eventId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((updatedEvent) => {
        socket.emit("joinEvent", updatedEvent);

        setLocalEvents((prevEvents) =>
          prevEvents.map((event) =>
            event._id === updatedEvent._id ? updatedEvent : event
          )
        );
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {localEvents.length > 0 ? (
          localEvents.map((event) => (
            <div key={event._id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={event.eventImage}
                alt={event.eventName}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">{event.eventName}</h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
              <p className="text-sm font-bold mt-2">📅 {event.eventDate}</p>
              <p className="text-sm font-bold mt-2">👥 Participants: {event.participants || 0}</p>
              <button
                onClick={() => handleJoinEvent(event._id)}
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Join Event
              </button>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
