import React from 'react';
import { 
  Wifi, 
  Power, 
  Zap, 
  TriangleAlert, 
  Search, 
  Plus, 
  MoreVertical,
  Droplets,
  Thermometer,
  Sun,
  Radio,
  RefreshCw,
  Terminal
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const sensors = [
  { id: '#MS-9024', type: 'Moisture', location: 'Sector A-1', status: 'Online', value: '42.4%', time: '2 mins ago', icon: Droplets, color: 'primary' },
  { id: '#DH-1102', type: 'DHT22 (Temp/Hum)', location: 'Greenhouse 04', status: 'Online', value: '24.5°C', time: '5 mins ago', icon: Thermometer, color: 'secondary' },
  { id: '#MS-9025', type: 'Moisture', location: 'Sector A-1', status: 'Offline', value: 'N/A', time: '4 hours ago', icon: Droplets, color: 'error' },
  { id: '#LT-4001', type: 'Light Intensity', location: 'South Field', status: 'Online', value: '1200 lx', time: '10 mins ago', icon: Sun, color: 'tertiary' },
];

const logs = [
  { time: '14:22:01', msg: '[MQTT] CONNECT: sensor_ms9024_client', type: 'info' },
  { time: '14:22:05', msg: '{"topic": "tele/sector_a1/moisture", "payload": 42.4}', type: 'data' },
  { time: '14:23:05', msg: '{"topic": "tele/sector_a1/moisture", "payload": 42.4}', type: 'data' },
  { time: '14:24:05', msg: '{"topic": "tele/sector_a1/moisture", "payload": 42.3}', type: 'data' },
  { time: '14:24:10', msg: '[SYS] Watchdog: Keep-alive received', type: 'system' },
  { time: '14:25:05', msg: '{"topic": "tele/sector_a1/moisture", "payload": 42.4}', type: 'data' },
];

export default function Sensors() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-on-background">IoT Hardware Management</h1>
          <p className="text-on-surface-variant text-lg font-medium mt-1">Manage and monitor 42 active sensor deployments across all sectors.</p>
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all">
          <Plus size={20} />
          Add New Sensor
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-grow min-h-0">
        {/* Main Table */}
        <div className="flex-grow bg-surface-container-lowest rounded-[32px] border border-outline-variant overflow-hidden flex flex-col shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant">
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-[0.1em]">Sensor ID</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.1em]">Type</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.1em]">Location</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.1em]">Status</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.1em]">Last Reading</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-[0.1em]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {sensors.map((sensor, i) => (
                  <tr key={sensor.id} className={cn(
                    "group hover:bg-surface-container-low/50 transition-colors cursor-pointer",
                    i === 0 && "bg-primary-fixed/10 border-l-4 border-primary"
                  )}>
                    <td className={cn("px-8 py-6 font-bold", i === 0 ? "text-primary" : "text-on-surface")}>{sensor.id}</td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2 font-medium">
                        <sensor.icon size={18} className={cn(
                          sensor.color === 'primary' && "text-primary",
                          sensor.color === 'secondary' && "text-secondary",
                          sensor.color === 'tertiary' && "text-tertiary",
                          sensor.color === 'error' && "text-error",
                        )} />
                        {sensor.type}
                      </div>
                    </td>
                    <td className="px-6 py-6 text-on-surface-variant font-medium">{sensor.location}</td>
                    <td className="px-6 py-6">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center w-fit gap-2",
                        sensor.status === 'Online' ? "bg-primary-fixed text-primary" : "bg-error-container text-error"
                      )}>
                        <span className={cn("w-1.5 h-1.5 rounded-full shadow-sm", sensor.status === 'Online' ? "bg-primary animate-pulse" : "bg-error")} />
                        {sensor.status}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span className="font-bold text-on-surface">{sensor.value}</span>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter ml-2">{sensor.time}</span>
                    </td>
                    <td className="px-8 py-6">
                      <button className="p-2 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant opacity-50 group-hover:opacity-100">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Telemetry Panel */}
        <aside className="w-full lg:w-[400px] bg-surface-container-high rounded-[32px] border border-outline-variant shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary text-white rounded-xl">
                <Terminal size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-primary">Telemetry Stream</h3>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-0.5">ID: #MS-9024</p>
              </div>
            </div>
            <span className="px-2 py-0.5 bg-primary text-white text-[10px] rounded-full font-black animate-pulse">LIVE</span>
          </div>

          <div className="flex-grow p-6 font-mono text-[12px] overflow-y-auto space-y-3 bg-[#1b1c1c] text-[#9dd090] custom-scrollbar">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-4 group">
                <span className="text-on-surface-variant/40 shrink-0 select-none">{log.time}</span>
                <span className={cn(
                  log.type === 'info' && "text-white/60",
                  log.type === 'data' && "text-[#9dd090]",
                  log.type === 'system' && "text-primary-fixed-dim italic"
                )}>{log.msg}</span>
              </div>
            ))}
            <div className="p-3 border border-primary/20 rounded-xl bg-primary/10 text-primary-fixed-dim italic text-[11px] animate-pulse">
              Waiting for next packet...
            </div>
          </div>

          <div className="p-6 bg-surface-container border-t border-outline-variant">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Uptime</span>
                <span className="text-lg font-bold text-on-surface">14d 2h 12m</span>
              </div>
              <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Battery</span>
                <span className="text-lg font-bold text-on-surface">88%</span>
              </div>
            </div>
            <button className="w-full mt-6 py-4 px-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-sm active:scale-95">
              <RefreshCw size={16} />
              Restart Sensor Module
            </button>
          </div>
        </aside>
      </div>

      {/* Summary Footer */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Online Hubs', value: '12 / 12', icon: Wifi, color: 'primary' },
          { label: 'Total Sensors', value: '42', icon: Power, color: 'secondary' },
          { label: 'Active Jobs', value: '5', icon: Zap, color: 'tertiary' },
          { label: 'Hardware Alerts', value: '2', icon: TriangleAlert, color: 'error' },
        ].map((stat, i) => (
          <div key={stat.label} className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 flex items-center gap-5 shadow-sm hover:translate-y-[-2px] transition-transform">
            <div className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center shadow-inner",
              stat.color === 'primary' && "bg-primary-fixed text-primary",
              stat.color === 'secondary' && "bg-secondary-fixed text-secondary",
              stat.color === 'tertiary' && "bg-tertiary-fixed text-tertiary",
              stat.color === 'error' && "bg-error-container text-error",
            )}>
              <stat.icon size={26} />
            </div>
            <div>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
              <h4 className={cn("text-2xl font-black mt-0.5", stat.color === 'error' ? "text-error" : "text-primary")}>{stat.value}</h4>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
