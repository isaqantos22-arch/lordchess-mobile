# Como baixar o Lord Chess no celular

## Opcao 1 - Mais rapida: instalar como PWA (nao precisa de APK)

1. Abra `https://www.lordchess.com` no Chrome (Android) ou Safari (iOS).
2. Toque no menu do navegador.
3. Escolha **"Adicionar a tela inicial"**.
4. Pronto — o app aparece na sua home, com icone e tela cheia.

## Opcao 2 - APK automatico pelo GitHub (sem instalar nada no computador)

Este projeto ja tem um workflow do GitHub Actions que builda o APK automaticamente.

1. Crie um repositorio no GitHub (ex: `seuusuario/lordchess-mobile`).
2. Envie este projeto para la:
   ```bash
   git remote add origin https://github.com/seuusuario/lordchess-mobile.git
   git branch -M main
   git push -u origin main
   ```
3. Va em **Actions > Build Android APK** no GitHub.
4. Aguarde o workflow terminar (cerca de 5 a 10 minutos).
5. Va em **Actions > ultimo run > Artifacts > lordchess-debug-apk**.
6. Baixe o `app-debug.apk` e transfira para o celular.
7. No Android, permita instalacao de fontes desconhecidas e instale.

## Opcao 3 - Build local com Android Studio

1. Instale o Android Studio.
2. Abra a pasta `android/` do projeto.
3. Aguarde o Gradle sync.
4. Vai em **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
5. O APK fica em `android/app/build/outputs/apk/debug/app-debug.apk`.

## iOS

O iOS exige obrigatoriamente um Mac com Xcode e uma conta Apple Developer para gerar o IPA. O projeto Xcode ja esta pronto na pasta `ios/`.

```bash
npx cap open ios
```

Depois em Xcode: escolha seu time de assinatura e rode `Product > Archive`.

## Observacoes

- O app carrega a plataforma web de `https://www.lordchess.com`. Certifique-se de que o site esta online.
- Para mudar o ambiente (ex: staging), edite `server.url` em `capacitor.config.ts` e rode `npx cap sync`.
- A primeira abertura pode levar alguns segundos porque a webview carrega o site. Depois fica em cache.
