import React from 'react';
import { 
  TriangleAlert, 
  AlertCircle, 
  Info, 
  CheckCircle2, 
  Calendar, 
  Filter,
  ChevronDown,
  Sparkles,
  Thermometer,
  Microscope
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const alerts = [
  { id: 1, type: 'critical', title: 'Critical: Soil Moisture at 12% in Sector B-3', time: '2 mins ago', desc: 'Moisture levels have dropped below the safety threshold of 25%. This may lead to crop stress in Sector B-3 (Tomato Cultivation Zone).', actions: ['Emergency Irrigation', 'Dismiss'], icon: AlertCircle },
  { id: 2, type: 'warning', title: 'Sensor 04 Offline', time: '15 mins ago', desc: 'Connectivity lost with Sensor ID: SN-04-A12. Last heartbeat recorded at 08:42 AM. Data packets are currently inconsistent.', actions: ['Restart Sensor', 'View Log'], icon: TriangleAlert },
  { id: 3, type: 'info', title: 'Pump Toggle Successful', time: '1 hour ago', desc: 'System confirmed automated shutdown of Irrigation Pump A-01 following the completion of the morning schedule.', actions: ['Archive'], icon: CheckCircle2 },
  { id: 4, type: 'warning', title: 'High Temperature Warning', time: '3 hours ago', desc: 'Ambient temperature in Sector C-2 reached 38°C. Shade sails have been deployed automatically.', actions: ['View Full Report'], icon: Thermometer },
  { id: 5, type: 'info', title: 'AI Observation: Growth Patterns', time: '5 hours ago', desc: 'Sector A-05 demonstrates unusual biomass expansion. Predictive models suggest earlier harvest timeline.', actions: ['Inspect'], icon: Microscope },
];

export default function Alerts() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-on-surface">System Alerts</h1>
          <p className="text-xl text-on-surface-variant font-medium mt-1">Real-time status monitoring for GreenField Sector A-12.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative group">
            <select className="appearance-none bg-surface-container-lowest border border-outline-variant rounded-2xl px-6 py-3 pr-12 font-bold text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer transition-all">
              <option>All Severities</option>
              <option>Critical</option>
              <option>Warning</option>
              <option>Info</option>
            </select>
            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant group-hover:text-primary transition-colors" />
          </div>
          <div className="relative group">
            <input 
              readOnly
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl px-6 py-3 pr-12 font-bold text-sm outline-none cursor-pointer group-hover:border-primary transition-all" 
              placeholder="Select Date Range" 
              value="Last 24 Hours" 
            />
            <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-hover:text-primary transition-colors" />
          </div>
          <button className="flex items-center gap-2 bg-secondary-container text-primary px-6 py-3 rounded-full font-bold hover:brightness-95 transition-all shadow-sm active:scale-95">
            <Filter size={18} />
            Apply Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Stats Column */}
        <div className="lg:col-span-3 flex flex-col gap-8 sticky top-24">
          <div className="bg-surface-container-lowest p-8 rounded-[32px] shadow-sm border border-outline-variant">
            <h4 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6">System Health</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Critical', count: 1, bg: 'bg-error-container/30', text: 'text-error', chipBg: 'bg-error' },
                { label: 'Warnings', count: 2, bg: 'bg-tertiary-fixed/30', text: 'text-tertiary', chipBg: 'bg-tertiary' },
                { label: 'Info', count: 12, bg: 'bg-secondary-container/30', text: 'text-secondary', chipBg: 'bg-primary' },
              ].map((item) => (
                <div key={item.label} className={cn("flex justify-between items-center p-4 rounded-2xl transition-all hover:scale-105", item.bg)}>
                  <span className={cn("text-sm font-bold", item.text)}>{item.label}</span>
                  <span className={cn("text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-sm", item.chipBg)}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-container p-8 rounded-[32px] shadow-lg text-white relative overflow-hidden group">
            <Sparkles className="absolute top-4 right-4 opacity-20 group-hover:rotate-12 transition-transform" size={48} />
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">AI Insight</span>
            </div>
            <p className="text-base font-medium italic leading-relaxed relative z-10">
              "High moisture loss detected in B-3. Probability of pump failure is 12%. Recommend manual inspection."
            </p>
          </div>

          <div className="h-48 bg-surface-container-high rounded-[32px] relative overflow-hidden shadow-inner border border-outline-variant group">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800" 
              alt="Sector Map" 
              className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 text-white">
                <div className="w-2 h-2 rounded-full bg-error animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest">Live: Sector B-3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Feed Column */}
        <div className="lg:col-span-9 flex flex-col gap-4">
          {alerts.map((alert, i) => (
            <motion.div 
              key={alert.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group bg-surface-container-lowest border-l-8 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all flex items-start gap-8 border border-outline-variant",
                alert.type === 'critical' ? "border-l-error" : 
                alert.type === 'warning' ? "border-l-tertiary" : "border-l-primary"
              )}
            >
              <div className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-inner",
                alert.type === 'critical' ? "bg-error-container text-error" : 
                alert.type === 'warning' ? "bg-tertiary-fixed text-tertiary" : "bg-primary-fixed text-primary"
              )}>
                <alert.icon size={28} />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-on-background">{alert.title}</h3>
                  <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{alert.time}</span>
                </div>
                <p className="text-base font-medium text-on-surface-variant mb-8 leading-relaxed max-w-2xl">{alert.desc}</p>
                
                <div className="flex gap-3">
                  {alert.actions.map((action, idx) => (
                    <button 
                      key={idx}
                      className={cn(
                        "px-6 py-2 rounded-full text-xs font-bold transition-all active:scale-95",
                        idx === 0 
                          ? (alert.type === 'critical' ? "bg-error text-white shadow-md hover:brightness-110" : 
                             alert.type === 'warning' ? "bg-tertiary text-white shadow-md hover:brightness-110" : "bg-primary text-white shadow-md hover:brightness-110")
                          : "border border-outline-variant text-on-surface hover:bg-surface-container"
                      )}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <button className="w-full py-8 border-2 border-dashed border-outline-variant rounded-[24px] text-on-surface-variant font-bold text-sm uppercase tracking-[0.2em] hover:bg-surface-container hover:border-primary/50 transition-all active:scale-98">
            Load Older Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
