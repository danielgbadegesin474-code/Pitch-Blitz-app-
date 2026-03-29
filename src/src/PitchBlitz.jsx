import { useState } from "react";

const PLAYERS = [
  { name: "Erling Haaland", club: "Man City", nation: "Norway" },
  { name: "Kylian Mbappé", club: "Real Madrid", nation: "France" },
  { name: "Vinicius Jr.", club: "Real Madrid", nation: "Brazil" },
  { name: "Jude Bellingham", club: "Real Madrid", nation: "England" },
  { name: "Mohamed Salah", club: "Liverpool", nation: "Egypt" },
  { name: "Lionel Messi", club: "Inter Miami", nation: "Argentina" },
  { name: "Cristiano Ronaldo", club: "Al Nassr", nation: "Portugal" },
  { name: "Pedri", club: "Barcelona", nation: "Spain" },
  { name: "Lamine Yamal", club: "Barcelona", nation: "Spain" },
  { name: "Phil Foden", club: "Man City", nation: "England" },
  { name: "Bukayo Saka", club: "Arsenal", nation: "England" },
  { name: "Rodri", club: "Man City", nation: "Spain" },
  { name: "Florian Wirtz", club: "Bayer Leverkusen", nation: "Germany" },
  { name: "Harry Kane", club: "Bayern Munich", nation: "England" },
  { name: "Jamal Musiala", club: "Bayern Munich", nation: "Germany" },
  { name: "Marcus Rashford", club: "Aston Villa", nation: "England" },
  { name: "Trent Alexander-Arnold", club: "Real Madrid", nation: "England" },
  { name: "Declan Rice", club: "Arsenal", nation: "England" },
  { name: "Cole Palmer", club: "Chelsea", nation: "England" },
  { name: "Neymar Jr.", club: "Al Hilal", nation: "Brazil" },
  { name: "Gavi", club: "Barcelona", nation: "Spain" },
  { name: "Raphinha", club: "Barcelona", nation: "Brazil" },
  { name: "Victor Osimhen", club: "Galatasaray", nation: "Nigeria" },
  { name: "Ademola Lookman", club: "Atalanta", nation: "Nigeria" },
  { name: "Riyad Mahrez", club: "Al Ahli", nation: "Algeria" },
  { name: "Achraf Hakimi", club: "PSG", nation: "Morocco" },
  { name: "Antoine Griezmann", club: "Atletico Madrid", nation: "France" },
  { name: "Kevin De Bruyne", club: "Man City", nation: "Belgium" },
  { name: "Son Heung-min", club: "Tottenham", nation: "South Korea" },
  { name: "Ruben Dias", club: "Man City", nation: "Portugal" },
  { name: "Federico Valverde", club: "Real Madrid", nation: "Uruguay" },
  { name: "Alexia Putellas", club: "Barcelona", nation: "Spain" },
  { name: "Martin Odegaard", club: "Arsenal", nation: "Norway" },
  { name: "Ollie Watkins", club: "Aston Villa", nation: "England" },
  { name: "Leroy Sane", club: "Bayern Munich", nation: "Germany" },
  { name: "Nico Williams", club: "Athletic Bilbao", nation: "Spain" },
  { name: "Endrick", club: "Real Madrid", nation: "Brazil" },
  { name: "Warren Zaire-Emery", club: "PSG", nation: "France" },
  { name: "Dani Olmo", club: "Barcelona", nation: "Spain" },
  { name: "Saka Bukayo", club: "Arsenal", nation: "England" },
];

// deduplicate by name
const ALL_FOOTBALLERS = PLAYERS.filter((p, i, arr) => arr.findIndex(x => x.name === p.name) === i);

const STORY_SCENARIOS = [
  "a last-minute Champions League final",
  "a heated El Clásico derby",
  "a must-win World Cup qualifier",
  "a comeback from 3-0 down",
  "a penalty shootout that decides everything",
  "a career-defining transfer deadline day",
  "an injury-time free kick with the title on the line",
];

