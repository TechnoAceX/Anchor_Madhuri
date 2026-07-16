/* PARTICLES */
(function(){
  const wrap=document.getElementById('particles');
  for(let i=0;i<30;i++){
    const p=document.createElement('div');
    p.className='particle';
    p.style.cssText=`
      left:${Math.random()*100}%;
      animation-duration:${8+Math.random()*12}s;
      animation-delay:${Math.random()*10}s;
      width:${1+Math.random()*2}px;
      height:${1+Math.random()*2}px;
      opacity:${0.2+Math.random()*0.4};
    `;
    wrap.appendChild(p);
  }
})();

/* PROGRESS BAR */
window.addEventListener('scroll',()=>{
  const el=document.getElementById('progress-bar');
  const prog=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
  el.style.width=prog+'%';
  const nav=document.getElementById('navbar');
  nav.classList.toggle('scrolled',window.scrollY>60);
});

/* EVENTS DATA */
const events=[
  {id:'haldi',name:'Haldi',desc:'Vibrant, joyful Haldi ceremonies anchored with the warmth and playfulness that this beloved ritual deserves — setting the perfect tone for celebrations ahead.'},
  {id:'music',name:'Music Night',desc:'Electric music evenings where Madhuri\'s energy matches every beat, engaging the audience and creating an unforgettable atmosphere of sound and celebration.'},
  {id:'mehndi',name:'Mehndi',desc:'Graceful Mehndi ceremonies filled with tradition, laughter, and the elegant storytelling that transforms this ritual into a cherished memory.'},
  {id:'baby',name:'Baby Shower',desc:'Tender and joyful baby shower celebrations, beautifully hosted with the right balance of emotion, games, and heartfelt moments.'},
  {id:'birthday',name:'Birthday Party',desc:'From intimate gatherings to grand birthday galas — every celebration tailored to the personality of the guest of honour.'},
  {id:'barat',name:'Barat on Wheels',desc:'The grandest baraat processions, anchored with infectious energy that gets every guest dancing and celebrating in style.'},
  {id:'anniversary',name:'Anniversary',desc:'Romantic and nostalgic anniversary celebrations, weaving love stories through words, music, and treasured memories.'},
  {id:'interview',name:'Star Interview',desc:'Sophisticated celebrity and star interviews conducted with poise, intelligence, and the art of drawing out extraordinary conversations.'},
  {id:'podcast',name:'Podcast',desc:'Professional podcast hosting with seamless conversation flow, thought-provoking questions, and an engaging presence that keeps listeners captivated.'},
  {id:'corporate',name:'Corporate Event',desc:'High-impact corporate events, conferences, and product launches anchored with professionalism, clarity, and executive presence.'},
  {id:'exhibition',name:'Exhibition',desc:'Brand exhibitions and trade shows anchored with precision — effectively communicating brand stories and engaging diverse audiences.'},
  {id:'cultural',name:'Cultural Events',desc:'Rich cultural festivals and heritage celebrations hosted with deep respect for tradition and contemporary flair.'},
  {id:'iifa',name:'IIFA',desc:'The pinnacle of glamour — IIFA and prestigious award ceremonies anchored with the confidence and charisma of Bollywood\'s biggest nights.'},
  {id:'doctor',name:'Doctor Interviews',desc:'Expert medical and healthcare interviews conducted with sensitivity, accuracy, and the professionalism that this important content deserves.'},
];

const tabsWrap=document.getElementById('eventTabs');
const contentsWrap=document.getElementById('eventContents');

