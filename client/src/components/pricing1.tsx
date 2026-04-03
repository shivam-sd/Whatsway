import React from "react";

type Plan = {
  name: string;
  price: string;
  sub: string;
  label?: string;
  tagline: string;
  features: { text: string; available: boolean }[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "₹0",
    sub: "forever",
    label: "Free",
    tagline: "Explore WhatsApp API with no upfront cost",
    features: [
      { text: "WhatsApp Business API", available: true },
      { text: "1 WhatsApp number", available: true },
      { text: "Up to 2 agents", available: true },
      { text: "Basic broadcasts", available: true },
      { text: "Shared team inbox", available: true },
      { text: "Contact management", available: true },
      { text: "Chatbot builder", available: false },
      { text: "API & webhook access", available: false },
    ],
  },
  {
    name: "Starter",
    price: "₹899",
    sub: "per month + taxes",
    label: "Starter",
    tagline: "Everything a small business needs to grow on WhatsApp",
    features: [
      { text: "Everything in Free", available: true },
      { text: "Up to 5 agents", available: true },
      { text: "Bulk broadcast campaigns", available: true },
      { text: "Campaign analytics & reports", available: true },
      { text: "Chatbot builder (5 flows)", available: true },
      { text: "WhatsApp catalog", available: true },
      { text: "Basic integrations", available: true },
      { text: "API & webhook access", available: false },
    ],
  },
  {
    name: "Professional",
    price: "₹1,399",
    sub: "per month + taxes",
    label: "Most Popular",
    tagline: "Advanced automation for growing teams",
    featured: true,
    features: [
      { text: "Everything in Starter", available: true },
      { text: "Unlimited agents", available: true },
      { text: "Advanced chatbot flows", available: true },
      { text: "Full API & webhook access", available: true },
      { text: "Campaign retargeting", available: true },
      { text: "Click tracking & analytics", available: true },
      { text: "CRM integrations", available: true },
      { text: "Priority support", available: true },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "Talk to our team",
    label: "Enterprise",
    tagline: "Custom pricing and dedicated support",
    features: [
      { text: "Everything in Professional", available: true },
      { text: "Dedicated account manager", available: true },
      { text: "Custom API integrations", available: true },
      { text: "Higher messaging speed", available: true },
      { text: "SLA & uptime guarantee", available: true },
      { text: "Advanced security controls", available: true },
      { text: "Custom onboarding & training", available: true },
      { text: "Phone + priority support", available: true },
    ],
  },
];

const Pricing1: React.FC = () => {
  const handleBuyPlan = (planName: string) => {
    console.log("Selected plan:", planName);
  };

  return (
    <section className="py-20 bg-white">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
          Simple Pricing
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
          Choose Your's Plan
          <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent lg:text-xl md:text-xl text-sm mt-2">
            WhatsApp API — 100% Meta rates, zero markup
          </span>
        </h2>

        <p className="text-gray-600 mt-4">
        
         All message charges are at Meta's official rate. Your subscription pays for the platform only.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl border p-8 transition-all hover:shadow-xl flex flex-col
            ${
              plan.featured
                ? "border-green-500 scale-105 shadow-lg relative"
                : "border-gray-200"
            }`}
          >

            {/* Badge */}
            {plan.label && (
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium mb-4 w-fit
                ${
                  plan.featured
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {plan.label}
              </span>
            )}

            {/* Name */}
            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>

            <p className="text-sm text-gray-600 mt-2 mb-6">
              {plan.tagline}
            </p>

            {/* Price */}
            <div className="mb-6 flex flex-col">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price}
              </span>
              <span className="text-gray-500 ml-2 text-sm">
                {plan.sub}
              </span>
            </div>

            <div className="border-t mb-6"></div>

            {/* Features */}
            <ul className="space-y-3 flex-grow">
              {plan.features.map((f, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    f.available ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  <span
                    className={`font-bold ${
                      f.available ? "text-green-500" : "text-gray-300"
                    }`}
                  >
                    ✓
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>

            <span className="font-bold mt-5 w-full text-center animate-pulse text-green-700">Try Before You Buy</span>

            {/* Button */}
            {/* <button
              onClick={() => handleBuyPlan(plan.name)}
              className={`mt-8 w-full py-3 rounded-xl font-semibold transition
              ${
                plan.featured
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button> */}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing1;