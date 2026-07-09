import NotificationCard from "../components/NotificationCard";

const notifications = [
  {
    id: 1,
    type: "contact",
    title: "New Contact Message",
    message: "A visitor submitted a contact form.",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "volunteer",
    title: "Volunteer Registration",
    message: "A new volunteer joined DDJC.",
    time: "15 minutes ago",
  },
  {
    id: 3,
    type: "donation",
    title: "Donation Received",
    message: "₹5,000 donation received.",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "media",
    title: "Media Uploaded",
    message: "A new gallery image was uploaded.",
    time: "Today",
  },
];

function Notifications() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold text-[#0A2540]">
          Notifications
        </h1>

        <p className="text-gray-500">
          Recent activity in the system.
        </p>

      </div>

      <div className="space-y-4">

        {notifications.map((item) => (
          <NotificationCard
            key={item.id}
            notification={item}
          />
        ))}

      </div>

    </div>
  );
}

export default Notifications;