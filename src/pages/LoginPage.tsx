
const LoginPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <div className="w-full max-w-md px-4">
      <h1 className="text-4xl font-bold mb-8 text-metadesk-purple text-center">
        Welcome Back
      </h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <p className="text-lg text-gray-600 text-center">
          Login functionality coming soon
        </p>
        <button className="w-full bg-metadesk-purple text-white rounded-lg px-6 py-3 font-medium hover:bg-metadesk-dark-purple transition-colors" disabled>
          Demo Login
        </button>
        <p className="text-sm text-muted-foreground text-center mt-4">
          To enable real login, connect Supabase from the top right of the editor.
        </p>
      </div>
    </div>
  </div>
);

export default LoginPage;
