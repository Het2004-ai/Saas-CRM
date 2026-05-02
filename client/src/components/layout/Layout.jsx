import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Activity, 
  Settings, 
  LogOut, 
  Layers,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Leads', icon: <Users size={20} />, path: '/leads' },
    { name: 'Deals', icon: <Briefcase size={20} />, path: '/deals' },
    { name: 'Activities', icon: <Activity size={20} />, path: '/activities' },
  ];

  return (
    <aside className="w-64 glass h-screen flex flex-col border-r border-white/5 sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary-600 p-2 rounded-lg shadow-lg shadow-primary-600/20">
          <Layers className="text-white" size={24} />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">SaaS CRM</span>
      </div>

      <nav className="flex-1 px-4 mt-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              flex items-center justify-between px-4 py-3 rounded-xl transition-all group
              ${isActive 
                ? 'bg-primary-600/10 text-primary-400 border border-primary-500/20' 
                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}
            `}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </div>
            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="bg-white/5 rounded-2xl p-4 mb-4">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Account</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-indigo-500 flex items-center justify-center text-white font-bold">
              {user?.name?.[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-200 truncate">{user?.name}</p>
              <p className="text-xs text-slate-500 truncate capitalize">{user?.role}</p>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all group"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-slate-200">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/5 glass z-10 sticky top-0">
          <h2 className="text-lg font-semibold text-white">Workspace Overview</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm font-medium border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Status
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto animate-slide-up">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
