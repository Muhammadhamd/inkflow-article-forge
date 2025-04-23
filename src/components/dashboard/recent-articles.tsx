
import { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Article {
  id: string;
  title: string;
  status: 'draft' | 'processing' | 'review' | 'approved';
  date: string;
  keywords: string[];
}

interface RecentArticlesProps {
  articles: Article[];
}

const getStatusBadge = (status: Article['status']) => {
  switch (status) {
    case 'draft':
      return <Badge variant="draft">Draft</Badge>;
    case 'processing':
      return <Badge variant="processing">Processing</Badge>;
    case 'review':
      return <Badge variant="review">In Review</Badge>;
    case 'approved':
      return <Badge variant="approved">Approved</Badge>;
    default:
      return null;
  }
};

const RecentArticles: FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Recent Articles</CardTitle>
        <CardDescription>You have {articles.length} recent articles</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{article.title}</p>
                <div className="flex items-center pt-1">
                  {getStatusBadge(article.status)}
                  <span className="ml-3 text-xs text-muted-foreground">{article.date}</span>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {article.keywords.slice(0, 3).map((keyword) => (
                    <Badge key={keyword} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                  {article.keywords.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{article.keywords.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
              <Button size="sm" variant="outline" className="ml-2 shrink-0" asChild>
                <a href={`/articles/${article.id}`}>View</a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentArticles;
