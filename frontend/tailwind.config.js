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
        'purple-200-hover': '#7C91F9',
        'com-slate-200': '#F7F8FD',
        'accent-navy': '#3A4374',
        'accent-slate-hover': '#656EA3',
        'accent-orange': '#D73737',
        'accent-orange-100': ' #F49F85',
        'accent-orange-hover': '#E98888',
        'text-slate-button': '#647196',
        'divide-color': '#8C92B3',
        'aligner-color': '#647196;',
      },
      textColor: {
        skin: {
          base: withOpacity('--color-base'),
          inverted: withOpacity('--color-text-inverted'),
          accent: withOpacity('--color-text-accent'),
          'accent-navy': withOpacity('--color-dark-navy-200'),
          'accent-slate': withOpacity('--color-text-accent-slate'),
          'accent-purple-50': withOpacity('--color-fill-purple-hover-100'),
          'accent-purple-100': withOpacity('--color-text-accent-purple-100'),
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
        'w-drpmn': '15.9375rem',
        'w-no-fdb': '25.625rem',
        'w-cmts': '45.625rem',
        'w-typ-cmts': '41.5rem',
        'w-com': '43.75rem',
        'w-photo': '2.5rem',
        'w-edit-form': '33.75rem',
        'w-edit-input': '28.5rem',
        'w-edit-title': '18.125rem',
        'w-canc-btn': '5.8125rem',
        'w-drp-dwn': '28.5rem',
        'w-edit-icon': '3.5rem',
        'w-edit-feedb-form': '33.75rem',
        'w-edit-form-title': '28.5rem',
        'w-header-rdmap': '69.375rem',
        'w-rdmap-task': '21.875rem',
        'w-vot-lg': '4.3125rem',
        'w-comm-cont': '45.625rem',
        'w-align': '1px',

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
        'h-drpmn': '12rem',
        'h-no-fdb': '23.6875rem',
        'h-cmts': '15.375rem',
        'h-typ-cmts': '5rem',
        'h-com': '190px',
        'h-photo': '2.5rem',
        'h-edit-form': '33.75rem',
        'h-edit-input': '3rem',
        'h-edit-title': '2.1875rem',
        'h-edit-cont': '50rem',
        'h-canc-btn': '2.75rem',
        'h-drp-dwn': '15rem',
        'h-edit-icon': '3.5rem',
        'h-edit-feed-form': '51.375rem',
        'h-edit-form-title': '2.1875rem',
        'h-form-cont': '51.875rem',
        'h-header-rdmap': '7.0625rem',
        'h-rdmap-task': '17rem',
        'h-vot-lg': '2.5rem',
        'h-no-fdbck': '37.5rem',
        'h-comm-cont': '46.6875rem',
        'h-align': '267px',
      },
      borderRadius: {
        10: '.625rem',
      },

      backgroundImage: {
        'bg-header': "url('/assets/suggestions/desktop/background-header.png')",
      },
      divideWidth: {
        1: '0.5px',
      },
      divideColor: {
        'accent-navy': withOpacity('--color-text-accent-navy'),
      },
    },
  },
  plugins: [],
};
