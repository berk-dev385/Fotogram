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




































