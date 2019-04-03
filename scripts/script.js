/**
 * Script zur Berechnung von Kreisfläche und Kreisumfang
 * @author Marko Cupic, 2019
 */


// Beginne das Script erst, nachdem die Seite vollständig geladen ist
jQuery(document).ready(function () {

    // Führe bei Klick auf den Button folgende Funktion aus.
    jQuery('#submitButton').on('click', function () {

        // Rufe die Funktion zur Berechnung auf.
        berechne();
    });
});


/**
 * Funktion zur Berechnung der Fläche und des Umfangs eines Kreises
 */
function berechne() {

    // Hier bekommst du den Inhalt des Eingabefeldes Radius
    // In der Variablen "radius" speicherst du den Radius
    var radius = jQuery('#inputRadius').val();

    // Leerzeichen entfernen (ersetze Leerzeichen mit "nichts")
    radius = radius.replace(/\s/g, "")

    // Wenn nichts eingegeben wurde, reklamiere
    if (radius == "")
    {
        // Fehler-Ausgabe in der Konsole Shift + j
        console.log('Deine Eingabe war: ' + radius + '. Bitte gib eine Zahl ein!');

        // Fehler im Browser anzeigen
        jQuery('#resultBox').html('<p>Bitte gib eine Zahl ein!</p>');
    }

    // Oder wenn anstatt einer Zahl Text eingegeben wurde, reklamiere ebenfalls
    // NaN bedeutet not a number. Die Funktion isNaN(radius) prüft demzufolge, ob der Radius nicht eine Zahl ist.
    else if (isNaN(radius))
    {
        // Fehler-Ausgabe ist auch in der Konsole möglich. In Chrome rufst du die Konsole mit Ctrl + Shift + j auf.
        console.log('Deine Eingabe war: ' + radius + '. Bitte gib eine Zahl ein, nicht Text und keine Einheiten!');

        // Fehler im Browser anzeigen
        jQuery('#resultBox').html('<p>Bitte gib eine Zahl ein, nicht Text und keine Einheiten!</p>');
    }

    // Ansonsten (wenn die Eingabe gültig ist) starte mit der Berechnung der Fläche und des Umfangs
    else
    {
        radius = parseFloat(radius);
        // ***** Erst hier wird gerechnet ******

        // Speichere die Fläche in der Variablen "flaeche" ab.
        // radius**2 bedeutet radius hoch 2
        var flaeche = (radius ** 2) * Math.PI;

        // Speichere den Umfang in der Variablen "umfang" ab.
        var umfang = 2 * radius * Math.PI;

        // Runden auf 2 Stellen nach dem Komma
        flaeche = flaeche.toFixed(2);
        umfang = umfang.toFixed(2);

        // Geschafft: Ausgabe der Lösung im Browser ;-)
        jQuery('#resultBox').html('<p>Alles klar! Der Umfang des Kreises beträgt ' + umfang + ' cm und die Fläche beträgt ' + flaeche + ' cm&sup2;.</p>');
    }
}
