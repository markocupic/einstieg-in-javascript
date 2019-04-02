// Beginne das Script erst, nachdem die Seite vollständig geladen ist
jQuery(document).ready(function() {
    
	// Führe bei Klick auf den Button folgende Funktion aus.
	jQuery('#submitButton').on('click', function(){
		
		// Hier bekommst du den Inhalt des Eingabefeldes Radius
		// In der Variablen "radius" speicherst du den Radius
		var radius = jQuery('#inputRadius').val();
		
		// Eingabe in Zahl umwandeln (typecasting)
		radius = Number(radius);
		
		// Wenn nichts eingegeben wurde, reklamiere
		if(radius == "")
		{
			// Fehler-Ausgabe in der Konsole Shift + j
			console.log('Bitte gib eine Zahl ein!');
			// Fehler im Browser anzeigen
			jQuery('#resultBoxFlaeche').text('Bitte gib eine Zahl ein!');
		}
		
		// Oder wenn anstatt einer Zahl Text eingegeben wurde, reklamiere ebenfalls
		else if(typeof radius != 'number')
		{
			// Fehler-Ausgabe in der Konsole Shift + j
			console.log('Bitte gib eine Zahl ein, nicht Text!');
			// Fehler im Browser anzeigen
			jQuery('#resultBoxFlaeche').text('Bitte gib eine Zahl ein, nicht Text!');
		}
		
		// Ansonsten (wenn die Eingabe gültig ist) starte mit der Berechnung der Fläche und des Umfangs
		else
		{
			// ***** Jetzt wird gerechnet ******
			
			// Speichere die Fläche in der Variablen "flaeche" ab.
			// radius**2 bedeutet radius hoch 2
			var flaeche = (radius**2)*Math.PI;
			
			// Speichere den Umfang in der Variablen "umfang" ab.
			var umfang = 2*radius*Math.PI;
			
			// Runden auf 2 Stellen nach dem Komma
			flaeche = flaeche.toFixed(2);
			umfang = umfang.toFixed(2);
			
			// Geschafft: Ausgabe der Lösung im Browser ;-)
			jQuery('#resultBoxFlaeche').text('Alles klar! Der Umfang des Kreises beträgt ' + umfang + ' cm und die Fläche beträgt ' + flaeche + ' cm^2.');
		}
		
	});// End jQuery('#submitButton').on('click', ...
});// End jQuery(document).ready(function() { ...
