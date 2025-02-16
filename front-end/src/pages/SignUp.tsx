import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

export function SignUp() {
  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect to dashboard after successful sign up
    } catch (error) {
      console.error('Error signing up with Google:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-cyan-100">Start your entrepreneurial journey today</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={signUpWithGoogle}
            className="w-full flex items-center justify-center px-4 py-3 border border-cyan-500/50 rounded-lg text-cyan-100 hover:bg-cyan-950/50 transition-all group"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-3" />
            Sign up with Google
          </button>
          
          <div className="text-center">
            <p className="text-cyan-100">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-cyan-400 hover:text-cyan-300">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}