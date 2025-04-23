
import MainLayout from '@/components/layout/main-layout';
import ArticleList from '@/components/articles/article-list';

// Sample data for demonstration
const articles = [
  {
    id: "1",
    title: "10 Essential SEO Strategies for 2025",
    status: "approved" as const,
    date: "Apr 21, 2025",
    keyword: "SEO strategies",
  },
  {
    id: "2",
    title: "How to Build a Successful Content Marketing Plan",
    status: "review" as const,
    date: "Apr 20, 2025",
    keyword: "content marketing plan",
  },
  {
    id: "3",
    title: "The Complete Guide to Email Marketing Automation",
    status: "approved" as const,
    date: "Apr 19, 2025",
    keyword: "email marketing automation",
  },
  {
    id: "4",
    title: "Understanding Google's Latest Algorithm Update",
    status: "processing" as const,
    date: "Apr 18, 2025",
    keyword: "google algorithm update",
  },
  {
    id: "5",
    title: "Social Media Marketing Trends to Watch in 2025",
    status: "draft" as const,
    date: "Apr 17, 2025",
    keyword: "social media trends",
  },
  {
    id: "6",
    title: "How to Create Engaging Video Content for Your Brand",
    status: "approved" as const,
    date: "Apr 16, 2025",
    keyword: "video content",
  },
  {
    id: "7",
    title: "Local SEO Tips for Small Businesses",
    status: "review" as const,
    date: "Apr 15, 2025",
    keyword: "local SEO",
  },
  {
    id: "8",
    title: "The Ultimate Guide to On-Page SEO Optimization",
    status: "approved" as const,
    date: "Apr 14, 2025",
    keyword: "on-page SEO",
  },
  {
    id: "9",
    title: "How to Use Analytics to Improve Your Content Strategy",
    status: "draft" as const,
    date: "Apr 13, 2025",
    keyword: "content analytics",
  },
  {
    id: "10",
    title: "Building a Successful Email Newsletter from Scratch",
    status: "approved" as const,
    date: "Apr 12, 2025",
    keyword: "email newsletter",
  },
];

const Articles = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
            <p className="text-muted-foreground">
              Manage and review your generated articles
            </p>
          </div>
        </div>

        <ArticleList articles={articles} />
      </div>
    </MainLayout>
  );
};

export default Articles;
