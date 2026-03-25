// CoFounder Kollective — What We Take Over + How It Works (Sections 5 & 6)
// Sec5: BLACK — strong contrast after white Opportunity section
// Sec6: WHITE — clean process steps, breathable

import { useReveal } from '../../hooks/useReveal';

const execItems = [
  { icon: '◎', label: 'Branding & positioning' },
  { icon: '▲', label: 'Paid advertising & growth' },
  { icon: '⬡', label: 'E-commerce & backend systems' },
  { icon: '✦', label: 'Business operations & systems' },
  { icon: '◈', label: 'Plugging business gaps' },
];

const steps = [
  {
    num: '01',
    title: 'Apply',
    body: 'Submit your product and proof of demand.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" stroke="white" strokeWidth="1.5"/>
        <path d="M7 10h6M10 7v6" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'We Assess',
    body: 'We review your product, traction, and scalability.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3" stroke="white" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="1" fill="white"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'We Partner & Scale',
    body: 'We take over execution and fund everything required to grow — branding, marketing, operations, and infrastructure.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M4 16L10 4l6 12" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/>
        <path d="M6.5 12h7" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal();
  const { ref: ref2, visible: visible2 } = useReveal();

  return (
    <>
      {/* Section 5: What We Take Over — BLACK */}
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="px-6 md:px-16 py-24 transition-all duration-700"
        style={{
          background: '#111111',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="section-label">What We Take Over</div>
            <h2
              className="font-display font-black uppercase leading-none text-white"
              style={{ fontSize: 'clamp(2.5rem, 4.2vw, 4.2rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
            >
              We take over{' '}
              <span style={{ color: '#FF2D78' }}>execution</span>
            </h2>
            <div
              className="mt-6 pl-4 border-l-[3px]"
              style={{ borderLeftColor: '#FF2D78' }}
            >
              <p className="text-[1.05rem] leading-[1.7] font-semibold" style={{ color: '#fff' }}>
                We don't advise. We execute.
              </p>
            </div>
            <p className="mt-4 text-[0.95rem] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Every function below is handled by our team — not outsourced to you as advice.
            </p>
          </div>
          <div className="flex flex-col gap-[3px]">
            {execItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 px-7 py-5 border-l-[3px] transition-all duration-200"
                style={{ background: '#1A1A1A', borderLeftColor: 'transparent' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderLeftColor = '#FF2D78';
                  e.currentTarget.style.background = '#222';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderLeftColor = 'transparent';
                  e.currentTarget.style.background = '#1A1A1A';
                }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center text-white text-[0.75rem] flex-shrink-0"
                  style={{ background: '#FF2D78' }}
                >
                  {item.icon}
                </div>
                <span className="font-display font-bold text-[0.95rem] uppercase tracking-[0.06em]" style={{ color: '#fff' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: How It Works — WHITE */}
      <section
        id="how"
        ref={ref2 as React.RefObject<HTMLElement>}
        className="px-6 md:px-16 py-24 transition-all duration-700"
        style={{
          background: '#fff',
          borderTop: '1px solid #e8e8e8',
          opacity: visible2 ? 1 : 0,
          transform: visible2 ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
            <div>
              <div className="section-label">The Process</div>
              <h2
                className="font-display font-black uppercase leading-none text-[#111]"
                style={{ fontSize: 'clamp(2.5rem, 4.2vw, 4.2rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
              >
                How it{' '}
                <span style={{ color: '#FF2D78' }}>works</span>
              </h2>
            </div>
            <p className="text-[1rem] leading-[1.8]" style={{ color: '#555' }}>
              Three clear steps from application to active partnership. We move fast when we see the right fit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3px]">
            {steps.map((s) => (
              <div
                key={s.num}
                className="relative px-8 py-11 border-t-[3px] transition-all duration-200"
                style={{ background: '#fafaf8', borderTopColor: '#e8e8e8' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderTopColor = '#FF2D78';
                  e.currentTarget.style.background = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderTopColor = '#e8e8e8';
                  e.currentTarget.style.background = '#fafaf8';
                }}
              >
                <div
                  className="absolute top-3 right-5 font-display font-black leading-none pointer-events-none select-none"
                  style={{ fontSize: '5rem', color: '#FF2D78', opacity: 0.07, letterSpacing: '-0.04em' }}
                >
                  {s.num}
                </div>
                <div className="w-9 h-9 flex items-center justify-center text-white mb-6" style={{ background: '#FF2D78' }}>
                  {s.icon}
                </div>
                <div className="font-display font-bold text-[0.7rem] tracking-[0.2em] uppercase mb-2" style={{ color: '#FF2D78' }}>
                  Step {s.num}
                </div>
                <h3 className="font-display font-bold text-[1.3rem] uppercase tracking-[0.02em] text-[#111] mb-3">
                  {s.title}
                </h3>
                <p className="text-[0.88rem] leading-[1.75]" style={{ color: '#555' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-3 px-8 py-6 border-l-[3px] flex items-start gap-4"
            style={{ borderLeftColor: '#FF2D78', background: '#fff8fb' }}
          >
            <span
              className="flex-shrink-0 font-display font-black text-[0.7rem] tracking-[0.12em] uppercase px-2 py-1 text-white mt-0.5"
              style={{ background: '#FF2D78' }}
            >
              Note
            </span>
            <p className="text-[0.9rem] leading-[1.7]" style={{ color: '#333' }}>
              <strong>We don't provide cash to founders.</strong> We fund and build the business itself.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
