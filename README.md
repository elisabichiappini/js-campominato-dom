# Griglia campo Minato
### Riproduzione del gioco campominato

#### ***Tools***
- __HTML__ = struttura;
- __CSS__ = estetica;
- __JAVASCRIPT__ = istruzioni.

#### ***Step***
1. Griglia gioco;
2. Logica gioco.

#### ***Consegna Fase 1***
![foto campominato](img/img.png)
- Struttura gioco inizializzata HTML e Css (_Header_ e _Footer_);
- Griglia: struttura celle innestata con _Javascript_: rappresentazione 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- Se gamerCm clicca su bottonePlay allora campoMinato add classe active;
- Se gamerCm clicca su cellaCampo, allora cellaCampo _cambia colore_ (azzurro) __+__ _stampo_ in console numero cellaCampo su cui ho cliccato.

#### ***Consegna Fase 2***
- bottonePlay genera 16 numeri random (arrayBomba[]) per ciascun livelloGioco (__Attenzione__: 1 cella 1 bomba,ossia arrayBomba 16 numeri !==).
- Se gamerCm click cella === arrayBomba[] allora, "abbiamo calpestato una bomba", elemento add class gameOver(bg rosso), Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
- end quando gamer click su cellaBomba OR n click === (livellocella-celleBomba) allora stampo console e DOM punteggio === n click Cella.

✨ 16_11_2023
