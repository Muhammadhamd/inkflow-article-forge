
import { LoginForm } from '@/components/auth/login-form';
import Logo from '@/components/logo';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link to="/">
              <Logo size="lg" />
            </Link>
            <h1 className="text-2xl font-bold">Welcome to InkFlow</h1>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
      
      <footer className="py-6 px-4 border-t border-white/10 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} InkFlow Article Forge. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Login;
