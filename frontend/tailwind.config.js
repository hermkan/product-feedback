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
      colors: {
        'purple-100-hover': '#C75AF6',
        'purple-200': '#4661e6',
      },
      textColor: {
        skin: {
          base: withOpacity('--color-base'),
          inverted: withOpacity('--color-text-inverted'),
          accent: withOpacity('--color-text-accent'),
          'accent-navy': withOpacity('--color-dark-navy-200'),
          'accent-slate': withOpacity('--color-text-accent-slate'),
          'accent-purple-50': withOpacity('--color-fill-purple-hover-100'),
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
          'fill-purple-100': withOpacity('--color-fill-purple-100'),
          'fill-purple-hover': withOpacity('--color-fill-purple-hover'),
          'fill-navy-300': withOpacity('--color-fill-navy-300'),
        },
      },
      fontFamily: {
        'ff-sans-normal': 'var(--ff-sans-normal)',
      },
      width: {
        // desktop:
        'w-btn': '9.875rem',
        'w-ind': '2.5rem',
        'w-ind-ux': '3rem',
        'w-tags-container': '15.9375rem',
        'w-board-header': '51.5625rem',
        'w-feedback': '51.5625rem',
        'w-fb-cnt-cn': '47.5625rem',

        // mobile:
      },
      height: {
        'h-btn': '2.75rem',
        'h-ind': '3.3125rem',
        'h-ind-ux': '1.875rem',
        'h-tags-container': '10.375rem',
        'h-header-container': '8.5625rem',
        'h-board-header': '4.5rem',
        'h-feedback': '12.5rem',
        'h-fb-cnt-cn': '5.9375rem',
      },
      borderRadius: {
        10: '.625rem',
      },

      backgroundImage: {
        'bg-header': "url('/assets/suggestions/desktop/background-header.png')",
      },
    },
  },
  plugins: [],
};
