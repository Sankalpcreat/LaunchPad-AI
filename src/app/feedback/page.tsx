"use client";

import { useState } from "react";
import axios from "axios";

export default function FeedbackPage() {
  const [pitchId, setPitchId] = useState("");
  const [clarityScore, setClarityScore] = useState(0);
  const [structureScore, setStructureScore] = useState(0);
  const [relevanceScore, setRelevanceScore] = useState(0);
  const [persuasivenessScore, setPersuasivenessScore] = useState(0);
  const [strengths, setStrengths] = useState("");
  const [improvements, setImprovements] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setError("");

    try {
      const response = await axios.post("/api/feedback", {
        pitchId,
        clarityScore,
        structureScore,
        relevanceScore,
        persuasivenessScore,
        strengths: strengths.split(",").map((s) => s.trim()),
        improvements: improvements.split(",").map((i) => i.trim()),
      });

      setSuccessMessage(response.data.message);
      setPitchId("");
      setClarityScore(0);
      setStructureScore(0);
      setRelevanceScore(0);
      setPersuasivenessScore(0);
      setStrengths("");
      setImprovements("");
    } catch (err) {
      setError("Failed to save feedback. Please try again.",err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submit Feedback on Pitch</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Pitch ID</label>
          <input
            type="text"
            value={pitchId}
            onChange={(e) => setPitchId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Clarity Score (1-10)</label>
          <input
            type="number"
            min={1}
            max={10}
            value={clarityScore}
            onChange={(e) => setClarityScore(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Structure Score (1-10)</label>
          <input
            type="number"
            min={1}
            max={10}
            value={structureScore}
            onChange={(e) => setStructureScore(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Relevance Score (1-10)</label>
          <input
            type="number"
            min={1}
            max={10}
            value={relevanceScore}
            onChange={(e) => setRelevanceScore(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Persuasiveness Score (1-10)</label>
          <input
            type="number"
            min={1}
            max={10}
            value={persuasivenessScore}
            onChange={(e) => setPersuasivenessScore(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Strengths (comma-separated)</label>
          <textarea
            value={strengths}
            onChange={(e) => setStrengths(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Improvements (comma-separated)</label>
          <textarea
            value={improvements}
            onChange={(e) => setImprovements(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>

      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
