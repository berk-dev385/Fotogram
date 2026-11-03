# ***01.11.2026...*** ***Fortlaufende***

## ´==Lerndatenbank | Fotogramprojekt- Merkliste während des Projekts zur Nacharbeitung und Verinnerlichung==´

`**i^i000**`
- `:root` legt zentrale ´==Variablen==´ an. Statt zehn Stellen muss ich später nur eine Farbe ändern.

`**i^i001**`
- Bildschirmrand/ Seitenabstand via `--page-gutter:` definiert

`**i^i002**`
- `border-box:` Der Browser `==zieht==` Abstände und Rahmen `==nach innen==` ab. Das Element bleibt `==exakt ... px Gesamtbreite==`. 
  
- Der `==Platz für==` den eigentlichen `==Inhalt schrumpft==` im Hintergrund automatisch zusammen, `==damit==` die `==Außenmaße==` perfekt `==stabil bleiben==`.

`**i^i003**`
- `svh;` steht in CSS für `==Small Viewport Height==` und entspricht `==1 %==` der kleinsten möglichen Bildschirmhöhe. 
- Diese Einheit `==ignoriert dynamische Browser-Elemente==`, wie `==sich ausblendende Adressleisten==`, sodass der Inhalt `==niemals==` unerwünscht `==abgeschnitten wird==`.

`**i^i004**`
- Das `==Array==` trennt `==Bilddaten==´ von `HTML` und `CSS`. `src` ist der echte `==relative Pfad==`; `title` ist später die sichtbare Überschrift im Dialog; alt beschreibt das Motiv. const GALLERY verbindet JavaScript mit der leeren id="gallery-grid" aus der HTML.

`**i^i005**`
- `==renderPhoto(photo, index):==` erhält ein `Bild` und dessen `Position`; erzeugt eine anklickbare Bildvorschau und `==hält== sie ``==bereit für die Auslieferung==`. 
  
- `map(...):` geht das `Photo-Array` durch und erstellt pro `Photo` den `HTML-Text`.

- `join(""):` verbindet die `HTML-Teile` zu einem `String` ohne `Kommata`.

`**i^i006**`
- `==<div class="gallery-grid" id="gallery-grid"></div>==` bekommt gerenderte Bilddaten von verbundener `const GALLERY = document.getElementById("gallery-grid");` sobald `function init() {renderGallery();}` ausgeführt wurde!

`**i^i007**`
- `<button>` ist absichtlich ein echter `Button`. Er kann per Tab `==fokussiert==` und mit Enter/Leertaste bedient werden.
- `data-photo-index:` merkt sich, welches Bild der Nutzer anklickt. `==JavaScript==` `liest` diesen `Wert` später `aus`.    

`**i^i008**`
- „Eine CSS-Variable speichert einen wiederverwendbaren Wert; erst var(--name) verwendet diesen Wert.“

`**i^i009**`
- `display: flex;`       
- Die direkten Kinder (die Foto-Buttons) werden `Flex-Elemente`
- `width: 100%` 	    
- Der `Galerie-Container` nutzt die verfügbare Breite
- `max-width: 1146px;`	Zentriert den gesamten Galerie-Container im verfügbaren Platz
- `flex-wrap: wrap`	Falls nicht alle Bilder in eine Zeile passen, entsteht eine neue Zeile
- `justify-content:` center	Zentriert die Bilder innerhalb jeder Zeile, auch die letzte mit fünf Bildern
- `gap: var(A) var(B)`	Setzt zuerst den vertikalen und danach den horizontalen Abstand.                                                                                                                                                                        

`**i^i010**`
- `flex:` `0` `0` `150px` bedeutet hier >>> `nicht zusätzlich wachsen`,  `nicht schrumpfen`, `Ausgangsbreite 150 px`. `aspect-ratio:` `1`; macht die `Kachel quadratisch`. `overflow:` `hidden;` hält das Bild `innerhalb` der `abgerundeten Form. `` 
- `cursor` zeigt die `==Klickbarkeit==` `transition` bereitet eine `weiche Hover-Änderung` vor. Weil dein bestehendes `* { box-sizing: border-box; }` `==gilt==`, zählen `==Rahmen==` und `==Innenabstände==` in die `==äußere Größe=` hinein.

`**i^i011**`
- `object-fit:` cover bewahrt das Seitenverhältnis, füllt die Fläche, kann dabei an den Bildrändern etwas wegschneiden. 

`**i^i011**`
- `:hover` wirkt bei Mausberührung.`transform: translateY(-4px)` bewegt die Kachel `==optisch==` `4` `px` nach oben, `== ohne den normalen Zeilenabstand neu auszurechnen==`. 
- `:focus-visible` zeigt den aktuell per Tastatur angewählten `Button`. 
- `outline-offset` hält den Fokusrahmen ein Stück vom Element entfernt.

