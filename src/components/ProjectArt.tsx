import Image from 'next/image';
import { pauseAssets } from '@/content/pause-assets';
import { natureDialogueAssets } from '@/content/nature-dialogue-assets';
import { drivePackageServices, drivePackageTiers } from '@/content/drive-package-art';
import { PackageArtIcon } from './PackageArtIcon';

export function ProjectArt({
  letter,
  eager = false,
  sizes = '(max-width: 760px) calc(100vw - 48px), (max-width: 1568px) 92vw, 1440px',
}: {
  letter: string;
  eager?: boolean;
  sizes?: string;
}) {
  if (letter === 'A')
    return (
      <div className="project-art art-a" aria-hidden="true">
        <div className="drive-art-composition">
          <div className="blueprint-sheet">
            <div className="sheet-heading">
              <span>Drive service blueprint</span>
            </div>
            <p>Conceptual overview of the drive service offering</p>
            <div className="blueprint-grid">
              <div className="blueprint-columns">
                <span>Awareness</span>
                <span>Select services</span>
                <span>Close the deal</span>
              </div>
              <div className="blueprint-row">
                <span>Customer</span>
                <i />
                <i />
                <i />
              </div>
              <div className="blueprint-row">
                <span>Front-end team</span>
                <i />
                <i />
                <i />
              </div>
              <div className="blueprint-row blueprint-row--back-end">
                <span>Back-end team</span>
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="drive-art-connector">
            <PackageArtIcon kind="arrow" />
          </div>
          <div className="service-package-sheet">
            <div className="sheet-heading">
              <span>Drive service package concept</span>
            </div>
            <p>Conceptual overview of the service packages for illustration</p>
            <table className="service-package-table">
              <thead>
                <tr>
                  <th scope="col">Services</th>
                  {drivePackageTiers.map((tier) => (
                    <th key={tier} scope="col">
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {drivePackageServices.map((service) => (
                  <tr key={service.name}>
                    <th scope="row">{service.name}</th>
                    {service.included.map((included, index) => (
                      <td
                        key={drivePackageTiers[index]}
                        className={included ? 'package-included' : 'package-excluded'}
                      >
                        <PackageArtIcon kind={included ? 'included' : 'excluded'} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  if (letter === 'B')
    return (
      <div className="project-art art-b" aria-hidden="true">
        <div className="journey-illustration">
          <svg className="journey-art" viewBox="0 0 440 330" fill="none">
            <path
              d="M-20 240H84a54 54 0 0 0 54-54v-72a54 54 0 0 1 108 0v124a54 54 0 0 0 108 0v-78a54 54 0 0 1 54-54h70"
              stroke="var(--journey-path)"
              strokeWidth="44"
            />
            <path
              d="M-20 240H84a54 54 0 0 0 54-54v-72a54 54 0 0 1 108 0v124a54 54 0 0 0 108 0v-78a54 54 0 0 1 54-54h70"
              stroke="var(--journey-ink)"
              strokeWidth="1"
              strokeDasharray="3 6"
            />
            <circle cx="44" cy="240" r="22" fill="var(--cloud)" />
            <circle cx="138" cy="135" r="22" fill="var(--cloud)" />
            <circle cx="246" cy="194" r="22" fill="var(--cloud)" />
            <circle cx="354" cy="227" r="22" fill="var(--cloud)" />
            <circle cx="408" cy="106" r="22" fill="var(--cloud)" />
          </svg>
          <span className="journey-chip chip-one">Harvest opportunity</span>
          <span className="journey-chip chip-two">Gather customer needs</span>
          <span className="journey-chip chip-three">Formulate quote price</span>
          <span className="journey-chip chip-four">Negotiate with the customer</span>
          <span className="journey-chip chip-five">Finalize the offer</span>
        </div>
      </div>
    );
  if (letter === 'C')
    return (
      <div className="project-art art-c" aria-hidden="true">
        <Image
          {...pauseAssets.overview}
          alt=""
          sizes={sizes}
          className="project-thumbnail"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  if (letter === 'D')
    return (
      <div className="project-art art-d" aria-hidden="true">
        <Image
          src="/otava-thumbnail.png"
          alt=""
          width={5666}
          height={2968}
          sizes={sizes}
          className="project-thumbnail"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  return (
    <div className="project-art art-e" aria-hidden="true">
      <Image
        {...natureDialogueAssets.overview}
        alt=""
        sizes={sizes}
        className="project-thumbnail"
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
      />
    </div>
  );
}
