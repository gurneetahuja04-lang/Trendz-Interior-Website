const items = [
  '10,000+ Designs',
  '✦',
  'Premium Quality',
  '✦',
  'Pan-India Delivery',
  '✦',
  'Expert Guidance',
  '✦',
  'Residential & Commercial',
  '✦',
  'Exclusive Collections',
  '✦',
  'Trusted Since Decades',
  '✦',
  'New Delhi\'s #1 Wallpaper Destination',
  '✦',
]

export default function MarqueeStrip({ light = false }) {
  const doubled = [...items, ...items]
  return (
    <div className={`overflow-hidden py-4 ${light ? 'bg-offwhite' : 'bg-dark'}`}>
      <div className="flex whitespace-nowrap animate-marquee gap-10 w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-sm font-body font-medium tracking-[0.15em] uppercase ${
              light ? 'text-dark' : 'text-gold'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
