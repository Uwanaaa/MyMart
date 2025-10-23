import authBg from "@/assets/auth-bg.jpeg";
import { MapPin } from "lucide-react";
import { ReactNode } from "react";

export default function Index ({ children } : { children: ReactNode}){
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${authBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
          <MapPin className="w-10 h-10 text-primary/40" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="w-16 h-16 rounded-full bg-accent/10 backdrop-blur-sm flex items-center justify-center">
          <MapPin className="w-8 h-8 text-accent/40" />
        </div>
      </div>
      <div className="absolute top-1/3 right-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="w-12 h-12 rounded-full bg-secondary/10 backdrop-blur-sm flex items-center justify-center">
          <MapPin className="w-6 h-6 text-secondary/40" />
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-md px-4 animate-fade-in">
        {children}
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </div>
  );
};


