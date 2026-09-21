import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Home, Heart, Images, Star, MessageSquareHeart, CalendarHeart, Target, Gift, Menu, X, ArrowRight, Sparkles} from 'lucide-react';
import './styles.css';

const sections = [
  ['Home', Home], ['Our Story', Heart], ['Gallery', Images], ['Reasons I Love You', Star],
  ['Love Notes', MessageSquareHeart], ['Special Moments', CalendarHeart], ['Future Plans', Target], ['For You', Gift]
];

const content = {
  'Our Story': ['Our Story', 'Every beautiful story has a beginning. This space is for the little moments, memories, and milestones that made our journey special.'],
  'Gallery': ['Our Gallery', 'A home for favorite photos and memories. Add more pictures here whenever you want to keep a moment close.'],
  'Reasons I Love You': ['Reasons I Love You', 'Your smile, your kindness, your presence, the way ordinary days feel special — and countless little reasons that are impossible to number.'],
  'Love Notes': ['Love Notes', 'A place for words from the heart — short messages, long letters, silly thoughts, and reminders of how much you mean to me.'],
  'Special Moments': ['Special Moments', 'Birthdays, firsts, surprises, quiet evenings and unforgettable days — every meaningful date can live here.'],
  'Future Plans': ['Our Future', 'More memories, more adventures, more laughter, and many beautiful chapters still waiting to be written.'],
  'For You': ['For You, Chinnu', 'No grand reason is needed. This entire little application is simply a reminder: Love You Chinnu — today, tomorrow, and always. ❤️']
};

function App(){
  const [active,setActive]=useState('Home');
  const [open,setOpen]=useState(false);
  const go=(name)=>{setActive(name);setOpen(false)};
  return <div className="app">
    <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    <aside className={open?'sidebar open':'sidebar'}>
      <div className="brand"><span className="heartLogo">♥</span><div><b>My Love</b><small>Just You & Me 💕</small></div></div>
      <nav>{sections.map(([name,Icon])=><button key={name} onClick={()=>go(name)} className={active===name?'active':''}><Icon size={20}/><span>{name}</span></button>)}</nav>
      <blockquote>“Some people make the world more special just by being in it.”<span>♥</span></blockquote>
    </aside>

    <main>
      <div className="photoBg" aria-hidden="true"/>
      <div className="wash" aria-hidden="true"/>
      <div className="floating f1">♥</div><div className="floating f2">♥</div><div className="floating f3">♥</div>
      {active==='Home'?<HomePage go={go}/>:<SectionPage active={active} go={go}/>} 
    </main>
  </div>
}

function HomePage({go}){return <div className="page homePage">
  <div className="topPill">💗 Forever Yours 💕</div>
  <section className="hero">
    <div className="heroText"><div className="tinyHeart">♥</div><div className="loveYou">Love You</div><h1>Chinnu <span>♡</span></h1><p>You make my world brighter, my days happier, and my heart fuller. ❤️</p><button onClick={()=>go('For You')}>♥ You Mean Everything</button></div>
    <div className="stats">
      <Stat icon="♡" title="Days Together" value="∞" sub="And counting... 💕"/>
      <Stat icon="☆" title="My Happiness" value="100%" sub="Because of you 💖"/>
      <Stat icon="☺" title="My Love" value="Always" sub="Today. Tomorrow. Forever. ❤️"/>
    </div>
  </section>
  <section className="cards">
    <Card icon={<Heart/>} title="Our Story" sub="How it all began" onClick={()=>go('Our Story')}/>
    <Card icon={<Images/>} title="Gallery" sub="Beautiful moments" onClick={()=>go('Gallery')}/>
    <Card icon={<Star/>} title="Reasons" sub="Why I love you" onClick={()=>go('Reasons I Love You')}/>
    <Card icon={<Gift/>} title="For You" sub="A special surprise" onClick={()=>go('For You')}/>
  </section>
  <div className="quote">“You are my today,<br/>my tomorrow, and all<br/>of my forever.” <span>♡</span></div>
  <footer>💕 &nbsp; Made with ❤️ for my Chinnu &nbsp; 💕</footer>
</div>}

function Stat({icon,title,value,sub}){return <div className="stat"><div className="statIcon">{icon}</div><div><b>{title}</b><strong>{value}</strong><small>{sub}</small></div></div>}
function Card({icon,title,sub,onClick}){return <button className="card" onClick={onClick}><span className="cardIcon">{icon}</span><span><b>{title}</b><small>{sub}</small></span><ArrowRight size={18}/></button>}
function SectionPage({active,go}){const [title,text]=content[active];return <div className="page sectionPage"><div className="glass"><Sparkles size={34}/><p className="eyebrow">JUST YOU & ME</p><h2>{title}</h2><p>{text}</p>{active==='Gallery'&&<img className="galleryPhoto" src="/love-photo.jpg" alt="A special memory"/>}<button onClick={()=>go('Home')}>♥ Back to our home</button></div><footer>💕 Made with ❤️, always.</footer></div>}

createRoot(document.getElementById('root')).render(<App/>);
