import { useEffect, useState } from "react";
import api from "../services/api";

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const { data } = await api.get("/resources");
      setResources(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Resources
        </h2>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">Title</th>

                <th className="p-4 text-left">Category</th>

                <th className="p-4 text-left">Author</th>

                <th className="p-4 text-left">Download</th>

              </tr>

            </thead>

            <tbody>

              {resources.map((item) => (

                <tr
                  key={item._id}
                  className="border-b"
                >

                  <td className="p-4">
                    {item.title}
                  </td>

                  <td className="p-4">
                    {item.category}
                  </td>

                  <td className="p-4">
                    {item.author}
                  </td>

                  <td className="p-4">

                    <a
                      href={`http://localhost:5000/uploads/${item.file}`}
                      download
                      className="text-blue-600 hover:underline"
                    >
                      Download PDF
                    </a>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}

export default Resources;
