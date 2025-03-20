import requests
import json
import time
import re

def check_image_urls(media_data_file):
    # Extrahiere die Bilddaten aus der JavaScript-Datei
    with open(media_data_file, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Extrahiere die Bildinformationen mit regulären Ausdrücken
    # Finde alle IDs, Titel und Bild-URLs
    id_pattern = r'id:\s*(\d+)'
    title_pattern = r'title:\s*"([^"]+)"'
    image_pattern = r'image:\s*"([^"]+)"'
    
    ids = re.findall(id_pattern, content)
    titles = re.findall(title_pattern, content)
    image_urls = re.findall(image_pattern, content)
    
    # Überprüfe, ob alle Listen die gleiche Länge haben
    if not (len(ids) == len(titles) == len(image_urls)):
        print(f"Warnung: Ungleiche Anzahl von IDs ({len(ids)}), Titeln ({len(titles)}) und Bild-URLs ({len(image_urls)})")
    
    # Erstelle eine Liste von Einträgen
    media_data = []
    for i in range(min(len(ids), len(titles), len(image_urls))):
        media_data.append({
            'id': int(ids[i]),
            'title': titles[i],
            'image': image_urls[i]
        })
    
    # Überprüfe jede URL
    broken_images = []
    
    print(f"Überprüfe {len(media_data)} Bildpfade...")
    
    for item in media_data:
        image_url = item['image']
        title = item['title']
        item_id = item['id']
        
        try:
            response = requests.get(image_url, timeout=5)
            
            if response.status_code != 200:
                print(f"❌ ID {item_id}: '{title}' - Fehler {response.status_code}")
                broken_images.append({
                    'id': item_id,
                    'title': title,
                    'url': image_url,
                    'status_code': response.status_code
                })
            else:
                print(f"✅ ID {item_id}: '{title}' - OK")
                
            # Kurze Pause, um Server nicht zu überlasten
            time.sleep(0.5)
            
        except requests.exceptions.RequestException as e:
            print(f"❌ ID {item_id}: '{title}' - Fehler: {str(e)}")
            broken_images.append({
                'id': item_id,
                'title': title,
                'url': image_url,
                'error': str(e)
            })
    
    # Ergebnisse ausgeben
    print("\n--- Zusammenfassung ---")
    print(f"Gesamtzahl der Bilder: {len(media_data)}")
    print(f"Fehlerhafte Bilder: {len(broken_images)}")
    
    if broken_images:
        print("\nFehlerhafte Bilder:")
        for item in broken_images:
            print(f"ID {item['id']}: '{item['title']}'")
            print(f"  URL: {item['url']}")
            if 'status_code' in item:
                print(f"  Status-Code: {item['status_code']}")
            elif 'error' in item:
                print(f"  Fehler: {item['error']}")

# Aufruf der Funktion
check_image_urls("mediaData.js")