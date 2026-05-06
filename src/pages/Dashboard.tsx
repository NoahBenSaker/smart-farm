import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Droplets, 
  Thermometer, 
  Cloud, 
  CalendarDays, 
  Brain, 
  Bug, 
  Info,
  TriangleAlert,
  Plus
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const data = [
  { time: '00:00', moisture: 25, temp: 22 },
  { time: '04:00', moisture: 28, temp: 21 },
  { time: '08:00', moisture: 26, temp: 23 },
  { time: '12:00', moisture: 32, temp: 25 },
  { time: '16:00', moisture: 28, temp: 26 },
  { time: '20:00', moisture: 30, temp: 24 },
  { time: '23:59', moisture: 28, temp: 23 },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="grid grid-cols-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-12 lg:col-span-8 bg-primary-container text-white rounded-[32px] p-10 flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden"
        >
          <div className="z-10 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2">Daily Operations</h2>
            <p className="text-lg opacity-90 max-w-md">The irrigation system is currently dormant based on soil moisture levels in Sector A-12.</p>
          </div>
          <div className="z-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-6 mt-6 md:mt-0">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">Irrigation Pump</span>
              <span className="text-2xl font-bold leading-none mt-1">Status: OFF</span>
            </div>
            <div className="w-14 h-8 bg-black/20 rounded-full relative p-1 cursor-pointer">
              <div className="w-6 h-6 bg-white rounded-full transition-all" />
            </div>
          </div>
          {/* Abstract background blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full -ml-10 -mb-10 blur-2xl" />
        </motion.div>

        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Next Harvest Window</p>
              <h3 className="text-4xl font-bold text-primary mt-1">12 Days</h3>
            </div>
            <div className="bg-secondary-container p-3 rounded-2xl text-primary">
              <CalendarDays size={24} />
            </div>
          </div>
          <div className="space-y-3 mt-6">
            <div className="flex justify-between items-end">
              <span className="text-on-surface-variant text-sm font-medium">Crop Maturation</span>
              <span className="text-primary font-bold">82%</span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-3">
              <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: '82%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Droplets, label: 'Soil Moisture', value: '28%', sub: 'Optimal', change: '+2.4%', color: 'primary' },
          { icon: Thermometer, label: 'Ambient Temp', value: '24°C', sub: 'Stable', change: '-1°C', color: 'tertiary' },
          { icon: Cloud, label: 'Humidity', value: '65%', sub: 'Moderate', change: 'Stable', color: 'secondary' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest border border-outline-variant p-6 rounded-[24px] shadow-sm hover:shadow-md transition-all cursor-default group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={cn(
                "p-3 rounded-2xl",
                stat.color === 'primary' && "bg-primary-fixed text-primary",
                stat.color === 'tertiary' && "bg-tertiary-fixed text-tertiary",
                stat.color === 'secondary' && "bg-secondary-fixed text-secondary",
              )}>
                <stat.icon size={24} />
              </div>
              <span className={cn(
                "text-xs font-bold px-2 py-1 rounded-full",
                stat.color === 'primary' && "text-primary",
                stat.color === 'tertiary' && "text-tertiary",
                stat.color === 'secondary' && "text-secondary",
              )}>{stat.change} vs avg</span>
            </div>
            <p className="text-on-surface-variant text-sm font-semibold">{stat.label}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <span className="text-on-surface-variant text-sm font-medium">{stat.sub}</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-6">
        {/* Trends Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-[32px] p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-primary">Soil Health Trends</h3>
              <p className="text-sm text-on-surface-variant font-medium">Real-time tracking of moisture and temperature across 24h.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-bold text-on-surface-variant uppercase">Moisture %</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-tertiary" />
                <span className="text-xs font-bold text-on-surface-variant uppercase">Temp °C</span>
              </div>
              <select className="bg-surface-container border-none text-xs font-bold rounded-xl py-2 px-4 focus:ring-1 focus:ring-primary">
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
              </select>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="moisture" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="time" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#72796e' }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    fontSize: '12px',
                    fontWeight: 700
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="moisture" 
                  stroke="var(--color-primary)" 
                  fillOpacity={1} 
                  fill="url(#moisture)" 
                  strokeWidth={3}
                />
                <Area 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="var(--color-tertiary)" 
                  fill="none" 
                  strokeWidth={3}
                  strokeDasharray="6 6"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-outline-variant/30">
            <div className="bg-surface-container-low p-4 rounded-2xl border-l-4 border-primary">
              <span className="text-xs font-bold text-primary uppercase">Expert Insight</span>
              <p className="text-sm text-on-surface-variant font-medium mt-1">Moisture retention is performing 12% better than last season's benchmark.</p>
            </div>
            <div className="bg-tertiary-fixed/20 p-4 rounded-2xl border-l-4 border-tertiary">
              <span className="text-xs font-bold text-tertiary uppercase">Maintenance Notice</span>
              <p className="text-sm text-on-surface-variant font-medium mt-1">Predictive model suggests pump activation might be needed at 04:00 tomorrow.</p>
            </div>
          </div>
        </div>

        {/* Sidebar Data: Health & Alerts */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-[32px] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">AI Health Analysis</h3>
              <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-[10px] font-bold uppercase">Processing</span>
            </div>
            <div className="space-y-6">
              {[
                { icon: Brain, title: 'Leaf Pigment Analysis', desc: 'Neural networks have identified 94% optimal chlorophyll levels.' },
                { icon: Bug, title: 'Pest Risk Detection', desc: 'Low probability of aphid activity. Current environment is unfavorable.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-surface-container-low transition-colors group">
                  <div className="bg-surface-container-high p-3 rounded-xl text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant font-medium leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-[32px] p-6 shadow-sm flex-grow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Recent Alerts</h3>
              <button className="text-primary text-[10px] font-bold uppercase tracking-wider hover:underline">Clear All</button>
            </div>
            <div className="space-y-3">
              <div className="bg-error-container/20 border-l-4 border-error p-3 rounded-r-2xl flex gap-3 items-center">
                <TriangleAlert className="text-error" size={18} />
                <div className="flex-1">
                  <p className="text-xs font-bold text-on-error-container">Gateway Offline</p>
                  <p className="text-[10px] text-on-error-container/70 font-bold uppercase">Sub-sector B-04 · 12m ago</p>
                </div>
              </div>
              <div className="bg-surface-container-highest/30 border-l-4 border-outline-variant p-3 rounded-r-2xl flex gap-3 items-center opacity-60">
                <Info className="text-on-surface-variant" size={18} />
                <div className="flex-1">
                  <p className="text-xs font-bold text-on-surface-variant">System Sync Completed</p>
                  <p className="text-[10px] text-on-surface-variant/70 font-bold uppercase">Auto-sync · 2h ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
        <Plus size={32} />
        <span className="absolute right-20 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">Add New Measurement</span>
      </button>
    </div>
  );
}
