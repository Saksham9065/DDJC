import { useState } from "react";
import api from "../../services/api";

function Donate() {
  const [amount, setAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("General Donation");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!amount || !donorName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const { data: orderData } = await api.post("/donations/create-order", {
        amount: Number(amount),
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_xxxxxxxxx",
        amount: orderData.order.amount,
        currency: "INR",
        name: "DDJC",
        description: "Donation",
        order_id: orderData.order.id,
        handler: async function (response) {
          try {
            await api.post("/donations/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              donorName,
              email,
              phone,
              amount: Number(amount),
              purpose,
            });

            setSuccess(true);
            setAmount("");
            setDonorName("");
            setEmail("");
            setPhone("");
            setPurpose("General Donation");
          } catch (error) {
            console.error(error);
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: donorName,
          email,
          contact: phone,
        },
        theme: {
          color: "#0A2540",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Failed to initiate payment.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Thank You for Your Donation!
          </h2>
          <p className="text-gray-600">
            Your contribution makes a difference.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Support Our Cause
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Make A Donation
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Your contribution directly supports legal aid, community empowerment, and justice for marginalized communities.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-gray-50 rounded-3xl p-8">
          <form onSubmit={handleDonate} className="space-y-5">
            <input
              type="number"
              placeholder="Amount (₹)"
              className="w-full border rounded-lg p-3"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone"
              className="w-full border rounded-lg p-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <select
              className="w-full border rounded-lg p-3"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option>General Donation</option>
              <option>Legal Aid</option>
              <option>Community Outreach</option>
              <option>Victim Support</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0A2540] text-white py-3 rounded-lg font-semibold hover:bg-[#1a3a6a] transition disabled:opacity-60"
            >
              {loading ? "Processing..." : "Donate Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Donate;
