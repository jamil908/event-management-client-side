const MoreFeatures = () => {
    const features = [
        { id: 1, name: "Upcoming Events", description: "Stay tuned for new events coming soon!" },
        { id: 2, name: "Event Reminders", description: "Get notified about your favorite events!" },
        { id: 3, name: "Exclusive Discounts", description: "Special discounts available for event attendees." },
        { id: 4, name: "Networking Opportunities", description: "Connect with fellow attendees during events." },
    ];

    return (
        <div className="p-5 bg-gray-50 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4">More Features</h2>
            <div className="space-y-4">
                {features.map((feature) => (
                    <div key={feature.id} className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-xl">{feature.name}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreFeatures;
