import React, { useState } from 'react';
import { 
  CloudUpload, 
  FileCheck, 
  Activity, 
  Info, 
  ChevronRight,
  ArrowRight,
  Stethoscope
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const history = [
  { id: 1, title: 'Late Blight', date: 'Oct 12, 2023', status: 'Infected', severity: 'error', location: 'Section A-12', img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=200&h=200' },
  { id: 2, title: 'Healthy', date: 'Oct 10, 2023', status: 'Optimal', severity: 'success', location: 'Section B-03', img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=200&h=200' },
  { id: 3, title: 'Powdery Mildew', date: 'Oct 08, 2023', status: 'Alert', severity: 'warning', location: 'Section C-01', img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=200' },
  { id: 4, title: 'Spider Mites', date: 'Oct 05, 2023', status: 'Infected', severity: 'error', location: 'Section A-05', img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=200' },
];

export default function AIHealth() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold text-primary">Plant Health Diagnosis</h1>
        <p className="text-xl text-on-surface-variant font-medium">Upload images for instant AI-powered disease detection and treatment plans.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Upload Zone */}
        <section className="lg:col-span-7 h-full">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-[32px] p-8 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-on-surface">AI Analysis</h3>
              <span className="bg-secondary-container text-primary font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Ready to Scan</span>
            </div>
            
            <div 
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              className={cn(
                "flex-1 border-2 border-dashed rounded-[24px] bg-background flex flex-col items-center justify-center p-12 text-center relative overflow-hidden transition-all group cursor-pointer",
                isDragging ? "border-primary bg-primary-fixed/20" : "border-primary-fixed-dim hover:border-primary hover:bg-surface"
              )}
            >
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800" 
                  alt="Pattern" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <CloudUpload size={40} />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2">Drag and drop plant leaf image</h4>
                <p className="text-on-surface-variant text-base font-medium mb-8 max-w-sm">Support for JPG, PNG images. Please ensure clear lighting and centered leaf placement.</p>
                <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-primary-container transition-all active:scale-95">
                  Browse Files
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Result Panel */}
        <section className="lg:col-span-5 h-full">
          <div className="bg-primary-container text-white rounded-[32px] p-8 shadow-md h-full flex flex-col">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <FileCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold">Analysis Result</h3>
            </div>

            <div className="flex-1 space-y-10">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70 mb-4">Detected Disease</p>
                <div className="flex justify-between items-end">
                  <h2 className="text-4xl font-bold leading-none">Late Blight</h2>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold">94%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Confidence</span>
                  </div>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full mt-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '94%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-white h-full rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg mt-1"><Stethoscopre size={18} /></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">Recommendation</p>
                    <p className="text-lg font-bold text-primary-fixed mt-0.5">Apply organic fungicide and prune affected leaves</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg mt-1"><Activity size={18} /></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">Risk Level</p>
                    <p className="text-base font-medium text-white/90 leading-relaxed">High - Requires immediate intervention to prevent spreading to Section B-04.</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-white text-primary py-5 rounded-2xl font-bold shadow-xl mt-auto hover:bg-background transition-all active:scale-95">
                Generate Full Report (PDF)
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* History */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-on-surface">Analysis History</h3>
          <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline group">
            View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {history.map((card, i) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-outline-variant rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="h-40 w-full relative overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className={cn(
                  "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white",
                  card.severity === 'error' ? "bg-error" : 
                  card.severity === 'success' ? "bg-primary" : "bg-tertiary"
                )}>
                  {card.status}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-on-surface mb-1">{card.title}</h4>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-6">{card.date}</p>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">{card.location}</span>
                  <ChevronRight size={18} className="text-on-surface-variant group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Fixed typo in icon component usage
function Stethoscopre(props: any) {
  return <Stethoscope {...props} />
}
