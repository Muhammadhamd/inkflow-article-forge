
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="w-full py-4 px-6 flex justify-between items-center border-b border-white/10">
        <Logo size="md" />
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/login')}>Sign Up</Button>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">InkFlow</span> Article Forge
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
              A lightweight, no-BS writing tool for content creators. Upload keywords, provide your OpenAI key, and generate high-quality articles in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/login')}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/dashboard')}>
                Try Demo
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg glass-card hover-glow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Upload CSV</h3>
                <p className="text-muted-foreground text-center">
                  Upload your CSV file with keywords and let our AI do the heavy lifting.
                </p>
              </div>
              
              <div className="p-6 rounded-lg glass-card hover-glow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Review & Improve</h3>
                <p className="text-muted-foreground text-center">
                  Use our chat interface to review and improve the generated articles.
                </p>
              </div>
              
              <div className="p-6 rounded-lg glass-card hover-glow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Publish</h3>
                <p className="text-muted-foreground text-center">
                  Publish directly to WordPress or export to your preferred format.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">Ready to streamline your content creation?</h2>
              <p className="text-xl text-muted-foreground mb-8 text-center">
                Join hundreds of content creators who are saving time and scaling their content production.
              </p>
              <div className="flex justify-center">
                <Button size="lg" onClick={() => navigate('/login')}>
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground mt-2">
              Bring your key. Write faster.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
