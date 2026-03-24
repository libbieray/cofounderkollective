// CoFounder Kollective — Footer
// Charcoal background, pink top border, clean layout

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-16 py-14 border-t-[3px]"
      style={{ background: '#1A1A1A', borderTopColor: '#FF2D78' }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="font-display font-black text-base tracking-widest text-white px-2 py-0.5"
              style={{ background: '#FF2D78' }}
            >
              CK
            </span>
            <span className="font-display font-black text-[1.1rem] tracking-[0.08em] text-white uppercase">
              CoFounder Kollective
            </span>
          </div>
          <p className="text-[0.75rem] tracking-[0.12em] uppercase mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Women-Led · Brand Growth Partners
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-2">
          <p className="text-[0.8rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} CoFounder Kollective. All rights reserved.
          </p>
          <a
            href="mailto:hello@cofounderkollective.com"
            className="text-[0.8rem] no-underline transition-colors duration-200"
            style={{ color: '#FF2D78' }}
            onMouseEnter={e => e.currentTarget.style.color = '#ff6fa3'}
            onMouseLeave={e => e.currentTarget.style.color = '#FF2D78'}
          >
            hello@cofounderkollective.com
          </a>
        </div>
      </div>
    </footer>
  );
}
