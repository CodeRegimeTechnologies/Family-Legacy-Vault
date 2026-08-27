import { useState } from "react";

const MEMORIES = [
  {
    title: "Grandpa's 70th Birthday",
    date: "May 12, 2024",
    type: "video",
    img: "https://images.unsplash.com/photo-1586498024141-1940debde48d?w=400&h=300&fit=crop&auto=format",
  },
  {
    title: "Goa Family Trip",
    date: "Apr 22, 2024",
    type: "photo",
    img: "https://images.unsplash.com/flagged/photo-1568264634208-142328cb107d?w=400&h=300&fit=crop&auto=format",
  },
  {
    title: "Ananya's Graduation",
    date: "Apr 15, 2024",
    type: "video",
    img: "https://images.unsplash.com/photo-1623461487986-9400110de28e?w=400&h=300&fit=crop&auto=format",
  },
  {
    title: "Dad's Childhood Story",
    date: "Mar 30, 2024",
    type: "voice",
    img: "https://images.unsplash.com/photo-1602102343512-13a7022f10a3?w=400&h=300&fit=crop&auto=format",
  },
];

const VOICE_STORIES = [
  {
    title: "Aaji's Recipe Secret",
    author: "By Aaji",
    date: "May 10, 2024",
    duration: "02:45",
    avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=80&h=80&fit=crop&auto=format",
  },
  {
    title: "Our First Home",
    author: "By Dad",
    date: "Apr 28, 2024",
    duration: "03:12",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
  },
  {
    title: "School Days Memories",
    author: "By Mama",
    date: "Apr 20, 2024",
    duration: "04:08",
    avatar: "https://images.unsplash.com/photo-1581841064838-a470c740e8ee?w=80&h=80&fit=crop&auto=format",
  },
];

const EVENTS = [
  {
    title: "Mom's Birthday",
    date: "May 12 • All day",
    color: "#7c3aed",
    avatars: [
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=40&h=40&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
      "https://images.unsplash.com/photo-1581841064838-a470c740e8ee?w=40&h=40&fit=crop",
    ],
    extra: 4,
    icon: "🎁",
  },
  {
    title: "Family Reunion",
    date: "May 18 • 10:00 AM",
    color: "#059669",
    avatars: [
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=40&h=40&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
      "https://images.unsplash.com/photo-1581841064838-a470c740e8ee?w=40&h=40&fit=crop",
    ],
    extra: 6,
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Goa Trip",
    date: "May 25 – May 28",
    color: "#ea580c",
    avatars: [
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=40&h=40&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
      "https://images.unsplash.com/photo-1581841064838-a470c740e8ee?w=40&h=40&fit=crop",
    ],
    extra: 3,
    icon: "🏖️",
  },
];

const NAV_ITEMS = [
  { label: "Home", active: true, icon: HomeIcon },
  { label: "Memories", active: false, icon: PhotoIcon },
  { label: "Calendar", active: false, icon: CalendarIcon },
  { label: "People", active: false, icon: PeopleIcon },
  { label: "Stories", active: false, icon: StoriesIcon },
  { label: "Voice Notes", active: false, icon: MicIcon },
  { label: "Albums", active: false, icon: AlbumsIcon },
  { label: "Shared Links", active: false, icon: LinkIcon },
  { label: "Settings", active: false, icon: SettingsIcon },
];

const MAY_2024 = [
  [29, 30, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 1, 2],
];

const HIGHLIGHTED = { 12: "primary", 18: "green", 25: "orange" };

