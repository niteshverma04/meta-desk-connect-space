import React from 'react';
import { AIAppDemo } from '@/components/demo/AIAppDemo';
import { generateAIDemoScript } from '@/utils/ai-demo-generator';

export function DemoPage() {
  const demoScript = generateAIDemoScript();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {demoScript.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience our AI-powered authentication system through an interactive demonstration
          </p>
        </div>

        <AIAppDemo />
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-slate-600 mb-6">
              Try our enhanced authentication system with email, phone, and Google sign-in options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="btn btn-primary">
                Sign Up Now
              </a>
              <a href="/login" className="btn btn-secondary">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