const RELATABLE_IDEAS = {
  "💸 Broke & Hustling": [
    "Checking your account balance and immediately putting your phone down",
    "Eating the same meal four days in a row because it's what's available",
    "Calculating if you can afford something before you even pick it up",
    "Pretending you already ate so you don't have to spend money",
    "Your data finishing right when something important is loading",
    "Buying airtime and immediately using it to check if the transfer came",
    "Walking instead of taking transport because the money has to last",
    "Saying I'll send it later and both of you knowing later isn't coming",
    "Refreshing your bank app like the money will appear if you look hard enough",
    "When someone asks to borrow money and you're already borrowing from someone else",
    "The pride of finally having money and the pain of it disappearing in 24 hours",
    "Eating before you leave the house so you don't spend outside",
    "Doing mental arithmetic at the checkout and quietly putting things back",
    "Your phone on 4% and nowhere near a charger",
    "Hustling something small on the side just to survive the week",
    "The anxiety of a big expense coming and not knowing how you'll handle it",
    "When your friend suggests somewhere expensive and you fake a reason not to go",
    "Buying data in the smallest denomination just to check one thing",
    "The relief when someone else offers to pay without you asking",
    "Wearing the same outfit twice and hoping no one clocks it",
    "That moment between sending your account details and waiting for the alert",
    "Calculating how long your last money has to last before the next comes",
    "Eating light all day and pretending it's a fast",
    "When the thing you need breaks and you genuinely cannot fix it right now",
    "Doing a favour hoping it comes back around financially somehow",
    "The shame of having to ask family for money as an adult",
    "Dreaming about what you'd do if money wasn't the problem",
    "Seeing your mates spending and wondering why you're always the one struggling",
    "The pride of paying for something yourself after a long broke stretch",
    "Spending money on something you needed and still feeling guilty",
    "Telling yourself you'll save next month — every single month",
    "When an opportunity comes but you don't have the upfront money to take it",
    "Working hard and still feeling like you're standing still",
    "The quiet determination of someone carrying financial stress alone",
    "Knowing exactly what your situation is and choosing to keep going anyway",
  ],
  "📚 School & Exams Stress": [
    "Opening your notes the night before and realising you don't know anything",
    "Studying for six hours and retaining maybe two facts",
    "Telling yourself you'll start early and then starting at midnight",
    "Reading the same paragraph five times and still not understanding it",
    "Writing the date and Introduction and calling it a productive study session",
    "Your phone being the most interesting thing in the world the moment you open a textbook",
    "Crying in the bathroom before an exam and pulling yourself together to go in",
    "Answering a question confidently and realising halfway through you're wrong",
    "Seeing an exam question and your mind going completely blank",
    "The group chat going silent after a bad result because everyone failed",
    "Copying notes from someone who also didn't understand the class",
    "Pretending to take the course seriously until the last two weeks",
    "Calculating the minimum score you need to pass and building your whole strategy around it",
    "The lecturer dropping hints and you still not knowing what to study",
    "Submitting an assignment three minutes before the deadline",
    "Explaining to your parents why your CGPA dropped without mentioning how little you studied",
    "Starting a study group chat that becomes a meme group within an hour",
    "Writing a full essay the night before it's due and somehow getting a decent grade",
    "Realising the exam is tomorrow when you thought it was next week",
    "The silence in the exam hall that makes every thought disappear",
    "When the easy question is the one you skipped during revision",
    "Sitting next to someone writing fast and immediately panicking",
    "Thinking you failed and passing. Thinking you passed and failing.",
    "That one course that follows you every semester because you keep carryover",
    "Sacrificing sleep for a deadline and then sleeping through the submission",
    "The academic calendar meaning nothing until two weeks before exams",
    "Finding out the exam format changed and no one told you",
    "Blaming the lecturer for a personal failure to read",
    "Your brain working perfectly fine until the exam starts",
    "Reading in the dark because light went and you have no choice",
    "Paying for handouts and never opening them once",
    "The moment you walk out of an exam and remember everything you forgot inside",
    "Sharing one textbook between six people and expecting to all pass",
    "The relief of finishing your last paper and the immediate fear of results",
    "Promising yourself next semester will be different — every semester",
  ],
  "🏠 Family & Home Life": [
    "Being asked what you want to eat and then told that's not available",
    "Your mum calling you for something the moment you finally sit down",
    "Getting advice you didn't ask for about your life choices",
    "Being compared to a cousin who is doing well and you don't even know them",
    "Coming home late and the whole house becoming a courtroom",
    "Your parents asking about your grades the one week you have nothing good to say",
    "Being the first child and carrying every family expectation on your back",
    "Light going out right when you need to do something important",
    "Generator fuel being rationed like it's a national resource",
    "Being told to go and greet every visitor even when you're exhausted",
    "Your sibling touching your stuff and claiming they didn't",
    "The house Wi-Fi being treated like a government secret",
    "Chores that somehow only exist when you're the one relaxing",
    "Eating something you weren't supposed to and constructing a full alibi",
    "Your parents meeting your friends and suddenly becoming interrogators",
    "Family gatherings where every adult has a question about your future",
    "Being old enough to have opinions but still being shushed at the table",
    "The one relative who always has something negative to say about everything",
    "Doing house work perfectly and still being told you didn't do it right",
    "Your parents using the old days as a benchmark for your current struggles",
    "Noise restrictions that only apply to you and not to the TV at full volume",
    "Trying to sleep and someone in the house deciding it's time to cook",
    "Getting sent on an errand that turns into three hours of your life",
    "The passive aggression of a quiet house after a disagreement",
    "Your mum knowing something is wrong before you've said a single word",
    "Being told you eat too much then being asked why you look thin",
    "Privacy being a concept that doesn't exist in your family home",
    "Visitors arriving unannounced and you having to perform happiness",
    "Younger siblings getting away with things you would have been disciplined for",
    "The love in your house that nobody says out loud but you feel every day",
  ],
};