`**i^i012** HTML <dialog></dialog> `
- Ein natives `<dialog>` ist eine vorgesehene HTML- Komponente für die Großansicht. `id`macht die Elemente später in JS auffindbar. 
- Die Pfeile und das X sind echte Buttons. aria-label gibt einem Symbolbutton eine verständliche Beschreibung. 
- aria-live="polite" hilft bei der später wechselnden Foto-Nummer. Das Bild hat absichtlich noch keinen src; JavaScript setzt ihn beim Öffnen.

`**MERKSATZ**``== Erst lege ich in HTML das feste Gerüst an, dann gestalte ich es mit CSS, und erst danach steuert JavaScript das Öffnen und den Inhalt. ==`
  

`**i^i013**`
### Dialog und Hintergrund (ganz wichtig)

- `.photo-dialog` gestaltet `==die gesamte Großansicht==`.
- `width` und `min()` bestimmen die `==flexible Dialogbreite==`.
- `688px` begrenzt die `==gewünschte Breite auf Desktop==`.
- `calc(100vw - 32px)` berücksichtigt `==kleinere Browserfenster==`.
- `max-width` begrenzt die `==erlaubte Breite==` zusätzlich.
- `max-height` mit `dvh` berücksichtigt die `==sichtbare Bildschirmhöhe==`.
- `padding` erzeugt `==56px vertikalen und 64px horizontalen Innenabstand==`.
- `overflow-y: auto` ermöglicht `==vertikales Scrollen bei Platzmangel==`.
- `border: 0` entfernt den `==standardmäßigen Dialograhmen==`.
- `border-radius: 40px` erzeugt `==abgerundete Dialogecken==`.
- `background-color` verwendet `var(--surface-color)` als `==Dialoghintergrund==`.
- `color` verwendet `var(--text-color)` als `==Textfarbe==`.
- `::backdrop` gestaltet `==den Hintergrund hinter dem Dialog==`.
- `rgb(0 0 0 / 70%)` erzeugt `==Schwarz mit 70% Deckkraft==`.

`**i^i014A**`
### Kopfzeile

- `.photo-dialog__header` enthält `==Fototitel und Schließen-Button==`.
- `display: flex` ordnet `==beide Elemente nebeneinander==`.
- `align-items: center` richtet `==beide Elemente vertikal mittig==`.
- `justify-content: space-between` verteilt `==freien Platz zwischen beiden Elementen==`.
- `gap: 16px` erzeugt `==Mindestabstand zwischen den Elementen==`.
- `h2` bezeichnet die `==Überschrift des ausgewählten Fotos==`.
- `margin: 0` entfernt den `==vorgegebenen Außenabstand==`.
- `font-size: 24px` bestimmt die `==Schriftgröße des Fototitels==`.
- `font-weight: 700` stellt den Titel `==fett==` dar.
- `line-height: 1` verwendet `==eine einfache Zeilenhöhe==`.
- `overflow-wrap: anywhere` ermöglicht `==Umbrüche innerhalb langer Wörter==`.

`**i^i014B**`
### Buttons und Tastaturfokus

- `.photo-dialog button` gestaltet `==sämtliche Buttons im Dialog==`.
- `flex-shrink: 0` verhindert `==das Schrumpfen der Flex-Buttons==`.
- `border: 0` entfernt `==die normalen Buttonrahmen==`.
- `font: inherit` übernimmt `==die Schrift des Elternelements==`.
- `cursor: pointer` kennzeichnet `==anklickbare Elemente mit Handzeiger==`.
- `:focus-visible` kennzeichnet `==den sichtbaren Tastaturfokus==`.
- `outline` erzeugt `==einen farbigen äußeren Fokusrahmen==`.
- `outline-offset: 3px` schafft `==Abstand zwischen Button und Fokusrahmen==`.
- `.photo-dialog__close` gestaltet `==den X-Button zum Schließen==`.
- `width` und `height` erzeugen `==32 × 32 Pixel==`.
- `padding: 0` entfernt `==den Innenabstand des Buttons==`.
- `transparent` erzeugt `==einen vollständig durchsichtigen Hintergrund==`.
- `color` und `font-size` bestimmen `==X-Farbe und Schriftgröße==`.


`**i^i015**`
### Bildfläche

- `.photo-dialog__media` definiert `==den Bereich des Großbildes==`.
- `display: grid` ermöglicht `==die Zentrierung des Bildes==`.
- `width: 100%` nutzt `==die gesamte verfügbare Inhaltsbreite==`.
- `height: 374.71px` legt `==eine feste Bildflächenhöhe==` fest.
- `margin-block: 48px` erzeugt `==Außenabstände oben und unten==`.
- `place-items: center` zentriert `==das Bild auf beiden Achsen==`.
- `.photo-dialog__image` gestaltet `==das eigentliche Fotoelement==`.
- `display: block` verhindert `==typische Abstände von Inline-Bildern==`.
- `width` und `height` füllen `==den Bildbereich vollständig==`.
- `object-fit: contain` zeigt `==das vollständige Bild ohne Beschnitt==`.

