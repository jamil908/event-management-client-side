

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../hooks/utilities/utils";
import useEvent from "../../hooks/useEvent/UseEvent";
import useAxiosSecure from "../../hooks/axiosSecure/useAxiosSecure";

const CreateEvent = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null); // Track event being edited
  const [categories, setCategories] = useState([]); // Store categories
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset, setValue } = useForm();
  const {  events , refetch, isLoading, error } = useEvent();

  // Static category options
  const categoryOptions = [
    { value: "birthday", label: "Birthday" },
    { value: "marriage", label: "Marriage" },
    { value: "concert", label: "Concert" },
    { value: "conference", label: "Conference" },
  ];

  // Handle form submission for creating/updating event
  const handleEventSubmit = async (data) => {
    const image = data.file && data.file.length > 0 ? data.file[0] : null;
    const { eventName, description, eventDate, category } = data;

    try {
      let eventImage = editingEvent ? editingEvent.eventImage : "";
      if (image) {
        eventImage = await imageUpload(image);
      }

      const eventData = {
        eventName,
        description,
        eventDate,
        eventImage,
        category, // Add category here
      };

      if (editingEvent) {
        // Update event
        const response = await axiosSecure.put(`/events/${editingEvent._id}`, eventData);
        if (response.data.success) {
          Swal.fire("Success", "Event updated successfully!", "success");
        }
      } else {
        // Create new event
        const response = await axiosSecure.post("/events", eventData);
        if (response.data.success) {
          Swal.fire("Success", "Event added successfully!", "success");
        }
      }

      setShowModal(false);
      setEditingEvent(null);
      reset();
      refetch();
    } catch (error) {
      Swal.fire("Error", "An error occurred while processing the request.", "error");
    }
  };

  // Handle delete event
  const handleDelete = async (eventId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/events/${eventId}`);
          Swal.fire("Deleted!", "The event has been deleted.", "success");
          refetch();
        } catch (error) {
          Swal.fire("Error!", "Failed to delete the event.", "error");
        }
      }
    });
  };

  // Handle edit event
  const handleEdit = (event) => {
    setEditingEvent(event);
    setShowModal(true);
    setValue("eventName", event.eventName);
    setValue("description", event.description);
    setValue("eventDate", event.eventDate);
    setValue("category", event.category); // Prepopulate category
  };

  return (
    <div className="p-6 pt-[80px] min-h-screen bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Manage Events</h2>
      <button onClick={() => setShowModal(true)} className="btn btn-primary mb-4">
        Add Event
      </button>

      <div className="overflow-x-auto">
        {isLoading ? (
          <p className="text-center text-blue-500">Loading events...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error loading events</p>
        ) : (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Image</th>
                <th className="border p-2">Event Name</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id} className="text-center">
                  <td className="border p-2">
                    <img src={event.eventImage} alt={event.eventName} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="border p-2">{event.eventName}</td>
                  <td className="border p-2">{event.description}</td>
                  <td className="border p-2">{event.eventDate}</td>
                  <td className="border p-2">
                    <button onClick={() => handleEdit(event)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(event._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">{editingEvent ? "Edit Event" : "Add New Event"}</h2>
            <form onSubmit={handleSubmit(handleEventSubmit)}>
              <label className="block mb-2 font-medium">Event Name</label>
              <input {...register("eventName", { required: "Event Name is required" })} type="text" placeholder="Event Name" className="input input-bordered w-full mb-4" />

              <label className="block mb-2 font-medium">Event Description</label>
              <textarea {...register("description", { required: "Event Description is required" })} placeholder="Event Description" className="input input-bordered w-full mb-4" />

              <label className="block mb-2 font-medium">Event Date</label>
              <input {...register("eventDate", { required: "Event Date is required" })} type="date" className="input input-bordered w-full mb-4" />

              <label className="block mb-2 font-medium">Event Image</label>
              <input {...register("file")} type="file" className="input input-bordered w-full mb-4" />

              <label className="block mb-2 font-medium">Event Category</label>
              <select {...register("category", { required: "Event Category is required" })} className="input input-bordered w-full mb-4">
                <option value="">Select a Category</option>
                {categoryOptions.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              <div className="flex justify-end gap-2">
                <button type="submit" className="btn btn-success">
                  {editingEvent ? "Update Event" : "Add Event"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingEvent(null);
                    reset();
                  }}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
