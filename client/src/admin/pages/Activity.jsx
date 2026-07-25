import { useEffect, useState } from "react";
import api from "../services/api";

function Activity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const { data } = await api.get("/activity");
      setActivities(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-[#0A2540]">
          Activity Logs
        </h1>

        <p className="text-gray-500 mt-2">
          View recent admin activities.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">Action</th>

              <th className="p-4 text-left">Module</th>

              <th className="p-4 text-left">Description</th>

              <th className="p-4 text-left">Date</th>

            </tr>

          </thead>

          <tbody>

            {activities.map((activity) => (

              <tr
                key={activity._id}
                className="border-b"
              >

                <td className="p-4">
                  {activity.action}
                </td>

                <td className="p-4">
                  {activity.module}
                </td>

                <td className="p-4">
                  {activity.description}
                </td>

                <td className="p-4">
                  {new Date(
                    activity.createdAt
                  ).toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Activity;
