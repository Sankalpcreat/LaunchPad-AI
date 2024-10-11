import axios from "axios";

const NEWS_API_KEY = process.env.NEWS_API_KEY; 


export const analyzeMarketTrends = async (industry: string) => {
    try {
            const response=await axios.get(`https://newsapi.org/v2/everything`,{
                params:{
                    q:industry,
                    apiKey:NEWS_API_KEY,
                    sortBy:'relevancy',
                    language:"en",
                    pageSize:5
                }
            })
          const articles=response.data.articles;

          const trends = articles.map((article: any) => ({
            title: article.title,
            url: article.url,
            publishedAt: article.publishedAt,
            source: article.source.name, 
        }));
        return trends
    } catch (error) {
        console.error("Error fetching market trends:", error);
        throw new Error("Failed to fetch market trends");
    }
}

export const saveMarketAnalysis=async(startupName: string,
    industry: string,
    competitor: string[])=>{

   try {
     const trends= await  analyzeMarketTrends(industry);
     const marketServices=new MarketServices({
         startupName,
         industry,
         competitor:competitor,
         marketTrends:trends
     })
     await marketServices.save();
     return marketServices;
   } catch (error) {
    console.error("Error saving market analysis",error);
    throw new Error("Failed to analysis the market")
    
   }

}