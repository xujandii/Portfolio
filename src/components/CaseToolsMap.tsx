import type { CaseToolsMapData } from '@/content/projects';

export function CaseToolsMap({ map }: { map: CaseToolsMapData }) {
  return (
    <figure className="case-tools-map" id={map.id}>
      <figcaption>
        <h4 id={`${map.id}-title`}>{map.title}</h4>
        <p>{map.description}</p>
      </figcaption>
      <ul className="tools-map-legend" aria-label="Tool usage legend">
        <li>
          <span className="tools-map-segment is-used is-start is-end" aria-hidden="true" />
          Used
        </li>
        <li>
          <span className="tools-map-segment" aria-hidden="true" />
          No use shown
        </li>
      </ul>
      <p className="tools-map-scroll-hint" id={`${map.id}-hint`}>
        Scroll horizontally to follow all ten stages. Each band marks reported use.
      </p>
      <div
        className="tools-map-scroll"
        role="region"
        tabIndex={0}
        aria-labelledby={`${map.id}-title`}
        aria-describedby={`${map.id}-hint ${map.id}-note`}
      >
        <table className="tools-map-table" aria-labelledby={`${map.id}-title`}>
          <colgroup>
            <col className="tools-map-label-column" />
            {map.stages.map((stage) => (
              <col key={stage} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Tool / system</th>
              {map.stages.map((stage, index) => (
                <th scope="col" key={stage}>
                  <span className="matrix-step" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {stage}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {map.tools.map((tool) => (
              <tr key={tool.label}>
                <th scope="row">{tool.label}</th>
                {map.stages.map((stage, index) => {
                  const active = index + 1 >= tool.from && index + 1 <= tool.to;
                  return (
                    <td key={stage}>
                      <span className="sr-only">{active ? 'Reported use' : 'Not mapped'}</span>
                      <span
                        aria-hidden="true"
                        className={`tools-map-segment${active ? ' is-used' : ''}${index + 1 === tool.from ? ' is-start' : ''}${index + 1 === tool.to ? ' is-end' : ''}`}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="tools-map-note" id={`${map.id}-note`}>
        {map.note}
      </p>
    </figure>
  );
}
