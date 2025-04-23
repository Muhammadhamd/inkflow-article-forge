
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ArticleChatProps {
  initialArticle: {
    keyword: string;
    content: string;
  };
}

const ArticleChat: React.FC<ArticleChatProps> = ({ initialArticle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'user',
      content: initialArticle.keyword,
    },
    {
      id: '2',
      role: 'assistant',
      content: initialArticle.content,
    },
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [isApproved, setIsApproved] = useState(false);
  
  const handleSelection = () => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
      setSelectedText(selection.toString());
    }
  };
  
  const handleImproveSection = () => {
    if (selectedText) {
      const improveMessage = `Please improve this section: "${selectedText}"`;
      setInputValue(improveMessage);
      setSelectedText('');
    }
  };
  
  const handleSendMessage = () => {
    if (!inputValue.trim() || isSubmitting) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsSubmitting(true);
    
    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: generateDummyResponse(inputValue),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setInputValue('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  const handleApprove = () => {
    setIsApproved(true);
  };
  
  const handlePostToWordPress = () => {
    // This would connect to WordPress in a real implementation
    alert('Article would be posted to WordPress in a real implementation');
  };
  
  // Dummy response generator
  const generateDummyResponse = (input: string) => {
    if (input.toLowerCase().includes('improve')) {
      return `I've improved the section for you. Here's the updated version:

The key to successful content marketing lies in understanding your audience's needs and pain points. By creating valuable content that addresses these issues, you build trust and establish authority in your niche. This approach not only drives organic traffic but also nurtures leads through the marketing funnel, ultimately leading to higher conversion rates and customer loyalty.`;
    }
    
    return `Thank you for your feedback! I've made the requested changes to the article. Is there anything else you'd like me to adjust or improve?`;
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* Chat messages */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4 mb-4 border rounded-md"
        onMouseUp={handleSelection}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`rounded-lg p-4 max-w-3xl ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              {message.role === 'assistant' ? (
                <div className="prose dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br />') }} />
                </div>
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Selection controls */}
      {selectedText && (
        <div className="bg-muted p-2 rounded-md mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <Badge>Selection</Badge>
            <p className="ml-2 text-sm truncate max-w-md">
              {selectedText.length > 50
                ? `${selectedText.substring(0, 50)}...`
                : selectedText}
            </p>
          </div>
          <Button size="sm" onClick={handleImproveSection}>
            Improve Section
          </Button>
        </div>
      )}
      
      {/* Input area */}
      <div className="border rounded-md p-4">
        <div className="flex flex-col space-y-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Send a message to improve the article..."
            className="resize-none"
            rows={3}
          />
          <div className="flex space-x-2 justify-between">
            <div className="space-x-2">
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </Button>
              <Button
                variant={isApproved ? "success" : "outline"}
                onClick={handleApprove}
                disabled={isApproved}
              >
                {isApproved ? 'Approved' : 'Approve Article'}
              </Button>
            </div>
            <Button
              variant="accent"
              disabled={!isApproved}
              onClick={handlePostToWordPress}
            >
              Post to WordPress
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleChat;
