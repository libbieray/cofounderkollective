// CoFounder Kollective — Navbar
// Electric Bold design: white bar, CK pink badge, hot pink Apply Now CTA

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 bg-white/97 border-b border-[#e8e8e8] backdrop-blur-md">
      <a href="#" className="flex items-center gap-3 no-underline">
        <span
          className="font-display font-black text-xl tracking-widest text-white px-2 py-0.5"
          style={{ background: '#FF2D78', letterSpacing: '0.08em' }}
        >
          CK
        </span>
        <div>
          <div className="font-display font-black text-[1.15rem] tracking-[0.08em] text-[#111] uppercase leading-none">
            CoFounder Kollective
          </div>
          <div className="text-[0.58rem] tracking-[0.18em] text-[#888] uppercase mt-0.5 font-normal">
            Brand Growth Partners
          </div>
        </div>
      </a>
      <a
        href="#apply"
        className="font-display font-bold text-[0.82rem] tracking-[0.15em] uppercase text-white px-7 py-3 transition-colors duration-200 no-underline"
        style={{ background: '#FF2D78' }}
        onMouseEnter={e => (e.currentTarget.style.background = '#d91f60')}
        onMouseLeave={e => (e.currentTarget.style.background = '#FF2D78')}
      >
        Apply Now
      </a>
    </nav>
  );
}
