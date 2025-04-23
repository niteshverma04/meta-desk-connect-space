
const LoginPage = () => (
  <div className="container mx-auto py-12 flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-4 text-metadesk-purple">Login</h1>
    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md flex flex-col items-center space-y-3">
      {/* You can replace this section with Supabase/Clerk auth once connected */}
      <p className="text-gray-600 mb-4">Login functionality coming soon.</p>
      <button className="bg-metadesk-purple text-white rounded px-6 py-2 font-medium" disabled>
        Demo Login
      </button>
    </div>
    <p className="text-muted-foreground mt-6 text-sm">
      To enable real login, connect Supabase from the top right of the editor.
    </p>
  </div>
);

export default LoginPage;