`**i^i016**`
### Navigation

- `.photo-dialog__navigation` enthält `==Pfeilbuttons und Bildzähler==`.
- `display: flex` ordnet `==alle drei Elemente nebeneinander==`.
- `align-items: center` sorgt für `==vertikale Zentrierung==`.
- `justify-content: center` sorgt für `==horizontale Zentrierung==`.
- `gap: 56px` erzeugt `==Abstände zwischen den Navigationselementen==`.
- `.photo-dialog__navigation button` gestaltet `==die beiden Navigationspfeile==`.
- `width` und `height` erzeugen `==60 × 60 Pixel==`.
- `border-radius: 100px` erzeugt `==kreisförmige Buttonflächen==`.
- `rgb(253 91 79 / 10%)` erzeugt `==einen schwach sichtbaren Korallhintergrund==`.
- `color: var(--accent-color)` bestimmt `==die Farbe der Pfeilsymbole==`.
- `font-size: 24px` bestimmt `==die Größe der Pfeile==`.



- Der Dialog ist auf Desktop bis `==688 px==` breit und hat seitlich `==64 px==` Innenabstand. 
- Innen bleiben so etwa `==560 px==` Bildbreite. `.photo-dialog__media` bekommt eine `==feste Höhe==`. 
- Deshalb springen die Navigationstasten später nicht bei jedem anderen Fotoformat. 
- Mit `object-fit: contain` bleibt das ganze Motiv sichtbar, auch wenn dadurch im Bildbereich freie Fläche entsteht. 
- `::backdrop` verdunkelt die Seite hinter dem geöffneten modalen Dialog.


`**i^i017A**` 
- `const GALLERY = document.getElementById("gallery-grid");`

- Zuerst hole ich mir das `==Haupt-Raster der Webseite==` in den Code, in dem alle `==Vorschaubilder der Galerie==` eingebettet sind.

- `const DIALOG = document.getElementById("photo-dialog");`

- Als nächstes verknüpfe ich das `==Overlay-Popup-Fenster==`, das sich öffnen soll, sobald ein Nutzer auf ein Bild klickt.

- `const DIALOG_IMAGE = document.getElementById("dialog-image");`

- Danach wähle ich das `==Bildelement==` aus, das sich innerhalb des Popups befindet und später das `==vergrößerte Foto==` anzeigen wird.

- `const DIALOG_TITLE = document.getElementById("dialog-title");`

- Gleichzeitig greife ich auf das `==Textfeld im Popup==` zu, damit dort der passende `==Titel des jeweiligen Bildes==` eingeblendet werden kann.

- `const PHOTO_COUNTER = document.getElementById("photo-counter");`

- Hier verknüpfe ich die Anzeige für den `==Bildzähler==`, um dem Nutzer später Anzeigen wie zum Beispiel „Bild 3 von 10“ zu präsentieren.

- `const CLOSE_BUTTON = document.getElementById("close-dialog");`

- Jetzt hole ich mir den `==Schließen-Button==` in den Code, damit das Popup-Fenster per Klick auch wieder ausgeblendet werden kann.

- `const PREVIOUS_BUTTON = document.getElementById("previous-photo");`

- Dazu kommt der `==Zurück-Button==`, mit dem man manuell zum vorherigen Bild in der Liste wechseln kann.

- `const NEXT_BUTTON = document.getElementById("next-photo");`

- Und als letztes Element wird der `==Weiter-Button==` gespeichert, um zum jeweils nächsten Foto vorzublättern.

- `let currentIndex = 0;`

- Nachdem alle Elemente bereitstehen, lege ich eine `==veränderbare Variable==` für den `==Bildzähler==` an und starte bei `==Null==`, was in der Programmierung für das allererste Foto der Galerie steht.


`**i^i017B**`
### Großansicht und Bildsteuerung Funktion #region >>> `showPhoto(index)` – Bildinhalte aktualisieren*/

### Funktion `showPhoto(index)` – Bildinhalte aktualisieren

- `function showPhoto(index)` definiert eine `==Funktion zur Bildanzeige==`.
- `index` übergibt die `==Position des ausgewählten Fotos==`.
- `currentIndex = index` speichert die `==aktuelle Bildposition==`.
- `const PHOTO` erstellt eine `==Konstante für das Fotoobjekt==`.
- `PHOTOS[currentIndex]` holt das `==Foto aus dem Array==`.
- `DIALOG_IMAGE.src = PHOTO.src` setzt den `==Bilddateipfad==`.
- `DIALOG_IMAGE.alt = PHOTO.alt` übernimmt die `==Bildbeschreibung==`.
- `DIALOG_TITLE.textContent = PHOTO.title` aktualisiert den `==Fototitel==`.
- `PHOTO_COUNTER.textContent` aktualisiert den `==sichtbaren Bildzähler==`.
- `${currentIndex + 1}` berechnet die `==angezeigte Bildnummer==`.
- `+ 1` berücksichtigt den `==bei Null beginnenden Arrayindex==`.
- `${PHOTOS.length}` liefert die `==Gesamtanzahl vorhandener Fotos==`.
- Das `Template Literal` verbindet beide Werte mit `/`.
- Beispielsweise entsteht daraus die `==Bildanzeige 1/12==`.

