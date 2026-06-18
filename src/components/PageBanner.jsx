import React from 'react';

const PageBanner = ({ title, subtitle, dark = false }) => {
  return (
    <section className={`page-banner ${dark ? 'bg-primary text-white' : ''}`}>
      <div className="container">
        <h1 className={dark ? 'text-white' : ''}>{title}</h1>
        {subtitle && (
          <p className={`lead mt-3 ${dark ? 'text-white-50' : 'text-muted'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
