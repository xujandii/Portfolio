import Image from 'next/image';

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="brand-logo portrait-swap" aria-hidden="true">
      <Image
        className="portrait-neutral"
        src="/jandi-neutral.png"
        width={1254}
        height={1254}
        sizes="(max-width: 370px) 27px, (max-width: 760px) 30px, 38px"
        alt=""
        priority={priority}
      />
      <Image
        className="portrait-smile"
        src="/jandi-smile.png"
        width={1254}
        height={1254}
        sizes="(max-width: 370px) 27px, (max-width: 760px) 30px, 38px"
        alt=""
        loading={priority ? 'eager' : 'lazy'}
      />
    </span>
  );
}
