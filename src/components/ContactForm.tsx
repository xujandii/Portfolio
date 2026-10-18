'use client';
import { useState } from 'react';
import { Arrow } from './Icons';
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
export function ContactForm() {
  const [brief, setBrief] = useState('');
  const [status, setStatus] = useState('');
  const [subject, setSubject] = useState('');
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = `${data.get('interest')} — ${data.get('name')}`;
    setSubject(title);
    setBrief(
      `Collaboration enquiry for Jandi Nguyen\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nInterested in: ${data.get('interest')}\n\n${data.get('message')}\n`,
    );
    setStatus('Your brief is ready. Nothing has been sent.');
    requestAnimationFrame(() => document.getElementById('brief-heading')?.focus());
  }
  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setStatus('Brief copied to your clipboard. Nothing has been sent.');
    } catch {
      setStatus(
        'Your browser could not copy the brief. Select the preview text to copy it, or download the file.',
      );
    }
  }
  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'enquiry-for-jandi-nguyen.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Download requested. Your enquiry has not been sent.');
  }
  return (
    <div className="contact-form-wrap">
      <form
        onSubmit={submit}
        className="contact-form"
        aria-labelledby="contact-form-heading"
        aria-describedby="contact-form-help"
      >
        <div className="form-heading">
          <h2 id="contact-form-heading">What are you thinking?</h2>
          <p id="contact-form-help">
            All fields are required. Review your brief, then open it in your email app. Nothing is
            sent from this website.
          </p>
        </div>
        <div className="form-row">
          <label>
            Your name
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Alex Taylor"
            />
          </label>
          <label>
            Your email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
              placeholder="alex@company.com"
            />
          </label>
        </div>
        <label>
          I’d like to talk about
          <select name="interest" defaultValue="" required>
            <option value="" disabled>
              Select
            </option>
            <option>A design role</option>
            <option>A project collaboration</option>
            <option>Something else</option>
          </select>
        </label>
        <label>
          A little about your idea
          <textarea
            name="message"
            rows={5}
            required
            maxLength={4000}
            placeholder="The challenge, the people involved, and what you have in mind…"
          />
        </label>
        <button type="submit" className="button-primary">
          Submit
          <Arrow />
        </button>
      </form>
      <p role="status" className="form-status">
        {status}
      </p>
      {brief && (
        <section className="brief-preview" aria-labelledby="brief-heading">
          <h3 id="brief-heading" tabIndex={-1}>
            Your conversation starter.
          </h3>
          <pre>{brief}</pre>
          <div className="brief-actions">
            {email && (
              <a
                className="button-primary"
                href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`}
              >
                Open email draft
                <Arrow />
              </a>
            )}
            <button onClick={copyBrief}>Copy brief</button>
            <button onClick={downloadBrief}>Download brief</button>
          </div>
        </section>
      )}
    </div>
  );
}
