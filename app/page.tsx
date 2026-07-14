"use client";
import { useState } from "react";

const memories = [
  ["Before us", "Two separate timelines, moving quietly toward the same corner of the internet."],
  ["First signal", "A conversation that could have ended there—but neither of us wanted it to."],
  ["Talking became normal", "Somewhere between messages, you became part of the shape of every day."],
  ["05.07", "The day ‘you’ and ‘me’ became ‘us.’"],
  ["Still choosing", "Not a perfect timeline. A real one, repaired with honesty, patience, and return."],
  ["Today", "One more ordinary day made extraordinary because you are in it."],
];

const archive = [
  ["cassette", "Cassette", "A voice I wanted to keep"], ["crown", "Pink crown", "A Lia-sized piece of magic"],
  ["phone", "Phone", "A message that stayed with me"], ["lantern", "Lantern", "A light you left on for me"],
  ["book", "Book", "A story we carried together"], ["flower", "Flower", "Something beautiful I notice"],
  ["cart", "Shopping cart", "An extremely practical ocean-crossing plan"], ["star", "Star", "Mission preview: us"],
  ["mail", "Mailbox", "A small Dear Lia"], ["cat", "Beomi", "Keeper of her memories"],
];

const promises = [
  "I choose to keep learning how to love you properly.", "I choose communication, especially when it is inconvenient.",
  "I choose to notice the little things you tell me.", "I choose to make room for your feelings before defending myself.",
  "I choose the future we imagine, one ordinary decision at a time.",
];

