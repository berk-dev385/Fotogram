const PHOTOS = [
  { src: "./assets/img/01-breuberg-bau-12-jahrhundert.webp", title: "Breuberg: Bau im 12. Jahrhundert", alt: "Historisch gestaltete Illustration einer Burgbaustelle mit Kran, Turm und Arbeitern." },
  { src: "./assets/img/02-breuberg-herren-1222.webp", title: "Breuberg: Herren von Breuberg (im Jahr 1222)", alt: "Historische Illustration mit Wachen und mehreren Personen vor einem Burgtor." },
  { src: "./assets/img/03-breuberg-ganerben-1323.webp", title: "Breuberg: Ganerben (im Jahr 1323)", alt: "Illustration von Adligen an einem Tisch in einem steinernen Burgsaal." },
  { src: "./assets/img/04-breuberg-burgbrunnen.webp", title: "Breuberg: Burgbrunnen", alt: "Illustration eines Brunnens im Burghof mit Menschen und einem Turm." },
  { src: "./assets/img/05-breuberg-wertheimer-ausbau.webp", title: "Breuberg: Wertheimer Ausbau", alt: "Illustration von Bauarbeiten an einer Burg mit Gerüst und zwei Personen im Vordergrund." },
  { src: "./assets/img/06-breuberg-festungsanlagen.webp", title: "Breuberg: Festungsanlagen", alt: "Illustration einer großen Burganlage mit Bastion im Licht des Sonnenuntergangs." },
  { src: "./assets/img/07-breuberg-wertheimer-zeughaus-1528.webp", title: "Breuberg: Wertheimer Zeughaus (im Jahr 1528)", alt: "Illustration eines Zeughauses mit Rüstungen, Waffen und einer Kanone." },
  { src: "./assets/img/08-breuberg-erbach-loewenstein-1556.webp", title: "Breuberg: Erbach und Löwenstein (im Jahr 1556)", alt: "Historisch gestaltete Illustration einer Begegnung im Burghof." },
  { src: "./assets/img/09-breuberg-johann-casimir-rittersaal.webp", title: "Breuberg: Rittersaal", alt: "Illustration eines reich verzierten Saals mit langer Tafel und mehreren Personen." },
  { src: "./assets/img/10-breuberg-jugendherberge-1919.webp", title: "Breuberg: Jugendherberge (im Jahr 1919)", alt: "Illustration einer Personengruppe auf einem Weg vor einer steinernen Burg." },
  { src: "./assets/img/11-breuberg-erinnerung-zwangsarbeit.webp", title: "Breuberg: Erinnerung an Zwangsarbeit", alt: "Dunkler steinerner Innenraum mit Fenster und Blick auf einen Burgturm." },
  { src: "./assets/img/12-breuberg-heute.webp", title: "Breuberg heute", alt: "Ansicht einer Burganlage mit Turm, Mauern und grüner Hügellandschaft." }
];

const GALLERY = document.getElementById("gallery-grid");


function renderPhoto(photo, index) {
  return `
    <button type="button" class="photo-card" data-photo-index="${index}" aria-label="Foto öffnen: ${photo.title}">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
    </button>
  `;
}


