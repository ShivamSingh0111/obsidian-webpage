// Film-grain overlay: one fixed SVG-noise layer over the page.
// Static texture (no animation) so it is safe under reduced-motion.
export default function Grain() {
  return <div className="grain-overlay" aria-hidden="true" />
}
