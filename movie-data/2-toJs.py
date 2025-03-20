import json

language = "de"

# Datei einlesen
with open(f'originalFetchedData/movie-data-{language}.json', 'r', encoding='utf-8') as file:
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
        "type": "Film" if language == "de" else "Movie",
        "year": year,
        "description": movie['overview'],
        "image": movie['poster_url'],
        "genres": movie['genres']
    }
    
    media_data.append(media_entry)
    id_counter += 1

# TV Shows verarbeiten
for tv_show in data.get('tv_shows', []):
    year = tv_show['first_air_date'].split('-')[0]  # Jahr aus dem Datum extrahieren
    
    media_entry = {
        "id": str(id_counter),
        "title": tv_show['title'],
        "type": "Series" if language == "de" else "Series",
        "year": year,
        "description": tv_show['overview'],
        "image": tv_show['poster_url'],
        "genres": tv_show['genres']
    }
    
    media_data.append(media_entry)
    id_counter += 1

# JavaScript-Datei erstellen
js_content = f"const mediaData_{language} = " + json.dumps(media_data, indent=2, ensure_ascii=False) + ";"

# In Datei schreiben
with open(f'mediaData-{language}.js', 'w', encoding='utf-8') as file:
    file.write(js_content)

print(f"Die Datei mediaData-{language}.js wurde erfolgreich erstellt!")