export default (x: number, y: number, el: SVGAElement) => {
  const CTM = el.getScreenCTM();

  if (!CTM) return { x: 0, y: 0 };

  return {
    x: (x - CTM.e) / CTM.a,
    y: (y - CTM.f) / CTM.d,
  }
}