/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],  
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
    },
    colors: {
      'current': 'currentColor',
      'transparent': 'transparent',
      'true-black': '#000000',
      'black': 'var(--black)',
      'white': 'var(--white)',
      'main': 'var(--main-color)',
      'alert': 'var(--alert)',
      'notify': 'var(--notify)',
      'success': 'var(--success)',
      'bg-color': 'var(--bg-color)',
      'text-color': 'var(--text-color)',
      'light-text-color': 'var(--light-text-color)',
      'light-grey': 'var(--light-grey)',
      'hr-color': 'var(--hr-color)',
    },
    borderRadius: {
      DEFAULT: 'var(--base-border-radius)',
    },
    transitionDuration: {
      DEFAULT: 'var(--md-speed)',
      'slow': 'var(--slow-speed)',
      'fast': 'var(--fast-speed)',
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms'
    },
    extend: {
      spacing: {
        'gutter': 'var(--site-gutters)',
        'margin': 'var(--site-margins)',
        'v-spacing-sm': 'var(--vertical-spacing-small)',
        'v-spacing': 'var(--vertical-spacing)',
        'v-spacing-lg': 'var(--vertical-spacing-large)',
      },
      transitionProperty: {
        'height': 'height',
        'top': 'top',
        'border': 'border',
        'border-radius': 'border-radius',
        'box-shadow': 'box-shadow',
      },
      minHeight: {
        'screen': 'var(--screen-height)',
        'half-screen': 'calc(var(--screen-height) * .5)',
        'three-q-screen': 'calc(var(--screen-height) * .75)'
      },
      maxHeight: {
        'screen': 'var(--screen-height)',
        'half-screen': 'calc(var(--screen-height) * .5)',
        'three-q-screen': 'calc(var(--screen-height) * .75)'
      },
      maxWidth: {
        'small': '18em',
        'medium': '26em',
        'large': '32em',
        'larger': '38em'
      },
      height: {
        'screen': 'var(--screen-height)',
        'half-screen': 'calc(var(--screen-height) * .5)',
        'three-q-screen': 'calc(var(--screen-height) * .75)'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6'
      }
    },
  },
  plugins: [],
}