# Reel Carousel - Vev Komponent

> En horisontal karusell-komponent for å vise Vimeo-videoer i et "reel"-format. Komponenten henter data fra en Google Spreadsheet og viser videoene i en swipebar karusell med navigasjonspiler og paginering.

## Oversikt

ReelCarousel er en React-komponent bygget for Vev-plattformen som lar deg vise flere Vimeo-videoer i en horisontal, swipebar karusell. Videoene hentes automatisk fra en Google Spreadsheet via CSV-eksport, og hver video vises i et vertikalt format (9:16 aspect ratio) som ligner på Instagram Reels eller TikTok.

## Funksjoner

- 📊 **Google Spreadsheet-integrasjon**: Henter video-URLer og titler automatisk fra en Google Spreadsheet
- 🎬 **Vimeo-embed**: Støtter Vimeo-videoer med fullskjerm og autoplay-funksjonalitet
- 📱 **Swipebar karusell**: Horisontal karusell med touch/swipe-støtte for mobil
- 🎯 **Navigasjon**: Piler for å navigere mellom videoer
- 🔘 **Paginering**: Klikkbare prikker som viser hvilken video som er aktiv
- 🎨 **Tilpassbar styling**: Redigerbar CSS for titler, videoer, border-radius og box-shadow
- 📐 **Responsiv**: Tilpasser seg automatisk til skjermstørrelse

## Komponentegenskaper

### Props

- **title** (string): Hovedtittel for karusellen
- **sheetUrl** (string): URL til Google Spreadsheet CSV-eksport

### Redigerbar CSS

Komponenten støtter redigering av følgende CSS-egenskaper i Vev-editor:

- **Wrapper**: Bakgrunnsfarge
- **Carousel Title**: Farge, font-størrelse, font-vekt, font-familie, tekstjustering, margin, padding
- **Reel Title**: Farge, font-størrelse, font-vekt, font-familie, tekstjustering, margin, padding
- **Video Container**: Høyde, border-radius, box-shadow

## Google Spreadsheet Format

Spreadsheetet må ha følgende kolonner:

- **URL**: Vimeo-video URL (f.eks. `https://vimeo.com/123456789`)
- **Navn**: Tittel for hver video

Eksempel:
```
URL,Navn
https://vimeo.com/1139345499,Petter løper i skogen
https://vimeo.com/1139345757,Test video 02
```

## Installasjon og bruk

### Initialize 

I prosjektmappen, kjør:
```bash 
vev init
```

Dette initialiserer et nytt komponent-pakke i Vev-plattformen.

### Kjøre lokalt

```bash
vev start
```

Åpne [Vev design editor](https://editor.vev.design/), komponenten vil være tilgjengelig i alle prosjektene dine så lenge CLI-en kjører.

### Bygge

Komponenten er allerede bygget i `./src/ReelCarousel.tsx`. Du kan tilpasse funksjonaliteten ved å redigere denne filen.

### Deploy

Deploy pakken:

```bash
vev deploy
```

Du kan velge å dele komponenten med din konto, workspace eller team. Konfigurasjon gjøres i [vev.json](https://developer.vev.design/docs/cli/configuration) filen.

## Tekniske detaljer

- **React 18+**: Bygget med React hooks (useState, useEffect)
- **Swiper.js**: Bruker Swiper-biblioteket for karusell-funksjonalitet
- **TypeScript**: Full TypeScript-støtte
- **CSS Modules**: Styling med CSS Modules for scoped styling

## Dokumentasjon

* [Register Vev component](https://developer.vev.design/docs/cli/react/register-vev-component)
* [Vev props](https://developer.vev.design/docs/cli/react/vev-props)
* [Vev components](https://developer.vev.design/docs/cli/react/components)
* [Vev hooks](https://developer.vev.design/docs/cli/react/hooks)
* [React documentation](https://reactjs.org/docs/getting-started.html)


---

<a href="https://film.vev.design/XoYKo6hk0m/9dDmtRbbmg.390sr734i.mp4"><img src="https://film.vev.design/XoYKo6hk0m/9dDmtRbbmg.390sr734i.360.webm-00001.png"></a>

[Vev Developer Documentation](https://developer.vev.design/docs/cli/)

