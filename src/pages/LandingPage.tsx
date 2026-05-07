import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, ArrowRight, Mail, Lock, User, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface LandingPageProps {
  onLogin: () => void;
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, logic goes here. For now, we simulate success.
    onLogin();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden selection:bg-primary-fixed selection:text-primary">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full -mr-[500px] -mt-[500px] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-tertiary/5 rounded-full -ml-[400px] -mb-[400px] blur-[150px] pointer-events-none" />
      
      {/* Abstract Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#154212 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Brand & Value Prop */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:flex flex-col"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
              <Sprout size={32} />
            </div>
            <h1 className="text-4xl font-black text-primary tracking-tight">GreenField Labs</h1>
          </div>

          <h2 className="text-6xl font-black text-on-background leading-[1.1] mb-8">
            Precision farming <br />
            <span className="text-secondary">powered by AI.</span>
          </h2>

          <p className="text-xl text-on-surface-variant font-medium mb-12 max-w-md leading-relaxed">
            Monitor soil health, diagnose plant diseases, and optimize your yield with our next-generation IoT platform.
          </p>

          <div className="space-y-6">
            {[
              "Real-time sensor telemetry across all sectors",
              "AI-powered disease detection via leaf imaging",
              "Predictive maturation & harvest modeling"
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex items-center gap-3 text-on-surface font-bold"
              >
                <div className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-outline-variant/30 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-surface-container">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-on-surface-variant">
              Trusted by <span className="text-primary">1,200+</span> modern farms worldwide.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Auth Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface-container-lowest border border-outline-variant p-10 md:p-12 rounded-[40px] shadow-2xl relative"
        >
          <div className="mb-10 text-center lg:text-left">
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                <Sprout size={22} />
              </div>
              <h1 className="text-2xl font-black text-primary">GreenField</h1>
            </div>
            <h3 className="text-3xl font-black text-on-background mb-2">
              {isLogin ? 'Welcome Back' : 'Join the Future'}
            </h3>
            <p className="text-on-surface-variant font-medium">
              {isLogin ? 'Enter your credentials to access your farm dashboard.' : 'Start optimizing your yield with precision AI tools.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-black text-on-surface-variant uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text" 
                    required
                    placeholder="Agronomist Name"
                    className="w-full bg-background border border-outline-variant h-14 pl-12 pr-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@greenfield.labs"
                  className="w-full bg-background border border-outline-variant h-14 pl-12 pr-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-black text-on-surface-variant uppercase tracking-widest">Password</label>
                {isLogin && (
                  <button type="button" className="text-[10px] font-black text-primary uppercase tracking-wider hover:underline">Forgot Password?</button>
                )}
              </div>
              <div className="relative group">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-background border border-outline-variant h-14 pl-12 pr-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-white h-14 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary-container transition-all active:scale-[0.98] mt-4"
            >
              {isLogin ? 'Access Dashboard' : 'Create Farm Account'}
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-outline-variant/50"></div>
              <span className="flex-shrink mx-4 text-xs font-black text-on-surface-variant uppercase tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-outline-variant/50"></div>
            </div>

            <div className="mt-4">
              <button className="w-full flex items-center justify-center gap-3 h-14 border border-outline-variant rounded-2xl hover:bg-surface transition-all active:scale-95 group">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider text-on-surface">Continue with Google</span>
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm font-bold text-on-surface-variant">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary ml-2 hover:underline inline-flex items-center gap-1"
            >
              {isLogin ? 'Register New Farm' : 'Login'}
              <ChevronRight size={14} />
            </button>
          </p>
        </motion.div>
      </div>

      {/* Decorative Image in Background (Optional blur effect) */}
      <div className="fixed bottom-0 right-0 w-1/3 aspect-video bg-primary/10 rounded-tl-[100px] blur-3xl -z-10" />
    </div>
  );
}
