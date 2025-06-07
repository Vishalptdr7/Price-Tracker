import React from "react";

const GraphSectionShimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full mx-auto space-y-10 animate-pulse">
        {/* Heading */}
        <div className="text-center space-y-4">
          <div className="h-8 md:h-10 bg-white/20 rounded w-3/4 mx-auto" />
          <div className="h-6 md:h-7 bg-white/10 rounded w-1/2 mx-auto" />
        </div>

        {/* Graph Placeholder */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl h-64 md:h-96 rounded-2xl bg-white/10 shadow-2xl border border-white/10" />
        </div>

        {/* Description Placeholder */}
        <div className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-xl border border-white/10 text-gray-200 space-y-4">
          <div className="h-6 bg-white/20 rounded w-1/3" />
          <div className="h-4 bg-white/10 rounded w-2/3" />
          <div className="space-y-2 mt-4">
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-5/6" />
          </div>
          <div className="space-y-2 mt-4">
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-4/5" />
          </div>
          <div className="h-4 bg-white/10 rounded w-2/3 mt-6" />
        </div>
      </div>
    </div>
  );
};

export default GraphSectionShimmer;
