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

export default function GeneratePitchPage() {
  const [startupName, setStartupName] = useState('');
  const [missionStatement, setMissionStatement] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [targetMarket, setTargetMarket] = useState('');
  const [generatedPitch, setGeneratedPitch] = useState('');
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
    } catch (err) {
      console.error('Error in API call:', err);
      setError('Failed to generate the pitch. Please try again.');
    } finally {
      setLoading(false);
    }
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
        <CardFooter>
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
            <CardDescription>Here's your AI-generated startup pitch:</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{generatedPitch}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