events.forEach((ev,i)=>{
  const btn=document.createElement('button');
  btn.className='event-tab'+(i===0?' active':'');
  btn.textContent=ev.name;
  btn.onclick=()=>{
    document.querySelectorAll('.event-tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.event-content').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('ec-'+ev.id).classList.add('active');
  };
  tabsWrap.appendChild(btn);

  const div=document.createElement('div');
  div.className='event-content'+(i===0?' active':'');
  div.id='ec-'+ev.id;

  const labels=['Main Stage','Candid','Detail','Behind the Scenes','Highlights'];
  const photos=labels.map((l,pi)=>`
    <div class="photo-cell">
      <div class="photo-cell-inner">
        <div class="photo-placeholder">${l}</div>
      </div>
    </div>
  `).join('');

  div.innerHTML=`
    <div class="event-showcase">
      <div class="event-info">
        <h3>${ev.name}</h3>
        <p>${ev.desc}</p>
        <div class="event-reel">
          <div class="reel-label">✦ Featured Reels</div>
          <div class="reel-links">
            <a href="https://instagram.com/anchor_madhuri.jaipur" target="_blank" class="reel-link">
              <div class="reel-play">▷</div>
              <span>${ev.name} Highlights Reel</span>
            </a>
            <a href="https://instagram.com/anchor_madhuri.jaipur" target="_blank" class="reel-link">
              <div class="reel-play">▷</div>
              <span>Best Moments – ${ev.name}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="photo-mosaic">${photos}</div>
    </div>`;
  contentsWrap.appendChild(div);
});

/* GALLERY */
const cats=['All','Weddings','Corporate','Celebrity','Interviews','Cultural','Podcast'];
const filtersWrap=document.getElementById('galleryFilters');
const grid=document.getElementById('masonryGrid');
const items=[
  {cat:'Weddings',label:'Wedding Grand Entry',h:260},
  {cat:'Corporate',label:'Corporate Summit',h:180},
  {cat:'Celebrity',label:'Star Interview',h:220},
  {cat:'Cultural',label:'Cultural Gala',h:200},
  {cat:'Weddings',label:'Haldi Ceremony',h:160},
  {cat:'Interviews',label:'Doctor Series',h:240},
  {cat:'Podcast',label:'Studio Session',h:190},
  {cat:'Corporate',label:'Brand Launch',h:220},
  {cat:'Celebrity',label:'IIFA Night',h:280},
  {cat:'Weddings',label:'Mehndi Evening',h:170},
  {cat:'Cultural',label:'Folk Festival',h:200},
  {cat:'Interviews',label:'Celebrity Chat',h:160},
];

cats.forEach((c,i)=>{
  const btn=document.createElement('button');
  btn.className='filter-btn'+(i===0?' active':'');
  btn.textContent=c;
  btn.onclick=()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.masonry-item').forEach(item=>{
      const show=c==='All'||item.dataset.cat===c;
      item.style.display=show?'block':'none';
    });
  };
  filtersWrap.appendChild(btn);
});

items.forEach(it=>{
  const div=document.createElement('div');
  div.className='masonry-item reveal';
  div.dataset.cat=it.cat;
  div.innerHTML=`<div class="masonry-cell" style="height:${it.h}px">
    <div class="masonry-label">${it.label}</div>
  </div>`;
  grid.appendChild(div);
});

/* REELS */
const reelTitles=['Wedding Grand Entrance','Haldi Vibes 2024','Corporate Summit Host','IIFA Stage Moments','Celebrity Interview','Cultural Night Magic','Podcast Episode','Birthday Bash Host','Mehndi Eve'];
const reelsGrid=document.getElementById('reelsGrid');
reelTitles.forEach(t=>{
  const div=document.createElement('div');
  div.className='reel-card';
  div.innerHTML=`
    <div class="reel-bg">
      <div class="reel-icon">▷</div>
      <div class="reel-title">${t}</div>
    </div>
    <div class="reel-play-btn">
      <div class="play-circle">▷</div>
    </div>`;
  div.onclick=()=>window.open('https://instagram.com/anchor_madhuri.jaipur','_blank');
  reelsGrid.appendChild(div);
});

