import { useEffect, useState } from 'react';
import { Progress } from '../components/ui/progress';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#1E3A8A] px-8 overflow-hidden">
      {/* Logo X with Ambulance */}
      <div className="mb-6 relative">
        <svg width="160" height="150" viewBox="0 0 160 150" fill="none">
          {/* Big X Letter */}
          <path
            d="M30 8L72 62L114 8H134L82 72L134 132H114L72 78L30 132H10L62 72L10 8H30Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="1"
          />

          {/* Ambulance Group - bottom right */}
          <g>
            {/* Speed lines */}
            <line x1="68" y1="108" x2="82" y2="108" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <line x1="72" y1="114" x2="88" y2="114" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <line x1="65" y1="120" x2="80" y2="120" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

            {/* Ambulance body */}
            <rect x="90" y="102" width="52" height="26" rx="3" fill="white" />
            {/* Cabin / front section (angled) */}
            <path d="M142 102L154 112V128H142V102Z" fill="white" />
            {/* Windshield */}
            <path d="M143 105L152 113V125H143V105Z" fill="#1E3A8A" opacity="0.4" />
            {/* Ambulance window */}
            <rect x="118" y="106" width="20" height="10" rx="1.5" fill="#1E3A8A" opacity="0.3" />

            {/* Medical cross on ambulance */}
            <rect x="100" y="110" width="12" height="3" rx="0.5" fill="#EF4444" />
            <rect x="104.5" y="106" width="3" height="12" rx="0.5" fill="#EF4444" />

            {/* Siren light on top */}
            <rect x="108" y="95" width="10" height="7" rx="3.5" fill="#EF4444" />
            <circle cx="113" cy="98" r="6" fill="#EF4444" opacity="0.15" />
            <circle cx="113" cy="98" r="10" fill="#EF4444" opacity="0.06" />
            {/* Siren base */}
            <rect x="106" y="100" width="14" height="3" rx="1" fill="white" />

            {/* Front wheel */}
            <circle cx="140" cy="130" r="7" fill="#1E3A8A" stroke="white" strokeWidth="2.5" />
            <circle cx="140" cy="130" r="2.5" fill="white" />
            {/* Rear wheel */}
            <circle cx="104" cy="130" r="7" fill="#1E3A8A" stroke="white" strokeWidth="2.5" />
            <circle cx="104" cy="130" r="2.5" fill="white" />

            {/* Bumper */}
            <rect x="154" y="120" width="4" height="6" rx="1" fill="white" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* App Name */}
      <h1
        className="text-[32px] font-bold text-white mb-2"
        style={{ fontFamily: "'Alice', serif" }}
      >
        UrgentCareX
      </h1>

      {/* Tagline */}
      <p className="text-base text-white/80 mb-16">
        Find Care Fast
      </p>

      {/* Loading Progress Bar */}
      <div className="w-[200px]">
        <Progress value={progress} className="h-1 bg-white/20 [&>div]:bg-white" />
      </div>
    </div>
  );
}