### Funktion `openPhoto(index)` – Großansicht öffnen

- `function openPhoto(index)` definiert die `==Funktion zum Dialogöffnen==`.
- `showPhoto(index)` lädt zuerst das `==gewünschte Foto==`.
- `DIALOG.showModal()` öffnet anschließend den `==modalen HTML-Dialog==`.
- `showModal()` legt den Dialog `==über die Webseite==`.
- Der `::backdrop` verdunkelt dabei den `==Seitenhintergrund==`.
- Ein `==modaler Dialog==` blockiert die übrige Seitenbedienung.

### Funktion `handleGalleryClick(event)` – Bildklick erkennen

- `function handleGalleryClick(event)` verarbeitet `==Klickereignisse innerhalb der Galerie==`.
- `event` enthält Informationen über das `==ausgelöste Klickereignis==`.
- `event.target` bezeichnet das `==tatsächlich angeklickte HTML-Element==`.
- `.closest()` sucht das `==nächste passende übergeordnete Element==`.
- `[data-photo-index]` bezeichnet den `==gesuchten HTML-Datenattributnamen==`.
- `const BUTTON` speichert das `==gefundene Button-Element==`.
- `if (!BUTTON) return` beendet die Funktion `==ohne passenden Button==`.
- `!BUTTON` prüft, ob `==kein passender Button gefunden wurde==`.
- `return` beendet dann die `==aktuell ausgeführte Funktion==`.
- `BUTTON.dataset.photoIndex` liest die `==gespeicherte Bildposition==`.
- `dataset` ermöglicht den `==Zugriff auf HTML-Datenattribute==`.
- `Number()` wandelt den `==ausgelesenen Text in eine Zahl==`.
- `openPhoto(...)` öffnet das `==Foto mit dieser Bildposition==`.

### Funktion `closePhoto()` – Großansicht schließen

- `function closePhoto()` definiert die `==Funktion zum Dialogschließen==`.
- `DIALOG.close()` schließt den `==aktuell geöffneten HTML-Dialog==`.
- Danach wird die `==normale Galerieansicht wieder bedienbar==`.
- Das Fotoarray bleibt dabei `==vollständig und unverändert erhalten==`.

### Funktion `init()` – Galerie und Ereignisse verbinden

- `function init()` definiert die `==zentrale Startfunktion der Anwendung==`.
- `renderGallery()` erzeugt die `==Vorschaubilder aus dem Fotoarray==`.
- `GALLERY.addEventListener()` registriert ein `==Ereignis für die Galerie==`.
- `"click"` bezeichnet das `==zu überwachende Maus-Klickereignis==`.
- `handleGalleryClick` wird beim `==Klicken innerhalb der Galerie==` aufgerufen.
- `CLOSE_BUTTON.addEventListener()` verbindet den `==Schließen-Button mit seiner Funktion==`.
- `closePhoto` schließt nach dem Klick den `==Dialog==`.
- `PREVIOUS_BUTTON.addEventListener()` registriert den `==Klick auf Zurück==`.
- `showPreviousPhoto` soll das `==vorherige Foto anzeigen==`.
- `NEXT_BUTTON.addEventListener()` registriert den `==Klick auf Weiter==`.
- `showNextPhoto` soll das `==nächste Foto anzeigen==`.
- `addEventListener()` verbindet damit `==Benutzeraktionen und JavaScript-Funktionen==`.

### Aufruf `init();` – Anwendung starten

- `init();` ruft die `==zuvor definierte Startfunktion==` auf.
- Dadurch beginnt das `==dynamische Rendern der Galerie==`.
- Anschließend werden die `==vier Klickereignisse registriert==`.
- Die Anwendung kann danach `==auf Benutzeraktionen reagieren==`.

### Zusammenspiel der Funktionen

- `init()` bereitet die `==Galerie und Ereignissteuerung==` vor.
- `handleGalleryClick()` erkennt das `==vom Besucher gewählte Vorschaubild==`.
- `openPhoto()` übernimmt die `==Bildposition des ausgewählten Fotos==`.
- `showPhoto()` aktualisiert `==Bilddatei, Beschreibung, Titel und Zähler==`.
- `showModal()` zeigt anschließend die `==fertig vorbereitete Großansicht==`.
- `closePhoto()` beendet die `==Darstellung des geöffneten Dialogs==`.

### Wichtige Unterscheidungen