/* TESTIMONIALS */
const testimonials=[
  {text:"Madhuri's presence completely transformed our wedding reception. Her energy, grace, and ability to connect with every guest — from toddlers to grandparents — was nothing short of magical.",author:"Priya & Rahul Sharma",role:"Wedding Clients – Jaipur",init:"PR"},
  {text:"We've hosted over 50 corporate events, and Madhuri is in a league of her own. Her professionalism, command over the stage, and ability to keep 2000+ attendees engaged is remarkable.",author:"Vikram Agarwal",role:"Event Director – Rajasthan",init:"VA"},
  {text:"Our IIFA afterparty was elevated to another level entirely by Madhuri's anchoring. She has this rare gift of making every moment feel both spontaneous and perfectly orchestrated.",author:"Meera Kapoor",role:"Celebrity Manager",init:"MK"},
  {text:"The way Madhuri handled our product launch — seamlessly transitioning between brand presentations, celebrity guests, and live performances — was extraordinary.",author:"Arjun Mehta",role:"Brand Head – Luxury Fashion",init:"AM"},
];
const track=document.getElementById('testimonialTrack');
const dotsWrap=document.getElementById('sliderDots');
let current=0;

testimonials.forEach((t,i)=>{
  const div=document.createElement('div');
  div.className='testimonial-card';
  div.innerHTML=`<div class="testimonial-inner">
    <div class="quote-mark">"</div>
    <p class="testimonial-text">${t.text}</p>
    <div class="testimonial-author">
      <div class="author-avatar">${t.init}</div>
      <div class="author-info">
        <h4>${t.author}</h4>
        <p>${t.role}</p>
      </div>
    </div>
  </div>`;
  track.appendChild(div);

  const dot=document.createElement('div');
  dot.className='dot'+(i===0?' active':'');
  dot.onclick=()=>goTo(i);
  dotsWrap.appendChild(dot);
});

function goTo(n){
  current=n;
  track.style.transform=`translateX(-${n*100}%)`;
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===n));
}
setInterval(()=>goTo((current+1)%testimonials.length),5000);

/* TIMELINE */
const milestones=[
  {year:'2017',title:'First Major Stage',desc:'Hosted Rajasthan\'s biggest folk festival with 10,000+ live audience — the start of a remarkable journey.'},
  {year:'2018',title:'Corporate Breakthrough',desc:'Selected as the face anchor for a Fortune 500 company\'s annual conference in Delhi.'},
  {year:'2019',title:'Celebrity Interviews Begin',desc:'Launched a celebrated interview series featuring Bollywood stars, politicians, and industry leaders.'},
  {year:'2020',title:'Podcast Host',desc:'Debuted as host of a weekly podcast exploring culture, arts, and inspiring personal journeys.'},
  {year:'2022',title:'IIFA Participation',desc:'Anchored the prestigious IIFA weekend events, cementing her place among India\'s elite event hosts.'},
  {year:'2023',title:'500 Events Milestone',desc:'Reached the landmark of 500+ successfully hosted events across 15 cities in India.'},
  {year:'2024',title:'Brand Ambassador',desc:'Appointed as the face of multiple luxury Rajasthani brands and heritage hospitality groups.'},
];
const tl=document.getElementById('timeline');
milestones.forEach(m=>{
  const div=document.createElement('div');
  div.className='timeline-item reveal';
  div.innerHTML=`
    <div class="timeline-dot"></div>
    <div class="timeline-year">${m.year}</div>
    <div class="timeline-title">${m.title}</div>
    <div class="timeline-desc">${m.desc}</div>`;
  tl.appendChild(div);
});

/* REVEAL ON SCROLL */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('visible');
  });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

/* COUNTER ANIMATION */
function animateCounter(el, target){
  let current=0;
  const step=target/60;
  const t=setInterval(()=>{
    current=Math.min(current+step,target);
    el.textContent=Math.round(current)+(target>=100?'+':'+'[0]||'');
    if(current>=target)clearInterval(t);
  },30);
}
const counterObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const target=parseInt(e.target.dataset.target);
      animateCounter(e.target,target);
      counterObs.unobserve(e.target);
    }
  });
},{threshold:0.5});
document.querySelectorAll('[data-target]').forEach(el=>counterObs.observe(el));
