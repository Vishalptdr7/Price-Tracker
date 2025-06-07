import React from "react";

const DetailsCardShimmer = () => {
  return (
    <div className="w-full space-y-4 animate-pulse">
      {/* Title shimmer */}
      <div className="h-8 w-3/4 bg-gray-300 rounded-md" />

      {/* Paragraph shimmer */}
      <div className="h-4 w-full bg-gray-200 rounded-md" />
      <div className="h-4 w-5/6 bg-gray-200 rounded-md" />

      {/* List shimmer */}
      {[...Array(7)].map((_, index) => (
        <div key={index} className="h-4 w-11/12 bg-gray-200 rounded-md" />
      ))}

      {/* Footer note shimmer */}
      <div className="h-4 w-2/3 bg-gray-200 rounded-md" />
    </div>
  );
};

export default DetailsCardShimmer;
