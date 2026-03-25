// CoFounder Kollective — Positioning Strip (Updated)
// Updated copy: "Built for founders with a product that's already working."

export default function Ticker() {
  const message = 'Built for founders with a product that\'s already working. If there\'s proven demand, we build the machine around it.';
  const items = [message, message, message, message];

  return (
    <div className="overflow-hidden py-4 border-y-0" style={{ background: '#FF2D78' }}>
      <div className="flex ticker-animate whitespace-nowrap" style={{ width: 'max-content' }}>
        {items.map((item, i) => (
          <span key={i} className="font-display font-bold text-[0.85rem] tracking-[0.12em] uppercase text-white inline-flex items-center gap-10 px-10">
            {item}
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.45rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
