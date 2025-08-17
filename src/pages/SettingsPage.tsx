import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/sonner';
import { 
  Sun, 
  Moon, 
  Monitor, 
  Bell, 
  Shield, 
  User, 
  Palette, 
  Globe, 
  Smartphone,
  Volume2,
  Eye,
  EyeOff,
  Download,
  Upload,
  Trash2,
  Settings as SettingsIcon
} from 'lucide-react';

const NOTIFICATIONS_KEY = 'settings_notifications';
const PRIVACY_KEY = 'settings_privacy';
const DISPLAY_KEY = 'settings_display';

const defaultNotifications = {
  email: true,
  push: false,
  marketing: false,
  updates: true,
  security: true
};
const defaultPrivacy = {
  profileVisibility: 'public',
  dataCollection: true,
  analytics: true,
  thirdParty: false
};
const defaultDisplay = {
  fontSize: 'medium',
  animations: true,
  reducedMotion: false
};

const SettingsPage = () => {
  const { theme, setTheme, isDark } = useTheme();
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem(NOTIFICATIONS_KEY);
    return saved ? JSON.parse(saved) : defaultNotifications;
  });
  const [privacy, setPrivacy] = useState(() => {
    const saved = localStorage.getItem(PRIVACY_KEY);
    return saved ? JSON.parse(saved) : defaultPrivacy;
  });
  const [display, setDisplay] = useState(() => {
    const saved = localStorage.getItem(DISPLAY_KEY);
    return saved ? JSON.parse(saved) : defaultDisplay;
  });

  // Persist settings to localStorage
  useEffect(() => {
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  }, [notifications]);
  useEffect(() => {
    localStorage.setItem(PRIVACY_KEY, JSON.stringify(privacy));
  }, [privacy]);
  useEffect(() => {
    localStorage.setItem(DISPLAY_KEY, JSON.stringify(display));
  }, [display]);

  // Feedback toast
  const showToast = (msg: string) => toast(msg, { duration: 1200 });

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    showToast(`Theme set to ${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)}`);
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => {
      const updated = { ...prev, [key]: value };
      showToast('Notification settings updated');
      return updated;
    });
  };

  const handlePrivacyChange = (key: string, value: string | boolean) => {
    setPrivacy(prev => {
      const updated = { ...prev, [key]: value };
      showToast('Privacy settings updated');
      return updated;
    });
  };

  const handleDisplayChange = (key: string, value: string | boolean) => {
    setDisplay(prev => {
      const updated = { ...prev, [key]: value };
      showToast('Display settings updated');
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <SettingsIcon className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
                Settings
              </h1>
            </div>
            <p className="text-foreground/75 text-lg max-w-2xl mx-auto">
              Manage your account preferences and application settings
            </p>
          </div>

          <Tabs defaultValue="appearance" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Appearance
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Account
              </TabsTrigger>
            </TabsList>

            {/* Appearance Tab */}
            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Theme Settings
                  </CardTitle>
                  <CardDescription>
                    Customize the appearance of your application
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Theme Mode */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <Label className="text-base font-medium">Theme Mode</Label>
                      <p className="text-sm text-foreground/70 mb-4">
                        Choose your preferred theme mode
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        variant={theme === 'light' ? 'default' : 'outline'}
                        className="h-auto p-4 flex flex-col items-center gap-2"
                        onClick={() => handleThemeChange('light')}
                      >
                        <Sun className="h-6 w-6" />
                        <span>Light</span>
                        {theme === 'light' && <Badge variant="secondary">Active</Badge>}
                      </Button>
                      <Button
                        variant={theme === 'dark' ? 'default' : 'outline'}
                        className="h-auto p-4 flex flex-col items-center gap-2"
                        onClick={() => handleThemeChange('dark')}
                      >
                        <Moon className="h-6 w-6" />
                        <span>Dark</span>
                        {theme === 'dark' && <Badge variant="secondary">Active</Badge>}
                      </Button>
                      <Button
                        variant={theme === 'system' ? 'default' : 'outline'}
                        className="h-auto p-4 flex flex-col items-center gap-2"
                        onClick={() => handleThemeChange('system')}
                      >
                        <Monitor className="h-6 w-6" />
                        <span>System</span>
                        {theme === 'system' && <Badge variant="secondary">Active</Badge>}
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Display Settings */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <Label className="text-base font-medium">Display Settings</Label>
                      <p className="text-sm text-foreground/70 mb-4">
                        Customize your display preferences
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Font Size</Label>
                          <p className="text-sm text-foreground/70">
                            Adjust the text size across the application
                          </p>
                        </div>
                        <Select value={display.fontSize} onValueChange={(value) => handleDisplayChange('fontSize', value)}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Animations</Label>
                          <p className="text-sm text-foreground/70">
                            Enable smooth animations and transitions
                          </p>
                        </div>
                        <Switch
                          checked={display.animations}
                          onCheckedChange={(checked) => handleDisplayChange('animations', checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Reduced Motion</Label>
                          <p className="text-sm text-foreground/70">
                            Reduce motion for accessibility
                          </p>
                        </div>
                        <Switch
                          checked={display.reducedMotion}
                          onCheckedChange={(checked) => handleDisplayChange('reducedMotion', checked)}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>
                    Manage how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Email Notifications</Label>
                        <p className="text-sm text-foreground/70">
                          Receive important updates via email
                        </p>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Push Notifications</Label>
                        <p className="text-sm text-foreground/70">
                          Get instant notifications on your device
                        </p>
                      </div>
                      <Switch
                        checked={notifications.push}
                        onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Marketing Communications</Label>
                        <p className="text-sm text-foreground/70">
                          Receive promotional content and offers
                        </p>
                      </div>
                      <Switch
                        checked={notifications.marketing}
                        onCheckedChange={(checked) => handleNotificationChange('marketing', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Product Updates</Label>
                        <p className="text-sm text-foreground/70">
                          Stay informed about new features and improvements
                        </p>
                      </div>
                      <Switch
                        checked={notifications.updates}
                        onCheckedChange={(checked) => handleNotificationChange('updates', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Security Alerts</Label>
                        <p className="text-sm text-foreground/70">
                          Get notified about security-related events
                        </p>
                      </div>
                      <Switch
                        checked={notifications.security}
                        onCheckedChange={(checked) => handleNotificationChange('security', checked)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Privacy & Security
                  </CardTitle>
                  <CardDescription>
                    Control your privacy and security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Profile Visibility</Label>
                        <p className="text-sm text-foreground/70">
                          Control who can see your profile information
                        </p>
                      </div>
                      <Select value={privacy.profileVisibility} onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="friends">Friends Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Data Collection</Label>
                        <p className="text-sm text-foreground/70">
                          Allow us to collect usage data to improve the service
                        </p>
                      </div>
                      <Switch
                        checked={privacy.dataCollection}
                        onCheckedChange={(checked) => handlePrivacyChange('dataCollection', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Analytics</Label>
                        <p className="text-sm text-foreground/70">
                          Help us improve by sharing anonymous usage statistics
                        </p>
                      </div>
                      <Switch
                        checked={privacy.analytics}
                        onCheckedChange={(checked) => handlePrivacyChange('analytics', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">Third-party Services</Label>
                        <p className="text-sm text-foreground/70">
                          Allow integration with third-party services
                        </p>
                      </div>
                      <Switch
                        checked={privacy.thirdParty}
                        onCheckedChange={(checked) => handlePrivacyChange('thirdParty', checked)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Account Settings
                  </CardTitle>
                  <CardDescription>
                    Manage your account information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-border bg-muted/30">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                    </div>

                    <div className="p-4 rounded-lg border border-border bg-muted/30">
                      <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                      <Input id="username" placeholder="username" className="mt-2" />
                    </div>

                    <div className="p-4 rounded-lg border border-border bg-muted/30">
                      <Label htmlFor="language" className="text-sm font-medium">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="p-4 rounded-lg border border-border bg-muted/30">
                      <Label htmlFor="timezone" className="text-sm font-medium">Timezone</Label>
                      <Select defaultValue="utc">
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="est">Eastern Time</SelectItem>
                          <SelectItem value="pst">Pacific Time</SelectItem>
                          <SelectItem value="gmt">GMT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-center">Data Management</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Export Data
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Upload className="h-4 w-4" />
                        Import Data
                      </Button>
                    </div>
                    <div className="text-center">
                      <Button variant="destructive" className="flex items-center gap-2 mx-auto">
                        <Trash2 className="h-4 w-4" />
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 