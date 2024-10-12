"use client";

import { useState } from "react";
import axios from "axios";

const MarketInsightsPage = () => {
  const [startupName, setStartupName] = useState("");
  const [industry, setIndustry] = useState("");
  const [competitors, setCompetitors] = useState<string[]>([]);
  const [trends, setTrends] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic input validation
    if (!startupName || !industry || competitors.length === 0) {
      setError("Please provide a startup name, industry, and at least one competitor.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/insights", {
        startupName,
        industry,
        competitors,
      });

      setTrends(response.data.trends);
    } catch (error) {
      console.error("Error fetching market insights:", error);
      setError("Failed to fetch market insights. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Market Analysis</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="startupName" className="block font-medium">
            Startup Name
          </label>
          <input
            type="text"
            id="startupName"
            value={startupName}
            onChange={(e) => setStartupName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="industry" className="block font-medium">
            Industry
          </label>
          <input
            type="text"
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="competitors" className="block font-medium">
            Competitors (Comma Separated)
          </label>
          <input
            type="text"
            id="competitors"
            value={competitors.join(", ")}
            onChange={(e) =>
              setCompetitors(
                e.target.value
                  .split(",")
                  .map((item) => item.trim())
                  .filter((item) => item.length > 0)
              )
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Market"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-600">{error}</p>}

      {trends.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Market Trends</h2>
          <ul className="space-y-4">
            {trends.map((trend, index) => (
              <li key={index} className="border p-4 rounded-md">
                <h3 className="font-medium text-lg">{trend.title}</h3>
                <p className="text-gray-600">
                  {trend.source} - {new Date(trend.publishedAt).toLocaleDateString()}
                </p>
                <a
                  href={trend.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Read more
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MarketInsightsPage;
