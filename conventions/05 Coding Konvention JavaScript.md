# Coding Konvention für JavaScript

```js
const CONTENT = document.getElementById("main-container");function init() {
CONTENT.innerHTML += renderMain();
};

function renderMain() {
	return `	<div> Hallo Welt </div>` 
}
```

1. ## **Allgemein**

| Dateinamen in kebab-case | user-utils.js |
| :---- | :---- |
| max. 14 Zeilen pro Funktion |  |
| Semikolons verwenden | const NAME \= “Max”; |

2. ## **Namensgebung**

| Funktionen im camelCase | function getUser() {...}; |
| :---- | :---- |
| Klassen in PascalCase | class UserProfile {}; |
| Konstanten in UPPER\_CASE | const MAX\_RETRIES \= 3; |

3. ## **Formatierung**

| 2 Leerzeichen für die Einrückung | return user; |
| :---- | :---- |
| imports gruppieren (Std, Dritt, Lokal) | import os\\import requests\\from .import tools |
| EIN Leerzeichen zwischen Funktionen |  |

4. ##  **Kommentare**

| JSDoc für Funktionen & Methoden | /\*\* Gibt den user zurück. \*/ |
| :---- | :---- |
| Keine Inline-Kommentare |  |

5. ##  **Clean Code**

| Eine Aufgabe pro Funktion  | function calculateTotal() {} |
| :---- | :---- |
| Keine Magic Numbers z.B.  if(currentUsers  \< 100\) | const MAX\_USERS \= 100; if(currentUsers  \< MAX\_USERS) |
| HTML auslagern statt inline |  |
| Lesbare Bedingungen | if (isUserActive) statt if (x) |

## 

6. ## **Quellen** 

* [Kommentar-Standards (JSDoc)](https://jsdoc.app/)  
* [Formatierung, Einrückung, Namensgebung](https://github.com/airbnb/javascript) \- Im Arbeitsalltag-Kontext (Bsp. Airbnb)  
* [Auslagern von HTML-Code](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations)  
* [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)  
* [Funktionslänge & Funktionswirkung](https://github.com/ryanmcdermott/clean-code-javascript#functions-should-do-one-thing)

  ## 

