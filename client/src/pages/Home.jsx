import { useEffect, useState } from "react";
import api from "../services/api";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import Services from "../components/home/Services";
import Impact from "../components/home/Impact";
import LegalSupportSection from "../components/home/LegalSupportSection";

function Home() {
  const [data, setData] = useState({
    latestMedia: [],
    latestResources: [],
    latestNews: [],
    latestStories: [],
    statistics: {},
  });

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const [mediaRes, resourcesRes, newsRes, storiesRes, statsRes] = await Promise.all([
        api.get("/media"),
        api.get("/resources"),
        api.get("/news"),
        api.get("/stories"),
        api.get("/analytics"),
      ]);

      setData({
        latestMedia: mediaRes.data.data.slice(0, 3),
        latestResources: resourcesRes.data.data.slice(0, 3),
        latestNews: newsRes.data.data.slice(0, 3),
        latestStories: storiesRes.data.data.slice(0, 3),
        statistics: statsRes.data.data || {},
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Hero />

      <AboutSection />

      <section className="py-16">
        <div className="container mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            {data.latestNews.map((item) => (
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            {data.latestResources.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow p-6"
              >
                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>

                <a
                  href={`http://localhost:5000/uploads/${item.file}`}
                  download
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  Download PDF
                </a>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            {data.latestStories.map((item) => (
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

      <Services />

      <Impact />

      <LegalSupportSection />
    </div>
  );
}

export default Home;
