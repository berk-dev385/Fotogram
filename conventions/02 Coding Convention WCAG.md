* ## **Struktur & Semantik**

* Nutze semantische Tags: header, nav, main, section, article, aside, footer  
* Verwende nur eine h1 pro Seite  
* Untergeordnete Inhalte mit `h2`, `h3` etc. logisch strukturieren  
* Keine Überschriften "überspringen"  
* Benutze section für thematisch zusammenhängende Abschnitte  
* Verwende article für eigenständige Inhalte  
* Ergänze aside für Zusatzinfos  
* Setze figure \+ figcaption für Bilder mit Bedeutung

1. ## **Textinhalte & Struktur**

* Verwende keine zu kleinen Schriften (mindestens 16px)  
* Achte auf ausreichenden Farbkontrast  
* Nutze \<strong\> oder \<em\> statt \<b\> und \<i\>  
* Verwende \<span\> nur für Inline-Struktur  
* Fließtext gehört in \<p\>, nicht in \<div\>

2. ## **Bilder & Links**

* Jedes \<img\> Element hat ein sinnvolles alt=”” Attribut  
* Links/Button beschreiben Ziel oder Aktion klar und verständlich (z.B. “Schreibe mir eine Nachricht” statt “Hier klicken”)  
* Benutze kanonische/sprechende Pfade  und URL’s ([example.com/assets/teamfoto-juli-2024.jpg](http://example.com/assets/teamfoto-juli-2024.jpg) statt [example.com/assets/fil](http://example.com/assets/file1.jpg)[http\://example.com/assets/teamfoto-juli-2024.jpg](http://example.com/assets/teamfoto-juli-2024.jpg)[e1.jpg](http://example.com/assets/file1.jpg)) 

3. ## **Navigation**

* Navigation in \<nav\> Element kapseln  
* Liste verwenden (\<ul\> \+ \<li\>) für strukturierte Navigation  
* Jedes Navigationsmenü mit aria-label oder aria-labelledby beschreiben, wenn mehrere Navigationselemente vorhanden sind  
* Ermögliche die Seitenbedienung komplett via Tastatur durch Tabindex/Buttons/etc.

4. ## **ARIA – Accessible Rich Internet Applications**

* ARIA Labels nutzen, wenn semantisches HTML nicht ausreicht  
* Wichtig: ARIA ersetzt keine Semantik\!  
* Achte bei eigenständig stehenden HTML-Elementen (z.B. Dialog, Article) darauf, dass diese ebenfalls eine gute Struktur haben (z.B. Header, Titel)

5. ## **Tabellen**

* Nutze \<caption\> für Tabellenüberschriften  
* Verwende \<th\> für Spalten- oder Zeilenüberschriften  
* Nutze scope="col" oder scope="row" bei \<th\> für Klarheit

6. ## **Standards**

* Dokumenttitel (\<title\>) eindeutig und relevant gestalten  
* Immer die Inhaltssprache der Website mit \<html lang="..."\> fest definieren (en, de, etc.)

7. ## **Tools** 

* Überprüfe deinen Code mit den folgendes Tools:  
  * Wave: [https\://wave.webaim.org/](https://wave.webaim.org/)Chrome Developer Tools “Lighthouse” Tab  
  * Chrome Extension: IBM Equal Access Accessibility Checker

8. ## **Weiterführende Links**

* Offizieller Link zu den Anforderungen: https\://www\.w3.org/TR/WCAG22/ 




### 

### 

### 

