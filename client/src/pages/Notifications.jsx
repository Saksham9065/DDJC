import { useEffect, useState } from "react";
import api from "../services/api";

import {
  FaEnvelope,
  FaUsers,
  FaDonate,
  FaImages,
} from "react-icons/fa";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const { data } = await api.get("/notifications");

      setNotifications(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "contact":
        return <FaEnvelope className="text-blue-600 text-xl" />;

      case "volunteer":
        return <FaUsers className="text-green-600 text-xl" />;

      case "donation":
        return <FaDonate className="text-red-600 text-xl" />;

      case "media":
        return <FaImages className="text-purple-600 text-xl" />;

      default:
        return <FaEnvelope className="text-gray-600 text-xl" />;
    }
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-[#0A2540]">
          Notifications
        </h1>

        <p className="text-gray-500">
          Latest system activities
        </p>

      </div>

      <div className="space-y-4">

        {notifications.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            No notifications found.
          </div>
        ) : (
          notifications.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-5 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                {getIcon(item.type)}
              </div>

              <div className="flex-1">
                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.message}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Notifications;