import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Phone, Mail, Chrome } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function AIAppDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">AI-Generated App Demo</h2>
        <p className="text-lg text-muted-foreground">
          Experience our application through an AI-generated demonstration
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Demo Video Section */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Interactive Demo</CardTitle>
            <CardDescription>
              Watch how our app works with multiple authentication methods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">AI Demo Video</h3>
                <p>Click play to see the app in action</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Authentication Features</CardTitle>
            <CardDescription>Multiple ways to sign up and sign in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <div>
                <p className="font-medium">Email Authentication</p>
                <p className="text-sm text-muted-foreground">Secure email and password login</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-green-500" />
              <div>
                <p className="font-medium">Phone Number Login</p>
                <p className="text-sm text-muted-foreground">OTP verification via SMS</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Chrome className="w-5 h-5 text-red-500" />
              <div>
                <p className="font-medium">Google OAuth</p>
                <p className="text-sm text-muted-foreground">One-click Google sign-in</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Features */}
        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Features</CardTitle>
            <CardDescription>Smart automation and insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="secondary">AI Demo Generation</Badge>
            <Badge variant="secondary">Smart Authentication</Badge>
            <Badge variant="secondary">Personalized Experience</Badge>
            <Badge variant="secondary">Real-time Analytics</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600">
          <Play className="w-5 h-5 mr-2" />
          Watch Full Demo
        </Button>
      </div>
    </div>
  );
}
