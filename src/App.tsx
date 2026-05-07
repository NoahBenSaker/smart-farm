import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import AIHealth from './pages/AIHealth';
import Sensors from './pages/Sensors';
import Alerts from './pages/Alerts';
import LandingPage from './pages/LandingPage';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'health':
        return <AIHealth />;
      case 'sensors':
        return <Sensors />;
      case 'alerts':
        return <Alerts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary-fixed selection:text-primary">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onLogin={handleLogin} />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex min-h-screen"
          >
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
            
            <main className="flex-1 min-h-screen flex flex-col ml-64">
              <TopBar />
              
              {/* Content Area */}
              <div className="p-8 pb-20 custom-scrollbar overflow-y-auto h-[calc(100vh-64px)]">
                <div className="max-w-7xl mx-auto">
                  {renderContent()}
                </div>
              </div>
            </main>

            {/* Aesthetic gradients for background depth */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full -mr-[400px] -mt-[400px] blur-[150px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 left-[256px] w-[600px] h-[600px] bg-tertiary/5 rounded-full -ml-[300px] -mb-[300px] blur-[120px] pointer-events-none -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
