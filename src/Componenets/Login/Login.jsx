
function Login() {
    
    return ( 
       <div className="bg-slate-950 flex items-center justify-center min-h-screen p-4">
      
      {/* Login Card Container */}
      <div className="bg-gray-400 w-full max-w-md rounded-xl shadow-md p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Please sign in to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"                            
              placeholder="you@example.com" 
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="••••••••" 
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600 cursor-pointer">
              <input 
                type="checkbox" 
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" 
              />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-sm transition duration-200 shadow-sm cursor-pointer"
          >
            Sign In
          </button>

        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Sign up
          </a>
        </p>

      </div>

    </div>
  );
}

export default Login;