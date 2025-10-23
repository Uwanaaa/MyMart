'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Store, Mail, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      const data = await response.json();
      
      toast({
        title: response.ok ? "Success!" : "Error",
        description: data.message,
        variant: response.ok ? "default" : "destructive",
      });
      
      if (response.ok) {
        setUsername('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md backdrop-blur-xl bg-card/80 border-border/50 shadow-[var(--shadow-card)] animate-scale-in">
      <CardHeader className="space-y-3 text-center">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[var(--shadow-primary)] animate-glow">
          <Store className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Join ShopFinder
        </CardTitle>
        <CardDescription className="text-base">
          Discover amazing shops near you
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2 animate-fade-in-up">
            <Label htmlFor="username" className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="johndoe"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              required
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
          
          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
          
          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Label htmlFor="password" className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-muted-foreground" />
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e:any) => setPassword(e.target.value)}
              required
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
          
          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="w-full animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                Creating Account...
              </>
            ) : (
              <>
                <MapPin className="w-4 h-4" />
                Start Exploring
              </>
            )}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Already have an account?{" "}
          <a href="#" className="text-primary hover:underline font-medium transition-colors">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
