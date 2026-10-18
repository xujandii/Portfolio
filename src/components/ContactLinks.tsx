import { LinkedinLogo, WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react/ssr';

export function ContactLinks({ className = '' }: { className?: string }) {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  const options = [
    {
      label: 'LinkedIn',
      Icon: LinkedinLogo,
      href: 'https://www.linkedin.com/in/thao-nguyen-jandi-0901',
    },
    { label: 'WhatsApp', Icon: WhatsappLogo, href: 'https://wa.me/358407766047' },
    { label: 'Email', Icon: EnvelopeSimple, href: email ? `mailto:${email}` : '' },
  ];

  return (
    <ul className={`contact-links ${className}`} aria-label="Ways to connect">
      {options.map(({ label, Icon, href }) => (
        <li key={label}>
          <a
            className="contact-link"
            href={href || undefined}
            role={href ? undefined : 'link'}
            aria-disabled={href ? undefined : true}
            aria-label={href ? undefined : `${label} (link coming soon)`}
            title={href ? undefined : `${label} link coming soon`}
          >
            <Icon size={20} weight="regular" aria-hidden="true" focusable="false" />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
