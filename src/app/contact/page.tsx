import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { ContactLinks } from '@/components/ContactLinks';
export const metadata: Metadata = { title: 'Let’s make sense of it' };
export default function Contact() {
  return (
    <main id="main" className="contact-page page-width">
      <div className="contact-intro">
        <h1>
          A question.
          <br />
          An idea.
          <br />A possibility.
          <br />A coffee chat.
        </h1>
        <div className="contact-location">
          <span className="location-dot" />
          <div>Helsinki, Finland</div>
        </div>
        <ContactLinks className="contact-intro-links" />
      </div>
      <ContactForm />
    </main>
  );
}
