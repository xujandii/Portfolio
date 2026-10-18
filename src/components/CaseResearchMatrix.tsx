import type { CaseMatrixRating, CaseResearchMatrixData } from '@/content/projects';

const matrixRatings: Record<CaseMatrixRating, { label: string; symbol: string }> = {
  simple: { label: 'Simple to moderate', symbol: '●' },
  complex: { label: 'Moderate to complex', symbol: '◆' },
  unknown: { label: 'Insufficient evidence', symbol: '—' },
};

export function CaseResearchMatrix({ matrix }: { matrix: CaseResearchMatrixData }) {
  return (
    <figure className="case-research-matrix" id={matrix.id}>
      <figcaption>
        <h4 id={`${matrix.id}-title`}>{matrix.title}</h4>
        <p>{matrix.description}</p>
      </figcaption>
      <ul className="matrix-legend" aria-label="Matrix key" tabIndex={0}>
        {Object.entries(matrixRatings).map(([rating, { label, symbol }]) => (
          <li key={rating}>
            <span className={`matrix-mark matrix-mark--${rating}`} aria-hidden="true">
              {symbol}
            </span>
            {label}
          </li>
        ))}
        {matrix.columnNote && (
          <li className="matrix-column-note" id={`${matrix.id}-column-note`}>
            <span className="matrix-mark matrix-mark--local" aria-hidden="true" />
            <span>{matrix.columnNote.text}</span>
          </li>
        )}
      </ul>
      <p className="matrix-scroll-hint" id={`${matrix.id}-hint`}>
        Scroll horizontally to explore all five steps.
      </p>
      <div
        className="matrix-scroll"
        role="region"
        aria-labelledby={`${matrix.id}-title`}
        aria-describedby={`${matrix.id}-hint ${matrix.id}-note`}
        tabIndex={0}
      >
        <table className="research-matrix-table" aria-labelledby={`${matrix.id}-title`}>
          <thead>
            <tr>
              <th scope="col">{matrix.rowHeading}</th>
              {matrix.columns.map((column, index) => (
                <th
                  scope="col"
                  key={column}
                  className={
                    column === matrix.columnNote?.column ? 'matrix-column--noted' : undefined
                  }
                  aria-describedby={
                    column === matrix.columnNote?.column ? `${matrix.id}-column-note` : undefined
                  }
                >
                  <span className="matrix-step" aria-hidden="true">
                    0{index + 1}
                  </span>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.ratings.map((rating, index) => (
                  <td key={matrix.columns[index]}>
                    <span
                      className={`matrix-mark matrix-mark--${rating}`}
                      role="img"
                      aria-label={matrixRatings[rating].label}
                      title={matrixRatings[rating].label}
                    >
                      {matrixRatings[rating].symbol}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="matrix-note" id={`${matrix.id}-note`}>
        {matrix.note}
      </p>
    </figure>
  );
}
