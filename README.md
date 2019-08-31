# INEZ - dein intelligenter Einkaufszettel

Inez ist eine digitale Einkaufsliste, die dir hilft, die richtigen Produkte zu finden und diese zu merken. Zudem kann sich Inez auch Mengenangaben der Produkte merken.

## Funktionsweise

Zu benutzen ist Inez sehr einfach. Es gibt eine Suchleiste für Produkte. Hier gibst du ein, was du einkaufen möchtest. Beispielsweise "Milch". Inez sucht das passende Produkt für dich aus der Datenbank. Inez kümmert sich nicht um Groß oder Kleinschreibung oder Rechtschreibfehler. 

Hintergrund dieser Funktion ist "Fuzzy Word Matching" (see https://en.wikipedia.org/wiki/Approximate_string_matching). Inez benutzt die Levenshtein Distance um den eingegebenen Text mit Produktnamen aus der Datenbank zu vergleichen. 

Wenn Inez ein Produkt gefunden hat, wird das beste Ergebnis dem Nutzer angezeigt, welcher mit dem "Merken"-Button, das Produkt auf seine Liste setzen kann (oder Enter). Weiterhin wird eine Mengenangabe angezeigt. Der Nutzer hat die Möglichkeit einen Wert anzugeben. Allerdings hilft auch hier Inez mit einer Überprüfung, ob sich in der Suchleiste eine Zahl befindet. Falls eine Zahl zwischen 1 und 5 gefunden wird, wird diese Menge direkt für das Produkt übernommen. Falls eine Zahl über 5 gefunden wird, wird die Max. Anzahl 5 genommen und ansonsten 1. (Max. Menge ist hier ein Beispiel, ist einfach zu erhöhen)

Die Liste kann mit einem Klick auf den Einkaufswagen angezeigt werden.

## Technische Dokumentation

### Programm ausführen 

Eine Live Demo kann hier gefunden werden.

Falls das Programm lokal ausgeführt werden soll, im Root Ordner mittels ```npm install``` alle Dependencies installieren. Zum starten des Programms im Developer Mode den Command ```npm run serve```ausführen. Das Programm ist über den Browser hier zu finden ```http://localhost:8080/```

### Tests ausführen

Zum Testen werden E2E Tests mittels Cypress verwendet. Die Test-Engine sicher die grundsätzlich Funktionsweise des Programms. Zum ausführen der Tests einfach ```npm run test```ausführen. Damit Cypress allerdings die App verwenden kann, muss vorher der die App auf Port 8080 ausgeführt werden. Wie beschrieben in 'Programm ausführen'.

### Dependencies

Die App besteht nur aus einem Web-Frontend erstellt mit Vue.js. - https://vuejs.org/

Für das Fuzzy Word Matching wird die JavaScript Library *fuzzball* verwendet. Sie basiert auf der Code Basis von Fuzzy Wuzzy, welches ein Paket in Python darstellt. - https://www.npmjs.com/package/fuzzball

Zudem wird das CSS Framework bulma verwendet. - https://bulma.io/

Zum Testen wird die Test Engine cypress verwendet. - http://cypress.io/

### DATA

Die App basiert aktuell auf Testdaten. Dies sind Beispielprodukte aus dem Sortiment on Edeka um die Funktionsweise zu testen. Festgelegt als JS Array in 'search.js'.