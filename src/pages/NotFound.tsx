import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gradient">404</h1>
        <h2 className="text-2xl font-semibold">Oops! Page not found</h2>
        <p className="text-muted-foreground max-w-md">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
