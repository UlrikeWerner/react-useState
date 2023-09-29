# React useState - Rick&Morty-Gallery

Schritt 1: Erstellt ein neues React-Projekt mit Vite und TypeScript.

Schritt 2: Nutzt die Daten, die Ihr von dieser API abrufen könnt:  https://rickandmortyapi.com/api/character/
speichert die Daten in einer separaten TypeScript-Datei
übergibt eure Daten an euer useState

Schritt 3: Übergibt diesen state an Komponenten, die diese Daten dann visualisieren

Schritt 4: Legt euch gemeinsam ein Inputfield an in der App.tsx, der die Suche auslösen soll
Filtert eure Suche, sodass euch nur die Charaktere angezeigt werden, die ihr gesucht habt.

Schritt 5: Ergänzt eure Suche, sodass eine Fehlermeldung auftaucht, wenn im Inputfield ein Name eingegeben wird der nicht existiert

### Bonus
Schreibe eine Funktion die dir nur 5 Charaktere anzeigt implementiere diese Logik auf einen weiteren Button bei jedem klick sollen die nächsten 5 Charaktere ausgegeben werden.

-------------------
# React-Router
Schritt 1: Installiert euch die dependency react-router-dom

Schritt 2: Erstellt eine Route die euch auf eure "Home/ Welcome" Seite zeigt. Erstellt euch dafür eine Komponente die eure Besucher begrüßt.

Schritt 3: Erstellt euch eine Route ("/characters") die zu eure Rick and Morty Gallery anzeigt.

Schritt 4: Erstellt euch eine Header Komponente, mit einer Überschrift und einem Navigations Menü, damit ihr zwischen euren Routes navigieren könnt.

### Bonus
Schritt 1: Passe die Character-Card so an, sodass bei einem "click" auf eine Seite weitergeleitet wird auf "/characters/{id}".

Schritt 2: Erstelle eine weitere Route, die auf dem Pfad  "/characters/:id" die Komponente "CharacterDetailCard" navigiert. Die CharacterDetailCard soll als prop eine Liste mit allen Characteren übergeben bekommen, anhand der ID soll der richtige Character rausgesucht und angezeigt werden.