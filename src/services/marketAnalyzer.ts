import axios from "axios";
import MarketService from "@/models/marketService";  // Import the refined model

const NEWS_API_KEY = process.env.NEWS_API_KEY;

interface Trend {
  title: string;
  url: string;
  publishedAt: string;
  source: string;
}

// Function to analyze market trends based on industry
export const analyzeMarketTrends = async (industry: string): Promise<Trend[]> => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: industry,
        apiKey: NEWS_API_KEY,
        sortBy: "relevancy",
        language: "en",
        pageSize: 5,
      },
    });

    const articles = response.data.articles;

    // Ensure articles are present and return the trend data
    if (!articles || articles.length === 0) {
      throw new Error("No articles found for the given industry.");
    }

    const trends: Trend[] = articles.map((article: any) => ({
      title: article.title,
      url: article.url,
      publishedAt: article.publishedAt,
      source: article.source.name,
    }));

    return trends;
  } catch (error: any) {
    console.error("Error fetching market trends:", error.message);
    throw new Error("Failed to fetch market trends");
  }
};

// Function to save market analysis data for a specific startup
export const saveMarketAnalysis = async (
  startupName: string,
  industry: string,
  competitor: string[]
) => {
  try {
    // Fetch market trends for the given industry
    const trends = await analyzeMarketTrends(industry);

    // Create a new market services document
    const marketServices = new MarketService({
      startupName,
      industry,
      competitor,
      marketTrends: trends,
    });

    // Save the document to the database
    await marketServices.save();

    // Return the saved document
    return marketServices;
  } catch (error: any) {
    console.error("Error saving market analysis:", error.message);
    throw new Error("Failed to analyze and save the market data");
  }
};
