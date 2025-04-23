
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import { Button } from '../ui/button';

interface NavbarProps {
  user?: { name: string; email: string } | null;
}

const Navbar: FC<NavbarProps> = ({ user }) => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b backdrop-blur-lg bg-background/80 border-white/10">
      <div className="container flex h-16 items-center px-4 mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-6">
            <Logo size="md" />
            <span className="ml-2 text-sm hidden sm:inline-block">Article Forge</span>
          </Link>
        </div>

        <div className="flex-1"></div>

        {user ? (
          <div className="flex items-center gap-2">
            <div className="hidden md:flex flex-col items-end mr-2">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm font-medium text-primary-foreground">
                {user.name?.charAt(0) || 'U'}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/login">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
