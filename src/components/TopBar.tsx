import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="flex justify-between items-center px-8 h-16 w-full bg-surface-container-low sticky top-0 z-40">
      <div className="flex items-center gap-6 w-1/2">
        <h1 className="text-xl font-bold text-primary whitespace-nowrap">AgriPulse Smart Farm</h1>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
          <input 
            className="w-full bg-background h-10 pl-10 pr-4 rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all"
            placeholder="Search farm metrics..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 pr-4 border-r border-outline-variant">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors active:scale-95">
            <Bell size={20} />
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors active:scale-95">
            <Settings size={20} />
          </button>
        </div>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-bold text-on-surface leading-none">David Greene</p>
            <p className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider mt-1">Senior Agronomist</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed shadow-sm transition-transform group-hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=200&h=200&auto=format&fit=crop" 
              alt="David Greene"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
