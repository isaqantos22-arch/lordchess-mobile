import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lordchess.app',
  appName: 'Lord Chess',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    // Carrega a plataforma web Lord Chess ja publicada.
    // O app nativo funciona como uma webview otimizada com
    // acesso ao hardware, push, deep links e integracao nativa.
    url: 'https://www.lordchess.com',
    cleartext: false,
    allowNavigation: ['www.lordchess.com', '*.lordchess.com'],
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      launchAutoHide: true,
      backgroundColor: '#0a0f1c',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: true,
      spinnerColor: '#c9a961',
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0a0f1c',
    },
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
    },
  },
};

export default config;