- `showPhoto()` aktualisiert Inhalte, `==öffnet aber keinen Dialog==`.
- `openPhoto()` verbindet `==Bildaktualisierung und anschließendes Dialogöffnen==`.
- `closePhoto()` übernimmt ausschließlich das `==Schließen des Dialogs==`.
- `handleGalleryClick()` ermittelt zuerst die `==angeklickte Bildposition==`.
- `init()` registriert die `==Verbindungen zwischen Ereignissen und Funktionen==`.
- `currentIndex` speichert die `==aktuelle nullbasierte Arrayposition==`.
- `PHOTO_COUNTER` zeigt dagegen die `==menschenlesbare Bildnummer==`.
- `showPreviousPhoto()` und `showNextPhoto()` werden hier `==nur aufgerufen==`.
- Ihre `==Funktionsdefinitionen==` sind im gezeigten Ausschnitt nicht enthalten.




`**i^i018**`
### Vorwärts- und Rückwärtsnavigation

### Funktion `showPreviousPhoto()` – Vorheriges Foto anzeigen

- `function showPreviousPhoto()` definiert die `==Funktion zum Zurückblättern==`.
- `const LAST_INDEX` speichert die `==letzte gültige Arrayposition==`.
- `PHOTOS.length` liefert die `==Gesamtanzahl aller gespeicherten Fotos==`.
- `- 1` berücksichtigt die `==bei Null beginnende Arrayzählung==`.
- Bei zwölf Fotos ist `==11 der letzte Index==`.
- `const NEW_INDEX` speichert die `==neu berechnete Bildposition==`.
- `currentIndex === 0` überprüft die `==aktuelle Position auf Null==`.
- `===` vergleicht `==Wert und Datentyp auf Gleichheit==`.
- `?` und `:` bilden einen `==bedingten Ausdruck==`.
- `? LAST_INDEX` wählt bei erfüllter Bedingung `==das letzte Foto==`.
- `: currentIndex - 1` wählt sonst `==das vorherige Foto==`.
- `showPhoto(NEW_INDEX)` aktualisiert anschließend das `==angezeigte Foto==`.
- Dadurch entsteht eine `==Rundum-Navigation zum letzten Foto==`.

### Funktion `showNextPhoto()` – Nächstes Foto anzeigen

- `function showNextPhoto()` definiert die `==Funktion zum Weiterblättern==`.
- `const NEW_INDEX` speichert die `==nächste berechnete Bildposition==`.
- `currentIndex + 1` erhöht die `==aktuelle Arrayposition um eins==`.
- `%` bezeichnet den `==Modulo-Operator für den Divisionsrest==`.
- `PHOTOS.length` liefert die `==Gesamtanzahl der gespeicherten Fotos==`.
- `(currentIndex + 1) % PHOTOS.length` berechnet die `==nächste gültige Arrayposition==`.
- Der `Modulo-Operator` verhindert `==Arraypositionen außerhalb der Fotoliste==`.
- Beim letzten Foto wird `==wieder Index Null ausgewählt==`.
- `showPhoto(NEW_INDEX)` zeigt anschließend das `==nächste berechnete Foto==`.
- Dadurch entsteht eine `==Rundum-Navigation zum ersten Foto==`.

### Beispiel – Navigation mit zwölf Fotos

- `PHOTOS.length` ergibt bei zwölf Bildern den `==Wert 12==`.
- Das erste Foto besitzt den `==Arrayindex 0==`.
- Das letzte Foto besitzt den `==Arrayindex 11==`.
- `showPreviousPhoto()` wechselt von `==Index 0 zu 11==`.
- `showNextPhoto()` wechselt von `==Index 11 zu 0==`.
- Alle anderen Positionen werden `==schrittweise vorwärts oder rückwärts==` durchlaufen.

### Funktion `init()` – Vorhandene Startfunktion ersetzen

- Die bisherige `init()` wird `==vollständig durch diese Version ersetzt==`.
- `function init()` definiert die `==zentrale Startfunktion unserer Galerie==`.
- `renderGallery()` erzeugt die `==Vorschaubilder aus dem Fotoarray==`.
- `GALLERY.addEventListener()` überwacht `==Klickereignisse innerhalb der Galerie==`.
- `"click"` bezeichnet das `==zu überwachende Klickereignis==`.
- `handleGalleryClick` verarbeitet den `==Klick auf ein Vorschaubild==`.
- `CLOSE_BUTTON.addEventListener()` registriert den `==Klick auf den Schließen-Button==`.
- `closePhoto` schließt anschließend den `==aktuell geöffneten Dialog==`.
- `PREVIOUS_BUTTON.addEventListener()` überwacht den `==Klick auf den Zurück-Button==`.
- `showPreviousPhoto` wird dadurch `==beim Zurückklicken automatisch ausgeführt==`.
- `NEXT_BUTTON.addEventListener()` überwacht den `==Klick auf den Weiter-Button==`.
- `showNextPhoto` wird dadurch `==beim Weiterklicken automatisch ausgeführt==`.
- `addEventListener()` verbindet `==HTML-Elemente mit ihren JavaScript-Funktionen==`.

