import { useEffect, useState } from "react";
import api from "../services/api";

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data } = await api.get("/stories");
      setStories(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {stories.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stories;
