import React from 'react';
import { 
  LayoutDashboard, 
  Brain, 
  Radio, 
  BellRing, 
  Sprout, 
  HelpCircle, 
  LogOut,
  RefreshCw
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const navItems = [
  { id: 'dashboard', label: 'Farm Overview', icon: LayoutDashboard },
  { id: 'health', label: 'AI Health', icon: Brain },
  { id: 'sensors', label: 'Sensors', icon: Radio },
  { id: 'alerts', label: 'Alerts', icon: BellRing },
];

export default function Sidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container flex flex-col p-6 gap-2 shadow-sm z-50">
      <div className="flex items-center gap-3 mb-10 px-1">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
          <Sprout size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary leading-none">GreenField Labs</h2>
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mt-1">Sector A-12</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 active:scale-98",
              activeTab === item.id 
                ? "bg-primary-fixed text-on-primary-fixed font-semibold" 
                : "text-on-secondary-fixed-variant hover:bg-secondary-fixed-dim"
            )}
          >
            <item.icon size={20} className={activeTab === item.id ? "fill-current" : ""} />
            <span className="text-base">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-4 pt-6 border-t border-outline-variant">
        <button className="w-full py-3 bg-primary text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors active:scale-95 shadow-md">
          <RefreshCw size={18} />
          Sync Hardware
        </button>
        
        <div className="space-y-1">
          <button className="flex items-center gap-3 w-full px-4 py-2 text-on-surface-variant hover:text-primary transition-colors">
            <HelpCircle size={20} />
            <span className="text-sm">Support</span>
          </button>
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 w-full px-4 py-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <LogOut size={20} />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