### Aufruf `init();` – Anwendung starten

- `init();` führt die `==zuvor definierte Startfunktion==` aus.
- `renderGallery()` erstellt dabei die `==dynamische Bildergalerie==`.
- Danach werden die `==vier Klickereignisse der Anwendung==` registriert.
- Die Funktion `init()` darf `==nur einmal definiert werden==`.
- Auch der Aufruf `init();` bleibt `==nur einmal vorhanden==`.

### Zusammenspiel – Vollständige Bildnavigation

- `init()` verbindet die `==Buttons mit ihren Ereignisfunktionen==`.
- `showPreviousPhoto()` berechnet die `==vorherige gültige Bildposition==`.
- `showNextPhoto()` berechnet die `==nächste gültige Bildposition==`.
- `NEW_INDEX` enthält jeweils die `==neu ausgewählte Arrayposition==`.
- `showPhoto(NEW_INDEX)` aktualisiert das `==Foto und seinen Bildzähler==`.
- Der geöffnete Dialog bleibt `==während des Bildwechsels bestehen==`.
- Beide Funktionen ermöglichen die `==Navigation ohne Listenende==`.

- Der Bildindex ändert sich, nicht der Dialog selbst. showPhoto() übernimmt das Aktualisieren der Inhalte. 
- Ein mit showModal() geöffnetes natives <dialog> bringt bereits Tastatur- und Esc-Verhalten mit. 
- Die Thumbnails sind echte Buttons. Deshalb kann man sie auch ohne Maus bedienen. 
- Der native Dialog übernimmt einen Teil des Tastaturverhaltens

`**i^i019**`

### Responsive Mobile-Ansicht

### Media Query – Mobile Umschaltgrenze

- `@media` definiert `==CSS-Regeln für bestimmte Bildschirmbedingungen==`.
- `max-width: 640px` aktiviert die Regeln bei `==höchstens 640px Fensterbreite==`.
- Die geschweiften Klammern `{}` umschließen die `==mobilen CSS-Anpassungen==`.
- Größere Fenster verwenden weiterhin die `==allgemeinen CSS-Regeln==`.
- `640px` ist eine `==selbst festgelegte technische Umschaltgrenze==`.

### `:root` – Flexible Seitenabstände

- `:root` enthält die `==zentral definierten CSS-Variablen==`.
- `--page-gutter` bestimmt den `==seitlichen Abstand zum Seitenrand==`.
- `clamp()` begrenzt einen `==flexibel berechneten CSS-Wert==`.
- `20px` definiert den `==kleinsten erlaubten Seitenabstand==`.
- `8vw` berechnet `==acht Prozent der Fensterbreite==`.
- `30px` definiert den `==größten erlaubten Seitenabstand==`.
- `clamp(20px, 8vw, 30px)` hält den Abstand `==zwischen 20 und 30 Pixel==`.

### `.site-header__inner` – Mobiler Header

- `.site-header__inner` gestaltet den `==inneren Bereich des Headers==`.
- `padding-block: 16px` erzeugt `==16px Innenabstand oben und unten==`.
- `padding-inline` bestimmt den `==seitlichen Innenabstand des Headers==`.
- `var(--page-gutter)` übernimmt den `==flexibel berechneten Seitenabstand==`.
- Der Header passt sich dadurch `==schmaleren Bildschirmbreiten==` an.

### `.gallery-section` – Mobiler Galeriebereich

- `.gallery-section` gestaltet den `==gesamten Bereich der Fotogalerie==`.
- `padding-block` bestimmt die `==vertikalen Innenabstände des Bereichs==`.
- `44px` erzeugt den `==oberen Innenabstand der Galerie==`.
- `64px` erzeugt den `==unteren Innenabstand der Galerie==`.
- Beide Werte schaffen `==Platz für Überschrift und Bilder==`.

### `.gallery-section h1` – Mobile Hauptüberschrift

- `.gallery-section h1` gestaltet die `==Hauptüberschrift innerhalb der Galerie==`.
- `margin-bottom: 40px` erzeugt `==40px Abstand unter der Überschrift==`.
- `font-size` bestimmt die `==Größe der Überschrift==`.
- `clamp(32px, 12.8vw, 48px)` berechnet eine `==flexible Schriftgröße==`.
- `32px` definiert die `==kleinste erlaubte Schriftgröße==`.
- `12.8vw` berechnet `==12,8 Prozent der Fensterbreite==`.
- `48px` definiert die `==größte erlaubte Schriftgröße==`.
- `line-height: 1` verwendet die `==einfache Schriftgröße als Zeilenhöhe==`.
- Dadurch bleibt die Überschrift `==auf kleinen Bildschirmen anpassbar==`.

