import json

language = "en"

# Datei einlesen
with open('originalFetchedData/movie-data-{language}.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Neue Liste für die Ausgabe erstellen
media_data = []
id_counter = 0

# Movies verarbeiten
for movie in data.get('movies', []):
    year = movie['release_date'].split('-')[0]  # Jahr aus dem Datum extrahieren
    
    media_entry = {
        "id": str(id_counter),
        "title": movie['title'],
        "type": language == "de" ? "Film" : "Movie",
        "year": year,
        "description": movie['overview'],
        "image": movie['poster_url'],
        "genres": []
    }
    
    media_data.append(media_entry)
    id_counter += 1

# TV Shows verarbeiten
for tv_show in data.get('tv_shows', []):
    year = tv_show['first_air_date'].split('-')[0]  # Jahr aus dem Datum extrahieren
    
    media_entry = {
        "id": str(id_counter),
        "title": tv_show['title'],
        "type": language == "de" ? "Serie" : "Series",
        "year": year,
        "description": tv_show['overview'],
        "image": tv_show['poster_url'],
        "genres": []
    }
    
    media_data.append(media_entry)
    id_counter += 1

# JavaScript-Datei erstellen
js_content = "const mediaData = " + json.dumps(media_data, indent=2, ensure_ascii=False) + ";"

# In Datei schreiben
with open('mediaData-{language}.js', 'w', encoding='utf-8') as file:
    file.write(js_content)

print("Die Datei mediaData-{language}.js wurde erfolgreich erstellt!")