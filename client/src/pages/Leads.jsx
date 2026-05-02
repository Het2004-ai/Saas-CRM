import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Mail, 
  Phone,
  Clock
} from 'lucide-react';

const columns = [
  { id: 'NEW', title: 'New Leads', color: 'bg-blue-500' },
  { id: 'CONTACTED', title: 'Contacted', color: 'bg-amber-500' },
  { id: 'QUALIFIED', title: 'Qualified', color: 'bg-emerald-500' },
  { id: 'NEGOTIATION', title: 'Negotiation', color: 'bg-purple-500' },
];

const initialLeads = [
  { id: 1, name: 'Alex Johnson', company: 'TechFlow Inc', value: '$12,000', status: 'NEW', lastActivity: '2h ago' },
  { id: 2, name: 'Sarah Miller', company: 'CloudScale', value: '$8,500', status: 'CONTACTED', lastActivity: '5h ago' },
  { id: 3, name: 'Michael Chen', company: 'GreenData', value: '$25,000', status: 'NEW', lastActivity: '1d ago' },
  { id: 4, name: 'Emma Wilson', company: 'SkyLine solutions', value: '$15,000', status: 'QUALIFIED', lastActivity: '3h ago' },
  { id: 5, name: 'James Brown', company: 'Nova Retail', value: '$5,200', status: 'NEGOTIATION', lastActivity: '2d ago' },
];

const LeadCard = ({ lead }) => (
  <div className="bg-slate-800/40 border border-white/5 p-4 rounded-2xl hover:bg-slate-800/60 transition-all cursor-grab active:cursor-grabbing group shadow-sm">
    <div className="flex items-start justify-between mb-3">
      <div>
        <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors">{lead.name}</h4>
        <p className="text-xs text-slate-500">{lead.company}</p>
      </div>
      <button className="text-slate-500 hover:text-white transition-colors">
        <MoreHorizontal size={16} />
      </button>
    </div>
    
    <div className="text-lg font-bold text-white mb-4">{lead.value}</div>
    
    <div className="flex items-center justify-between border-t border-white/5 pt-3">
      <div className="flex gap-2">
        <button className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:bg-primary-600 hover:text-white transition-all">
          <Mail size={14} />
        </button>
        <button className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:bg-primary-600 hover:text-white transition-all">
          <Phone size={14} />
        </button>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
        <Clock size={12} />
        {lead.lastActivity}
      </div>
    </div>
  </div>
);

const Leads = () => {
  const [leads, setLeads] = useState(initialLeads);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Lead Pipeline</h1>
          <p className="text-slate-400 mt-1">Manage and track your sales opportunities</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search leads..."
              className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none transition-all w-64"
            />
          </div>
          <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all">
            <Filter size={20} />
          </button>
          <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg shadow-primary-600/20">
            <Plus size={18} />
            Add Lead
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar min-h-[600px]">
        {columns.map(column => (
          <div key={column.id} className="flex-shrink-0 w-80 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${column.color}`}></div>
                <h3 className="font-semibold text-white">{column.title}</h3>
                <span className="bg-white/5 text-slate-400 text-xs px-2 py-0.5 rounded-full border border-white/5">
                  {leads.filter(l => l.status === column.id).length}
                </span>
              </div>
              <button className="text-slate-500 hover:text-white transition-colors">
                <Plus size={18} />
              </button>
            </div>
            
            <div className="flex-1 space-y-4 p-2 rounded-3xl bg-slate-900/40 border border-white/5">
              {leads
                .filter(l => l.status === column.id)
                .map(lead => (
                  <LeadCard key={lead.id} lead={lead} />
                ))
              }
              <button className="w-full py-3 rounded-2xl border border-dashed border-white/10 text-slate-500 hover:border-primary-500/50 hover:text-primary-400 transition-all text-sm font-medium">
                + Drop lead here
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leads;
