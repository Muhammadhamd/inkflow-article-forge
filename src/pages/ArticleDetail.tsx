
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/main-layout';
import ArticleChat from '@/components/articles/article-chat';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample article data
type ArticleStatus = 'draft' | 'processing' | 'review' | 'approved';

const sampleArticle = {
  id: "1",
  title: "10 Essential SEO Strategies for 2025",
  status: "review" as ArticleStatus,
  date: "Apr 21, 2025",
  keyword: "SEO strategies",
  content: `
<h1>10 Essential SEO Strategies for 2025</h1>

<p>As search engine algorithms continue to evolve, staying ahead in the SEO game requires adapting to new trends and technologies. In 2025, SEO isn't just about keywords and backlinks—it's about creating exceptional user experiences, leveraging artificial intelligence, and understanding the changing landscape of search. This comprehensive guide explores the most effective SEO strategies that will drive organic traffic and improve search rankings in 2025.</p>

<h2>1. AI-Powered Content Optimization</h2>

<p>Artificial intelligence has transformed how search engines understand and rank content. In 2025, successful SEO requires leveraging AI tools to analyze user intent, optimize content structure, and predict search patterns. Content that addresses user needs comprehensively while maintaining natural language flow will outperform keyword-stuffed alternatives.</p>

<p>Key tactics include:</p>
<ul>
  <li>Using AI tools to identify semantic gaps in existing content</li>
  <li>Implementing natural language processing to optimize for conversational queries</li>
  <li>Creating content that answers related questions users might have</li>
</ul>

<h2>2. Voice Search Optimization</h2>

<p>With the proliferation of smart speakers and voice assistants, optimizing for voice search is no longer optional. Voice queries tend to be longer, more conversational, and often phrased as questions. To capitalize on this trend, focus on:</p>

<ul>
  <li>Creating FAQ sections that address common voice queries</li>
  <li>Optimizing for featured snippets, which are often used for voice search results</li>
  <li>Using conversational language and long-tail keywords in your content</li>
</ul>

<h2>3. User Experience Signals</h2>

<p>Search engines now heavily weigh user experience metrics when determining rankings. Core Web Vitals and other UX signals have become critical ranking factors. To optimize for these signals:</p>

<ul>
  <li>Improve page loading speed across all devices</li>
  <li>Ensure visual stability by minimizing layout shifts</li>
  <li>Optimize interactivity to reduce response delay</li>
  <li>Create intuitive navigation and accessible designs</li>
</ul>

<h2>4. E-A-T (Expertise, Authoritativeness, Trustworthiness)</h2>

<p>Google continues to refine how it evaluates content quality through E-A-T principles. For YMYL (Your Money Your Life) topics especially, demonstrating expertise and trustworthiness is paramount. Enhance your E-A-T by:</p>

<ul>
  <li>Showcasing author credentials and expertise</li>
  <li>Citing reputable sources and research</li>
  <li>Maintaining accurate, up-to-date information</li>
  <li>Building brand authority through thought leadership</li>
</ul>

<h2>5. Video SEO</h2>

<p>Video content continues to dominate engagement metrics and search results. In 2025, a comprehensive SEO strategy must include video optimization tactics:</p>

<ul>
  <li>Creating keyword-rich video descriptions and transcripts</li>
  <li>Organizing content with chapters and timestamps</li>
  <li>Optimizing for video featured snippets</li>
  <li>Improving video loading speed and mobile playability</li>
</ul>

<p>By implementing these strategies consistently while monitoring results and adapting to algorithm changes, businesses can significantly improve their search visibility in 2025's competitive digital landscape.</p>
  `,
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the article based on the ID
  const article = sampleArticle;
  
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight line-clamp-1">{article.title}</h1>
            <div className="flex items-center gap-3 mt-2">
              <Badge variant="outline">{article.keyword}</Badge>
                            {article.status === 'draft' && <Badge variant="draft">Draft</Badge>}
                            {article.status === 'processing' && <Badge variant="processing">Processing</Badge>}
                            {article.status === 'review' && <Badge variant="review">In Review</Badge>}
                            {article.status === 'approved' && <Badge variant="approved">Approved</Badge>}
              <span className="text-sm text-muted-foreground">Created: {article.date}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">Export</Button>
            <Button variant="outline">Preview</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Article Review</CardTitle>
            </CardHeader>
            <CardContent>
              <ArticleChat initialArticle={{ keyword: article.keyword, content: article.content }} />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticleDetail;
