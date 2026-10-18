import Image, { type ImageProps } from 'next/image';

export function Portrait({
  sizes,
  priority = false,
  neutralSrc = '/jandi-neutral.webp',
  smileSrc = '/jandi-smile.webp',
}: {
  sizes: string;
  priority?: boolean;
  neutralSrc?: ImageProps['src'];
  smileSrc?: ImageProps['src'];
}) {
  return (
    <div className="portrait-swap">
      <Image
        className="portrait-neutral"
        src={neutralSrc}
        width={720}
        height={720}
        alt="Illustrated portrait of Jandi Nguyen wearing glasses"
        priority={priority}
        sizes={sizes}
      />
      <Image
        className="portrait-smile"
        src={smileSrc}
        width={720}
        height={720}
        alt=""
        aria-hidden="true"
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
      />
    </div>
  );
}
