import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundImage?: string;
  dark?: boolean;
  style?: React.CSSProperties;
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  backgroundImage,
  dark = false,
  style: styleProp,
}: SectionWrapperProps) {
  const hasBgImage = Boolean(backgroundImage);

  const sectionStyle: React.CSSProperties = hasBgImage
    ? {
        backgroundImage: `linear-gradient(rgba(5,5,5,0.92), rgba(5,5,5,0.92)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : dark
    ? {
        background:
          'linear-gradient(135deg, var(--surface) 0%, rgba(197,160,89,0.04) 50%, var(--surface) 100%)',
      }
    : {
        background: 'var(--bg)',
      };

  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${className}`}
      style={{ ...sectionStyle, ...styleProp }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
