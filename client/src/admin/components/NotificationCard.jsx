import {
  FaEnvelope,
  FaUsers,
  FaDonate,
  FaImages,
} from "react-icons/fa";

const icons = {
  contact: <FaEnvelope className="text-blue-600 text-xl" />,
  volunteer: <FaUsers className="text-green-600 text-xl" />,
  donation: <FaDonate className="text-red-600 text-xl" />,
  media: <FaImages className="text-purple-600 text-xl" />,
};

function NotificationCard({ notification }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">

      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
        {icons[notification.type]}
      </div>

      <div className="flex-1">

        <h3 className="font-semibold">
          {notification.title}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {notification.message}
        </p>

        <p className="text-xs text-gray-400 mt-2">
          {notification.time}
        </p>

      </div>

    </div>
  );
}

export default NotificationCard;