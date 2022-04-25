function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    fontSize: {
      xs: ['var(--fs-extra-small)', { lineHeight: '1.1875rem' }],
      sm: ['.875rem', { lineHeight: '1.25rem', letterSpacing: '-.0.2' }],
      lg: ['.9375rem', { lineHeight: '1.375rem', letterSpacing: '-.0.33' }],
      xl: ['1rem', { lineHeight: '1.4375rem' }],
      '2xl': ['1.125rem', { lineHeight: '1.625rem', letterSpacing: '-.0.25' }],
      '3xl': ['1.25rem', { lineHeight: '1.8125rem', letterSpacing: '-.0.25' }],
      '4xl': ['1.5rem', { lineHeight: '2.1875rem', letterSpacing: '-.0.33' }],
    },
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-base'),
          inverted: withOpacity('--color-text-inverted'),
          accent: withOpacity('--color-text-accent'),
          'accent-navy': withOpacity('--color-dark-navy-200'),
        },
      },
      backgroundColor: {
        skin: {
          // fill: 'var(--color-base)',
          fill: withOpacity('--color-base'),
          'button-purple': 'var(--color-text-muted)',
          'button-purple-hover': 'var(--color-text-muted)',
          'tag-white': withOpacity('--color-tag-white-default'),
          'tag-white-hover': withOpacity('--color-tag-white-hover'),
          'tag-violet-default': withOpacity('--color-tag-violet-default'),
        },
      },
      fontFamily: {
        'ff-sans-normal': 'var(--ff-sans-normal)',
      },
      width: {
        'w-btn': '9.875rem',
        'w-ind': '2.5rem',
        'w-ind-ux': '3rem',
        'w-tags-container': '15.9375rem',
      },
      height: {
        'h-btn': '2.75rem',
        'h-ind': '3.3125rem',
        'h-ind-ux': '1.875rem',
        'h-tags-container': '10.375rem',
      },
      borderRadius: {
        10: '.625rem',
      },
    },
  },
  plugins: [],
};
