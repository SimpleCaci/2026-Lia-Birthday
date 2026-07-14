"use client";
import { FormEvent, useEffect, useState } from "react";

const memories = [
  ["Before us", "I was literally like... why is this random person following me? Who are you lol."],
  ["First signal", "Ahhhh she is so cute and so sweet. I did not see you romantically at first though... it was completely platonic. And then I started blushing."],
  ["04.30 · My birthday", "You literally posted my picture and I was like... whaaa? That was when something in my brain started going yeah, okay, this is different."],
  ["05.07 · I asked", "I was like... she definitely likes me, so I am just going to be blunt with her. And somehow that terrifying decision became us."],
  ["Mistakes", "And then... mistakes. Tons of mistakes. We are not pretending otherwise. But we will try our best, communicate, and keep choosing each other."],
  ["Today", "I love you dearly, and I will try so, so hard. For you... for us... and for the life we keep imagining."],
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
  "I choose the future we imagine, one ordinary decision at a time.", "I choose all the cuddles we have missed... and making up for every single one someday.", "One day I will marry you, and eventually we will finally be together forever :)",
];

export default function Home() {
  const memoryPath = (name: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/memories/${name}`;
  const [catTaps, setCatTaps] = useState(0);
  const [connected, setConnected] = useState(false);
  const [signalSent, setSignalSent] = useState(false);
  const [cassettePlaying, setCassettePlaying] = useState(false);
  const [moonSecret, setMoonSecret] = useState(false);
  const [visitedArchives, setVisitedArchives] = useState<string[]>([]);
  const [unlocked, setUnlocked] = useState(false);
  const [secret, setSecret] = useState("");
  const [gateError, setGateError] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
  const [fullUnlocked, setFullUnlocked] = useState(false);
  const [secondSecret, setSecondSecret] = useState("");
  const [secondError, setSecondError] = useState(false);
  useEffect(() => { const restore = window.setTimeout(() => { setUnlocked(sessionStorage.getItem("timeline-unlocked") === "yes"); setFullUnlocked(sessionStorage.getItem("timeline-full-unlocked") === "yes"); }, 0); return () => window.clearTimeout(restore); }, []);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedMemory(null); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  const enterTimeline = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (secret.trim().toLowerCase() === "solace") { sessionStorage.setItem("timeline-unlocked", "yes"); setUnlocked(true); setGateError(false); } else { setGateError(true); } };
  const openBirthdayArchive = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (secondSecret.trim().toLowerCase() === "luna") { sessionStorage.setItem("timeline-full-unlocked", "yes"); setFullUnlocked(true); setSecondError(false); } else { setSecondError(true); } };
  const resetTimeline = () => { sessionStorage.removeItem("timeline-unlocked"); sessionStorage.removeItem("timeline-full-unlocked"); setSecret(""); setSecondSecret(""); setFullUnlocked(false); setUnlocked(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  if (!unlocked) return <main className="gate"><div className="gate-stars"/><p className="kicker">Private timeline · 05.07 → 07.22</p><h1>Somewhere<br/><em>Between Timelines</em></h1><p>This archive remembers one secret word.</p><form onSubmit={enterTimeline}><label htmlFor="secret-word">What do we call this kind of comfort?</label><div><input id="secret-word" type="password" value={secret} onChange={(event) => setSecret(event.target.value)} autoComplete="off" autoFocus/><button type="submit">Find our timeline</button></div>{gateError && <p role="alert">That signal did not match. Try the word that means comfort.</p>}</form><small>A private archive for Lia</small></main>;
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
    <button className="reset-timeline" type="button" onClick={resetTimeline} title="Lock both secret-word gates" aria-label="Lock timeline and return to the Solace screen">↺</button></nav>

    <section className="chapter origin" id="origin">
      <header><p className="chapter-no">Chapter 02 · Origin signal</p><h2>The website that<br/>brought me to you</h2></header>
      <div className="browser-window">
        <div className="browser-bar"><span/><span/><span/><p>archive://the-beginning</p></div>
        <div className="browser-content">
          <div className="origin-image"><img src={memoryPath("asking-out-site.png")} alt="The pink website Quin made when asking Lia to be together"/><span className="stamp">The page where our story became us</span></div>
          <div className="origin-copy"><p className="stamp">RECOVERED TAB · DATE PENDING</p><h3>It looked ordinary at first.</h3>
          <p>You randomly followed my Instagram. I said hi to your thingy, lol, and then we started talking. We shared difficult pieces of ourselves, felt understood, and somehow a random follow became the beginning of everything.</p>
          <div className="thought"><span>What happened</span><p>You followed me. I said hello. We kept talking until talking to you became the safest part of my day.</p></div>
          <div className="thought secret"><span>What I secretly thought</span><p>I secretly felt so safe with you. I did not understand why yet; I only knew I felt warm whenever your name appeared.</p></div></div>
        </div>
      </div>
    </section>

    <section className="chapter timeline" id="timeline">
      <header><p className="chapter-no">Chapter 03 · Timeline anchor 01</p><h2><span>05 · 07</span><br/>The first timeline</h2><p>Not only the milestones. The ordinary moments that became a life.</p></header>
      <div className="film" role="list">{memories.map(([date,text],i)=><article className="frame" role="listitem" key={date}><div className="frame-image"><span>{String(i+1).padStart(2,"0")}</span><p>Reviewed image<br/>or drawing</p></div><p className="stamp">{date}</p><h3>{text}</h3><details><summary>What I felt</summary><p>Private memory text will live here after review.</p></details></article>)}</div>
    </section>

    {fullUnlocked ? <>
    <section className="chapter garden" id="archive">
      <header><p className="chapter-no">Chapter 04 · Memory garden</p><h2>The archive of<br/>ordinary things</h2><p>Tap an object. Every small thing kept its own piece of the story.</p></header>
      <p className="archive-count"><b>{visitedArchives.length}</b> / {archive.length} memories discovered</p><div className="archive-grid">{archive.map(([icon,name,note])=><details className={`object ${icon} ${visitedArchives.includes(name) ? "visited" : ""}`} key={name} onToggle={(event) => { if (event.currentTarget.open) setVisitedArchives((items) => items.includes(name) ? items : [...items, name]); }}><summary><span className="doodle" aria-hidden="true">{icon === "star" ? "✦" : icon === "flower" ? "❀" : icon === "cat" ? "ᓚᘏᗢ" : icon === "mail" ? "✉" : icon === "crown" ? "♕" : icon === "book" ? "▥" : icon === "phone" ? "▯" : icon === "lantern" ? "♧" : icon === "cart" ? "▱" : "◉"}</span><b>{name}</b></summary><div><p>{note}</p><small>Private archive item pending review</small></div></details>)}</div>
      <div className="cat-secret"><button type="button" onClick={() => setCatTaps((count) => Math.min(count + 1, 5))} aria-label="Tap Beomi cat"><span aria-hidden="true">ᓚᘏᗢ</span> Tap Beomi</button><p>{catTaps < 5 ? `Beomi is pretending not to watch you. ${catTaps ? `${5-catTaps} more.` : ""}` : "Secret recovered: Even the quietest parts of my life started making room for you."}</p></div>
    </section>

    <section className="chapter keepsakes" aria-labelledby="keepsakes-title">
      <header><p className="chapter-no">Recovered keepsakes · Volume one</p><h2 id="keepsakes-title">Things love made<br/>with its own hands</h2><p>Drawings, photographs, and tiny worlds we made for one another.</p></header>
      <div className="keepsake-grid">
        <figure className="wide"><button className="open-memory" type="button" onClick={() => setSelectedMemory(memoryPath("moon-birthday-art.jpeg")) } aria-label="Open this keepsake"><img src={memoryPath("moon-birthday-art.jpeg")} alt="Artwork Quin drew of Lia in front of a moon combining their birthdays"/></button><figcaption>Our birthdays, sharing one moon.</figcaption></figure>
        <figure><button className="open-memory" type="button" onClick={() => setSelectedMemory(memoryPath("lia-beomi.jpeg")) } aria-label="Open this keepsake"><img src={memoryPath("lia-beomi.jpeg")} alt="Lia together with Beomi"/></button><figcaption>Two cuties. No further notes.</figcaption></figure>
        <figure><button className="open-memory" type="button" onClick={() => setSelectedMemory(memoryPath("monthaversary-drawing.jpeg")) } aria-label="Open this keepsake"><img src={memoryPath("monthaversary-drawing.jpeg")} alt="A monthaversary drawing Lia made"/></button><figcaption>A monthaversary preserved on paper.</figcaption></figure>
        <figure><button className="open-memory" type="button" onClick={() => setSelectedMemory(memoryPath("beomi-01.jpeg")) } aria-label="Open this keepsake"><img src={memoryPath("beomi-01.jpeg")} alt="Beomi looking cute"/></button><figcaption>Beomi, archive supervisor.</figcaption></figure>
        <figure><button className="open-memory" type="button" onClick={() => setSelectedMemory(memoryPath("morning-drawing-01.jpeg")) } aria-label="Open this keepsake"><img src={memoryPath("morning-drawing-01.jpeg")} alt="One of Lia’s morning drawings for Quin"/></button><figcaption>One of the mornings she drew into being.</figcaption></figure>
<figure className="wide"><button className="open-memory" type="button" onClick={() => setSelectedMemory(memoryPath("apology-reassurance-site.png"))} aria-label="Open the apology and reassurance website"><img src={memoryPath("apology-reassurance-site.png")} alt="The terminal-style apology and reassurance website Quin built for Lia"/></button><figcaption>A website made to say: I am sorry, I love you, and I am still choosing you.</figcaption></figure>
        <figure className="wide video-card"><video controls preload="metadata" aria-label="Otter dance animation Quin made for Lia"><source src={memoryPath("otter-dance.mp4")} type="video/mp4"/></video><figcaption>Even when the current pulls, I still reach for you.</figcaption></figure>
      </div>
    </section>
{selectedMemory && <div className="memory-modal" role="dialog" aria-modal="true" aria-label="Expanded keepsake" onClick={() => setSelectedMemory(null)}><button type="button" onClick={() => setSelectedMemory(null)} aria-label="Close expanded keepsake">×</button><img src={selectedMemory} alt="Expanded personal keepsake" onClick={(event) => event.stopPropagation()}/><p>Recovered memory · tap outside or press Escape to close</p></div>}
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
      <div className={`mission-grid ${signalSent ? "signal-active" : ""}`}><div className="system"><div className="radar"><div className="radar-beam"/><div className="signal-path"/><i/><i/></div><p>SIGNALS SYNCHRONIZING</p></div>
      <div className="logs">{[["Origin","Two people encountered online."],["Complication","Distance. Deeply inconvenient."],["Recovery protocol","Honesty, reassurance, patience, trying again."],["Partner status","Still my favorite person."],["Assigned role","Her silly destroyer."],["Requested activity","A truly unreasonable amount of cuddling."],["Destination","Together... forever :)"]].map(([a,b])=><div key={a}><span>{a}</span><p>{b}</p></div>)}</div><button className={`transmit ${signalSent ? "sent" : ""}`} type="button" onClick={() => setSignalSent(true)}><span aria-hidden="true">◉</span>{signalSent ? "SIGNAL RECEIVED · I AM STILL HERE" : "SEND SIGNAL"}</button>{signalSent && <div className="signal-received" role="status"><span>TRANSMISSION RECEIVED</span><b>Quin → Lia</b><p>Her silly destroyer is still here... still choosing her... and requesting immediate cuddles across approximately 7,700 deeply annoying miles.</p><small>Long-term objective: marry you and finally be together forever :)</small></div>}</div>
    </section>

    <section className="chapter promises"><header><p className="chapter-no">Chapter 07 · 07.22</p><h2>What I mean when<br/>I say I choose you</h2></header>
      <ol>{promises.map((p,i)=><li key={p}><span>0{i+1}</span><p>{p}</p></li>)}</ol>
    </section>

    <section className="letter" id="letter"><div className="candle" aria-hidden="true"/><p className="chapter-no">A letter sent across time</p><h2>Dear Lia,</h2>
      <div className="letter-copy"><p>Happy birthday, my love.</p><p>It is finally your birthday. You once wrote me a whole book...fifteen or sixteen pages long...called <em>Solace</em>. I remember joking that if I am your solace, then you are my lunatic... my moon beside the sun.</p><p>This website was inspired by the things you love, the movies and stories you return to, and the quiet style of all those worlds. More than that, it is my little form of solace for you. It is a place for how I feel about you, and for the pieces of us I never want to lose.</p><p>I really appreciate that we met. I know we have our ups and downs, but like you said, we will get through them. We will keep finding our way back to one another, and we will always be together.</p><p>Watching <em>Project Hail Mary</em> with you was really cute. I love that even a story about impossible distance became another small thing we could share.</p><p>Happy birthday, Lia. I hope this year is gentle with you. I hope it gives you room to feel safe, known, celebrated, and deeply loved... not only by me, but by the life you are building around yourself.</p><p>Always,<br/><span className="signature">Quin</span></p></div>
      <div className={`audio real-audio ${cassettePlaying ? "playing" : ""}`}><button type="button" onClick={() => setCassettePlaying(!cassettePlaying)} aria-label="Turn the birthday cassette"><span className="reel">◉</span></button><div><b>Birthday voice note</b><small>In my own voice... tap play whenever you are ready.</small><audio controls preload="metadata" onPlay={() => setCassettePlaying(true)} onPause={() => setCassettePlaying(false)}><source src={memoryPath("birthday-voice-note.mp3")} type="audio/mpeg"/>Your browser cannot play this recording.</audio></div></div>
    </section>

    <section className="finale" id="finale"><button className="final-moon" type="button" onClick={() => setMoonSecret(!moonSecret)} aria-label="Reveal the moon secret">☾</button><div className="dawn"/><p className="kicker">Primary celebration signal · 07.22</p><h2>Happy Birthday,<br/><em>Lia.</em></h2><p>In every timeline, I would still look for you.</p><div className="ferrets" aria-label="Placeholder for two dancing ferret mascots"><span>〰</span><b>♡</b><span>〰</span></div><p className="final-line">The day this universe became softer because you entered it.</p>{moonSecret && <p className="moon-message">My love always finds you.</p>}<a href="#signal">Return to the signal ↑</a></section>
    </> : <section className="second-gate" aria-labelledby="sealed-title"><div className="sealed-moon" aria-hidden="true">☾</div><p className="kicker">Birthday transmission sealed</p><h2 id="sealed-title">The rest of this timeline<br/><em>is waiting for later.</em></h2><p>You found the beginning. The archive, letter, voice note, and birthday finale are saved behind one more word.</p><form onSubmit={openBirthdayArchive}><label htmlFor="birthday-word">Second secret word</label><div><input id="birthday-word" type="password" value={secondSecret} onChange={(event) => setSecondSecret(event.target.value)} autoComplete="off"/><button type="submit">Open the birthday archive</button></div>{secondError && <p role="alert">That moon signal did not match.</p>}</form><small>You can come back when Quin gives you the word.</small></section>}
  </main>;
}
