### `.gallery-grid` – Mobiles Galerieraster

- `.gallery-grid` gestaltet die `==Anordnung aller Vorschaubilder==`.
- `max-width: 315px` begrenzt die `==maximale Breite der Bildgalerie==`.
- `column-gap: 16px` erzeugt `==horizontalen Abstand zwischen Bildkacheln==`.
- `row-gap: 16px` erzeugt `==vertikalen Abstand zwischen Bildreihen==`.
- Die Bilder bleiben innerhalb des `==verfügbaren Galeriecontainers==`.

### `.photo-card` – Zwei Bildspalten

- `.photo-card` gestaltet die `==einzelnen Vorschaubilder der Galerie==`.
- `flex-basis` bestimmt die `==Ausgangsgröße eines Flex-Elements==`.
- `calc()` führt eine `==Berechnung direkt innerhalb von CSS==` aus.
- `100%` bezeichnet die `==verfügbare Breite des Galeriecontainers==`.
- `- 16px` berücksichtigt den `==Abstand zwischen zwei Bildkacheln==`.
- `/ 2` verteilt die `==verbleibende Breite auf zwei Kacheln==`.
- `calc((100% - 16px) / 2)` erzeugt `==zwei gleich breite Bildspalten==`.
- Die Kacheln können dadurch `==kleiner als 150px werden==`.

### `.photo-dialog` – Mobiler Dialog

- `.photo-dialog` gestaltet die `==Großansicht auf kleinen Bildschirmen==`.
- `width` bestimmt die `==gewünschte Breite des Dialogs==`.
- `100vw` entspricht der `==gesamten Breite des Browserfensters==`.
- `calc(100vw - 24px)` berücksichtigt `==24px zusätzlichen Platz==`.
- `max-width` begrenzt die `==maximal erlaubte Dialogbreite==`.
- `calc(100% - 24px)` berücksichtigt den `==verfügbaren prozentualen Bezugsbereich==`.
- `padding: 24px 16px` definiert `==vertikalen und horizontalen Innenabstand==`.
- `24px` erzeugt `==Innenabstand oben und unten==`.
- `16px` erzeugt `==Innenabstand links und rechts==`.
- `border-radius: 24px` erzeugt `==abgerundete Ecken am Dialog==`.
- Der Dialog erhält dadurch `==kleinere Abstände als auf Desktop==`.

### `.photo-dialog__header h2` – Mobiler Fototitel

- `.photo-dialog__header h2` gestaltet den `==Fototitel der Großansicht==`.
- `font-size: 20px` setzt die `==Schriftgröße auf 20 Pixel==`.
- Der Fototitel benötigt dadurch `==weniger Platz im Dialog==`.

### `.photo-dialog__media` – Mobile Bildfläche

- `.photo-dialog__media` definiert den `==Bereich für das Großbild==`.
- `height` bestimmt die `==Höhe der mobilen Bildfläche==`.
- `min()` verwendet den `==kleineren von zwei Größenwerten==`.
- `52dvh` entspricht `==52 Prozent der dynamischen Fensterhöhe==`.
- `dvh` berücksichtigt die `==aktuell verfügbare dynamische Bildschirmhöhe==`.
- `320px` begrenzt die `==gewünschte maximale Bildflächenhöhe==`.
- `min(52dvh, 320px)` wählt die `==kleinere der beiden Höhen==`.
- `margin-block: 24px` erzeugt `==Außenabstände oberhalb und unterhalb==`.
- Die Bildfläche passt sich dadurch `==niedrigeren Bildschirmhöhen==` an.

### `.photo-dialog__navigation` – Mobile Navigation

- `.photo-dialog__navigation` gestaltet die `==Navigationsleiste unter dem Foto==`.
- `gap` bestimmt die `==Abstände zwischen den Navigationselementen==`.
- `clamp(12px, 4vw, 24px)` berechnet einen `==flexiblen Abstand==`.
- `12px` definiert den `==kleinsten erlaubten Abstand==`.
- `4vw` entspricht `==vier Prozent der Fensterbreite==`.
- `24px` definiert den `==größten erlaubten Abstand==`.
- Die Navigation benötigt dadurch `==weniger Platz auf Smartphones==`.

### `.photo-dialog__navigation button` – Mobile Pfeilbuttons

- `.photo-dialog__navigation button` gestaltet die `==Pfeilbuttons der Großansicht==`.
- `width: 48px` definiert die `==Breite eines Navigationsbuttons==`.
- `height: 48px` definiert die `==Höhe eines Navigationsbuttons==`.
- Zusammen entsteht eine `==quadratische Buttonfläche mit 48px Seitenlänge==`.
- Die Buttons bleiben dadurch `==kleiner als auf Desktop==`.

### Zusammenspiel – Responsive Darstellung

