import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Line } from "react-chartjs-2";
import { axiosInstance } from "../lib/axios.js";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const PriceHistoryPage = () => {
  const { productId } = useParams();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/products/history/${productId}`
        );
        setHistory(data.history);
      } catch (err) {
        toast.error("Failed to load price history");
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, [productId]);

  const chartData = {
    labels: history.map((entry) => new Date(entry.checkedAt).toLocaleString()),
    datasets: [
      {
        label: "Price",
        data: history.map((entry) => entry.price),
        borderColor: "#5cbdb9",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    maintainAspectRatio: false,
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="h-8 w-1/2 sm:w-1/3 mb-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-96 w-full bg-gray-200 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white shadow rounded-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
        📈 Price History
      </h2>
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default PriceHistoryPage;