export default function Home() {
  const [catTaps, setCatTaps] = useState(0);
  const [connected, setConnected] = useState(false);
  const [signalSent, setSignalSent] = useState(false);
  const [cassettePlaying, setCassettePlaying] = useState(false);
  const [moonSecret, setMoonSecret] = useState(false);
  const [visitedArchives, setVisitedArchives] = useState<string[]>([]);
  return <main>
    <section className="hero" id="signal" aria-labelledby="hero-title">
      <div className="stars" aria-hidden="true" />
      <div className="scan-card"><span className="pulse" /> SIGNAL FOUND <span>07.22</span></div>
      <p className="kicker">Private archive · Timeline anchor 05.07</p>
      <h1 id="hero-title">Somewhere<br/><em>Between Timelines</em></h1>
      <p className="hero-copy">The timeline where I found you.</p>
      <a className="primary" href="#origin">Open our timeline <span aria-hidden="true">↘</span></a>
      <div className="orbit" aria-hidden="true"><i/><i/><span>CA</span><span>PK</span></div>
    </section>

    <nav className="dock" aria-label="Story chapters"><span className="dock-signal" title="Timeline active" />
      <a href="#timeline" aria-label="Timeline">◫</a><a href="#archive" aria-label="Memory garden">♧</a>
      <a href="#distance" aria-label="Distance">◐</a><a href="#mission" aria-label="Mission">✦</a><a href="#letter" aria-label="Letter">✉</a>
    </nav>

    <section className="chapter origin" id="origin">
      <header><p className="chapter-no">Chapter 02 · Origin signal</p><h2>The website that<br/>brought me to you</h2></header>
      <div className="browser-window">
        <div className="browser-bar"><span/><span/><span/><p>archive://the-beginning</p></div>
        <div className="browser-content">
          <div className="ferret-screen" aria-label="Illustration placeholder for Quin ferret at a computer"><b>〰</b><span>Quin ferret<br/>illustration</span></div>
          <div className="origin-copy"><p className="stamp">RECOVERED TAB · DATE PENDING</p><h3>It looked ordinary at first.</h3>
          <p>A small online place. One passing interaction. No dramatic music, no warning that this tab would quietly change the rest of my life.</p>
          <div className="thought"><span>What happened</span><p>[Add the true story of how you first encountered Lia.]</p></div>
          <div className="thought secret"><span>What I secretly thought</span><p>[Add the first thing you noticed and why you kept talking.]</p></div></div>
        </div>
      </div>
    </section>

    <section className="chapter timeline" id="timeline">
      <header><p className="chapter-no">Chapter 03 · Timeline anchor 01</p><h2><span>05 · 07</span><br/>The first timeline</h2><p>Not only the milestones. The ordinary moments that became a life.</p></header>
      <div className="film" role="list">{memories.map(([date,text],i)=><article className="frame" role="listitem" key={date}><div className="frame-image"><span>{String(i+1).padStart(2,"0")}</span><p>Reviewed image<br/>or drawing</p></div><p className="stamp">{date}</p><h3>{text}</h3><details><summary>What I felt</summary><p>Private memory text will live here after review.</p></details></article>)}</div>
    </section>

    <section className="chapter garden" id="archive">
      <header><p className="chapter-no">Chapter 04 · Memory garden</p><h2>The archive of<br/>ordinary things</h2><p>Tap an object. Every small thing kept its own piece of the story.</p></header>
      <p className="archive-count"><b>{visitedArchives.length}</b> / {archive.length} memories discovered</p><div className="archive-grid">{archive.map(([icon,name,note])=><details className={`object ${icon} ${visitedArchives.includes(name) ? "visited" : ""}`} key={name} onToggle={(event) => { if (event.currentTarget.open) setVisitedArchives((items) => items.includes(name) ? items : [...items, name]); }}><summary><span className="doodle" aria-hidden="true">{icon === "star" ? "✦" : icon === "flower" ? "❀" : icon === "cat" ? "ᓚᘏᗢ" : icon === "mail" ? "✉" : icon === "crown" ? "♕" : icon === "book" ? "▥" : icon === "phone" ? "▯" : icon === "lantern" ? "♧" : icon === "cart" ? "▱" : "◉"}</span><b>{name}</b></summary><div><p>{note}</p><small>Private archive item pending review</small></div></details>)}</div>
      <div className="cat-secret"><button type="button" onClick={() => setCatTaps((count) => Math.min(count + 1, 5))} aria-label="Tap Beomi cat"><span aria-hidden="true">ᓚᘏᗢ</span> Tap Beomi</button><p>{catTaps < 5 ? `Beomi is pretending not to watch you. ${catTaps ? `${5-catTaps} more.` : ""}` : "Secret recovered: Even the quietest parts of my life started making room for you."}</p></div>
    </section>

    <section className="chapter blue-hour" id="distance">
      <header><p className="chapter-no">Chapter 05 · Shared sky</p><h2>Two lives at blue hour</h2></header>
      <div className={`windows ${connected ? "connected" : ""}`}>
        <article className="california"><p className="stamp">California · sun time</p><div className="sun" aria-label="California sun"/><h3>One window</h3><p>Days ending while yours begin.</p><div className="ferret">〰 <small>Quin</small></div></article>
        <div className="thread"><span>7,700-ish inconvenient miles</span></div>
        <article className="pakistan"><p className="stamp">Pakistan · moon time</p><div className="moon" aria-label="Pakistan moon"/><h3>Another window</h3><p>The same moon, arriving differently.</p><div className="ferret">〰 <small>Lia</small></div></article>
      </div>
      <button className="connect-button" type="button" onClick={() => setConnected(!connected)}>{connected ? "Signal connected · same sky" : "Connect our skies"}</button>
      <blockquote>The hours are different.<br/><em>The sky is not.</em></blockquote>
    </section>

    <section className="chapter mission" id="mission">
      <header><p className="chapter-no">Chapter 06 · Project: us</p><h2>Mission log</h2><p>Continue finding one another despite time zones, human error, anxiety, and approximately three functioning brain cells.</p></header>
      <div className="mission-grid"><div className="system"><div className="radar"><i/><i/></div><p>SIGNALS SYNCHRONIZING</p></div>
      <div className="logs">{[["Origin","Two people encountered online."],["Complication","Distance. Deeply inconvenient."],["Recovery protocol","Honesty, reassurance, patience, trying again."],["Partner status","Still my favorite person."],["Destination","Together."]].map(([a,b])=><div key={a}><span>{a}</span><p>{b}</p></div>)}</div><button className={`transmit ${signalSent ? "sent" : ""}`} type="button" onClick={() => setSignalSent(true)}><span aria-hidden="true">◉</span>{signalSent ? "SIGNAL RECEIVED · I AM STILL HERE" : "SEND SIGNAL"}</button></div>
    </section>

    <section className="chapter promises"><header><p className="chapter-no">Chapter 07 · 07.22</p><h2>What I mean when<br/>I say I choose you</h2></header>
      <ol>{promises.map((p,i)=><li key={p}><span>0{i+1}</span><p>{p}</p></li>)}</ol>
    </section>

    <section className="letter" id="letter"><div className="candle" aria-hidden="true"/><p className="chapter-no">A letter sent across time</p><h2>Dear Lia,</h2>
      <div className="letter-copy"><p>This space is being saved for the words that should only be yours.</p><p>The final letter will celebrate who you are outside this relationship, the softness and strength you carry, what your presence changed, and everything I hope this next year gives back to you.</p><p className="placeholder">[Complete reviewed birthday letter goes here.]</p><p>Always,<br/><span className="signature">Quin</span></p></div>
      <button className={`audio ${cassettePlaying ? "playing" : ""}`} type="button" onClick={() => setCassettePlaying(!cassettePlaying)}><span className="reel">◉</span><b>{cassettePlaying ? "Cassette turning…" : "Birthday voice note"}</b><small>{cassettePlaying ? "Audio will begin here after the reviewed recording is added." : "Tap to preview the interaction · never autoplays"}</small></button>
    </section>

    <section className="finale" id="finale"><button className="final-moon" type="button" onClick={() => setMoonSecret(!moonSecret)} aria-label="Reveal the moon secret">☾</button><div className="dawn"/><p className="kicker">Primary celebration signal · 07.22</p><h2>Happy Birthday,<br/><em>Lia.</em></h2><p>In every timeline, I would still look for you.</p><div className="ferrets" aria-label="Placeholder for two dancing ferret mascots"><span>〰</span><b>♡</b><span>〰</span></div><p className="final-line">The day this universe became softer because you entered it.</p>{moonSecret && <p className="moon-message">My love always finds you.</p>}<a href="#signal">Return to the signal ↑</a></section>
  </main>;
}





