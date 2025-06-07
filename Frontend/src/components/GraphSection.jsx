import React from "react";
 // Update the path based on your file location
 import graph1 from "../../src/components/Images/graph.png";
 const GraphSection = () => {
   return (
     <section
       className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white flex items-center justify-center p-6"
       aria-labelledby="graph-title"
     >
       <div className="max-w-6xl w-full mx-auto space-y-10">
         {/* Heading */}
         <header className="text-center">
           <h1 id="graph-title" className="text-4xl md:text-5xl font-bold mb-4">
             📈 Product Price Trends Over 7 Days
           </h1>
           <p className="text-lg md:text-xl text-gray-300">
             Visualizing real-time price fluctuations from Amazon & Flipkart to
             help you make smarter shopping decisions.
           </p>
         </header>

         {/* Graph Image */}
         <div className="flex justify-center px-4 md:px-0">
           <img
             src={graph1}
             alt="Graph showing 7-day price trends for Product 01 and Product 02 from Amazon and Flipkart."
             role="img"
             className="w-full max-w-4xl rounded-2xl shadow-2xl border border-white/10"
           />
         </div>

         {/* Description */}
         <article className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-xl border border-white/10 text-gray-200">
           <h2 className="text-2xl font-semibold mb-4">
             What this graph shows
           </h2>
           <p className="mb-4">
             This graph displays the 7-day pricing history of two
             products—Product 01 and Product 02—monitored on Flipkart and
             Amazon.
           </p>
           <ul className="list-disc pl-6 space-y-2">
             <li>
               <span className="text-yellow-400 font-semibold">Product 01</span>
               : A premium item with prices ranging from ₹9,000 to ₹14,000,
               indicating moderate daily variation.
             </li>
             <li>
               <span className="text-red-400 font-semibold">Product 02</span>: A
               more affordable item showing sharper price drops and increases
               within the ₹2,000–₹6,000 range.
             </li>
           </ul>
           <p className="mt-6">
             With <span className="font-semibold text-white">DealHunt</span>,
             you’ll get notified the moment the price drops below your target.
             Stop checking manually and let the system hunt the best deal for
             you.
           </p>
         </article>
       </div>
     </section>
   );
 };

 export default GraphSection;