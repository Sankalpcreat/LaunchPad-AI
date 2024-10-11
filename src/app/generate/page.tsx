"use client";

import { useState } from "react";
import axios from "axios";

export default function GeneratePitchPage() {
  const [startupName, setStartupName] = useState("");
  const [missionStatement, setMissionStatement] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [targetMarket, setTargetMarket] = useState("");
  const [generatedPitch, setGeneratedPitch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedPitch("");
    setError("");

    try {
      const response = await axios.post("/api/generate", {
        startupName,
        missionStatement,
        productDetails,
        targetMarket,
      });

      setGeneratedPitch(response.data.pitchText);
    } catch (err) {
      setError("Failed to generate the pitch. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Generate Your Startup Pitch</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Startup Name</label>
          <input
            type="text"
            value={startupName}
            onChange={(e) => setStartupName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Mission Statement</label>
          <textarea
            value={missionStatement}
            onChange={(e) => setMissionStatement(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Product Details</label>
          <textarea
            value={productDetails}
            onChange={(e) => setProductDetails(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Target Market (Optional)</label>
          <input
            type="text"
            value={targetMarket}
            onChange={(e) => setTargetMarket(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Pitch"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {generatedPitch && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Generated Pitch</h2>
          <p className="mt-2 p-4 border rounded bg-gray-50">{generatedPitch}</p>
        </div>
      )}
    </div>
  );
}