- `@media` aktiviert die `==mobilen Anpassungen bis 640px==`.
- `clamp()` begrenzt `==flexibel wachsende Abstände und Schriftgrößen==`.
- `calc()` berechnet `==Breiten passend zum verfügbaren Platz==`.
- `min()` begrenzt die `==Höhe der mobilen Bildfläche==`.
- `flex-basis` ermöglicht `==zwei gleich breite Vorschaubilder nebeneinander==`.
- `dvh` berücksichtigt die `==dynamische Höhe des Browserfensters==`.
- Die allgemeinen Desktopregeln werden `==durch gezielte Mobilregeln überschrieben==`.

`**MERKSATZ**`
### Responsive Design – Mobile Ansicht

- `@media (max-width: 640px)` aktiviert die darin stehenden Änderungen für schmale Browserfenster.
- `clamp(minimum, flexibel, maximum)` begrenzt einen mitwachsenden Wert.
- `calc((100% - 16px) / 2)` ergibt zwei gleich breite Kacheln plus 16 px Zwischenraum.
- Die Kacheln dürfen auf 320-px-Geräten `==kleiner als 150 px==` werden.
- `dvh` berücksichtigt die aktuelle dynamische Fensterhöhe – wichtig für den Dialog.
- Die 640-px-Umschaltgrenze ist eine `==eigene technische Entscheidung==`, kein Figma-Mobile-Frame.
















































<br>
<br>
<br>
<br>
<br>
<br>
Next learning Code: 





`**i^i020**`

`**i^i021**`

`**i^i022**`

`**i^i023**`

`**i^i024**`

`**i^i025**`

`**i^i026**`

`**i^i027**`

`**i^i028**`
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
## 🛠️ Markdown-Spickzettel (Cheat Sheet)

| Element             | Markdown-Befehl                                                                  | Ergebnis / Vorschau                   |
| :------------------ | :------------------------------------------------------------------------------- | :------------------------------------ |
| **Überschrift 1**   | `# Überschrift 1`                                                                | Hauptüberschrift                      |
| **Überschrift 2**   | `## Überschrift 2`                                                               | Unterüberschrift                      |
| **Überschrift 3**   | `### Überschrift 3`                                                              | Kleine Überschrift                    |
| **Fett**            | `**Text**` oder `__Text__`                                                       | **Text**                              |
| *Kursiv*            | `*Text*` oder `_Text_`                                                           | *Text*                                |
| ***Fett & Kursiv*** | `***Text***`                                                                     | ***Text***                            |
| ~~Durchgestrichen~~ | `~~Text~~`                                                                       | ~~Text~~                              |
| ==Markiert==        | `==Text==`                                                                       | (Gelb hervorgehobener Text)           |
| **Normaler Absatz** | Text schreiben + `2x Enter` (Leerzeile)                                          | Neuer Absatz mit Abstand              |
| **Zeilenumbruch**   | Text schreiben + `2 Leerzeichen` + `1x Enter`                                    | Text in nächster Zeile (ohne Abstand) |
| **Großer Abstand**  | `<br>` oder `<br><br>`                                                           | Erzwingt leere Zeilen                 |
| **Stichpunkte**     | `- Punkt 1` oder `* Punkt 1`                                                     | • Punkt 1                             |
| **Nummerierung**    | `1. Punkt 1`                                                                     | 1. Punkt 1                            |
| **Checkliste**      | `- [ ] To-do` / `- [x] Erledigt`                                                 | ⬜ To-do / ⬛ Erledigt                  |
| **Inline-Code**     | `` `code` ``                                                                     | `code` (mitten im Text)               |
| **Code-Block**      | <code>```javascript<br>code hier<br>```</code>                                   | Farbiger Code-Kasten                  |
| **Zitat**           | `> Zitat-Text`                                                                   | Grauer Balken am linken Rand          |
| **Trennlinie**      | `---` (in eigener Zeile)                                                         | Horizontale Linie quer über die Seite |
| **Link**            | `[Name](https://url.com)`                                                        | Anklickbarer Text                     |
| **Bild**            | `![Beschreibung](pfad/bild.png)`                                                 | Eingebettete Grafik                   |
| **Tabelle**         | `\| Kopf 1 \| Kopf 2 \|` <br> `\| :--- \| :--- \|` <br> `\| Text 1 \| Text 2 \|` | (Erzeugt eine Tabelle wie diese)      |
| **Fußnote**[^1]     | `Text[^1]` und unten `[^1]: Erklärung`                                           | Kleine hochgestellte Zahl mit Link    |
| **Emoji**           | `:rocket:` oder direkt kopieren 🚀                                                | Visuelle Icons                        |

[^1]: Das ist die dazugehörige Erklärung der Fußnote am Ende des Dokuments.


| Linksbündig      |    Zentriert    |      Rechtsbündig |
| :--------------- | :-------------: | ----------------: |
| Text steht links | Text ist mittig | Text steht rechts |
| Spalte 1         |    Spalte 2     |          Spalte 3 |




























