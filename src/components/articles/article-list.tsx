
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Article {
  id: string;
  title: string;
  status: 'draft' | 'processing' | 'review' | 'approved';
  date: string;
  keyword: string;
}

interface ArticleListProps {
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

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<Article['status'] | 'all'>('all');

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.keyword.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || article.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [articles, searchQuery, statusFilter]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex space-x-2">
            <Button 
              variant={statusFilter === 'all' ? 'default' : 'outline'} 
              onClick={() => setStatusFilter('all')}
              className="text-xs"
            >
              All
            </Button>
            <Button 
              variant={statusFilter === 'draft' ? 'default' : 'outline'} 
              onClick={() => setStatusFilter('draft')}
              className="text-xs"
            >
              Draft
            </Button>
            <Button 
              variant={statusFilter === 'processing' ? 'default' : 'outline'} 
              onClick={() => setStatusFilter('processing')}
              className="text-xs"
            >
              Processing
            </Button>
            <Button 
              variant={statusFilter === 'review' ? 'default' : 'outline'} 
              onClick={() => setStatusFilter('review')}
              className="text-xs"
            >
              In Review
            </Button>
            <Button 
              variant={statusFilter === 'approved' ? 'default' : 'outline'} 
              onClick={() => setStatusFilter('approved')}
              className="text-xs"
            >
              Approved
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Keyword</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">{article.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-normal">
                        {article.keyword}
                      </Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(article.status)}</TableCell>
                    <TableCell>{article.date}</TableCell>
                    <TableCell className="text-right">
                      <Button asChild size="sm" variant="ghost">
                        <Link to={`/articles/${article.id}`}>
                          View
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    No articles found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleList;
