'use client';

import { useState } from 'react';
import axios from 'axios';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Label from '@/components/ui/label';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Alert, { AlertDescription, AlertTitle } from '@/components/ui/alert';

import { Loader2, AlertCircle } from 'lucide-react';
import BarChart from '@/components/BarChart'
import PieChart from '@/components/PieChart'
import LineChart from '@/components/LineChart'
import RadarChart from '@/components/RadarChart'

export default function GeneratePitchPage() {
  const [startupName, setStartupName] = useState('');
  const [missionStatement, setMissionStatement] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [targetMarket, setTargetMarket] = useState('');
  const [generatedPitch, setGeneratedPitch] = useState('');
  const [marketData, setMarketData] = useState({ labels: [], values: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedPitch('');
    setError('');

    const inputData = {
      startupName,
      missionStatement,
      productDetails,
      targetMarket,
    };
    console.log('Submitting input data:', inputData);

    try {
      const response = await axios.post('/api/generate', inputData);
      console.log('API response:', response.data);

      setGeneratedPitch(response.data.pitch.pitchText);
      setMarketData(response.data.pitch.marketData);
    } catch (err) {
      console.error('Error in API call:', err);
      setError('Failed to generate the pitch. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadText = () => {
    if (!generatedPitch) return; // Do nothing if there's no pitch

    const element = document.createElement('a');
    const file = new Blob([generatedPitch], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'generated_pitch.txt'; // File name for the download
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Generate Your Startup Pitch</CardTitle>
          <CardDescription>Fill in the details below to create a compelling pitch for your startup.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="startupName">Startup Name</Label>
              <Input
                id="startupName"
                value={startupName}
                onChange={(e) => setStartupName(e.target.value)}
                placeholder="Enter your startup name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="missionStatement">Mission Statement</Label>
              <Textarea
                id="missionStatement"
                value={missionStatement}
                onChange={(e) => setMissionStatement(e.target.value)}
                placeholder="Describe your startup's mission"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="productDetails">Product Details</Label>
              <Textarea
                id="productDetails"
                value={productDetails}
                onChange={(e) => setProductDetails(e.target.value)}
                placeholder="Describe your product or service"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetMarket">Target Market (Optional)</Label>
              <Input
                id="targetMarket"
                value={targetMarket}
                onChange={(e) => setTargetMarket(e.target.value)}
                placeholder="Describe your target audience"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex space-x-2">
        <Button 
  onClick={handleSubmit} 
  disabled={loading} 
  className={`w-full px-4 py-2 text-lg font-semibold text-white rounded-lg 
  ${loading ? 'bg-gray-700' : 'bg-gradient-to-r from-black to-gray-900'} 
  hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all ease-in-out duration-300`}
>
  {loading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Generating...
    </>
  ) : (
    'Generate Pitch'
  )}
</Button>

        </CardFooter>
      </Card>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

{generatedPitch && (
  <Card className="mt-8 bg-gray-800 text-white">
  <CardHeader className="flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <CardTitle>Generated Pitch</CardTitle>
      <Button 
        onClick={handleDownloadText} 
        className="bg-black text-white hover:bg-gray-800 px-4 py-1 text-sm"
      >
        Download
      </Button>
    </div>
  </CardHeader>
  <CardContent className="p-4 bg-gray-800 rounded-lg">
    <p className="text-base text-white whitespace-pre-wrap">{generatedPitch}</p>
  </CardContent>
</Card>


)}

{marketData.labels.length > 0 && (
  <div className='mt-8'>
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-lg text-gray-100">Market Data</CardTitle>
      </CardHeader>
      <CardContent className="bg-gray-900 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <BarChart data={marketData} />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <PieChart data={marketData} />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <LineChart data={marketData} />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <RadarChart data={marketData} />
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)}

    </div>
  );
}
