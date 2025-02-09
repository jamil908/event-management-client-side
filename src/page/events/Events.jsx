import { io } from "socket.io-client";
import React, { useState, useEffect } from "react";
import useEvents from "../../hooks/useEvents/useEvents";

const socket = io("https://event-management-server-side-wine.vercel.app");

const Events = () => {
  const { allEvents, loading } = useEvents();
  const [localEvents, setLocalEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // State to hold selected category

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

  const handleJoinEvent = (eventId) => {
    if (!eventId || eventId.length !== 24) {
      console.error("Invalid Event ID:", eventId);
      return;
    }

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
  };

  // Function to filter events based on selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter events based on selected category
  const filteredEvents = selectedCategory === "all"
    ? localEvents
    : localEvents.filter((event) => event.category === selectedCategory);

  if (loading) return <p className="text-center">Loading events...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Past and Upcoming Events</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`px-4 py-2 mr-2 rounded-md ${selectedCategory === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          All Categories
        </button>
        <button
          onClick={() => handleCategoryChange("marriage")}
          className={`px-4 py-2 mr-2 rounded-md ${selectedCategory === "marriage" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Marriage
        </button>
        <button
          onClick={() => handleCategoryChange("concert")}
          className={`px-4 py-2 mr-2 rounded-md ${selectedCategory === "concert" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Concert
        </button>
        <button
          onClick={() => handleCategoryChange("sports")}
          className={`px-4 py-2 mr-2 rounded-md ${selectedCategory === "sports" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Sports
        </button>
        <button
          onClick={() => handleCategoryChange("birthday")}
          className={`px-4 py-2 mr-2 rounded-md ${selectedCategory === "birthday" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Birthday
        </button>
        <button
          onClick={() => handleCategoryChange("conference")}
          className={`px-4 py-2 mr-2 rounded-md ${selectedCategory === "conference" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          conference
        </button>
        {/* Add more categories as needed */}
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
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
