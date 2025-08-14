import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

const MyPreset = definePreset(Lara, {
  semantic: {
    // Configuración de Primary Teal
    primary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e'
    },
    colorScheme: {
      light: {
        primary: {
          color: '#115e59', // Color principal teal-800
          inverseColor: '#ffffff',
          hoverColor: '#0f766e', // teal-700
          activeColor: '#0d9488' // teal-600
        },
        highlight: {
          background: '#115e59', // teal-800
          focusBackground: '#0d9488', // teal-600
          color: '#ffffff',
          focusColor: '#ffffff'
        },
        // Configuración de Surface para modo claro
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      }
    }
  }
});

export default MyPreset;