const ALL_VIBES = Object.keys(RELATABLE_IDEAS);
const GREEN = "#1a6e3c";
const RED = "#cc0000";

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function pickPlayer(arr, exclude = null) {
  const pool = exclude ? arr.filter(x => x.name !== exclude) : arr;
  return pickRandom(pool);
}
async function callClaude(prompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  return data.content.map(b => b.text || "").join("");
}

const cardStyle = { background: "#fff", borderRadius: 12, padding: 24, marginBottom: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" };
const labelStyle = { fontSize: 12, fontWeight: "bold", color: "#444", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 };
const selectStyle = { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, fontFamily: "sans-serif", background: "#fff" };

function ScriptView({ text }) {
  return (
    <div>
      {text.split("\n").filter(Boolean).map((line, i) => {
        const isLabel = /^(HOOK|BUILD|TWIST|OUTRO)/i.test(line.trim());
        return (
          <p key={i} style={{ fontWeight: isLabel ? 700 : 400, color: isLabel ? RED : "#1a1a1a", marginBottom: isLabel ? 4 : 8, marginTop: isLabel ? 16 : 0, fontFamily: "sans-serif", fontSize: 15 }}>
            {line}
          </p>
        );
      })}
    </div>
  );
}

export default function PitchBlitz() {
  const [mainTab, setMainTab] = useState("story");

  // Story generator
  const [hero, setHero] = useState(null);
  const [rival, setRival] = useState(null);
  const [scenario, setScenario] = useState("");
  const [story, setStory] = useState("");
  const [storyScript, setStoryScript] = useState("");
  const [storyLoading, setStoryLoading] = useState(false);
  const [storyPhase, setStoryPhase] = useState("");
  const [storyTab, setStoryTab] = useState("story");

  // Daily life ideas
  const [selectedVibe, setSelectedVibe] = useState(ALL_VIBES[0]);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [ideaPlayer, setIdeaPlayer] = useState(null);
  const [ideaScript, setIdeaScript] = useState("");
  const [ideaLoading, setIdeaLoading] = useState(false);

  // Thumbnail generator
  const [thumbPlayer, setThumbPlayer] = useState(null);
  const [thumbIdea, setThumbIdea] = useState(null);
  const [thumbVibe, setThumbVibe] = useState(ALL_VIBES[0]);
  const [thumbResult, setThumbResult] = useState(null);
  const [thumbLoading, setThumbLoading] = useState(false);

  const rivalOptions = hero ? ALL_FOOTBALLERS.filter(p => p.name !== hero.name) : ALL_FOOTBALLERS;

  async function generateStory() {
    if (!hero || !rival || !scenario) return;
    setStoryLoading(true); setStory(""); setStoryScript("");
    try {
      setStoryPhase("Writing the story...");
      const s = await callClaude(`Write a gripping fictional football short story (350–450 words) about ${hero.name} (${hero.club}) and ${rival.name} (${rival.club}) in ${scenario}.
Rules:
- Use real player names and clubs
- Build tension throughout
- End with a shocking dramatic twist the reader never sees coming
- Write in vivid, cinematic prose — no bullet points, no headers
- Pure narrative storytelling, emotional and punchy
Return ONLY the story. No title, no preamble.`);
      setStory(s); setStoryTab("story");
      setStoryPhase("Writing the Shorts script...");
      const sc = await callClaude(`Write a YouTube Shorts script (60–90 seconds when read aloud) about ${hero.name} (${hero.club}) vs ${rival.name} (${rival.club}) in ${scenario}.
Script format — use these exact labels:
HOOK (0–3s): [One punchy sentence that stops the scroll]
BUILD (3–45s): [Fast-paced narration building tension]
TWIST (45–55s): [The shocking reveal]
OUTRO (55–65s): [Call to action — follow, like, comment]
Style: UK slang mixed with US hype energy. Short sentences. Maximum drama.
Return ONLY the script with its labels.`);
      setStoryScript(sc);
    } catch { setStory("Error generating. Please try again."); }
    setStoryPhase(""); setStoryLoading(false);
  }

  function randomizeStory() {
    const h = pickPlayer(ALL_FOOTBALLERS);
    const r = pickPlayer(ALL_FOOTBALLERS, h.name);
    setHero(h); setRival(r); setScenario(pickRandom(STORY_SCENARIOS));
    setStory(""); setStoryScript("");
  }

  async function generateIdeaScript() {
    if (!selectedIdea || !ideaPlayer) return;
    setIdeaLoading(true); setIdeaScript("");
    try {
      const result = await callClaude(`Write a YouTube Shorts script (60–90 seconds when read aloud) for the Pitch Blitz channel.

Concept: Place ${ideaPlayer.name} (${ideaPlayer.club}, ${ideaPlayer.nation}) in this ordinary, relatable daily life situation:
"${selectedIdea}"

The twist: he's a world-famous footballer but he's experiencing this like a completely normal person — no fame, no money saving him, just raw human life.

Script format — use these exact labels:
HOOK (0–3s): [One punchy line that stops the scroll. Name the player immediately.]
BUILD (3–45s): [Short punchy sentences. Paint the scene. Make it feel real and human. Use the footballer's known personality/traits naturally.]
TWIST (45–55s): [An emotional or funny turn. Could be something only a footballer would do in this situation, or something shockingly ordinary about them.]
OUTRO (55–65s): [Call to action — follow Pitch Blitz, like, comment who they'd want to see next]

Style: Raw, cinematic, emotional. UK slang mixed with Nigerian energy. No fluff.
Return ONLY the script with its labels.`);
      setIdeaScript(result);
    } catch { setIdeaScript("Error generating script. Please try again."); }
    setIdeaLoading(false);
  }

  async function generateThumbnail() {
    if (!thumbPlayer || !thumbIdea) return;
    setThumbLoading(true); setThumbResult(null);
    try {
      const raw = await callClaude(`You are a YouTube thumbnail strategist for a football Shorts channel called Pitch Blitz. The channel places top footballers in relatable everyday human moments.

Generate a CLICKBAIT thumbnail idea for this combination:
Footballer: ${thumbPlayer.name} (${thumbPlayer.club}, ${thumbPlayer.nation})
Scene: "${thumbIdea}"

Return a JSON object with these exact keys:
{
  "mainText": "The big bold text on the thumbnail (3-5 words MAX, all caps, shocking/emotional)",
  "subText": "Smaller secondary text beneath it (optional, 4-6 words)",
  "playerExpression": "Describe the exact facial expression/body language the player photo should show",
  "layout": "Describe the visual layout — where the player is, text placement, any graphic elements",
  "colorScheme": "2-3 hex color codes with labels e.g. Background: #000000, Text: #FF0000, Accent: #FFFF00",
  "clickbaitScore": "Rate the hook strength 1-10 and explain why in one sentence",
  "whyItWorks": "One sentence on why this thumbnail would stop a scroll",
  "alternativeText": "One alternative main text option if the creator wants variety"
}

Rules:
- mainText must feel SHOCKING, EMOTIONAL, or create a strong curiosity gap
- Think FutVibes / BallBlitz energy — dramatic, human, punchy
- The thumbnail should make someone think 'wait what happened??'
- Return ONLY valid JSON, no extra text`);

      const clean = raw.replace(/```json|```/g, "").trim();
      setThumbResult(JSON.parse(clean));
    } catch (e) {
      setThumbResult({ error: "Could not generate. Please try again." });
    }
    setThumbLoading(false);
  }

  const canGenerate = selectedIdea && ideaPlayer;
  const canThumb = thumbPlayer && thumbIdea;

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#f9f5f0", minHeight: "100vh", padding: "24px 16px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 36 }}>⚽</div>
          <h1 style={{ fontSize: 26, fontWeight: "bold", color: "#1a1a1a", margin: "6px 0 2px" }}>PITCH BLITZ</h1>
          <p style={{ color: "#999", fontSize: 13, fontFamily: "sans-serif" }}>Content Generator · Pitch Blitz Edition</p>
        </div>

        {/* Main Nav */}
        <div style={{ display: "flex", background: "#fff", borderRadius: 10, padding: 4, marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          {[{ key: "story", label: "⚽ Story" }, { key: "ideas", label: "💡 Ideas" }, { key: "thumb", label: "🖼️ Thumbnail" }].map(t => (
            <button key={t.key} onClick={() => setMainTab(t.key)} style={{ flex: 1, padding: "10px 0", border: "none", borderRadius: 8, background: mainTab === t.key ? GREEN : "transparent", color: mainTab === t.key ? "#fff" : "#888", fontFamily: "sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── STORY GENERATOR ── */}
        {mainTab === "story" && (
          <>
            <div style={cardStyle}>
              <div sty
