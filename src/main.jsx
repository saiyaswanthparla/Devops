import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, Bell, CreditCard, HeartPulse, Home, Package, ShoppingCart, Users, Wallet, Menu } from 'lucide-react';
import './styles.css';

const data = {
  Overview: { revenue: '$84,240', orders: '1,284', patients: '842', balance: '$32,680' },
  Health: { revenue: '$42,180', orders: '684', patients: '1,248', balance: '$18,420' },
  Commerce: { revenue: '$84,240', orders: '1,284', patients: '—', balance: '$32,680' },
  Finance: { revenue: '$126,520', orders: '2,041', patients: '—', balance: '$68,940' }
};

function App() {
  const [active, setActive] = useState('Overview');
  const [menuOpen, setMenuOpen] = useState(false);
  const d = data[active];

  return (
    <div className="app">
      <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
        <div className="brand"><Activity size={25}/> Nexus<span>Dash</span></div>
        <nav>
          {[
            ['Overview', Home], ['Health', HeartPulse], ['Commerce', ShoppingCart], ['Finance', Wallet]
          ].map(([name, Icon]) => (
            <button className={active === name ? 'nav active' : 'nav'} onClick={() => {setActive(name); setMenuOpen(false)}} key={name}>
              <Icon size={19}/>{name}
            </button>
          ))}
        </nav>
        <div className="sidebar-card">
          <div className="mini-icon"><Users size={17}/></div>
          <strong>Team workspace</strong>
          <p>Manage your dashboard data and workflows.</p>
        </div>
      </aside>

      <main>
        <header>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}><Menu/></button>
          <div>
            <h1>{active} Dashboard</h1>
            <p>Monitor your key metrics in one place.</p>
          </div>
          <div className="header-actions"><button className="icon-btn"><Bell size={19}/></button><div className="avatar">TJ</div></div>
        </header>

        <section className="cards">
          <Metric title="Total Revenue" value={d.revenue} change="+12.8%" icon={<Wallet/>}/>
          <Metric title="Orders / Visits" value={d.orders} change="+8.4%" icon={<Package/>}/>
          <Metric title="Active Users" value={d.patients} change="+5.2%" icon={<Users/>}/>
          <Metric title="Available Balance" value={d.balance} change="+3.7%" icon={<CreditCard/>}/>
        </section>

        <section className="grid">
          <div className="panel chart-panel">
            <div className="panel-head"><div><h2>Performance</h2><p>Monthly activity overview</p></div><select><option>Last 6 months</option></select></div>
            <div className="chart">
              {[42,58,49,71,63,86,77,92,73,88,96,81].map((h,i)=><div className="bar-wrap" key={i}><div className="bar" style={{height: `${h}%`}}></div><small>{['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]}</small></div>)}
            </div>
          </div>
          <div className="panel">
            <div className="panel-head"><div><h2>Recent Activity</h2><p>Latest updates</p></div></div>
            <ActivityRow icon={<ShoppingCart/>} title="New order completed" sub="Order #ORD-1048" amount="+$240"/>
            <ActivityRow icon={<HeartPulse/>} title="Health consultation" sub="Patient #PT-284" amount="$120"/>
            <ActivityRow icon={<CreditCard/>} title="Payment received" sub="Invoice #INV-582" amount="+$890"/>
            <ActivityRow icon={<Package/>} title="Product shipped" sub="Order #ORD-1039" amount="$64"/>
          </div>
        </section>

        <section className="panel table-panel">
          <div className="panel-head"><div><h2>Transactions</h2><p>Recent financial and commerce records</p></div><button className="outline">View all</button></div>
          <table><thead><tr><th>Reference</th><th>Category</th><th>Status</th><th>Date</th><th>Amount</th></tr></thead>
          <tbody>
            <tr><td>#TXN-2084</td><td>Commerce</td><td><span className="status success">Completed</span></td><td>Sep 11, 2026</td><td>$1,240.00</td></tr>
            <tr><td>#TXN-2083</td><td>Healthcare</td><td><span className="status success">Completed</span></td><td>Sep 10, 2026</td><td>$420.00</td></tr>
            <tr><td>#TXN-2082</td><td>Finance</td><td><span className="status pending">Pending</span></td><td>Sep 09, 2026</td><td>$2,180.00</td></tr>
          </tbody></table>
        </section>
      </main>
    </div>
  );
}

function Metric({title,value,change,icon}) {
  return <div className="metric"><div className="metric-top"><div className="metric-icon">{icon}</div><span className="change">{change}</span></div><p>{title}</p><h3>{value}</h3></div>
}
function ActivityRow({icon,title,sub,amount}) {
  return <div className="activity"><div className="activity-icon">{icon}</div><div className="activity-text"><strong>{title}</strong><small>{sub}</small></div><b>{amount}</b></div>
}
createRoot(document.getElementById('root')).render(<App />);