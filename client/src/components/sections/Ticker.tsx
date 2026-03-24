// CoFounder Kollective — Ticker Strip
// Solid hot pink bar with scrolling brand keywords

const items = [
  'Product Partnership', 'Ecommerce Scaling', 'AI-Powered Operations',
  'Brand Architecture', 'Women-Founded', 'Equity-Based Partnership',
  'No Upfront Fees', 'Real Products · Real Demand',
];

export default function Ticker() {
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden py-3.5" style={{ background: '#FF2D78' }}>
      <div className="flex ticker-animate whitespace-nowrap" style={{ width: 'max-content' }}>
        {repeated.map((item, i) => (
          <span key={i} className="font-display font-bold text-[0.82rem] tracking-[0.2em] uppercase text-white inline-flex items-center gap-8 px-8">
            {item}
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.4rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
