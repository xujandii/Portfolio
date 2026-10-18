export function ValuesArtwork() {
  return (
    <figure className="values-artwork">
      <svg viewBox="0 0 260 180" fill="none" role="img" aria-labelledby="values-artwork-title">
        <title id="values-artwork-title">
          A small sprout nurtured by connected circles of care
        </title>
        <ellipse cx="126" cy="101" rx="73" ry="63" className="values-wash" />
        <path
          d="M62 61C30 79 25 125 66 146c33 17 96 13 136-15 33-24 22-65-13-79-36-15-99-8-127 9Z"
          className="values-loop"
        />
        <path d="M48 106c16 29 78 46 137 11 19-11 30-29 28-47" className="values-thread" />
        <path d="M128 128c0-27-1-51 14-76" className="values-stem" />
        <path d="M131 98c-26 1-44-14-46-36 27-2 46 12 46 36Z" className="values-leaf" />
        <path d="M132 83c-2-24 12-41 39-43-1 25-16 40-39 43Z" className="values-leaf" />
        <path d="m102 78 29 20m17-36-16 21" className="values-stem" />
        <circle cx="48" cy="106" r="6" className="values-node" />
        <circle cx="202" cy="131" r="5" className="values-node" />
        <circle cx="91" cy="50" r="4" className="values-signal" />
      </svg>
    </figure>
  );
}
