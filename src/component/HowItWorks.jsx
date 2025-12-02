import React from "react";

const HowItWorks = () => {
  return (
    <div className="py-10 bg-[#fcf9d6] px-10 mt-5">
      <h2 className="text-3xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-10 text-center">

        <div className="p-8 shadow-md rounded-xl bg-white">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold">1. Browse Skills</h3>
          <p className="text-gray-600 mt-2">
            Explore thousands of expert skills and choose what matches your needs.
          </p>
        </div>

        <div className="p-8 shadow-md rounded-xl bg-white">
          <div className="text-4xl mb-4">📩</div>
          <h3 className="text-xl font-semibold">2. Contact Provider</h3>
          <p className="text-gray-600 mt-2">
            Connect with a professional provider and discuss your project.
          </p>
        </div>

        <div className="p-8 shadow-md rounded-xl bg-white">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-semibold">3. Get Your Work Done</h3>
          <p className="text-gray-600 mt-2">
            Provider delivers your work with quality and satisfaction guaranteed.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
