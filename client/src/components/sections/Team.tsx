// CoFounder Kollective — Team Section
// White background, two-column team cards with pink avatar squares

import { useReveal } from '../../hooks/useReveal';

const team = [
  {
    initials: 'GR',
    name: 'Gina Ledniak',
    role: 'Brand, Marketing & Ecommerce',
    bio: 'Gina has spent over a decade building, scaling, and exiting ecommerce brands. Her expertise spans social media strategy, performance marketing, brand architecture, and the art of turning a product into a movement. She has scaled brands from zero to eight figures and knows exactly what levers to pull at every stage of growth.',
    skills: ['Brand Strategy', 'Social Media', 'Performance Marketing', 'Business Exits'],
  },
  {
    initials: 'LR',
    name: 'Libbie Ray',
    role: 'AI Strategy, Operations & Technology',
    bio: 'Libbie brings 20 years of experience in event production and technology, combined with deep expertise in AI business strategy and automation. She builds the operational backbone that allows brands to scale without breaking — from AI-powered customer systems to ecommerce infrastructure and everything in between.',
    skills: ['AI Automation', 'Ecommerce Build', 'Operations', 'Event Technology'],
  },
];

export default function Team() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 py-28 bg-white transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <div className="section-label">The Team</div>
          <h2
            className="font-display font-black uppercase leading-none text-[#111]"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
          >
            Two Women.
            <br />
            <span className="font-serif-italic" style={{ color: '#FF2D78', fontSize: '0.85em', textTransform: 'none', letterSpacing: 0 }}>
              One Mission.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3px]">
          {team.map((t) => (
            <div
              key={t.name}
              className="px-10 py-10 border border-[#e8e8e8] transition-all duration-200 group"
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF2D78'; e.currentTarget.style.background = '#fffafc'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.background = '#fff'; }}
            >
              <div className="flex items-center gap-5 mb-7">
                <div
                  className="w-16 h-16 flex items-center justify-center font-display font-black text-2xl text-white flex-shrink-0"
                  style={{ background: '#FF2D78' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-black text-[1.4rem] uppercase tracking-[0.03em] text-[#111]">
                    {t.name}
                  </div>
                  <div className="font-display font-semibold text-[0.72rem] tracking-[0.18em] uppercase mt-0.5" style={{ color: '#FF2D78' }}>
                    {t.role}
                  </div>
                </div>
              </div>
              <p className="text-[0.9rem] leading-[1.8]" style={{ color: '#555' }}>
                {t.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.skills.map((s) => (
                  <span
                    key={s}
                    className="font-display font-bold text-[0.65rem] tracking-[0.15em] uppercase px-3 py-1.5"
                    style={{ background: '#ffe0ec', color: '#FF2D78' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
