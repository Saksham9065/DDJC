import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <ContactHero />

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <ContactInfo />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
              >
                <iframe
                  title="DDJC Office Location"
                  src="https://www.google.com/maps?q=Police%20Line%20Baghaura%2C%20Orai%2C%20Jalaun%2C%20UP%20285001&output=embed"
                  className="h-[280px] w-full border-0 md:h-[320px]"
                  loading="lazy"
                  allowFullScreen
                />
              </motion.div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
