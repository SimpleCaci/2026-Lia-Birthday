const chapters = [
  ["01", "Signal Found", "Searching archived timelines. Relationship anchor: 05.07. Birthday signal: 07.22."],
  ["02", "The Website That Brought Me to You", "The ordinary online place that became the beginning."],
  ["03", "05.07: The First Timeline", "Five to seven memories preserved like frames of film."],
  ["04", "The Archive of Ordinary Things", "A moonlit garden of messages, photographs, sounds, and private jokes."],
  ["05", "Two Lives at Blue Hour", "California and Pakistan, held beneath the same moon."],
  ["06", "Mission Log: Us", "Two distant signals learning how to synchronize and try again."],
  ["07", "07.22: The Birthday Timeline", "Grounded promises, a letter sent across time, and a celebration of Lia."],
];

export default function Home() {
  return <main>
    <section className="signal" aria-labelledby="signal-title">
      <div className="signal-noise" aria-hidden="true" />
      <p className="eyebrow">Private archive · 05.07 → 07.22</p>
      <h1 id="signal-title">Somewhere<br />Between Timelines</h1>
      <p className="lede">The timeline where I found you.</p>
      <a className="begin" href="#story">Open our timeline <span aria-hidden="true">↓</span></a>
      <p className="coordinates" aria-hidden="true">CA · · · · · · · · · · PK</p>
    </section>
    <section className="story" id="story" aria-labelledby="story-title">
      <p className="eyebrow">Recovered structure</p>
      <h2 id="story-title">Seven chapters. One timeline.</h2>
      <p className="section-intro">The complete emotional path is scaffolded while private writing, images, and audio await review.</p>
      <ol className="chapters">{chapters.map(([number,title,description]) => <li key={number}>
        <span className="chapter-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="pending">Content pending</span>
      </li>)}</ol>
    </section>
    <footer><p>Built privately. Nothing here is published.</p></footer>
  </main>;
}
