// AI Demo Video Generator Script
export const generateAIDemoScript = () => {
  return {
    title: "Meta Desk Connect - AI-Powered Authentication Demo",
    duration: "2:30",
    scenes: [
      {
        timestamp: "0:00-0:10",
        narration: "Welcome to Meta Desk Connect, where AI meets seamless authentication.",
        visual: "App logo with animated background",
        text: "AI-Powered Authentication Demo"
      },
      {
        timestamp: "0:10-0:30",
        narration: "Experience multiple authentication methods designed for modern users.",
        visual: "Split screen showing email, phone, and Google auth options",
        text: "Multiple Sign-in Methods"
      },
      {
        timestamp: "0:30-0:50",
        narration: "Sign up with your email and get instant verification.",
        visual: "Email signup form with real-time validation",
        text: "Email Authentication"
      },
      {
        timestamp: "0:50-1:10",
        narration: "Use your phone number with OTP verification for secure access.",
        visual: "Phone number input with SMS OTP flow",
        text: "Phone Number Login"
      },
      {
        timestamp: "1:10-1:30",
        narration: "Connect with Google for one-click authentication.",
        visual: "Google OAuth flow demonstration",
        text: "Google Sign-in"
      },
      {
        timestamp: "1:30-2:00",
        narration: "AI-powered security features protect your data 24/7.",
        visual: "Security dashboard with AI monitoring",
        text: "AI Security Features"
      },
      {
        timestamp: "2:00-2:30",
        narration: "Get started today and experience the future of authentication.",
        visual: "Call-to-action with app download links",
        text: "Start Your Journey"
      }
    ]
  };
};

export const generateVideoEmbed = () => {
  return `
    <iframe 
      width="100%" 
      height="400" 
      src="https://www.youtube.com/embed/demo-placeholder" 
      title="Meta Desk Connect - AI Demo"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  `;
};

export const createDemoLandingPage = () => {
  return {
    hero: {
      title: "Experience AI-Powered Authentication",
      subtitle: "Watch our 2-minute demo to see how Meta Desk Connect revolutionizes user authentication",
      cta: "Watch Demo Now"
    },
    features: [
      {
        icon: "Mail",
        title: "Email Authentication",
        description: "Secure email and password login with AI-powered validation"
      },
      {
        icon: "Phone",
        title: "Phone Number Login",
        description: "OTP verification via SMS with intelligent retry mechanisms"
      },
      {
        icon: "Chrome",
        title: "Google OAuth",
        description: "One-click Google sign-in with enhanced security protocols"
      }
    ],
    testimonials: [
      {
        quote: "The AI-powered authentication is incredibly smooth and secure.",
        author: "Sarah Johnson, Product Manager"
      },
      {
        quote: "Multiple sign-in options make it perfect for our diverse user base.",
        author: "Mike Chen, CTO"
      }
    ]
  };
};
