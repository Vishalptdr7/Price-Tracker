import React from "react";
// adjust the path as needed
import graph1 from "../../src/components/Images/graph.png";
const DealHuntGraph = () => {
  return (
    <div className="p-6 mx-auto mt-6 max-w-5xl bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        DealHunt System Architecture
      </h2>
      <img
        src={graph1}
        alt="DealHunt Graph Architecture"
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
  );
};

export default DealHuntGraph;
