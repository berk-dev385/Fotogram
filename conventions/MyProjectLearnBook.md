# ***01.11.2026...*** ***Fortlaufende***

## ´==Lerndatenbank | Fotogramprojekt- Merkliste während des Projekts zur Nacharbeitung und Verinnerlichung==´

`**i^i000**`
- `:root` legt zentrale ´==Variablen==´ an. Statt zehn Stellen muss ich später nur eine Farbe ändern.

`**i^i001**`
- Bildschirmrand/ Seitenabstand via `--page-gutter:` definiert

`**i^i002**`
- `border-box:` Der Browser `==zieht==` Abstände und Rahmen `==nach innen==` ab. Das Element bleibt `==exakt ... px Gesamtbreite==` Der `==Platz für==` den eigentlichen `==Inhalt schrumpft==` im Hintergrund automatisch zusammen, `==damit==` die `==Außenmaße==` perfekt `==stabil bleiben==`.

`**i^i003**`
- `svh;` steht in CSS für `==Small Viewport Height==` und entspricht `==1 %==` der kleinsten möglichen Bildschirmhöhe. Diese Einheit `==ignoriert dynamische Browser-Elemente==` wie `==sich ausblendende Adressleisten==`, sodass der Inhalt `==niemals==` unerwünscht `==abgeschnitten wird==`.

`**i^i004**`
- Das `==Array==` trennt `==Bilddaten==´ von `HTML` und `CSS`. `src` ist der echte `==relative Pfad==`; `title` ist später die sichtbare Überschrift im Dialog; alt beschreibt das Motiv. const GALLERY verbindet JavaScript mit der leeren id="gallery-grid" aus der HTML.

`**i^i005**`
- `==renderPhoto(photo, index):==` erhält ein `Bild` und dessen `Position`; erzeugt eine anklickbare Bildvorschau und `==hält== sie ``==bereit für die Auslieferung==`. 

`**i^i006**`
- `==<div class="gallery-grid" id="gallery-grid"></div>==` bekommt gerenderte Bilddaten von verbundener `const GALLERY = document.getElementById("gallery-grid");` sobald `function init() {renderGallery();}` ausgeführt wurde!

`**i^i007**`
- `<button>` ist absichtlich ein echter `Button`. Er kann per Tab `==fokussiert==` und mit Enter/Leertaste bedient werden.               
                                                                                                                                                                                                                                          
































































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




































