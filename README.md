# Lord Chess Mobile

App hibrido (Android + iOS) da plataforma Lord Chess, criado com Capacitor.

## O que é

Este projeto empacota a plataforma web `https://www.lordchess.com` como um app nativo para celular. O app é uma webview otimizada, com acesso a:

- Partidas online
- Treinador IA
- Planejamento de treino
- Historico e revisao de partidas
- Perfil, comunidade e conquistas

## Estrutura

- `capacitor.config.ts` - configuracao do Capacitor
- `www/` - assets web minimos (tela de abertura nativa)
- `android/` - projeto Android (Gradle)
- `ios/` - projeto iOS (Xcode)
- `resources/` - icones e splash screens em SVG

## Como buildar

### Android (APK)

Requisitos:
- Android Studio instalado
- SDK do Android 34+
- Java 17+

```bash
cd lordchess-mobile
npm install
npx cap sync
npx cap open android
```

No Android Studio:
1. Aguarde o Gradle sync
2. Va em Build > Build Bundle(s) / APK(s) > Build APK(s)
3. O APK estara em `android/app/build/outputs/apk/debug/app-debug.apk`

Para gerar AAB para Play Store:
- Build > Generate Signed Bundle / APK
- Escolha Android App Bundle
- Crie ou use uma keystore existente

### iOS (IPA)

Requisitos:
- Mac com Xcode 15+
- Conta Apple Developer (para build em dispositivo real ou publicacao)

```bash
cd lordchess-mobile
npm install
npx cap sync
npx cap open ios
```

No Xcode:
1. Selecione seu time/assinatura em Signing & Capabilities
2. Escolha um dispositivo ou simulador
3. Product > Archive para gerar o IPA
4. Ou Product > Run para testar no simulador

## Substituir icones e splash screen

Substitua os arquivos em `resources/` por imagens PNG:
- `resources/icon.png` (1024x1024)
- `resources/splash.png` (2732x2732)

Depois rode:

```bash
npx capacitor-assets generate
```

Nota: se o gerador falhar com erro de cor, use nomes de cor simples como `black` ou `white`.

## Publicacao

- Android: Google Play Console (AAB) ou APK direto
- iOS: App Store Connect via Xcode Archive

## Notas importantes

- O app carrega a plataforma web de `https://www.lordchess.com`. Para usar outro ambiente, altere `server.url` em `capacitor.config.ts` e rode `npx cap sync`.
- Certifique-se de que o site esta otimizado para mobile (viewport, touch, safe areas).
- Push notifications e deep links podem ser adicionados depois com plugins Capacitor.
