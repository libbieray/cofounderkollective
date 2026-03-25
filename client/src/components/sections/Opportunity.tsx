// CoFounder Kollective — Who This Is For / Not For (Sections 3 & 4)
// Background: WHITE — sits after pink ticker, before black HowItWorks

import { useReveal } from '../../hooks/useReveal';

const forItems = [
  'Have a product with proven sales or demand',
  'Know the product works, but need help scaling it',
  'Don\'t have the team or systems to grow properly',
  'Don\'t want to build everything alone',
  'Want execution, not just advice',
];

const notForItems = [
  'You only have an idea (no product yet)',
  'You haven\'t validated demand',
  'You\'re looking for funding without execution',
  'You want to stay fully hands-off',
  'You\'re not open to a partnership model',
];

export default function Opportunity() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 py-24 transition-all duration-700"
      style={{
        background: '#fff',
        borderTop: '1px solid #e8e8e8',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* FOR */}
          <div style={{ background: '#fafaf8', border: '1px solid #e8e8e8', padding: '40px 48px' }}>
            <div className="section-label">Who This Is For</div>
            <h2
              className="font-display font-black uppercase leading-none text-[#111] mb-8"
              style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
            >
              This is for{' '}
              <span style={{ color: '#FF2D78' }}>founders</span>{' '}
              who:
            </h2>
            <ul className="flex flex-col">
              {forItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b"
                  style={{ borderBottomColor: '#ececec' }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-white text-[0.55rem]"
                    style={{ background: '#FF2D78', marginTop: '2px' }}
                  >
                    ✓
                  </span>
                  <span className="text-[0.95rem] leading-[1.65]" style={{ color: '#333' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* NOT FOR — dark card sits within the white section for contrast without a full black section */}
          <div style={{ background: '#1A1A1A', padding: '40px 48px' }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-5 h-0.5" style={{ background: 'rgba(255,255,255,0.25)' }} />
              <span className="font-display font-bold text-[0.72rem] tracking-[0.28em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Important Filter
              </span>
            </div>
            <h2
              className="font-display font-black uppercase leading-none text-white mb-8"
              style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
            >
              This is{' '}
              <span
                className="font-serif-italic"
                style={{ fontSize: '0.95em', textTransform: 'none', letterSpacing: 0, color: 'rgba(255,255,255,0.45)' }}
              >
                not
              </span>{' '}
              for you if:
            </h2>
            <ul className="flex flex-col">
              {notForItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b"
                  style={{ borderBottomColor: 'rgba(255,255,255,0.07)' }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[0.55rem]"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}
                  >
                    ✕
                  </span>
                  <span className="text-[0.95rem] leading-[1.65]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
