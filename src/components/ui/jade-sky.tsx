// GradientBackground — “Jade Sky”, adapted from the 21st.dev Gradient Builder.
// This is a zero-dependency background layer for the hero service map.
export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        containerType: 'size',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-0.8cqmin',
          filter: 'blur(0.4cqmin)',
          backgroundColor: 'var(--cloud)',
          backgroundImage:
            'radial-gradient(circle at 65.34% 44.62%, color-mix(in srgb, var(--sage) 88%, transparent) 0%, transparent 34.1%), radial-gradient(circle at 28.07% 74.48%, color-mix(in srgb, var(--success) 42%, transparent) 0%, transparent 45.65%), radial-gradient(circle at 52.42% 19.94%, color-mix(in srgb, var(--lens-systems) 76%, transparent) 0%, transparent 57.55%), radial-gradient(circle at 80.31% 84.47%, color-mix(in srgb, var(--journey-path) 42%, transparent) 0%, transparent 69.1%)',
        }}
      />
    </div>
  );
}
