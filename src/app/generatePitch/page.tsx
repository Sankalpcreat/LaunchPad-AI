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
          <Button onClick={handleSubmit} disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Pitch'
            )}
          </Button>

          {/* Download Text Button */}
          {generatedPitch && (
            <Button onClick={handleDownloadText} className="w-full">
              Download Pitch as Text
            </Button>
          )}
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
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Generated Pitch</CardTitle>
            <CardDescription>Here is your AI-generated startup pitch:</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{generatedPitch}</p>
          </CardContent>
        </Card>
      )}
      {marketData.labels.length>0 && (
        <div className='mt-8'>
          <Card>
            <CardHeader>
              <CardTitle>Market Data</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={marketData}/>
              <PieChart data={marketData}/>
              <LineChart data={marketData}/>
              <RadarChart data={marketData}/>

            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
