
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export function SettingsTabs() {
  const [openAIKey, setOpenAIKey] = useState("");
  const [tavilyKey, setTavilyKey] = useState("");
  const [wpUrl, setWpUrl] = useState("");
  const [wpUsername, setWpUsername] = useState("");
  const [wpPassword, setWpPassword] = useState("");
  
  // Agent settings
  const [researchEnabled, setResearchEnabled] = useState(true);
  const [seoEnabled, setSeoEnabled] = useState(true);
  const [imageGenEnabled, setImageGenEnabled] = useState(false);
  
  return (
    <Tabs defaultValue="openai" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="openai">OpenAI Settings</TabsTrigger>
        <TabsTrigger value="tavily">Tavily Settings</TabsTrigger>
        <TabsTrigger value="agents">Agent Settings</TabsTrigger>
      </TabsList>
      
      <TabsContent value="openai">
        <Card>
          <CardHeader>
            <CardTitle>OpenAI API Configuration</CardTitle>
            <CardDescription>
              Configure your OpenAI API key to enable the AI writing capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="openai-key" className="text-sm font-medium">
                OpenAI API Key
              </label>
              <Input
                id="openai-key"
                placeholder="sk-..."
                value={openAIKey}
                onChange={(e) => setOpenAIKey(e.target.value)}
                type="password"
              />
              <p className="text-xs text-muted-foreground">
                Your API key is encrypted and stored securely.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">WordPress Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="wp-url" className="text-xs font-medium">
                    WordPress Site URL
                  </label>
                  <Input
                    id="wp-url"
                    placeholder="https://yoursite.com"
                    value={wpUrl}
                    onChange={(e) => setWpUrl(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="wp-username" className="text-xs font-medium">
                    Username
                  </label>
                  <Input
                    id="wp-username"
                    placeholder="admin"
                    value={wpUsername}
                    onChange={(e) => setWpUsername(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="wp-password" className="text-xs font-medium">
                    Application Password
                  </label>
                  <Input
                    id="wp-password"
                    placeholder="xxxx xxxx xxxx xxxx"
                    value={wpPassword}
                    onChange={(e) => setWpPassword(e.target.value)}
                    type="password"
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Generate an application password in your WordPress dashboard.
                  </p>
                </div>
              </div>
            </div>
            
            <Button>Save Settings</Button>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="tavily">
        <Card>
          <CardHeader>
            <CardTitle>Tavily Search API</CardTitle>
            <CardDescription>
              Configure the Tavily API key for article research capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="tavily-key" className="text-sm font-medium">
                Tavily API Key
              </label>
              <Input
                id="tavily-key"
                placeholder="tvly-..."
                value={tavilyKey}
                onChange={(e) => setTavilyKey(e.target.value)}
                type="password"
              />
              <p className="text-xs text-muted-foreground">
                Used to perform web search for article research.
              </p>
            </div>
            <Button>Save Settings</Button>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="agents">
        <Card>
          <CardHeader>
            <CardTitle>Agent Configuration</CardTitle>
            <CardDescription>
              Enable or disable specific steps in the writing flow.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label htmlFor="research" className="text-sm font-medium">
                    Research Agent
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Collects information about the keyword before writing
                  </p>
                </div>
                <Switch 
                  checked={researchEnabled} 
                  onCheckedChange={setResearchEnabled} 
                  id="research"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label htmlFor="seo" className="text-sm font-medium">
                    SEO Optimization
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Adds FAQ, meta description, and optimizes for search engines
                  </p>
                </div>
                <Switch 
                  checked={seoEnabled} 
                  onCheckedChange={setSeoEnabled} 
                  id="seo"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label htmlFor="images" className="text-sm font-medium">
                    Image Generation
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Generates featured images for articles (requires Dall-E access)
                  </p>
                </div>
                <Switch 
                  checked={imageGenEnabled} 
                  onCheckedChange={setImageGenEnabled} 
                  id="images"
                />
              </div>
              
              <Button className="mt-4">Save Configuration</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