export default function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [activeNav, setActiveNav] = useState("Home");
  const [playingStory, setPlayingStory] = useState<number | null>(null);

  return (
    <div className="flex h-full overflow-hidden bg-[#f4f4f8]">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 shrink-0 bg-white border-r border-gray-100 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5">
          <div className="w-10 h-10 rounded-xl bg-[#7c3aed] flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" opacity=".7"/>
              <path d="M10 13H8v-3H5v-2h3V5h2v3h3v2h-3v3z" fill="white"/>
            </svg>
          </div>
          <div>
            <div className="text-sm font-800 text-gray-900 leading-tight" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}>Family</div>
            <div className="text-sm font-800 text-gray-900 leading-tight" style={{ fontWeight: 800 }}>Legacy Vault</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 px-3 flex-1">
          {NAV_ITEMS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-600 transition-all ${
                activeNav === label
                  ? "bg-[#ede9fe] text-[#7c3aed]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
              style={{ fontWeight: activeNav === label ? 700 : 600 }}
            >
              <Icon active={activeNav === label} />
              {label}
            </button>
          ))}
        </nav>

        {/* Storage widget */}
        <div className="mx-3 mt-4 p-3 bg-gray-50 rounded-xl">
          <div className="text-xs text-gray-500 font-600 mb-1">Storage Used</div>
          <div className="text-sm font-700 text-gray-800">45.2 GB of 200 GB</div>
          <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[22%] bg-[#7c3aed] rounded-full" />
          </div>
          <div className="text-xs text-gray-400 mt-1">22%</div>
        </div>

        {/* Plan widget */}
        <div className="mx-3 mt-3 p-3 bg-gray-50 rounded-xl">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500 font-600">Your Plan</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </div>
          <div className="text-sm font-700 text-[#7c3aed]">Family Premium</div>
          <div className="text-xs text-gray-500 mt-1">Uploads this month</div>
          <div className="text-sm font-700 text-gray-800">12.5 GB of 50 GB</div>
          <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[25%] bg-gray-400 rounded-full" />
          </div>
        </div>

        <div className="mx-3 mt-3">
          <button className="w-full py-2.5 rounded-xl bg-[#7c3aed] text-white text-sm font-700 hover:bg-[#6d28d9] transition-colors">
            Upgrade Plan
          </button>
        </div>

        {/* Forever Access */}
        <div className="mx-3 mt-3 mb-5 flex items-start gap-2.5 p-3 bg-[#f0fdf4] rounded-xl border border-[#bbf7d0]">
          <div className="mt-0.5 w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div>
            <div className="text-xs font-700 text-gray-800">Forever Access</div>
            <div className="text-xs text-gray-500 mt-0.5">Your memories are yours forever.</div>
            <button className="text-xs text-[#7c3aed] font-700 mt-1 hover:underline">Learn more</button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-5 lg:px-8 py-3 flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-3 flex-1">
            <img
              src="https://images.unsplash.com/photo-1666819256222-7034f91340a7?w=80&h=80&fit=crop&auto=format"
              alt="Family photo"
              className="w-11 h-11 rounded-full object-cover border-2 border-[#ede9fe]"
            />
            <div>
              <div className="text-base font-800 text-gray-900" style={{ fontWeight: 800 }}>
                Good morning, Arjun! 👋
              </div>
              <div className="text-xs text-gray-400 font-500">Where family stories live forever</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Notifications */}
            <button className="relative w-9 h-9 rounded-full hover:bg-gray-50 flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-700 rounded-full flex items-center justify-center">3</span>
            </button>
            {/* Search */}
            <button className="w-9 h-9 rounded-full hover:bg-gray-50 flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            {/* Avatar */}
            <button className="flex items-center gap-1.5">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format"
                alt="Arjun"
                className="w-9 h-9 rounded-full object-cover"
              />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 lg:px-8 py-5 space-y-5">

          {/* Privacy banner */}
          {bannerVisible && (
            <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#7c3aed] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-700 text-gray-900">Private. Secure. Yours Forever.</div>
                <div className="text-xs text-gray-500 mt-0.5">End-to-end encrypted so only your family can access what matters most.</div>
              </div>
              <button className="hidden sm:block px-4 py-1.5 rounded-lg border border-[#7c3aed] text-[#7c3aed] text-xs font-700 hover:bg-[#ede9fe] transition-colors shrink-0">
                Learn more
              </button>
              <button onClick={() => setBannerVisible(false)} className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
          )}

          {/* Quick actions */}
          <div className="grid grid-cols-5 gap-3">
            {[
              { label: "Upload Photos / Videos", color: "#3b82f6", bg: "#eff6ff", icon: <UploadIcon /> },
              { label: "Record Voice Story", color: "#7c3aed", bg: "#ede9fe", icon: <MicFillIcon /> },
              { label: "Add Memory", color: "#22c55e", bg: "#f0fdf4", icon: <PlusSquareIcon /> },
              { label: "Create Album", color: "#ea580c", bg: "#fff7ed", icon: <AlbumFillIcon /> },
              { label: "Invite Family", color: "#06b6d4", bg: "#ecfeff", icon: <InviteIcon /> },
            ].map(({ label, color, bg, icon }) => (
              <button
                key={label}
                className="flex flex-col items-center gap-2.5 p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                  <div style={{ color }}>{icon}</div>
                </div>
                <span className="text-xs font-600 text-gray-700 text-center leading-tight">{label}</span>
              </button>
            ))}
          </div>

          {/* Recent Memories */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-800 text-gray-900" style={{ fontWeight: 800 }}>Recent Memories</h2>
              <button className="text-sm font-600 text-[#7c3aed] hover:underline">View all</button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {MEMORIES.map((m) => (
                <div key={m.title} className="group relative rounded-2xl overflow-hidden bg-gray-100 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <img
                    src={m.img}
                    alt={m.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* type badge */}
                  <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    {m.type === "video" && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    )}
                    {m.type === "photo" && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    )}
                    {m.type === "voice" && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                    )}
                  </div>
                  <div className="p-2.5">
                    <div className="text-xs font-700 text-gray-900 truncate">{m.title}</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">{m.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Calendar + Voice Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Family Calendar */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-800 text-gray-900" style={{ fontWeight: 800 }}>Family Calendar</h3>
                <button className="text-xs font-600 text-[#7c3aed] hover:underline">View calendar</button>
              </div>

              {/* Month nav */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-700 text-gray-800">May 2024</span>
                <div className="flex gap-1">
                  <button className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 mb-1">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <div key={d} className="text-center text-[10px] font-600 text-gray-400 py-1">{d}</div>
                ))}
              </div>

              {/* Days */}
              <div className="space-y-0.5">
                {MAY_2024.map((week, wi) => (
                  <div key={wi} className="grid grid-cols-7">
                    {week.map((day, di) => {
                      const isCurrentMonth = !(wi === 0 && day > 7) && !(wi === 4 && day < 10);
                      const highlight = HIGHLIGHTED[day as keyof typeof HIGHLIGHTED];
                      const isToday = day === 12 && isCurrentMonth;
                      const isGreen = day === 18 && isCurrentMonth;
                      const isOrange = day === 25 && isCurrentMonth;

                      return (
                        <button
                          key={`${wi}-${di}`}
                          className={`flex items-center justify-center text-xs h-7 w-7 mx-auto rounded-full transition-colors font-600
                            ${!isCurrentMonth ? "text-gray-300" : "text-gray-700 hover:bg-gray-100"}
                            ${isToday ? "bg-[#7c3aed] text-white hover:bg-[#6d28d9]" : ""}
                            ${isGreen ? "bg-[#dcfce7] text-[#16a34a]" : ""}
                            ${isOrange ? "bg-[#ffedd5] text-[#ea580c]" : ""}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Events */}
              <div className="mt-4 space-y-2">
                {EVENTS.map((ev) => (
                  <div key={ev.title} className="flex items-center gap-2.5 py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0" style={{ background: ev.color + "20" }}>
                      {ev.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-700 text-gray-800 truncate">{ev.title}</div>
                      <div className="text-[11px] text-gray-400">{ev.date}</div>
                    </div>
                    <div className="flex -space-x-1.5 shrink-0">
                      {ev.avatars.map((a, i) => (
                        <img key={i} src={a} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                      ))}
                      <div className="w-5 h-5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-[9px] font-700 text-gray-500">
                        +{ev.extra}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-dashed border-gray-200 text-xs font-600 text-gray-400 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                Add Event
              </button>
            </div>

            {/* Latest Voice Stories */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-800 text-gray-900" style={{ fontWeight: 800 }}>Latest Voice Stories</h3>
                <button className="text-xs font-600 text-[#7c3aed] hover:underline">View all</button>
              </div>

              <div className="space-y-3">
                {VOICE_STORIES.map((s, i) => (
                  <div key={s.title} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <img src={s.avatar} alt={s.author} className="w-10 h-10 rounded-full object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-700 text-gray-900">{s.title}</div>
                      <div className="text-[11px] text-gray-400">{s.author} • {s.date}</div>
                      {/* Waveform */}
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <button
                          onClick={() => setPlayingStory(playingStory === i ? null : i)}
                          className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center shrink-0 hover:bg-[#6d28d9] transition-colors"
                        >
                          {playingStory === i ? (
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                          ) : (
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                          )}
                        </button>
                        <Waveform active={playingStory === i} />
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <button className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-gray-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
                      </button>
                      <span className="text-[11px] text-gray-400 font-600">{s.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#ede9fe] text-[#7c3aed] text-xs font-700 hover:bg-[#ede9fe] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                </svg>
                Record a Story
              </button>
            </div>
          </div>

          {/* Footer banners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5">
            <div className="bg-[#f0fdf4] rounded-2xl p-5 flex items-start gap-4 border border-[#bbf7d0]">
              <div className="w-12 h-12 rounded-xl bg-[#22c55e] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-800 text-gray-900" style={{ fontWeight: 800 }}>You Own Your Memories</div>
                <div className="text-xs text-gray-500 mt-1 leading-relaxed">Even if you cancel your plan, you will always have access to your memories.</div>
                <button className="mt-3 px-4 py-1.5 rounded-lg border border-[#22c55e] text-[#16a34a] text-xs font-700 hover:bg-[#dcfce7] transition-colors">
                  Export Data
                </button>
              </div>
            </div>

            <div className="bg-[#eff6ff] rounded-2xl p-5 flex items-start gap-4 border border-[#bfdbfe]">
              <div className="w-12 h-12 rounded-xl bg-[#3b82f6] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/>
                  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-800 text-gray-900" style={{ fontWeight: 800 }}>Download Anywhere</div>
                <div className="text-xs text-gray-500 mt-1 leading-relaxed">Access your memories offline anytime, anywhere.</div>
                <button className="mt-3 px-4 py-1.5 rounded-lg border border-[#3b82f6] text-[#2563eb] text-xs font-700 hover:bg-[#dbeafe] transition-colors">
                  Go to Downloads
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 flex items-center justify-around z-50">
        <button className="flex flex-col items-center gap-0.5 text-[#7c3aed]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          <span className="text-[10px] font-700">Home</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span className="text-[10px] font-600">Memories</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-[#7c3aed] flex items-center justify-center -mt-5 shadow-lg shadow-violet-200">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
        </button>
        <button className="flex flex-col items-center gap-0.5 text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span className="text-[10px] font-600">Calendar</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          <span className="text-[10px] font-600">More</span>
        </button>
      </nav>
    </div>
  );
}

function Waveform({ active }: { active: boolean }) {
  const heights = [3, 5, 8, 4, 9, 5, 3, 7, 4, 6, 3, 8, 5, 4, 7, 3, 5, 8, 4, 6, 3, 7];
  return (
    <div className="flex items-center gap-[2px] flex-1">
      {heights.map((h, i) => (
        <div
          key={i}
          className={`rounded-full transition-colors ${active ? "bg-[#7c3aed]" : "bg-gray-200"}`}
          style={{ width: 2, height: h }}
        />
      ))}
    </div>
  );
}

// Icons
function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? "#7c3aed" : "none"} stroke={active ? "#7c3aed" : "#9ca3af"} strokeWidth="2">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  );
}
function PhotoIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#9ca3af"} strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
    </svg>
  );
}
function CalendarIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#9ca3af"} strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}
function PeopleIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#9ca3af"} strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function StoriesIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#9ca3af"} strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}
function MicIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#9ca3af"} strokeWidth="2">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  );
}
function AlbumsIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#9ca3af"} strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"/>
    </svg>
  );
}
function LinkIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#9ca3af"} strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  );
}
function SettingsIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#9ca3af"} strokeWidth="2">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
    </svg>
  );
}
function MicFillIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V23h2v-2.06A9 9 0 0 0 21 12v-2h-2z"/>
    </svg>
  );
}
function PlusSquareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  );
}
function AlbumFillIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2"/><circle cx="8" cy="14" r="2"/><polyline points="16 10 21 15 16 20"/>
      <path d="M16 3H8"/>
    </svg>
  );
}
function InviteIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
    </svg>
  );
}
