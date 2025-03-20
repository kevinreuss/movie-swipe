import requests
import json
import time
import re

def check_image_urls(media_data_file):
    # Extrahiere die Bilddaten aus der JavaScript-Datei
    with open(media_data_file, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Extrahiere die Bildinformationen mit regulären Ausdrücken
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
    
    print(f"Überprüfe {len(media_data)} Bildpfade...")
    
    # Zähler für erfolgreiche und fehlgeschlagene URLs
    success_count = 0
    failed_count = 0
    failed_items = []
    
    for item in media_data:
        image_url = item['image']
        title = item['title']
        item_id = item['id']
        
        try:
            response = requests.get(image_url, timeout=5)
            
            if response.status_code == 200:
                print(f"✅ ID {item_id}: '{title}' - OK")
                success_count += 1
            else:
                print(f"❌ ID {item_id}: '{title}' - Fehler {response.status_code}")
                failed_count += 1
                failed_items.append(item_id)
                
            # Kurze Pause, um Server nicht zu überlasten
            time.sleep(0.5)
            
        except requests.exceptions.RequestException as e:
            print(f"❌ ID {item_id}: '{title}' - Fehler: {str(e)}")
            failed_count += 1
            failed_items.append(item_id)
    
    # Ergebnisse ausgeben
    print("\n--- Zusammenfassung ---")
    print(f"Geprüfte Elemente: {len(media_data)}")
    print(f"Erfolgreiche URLs: {success_count}")
    print(f"Fehlgeschlagene URLs: {failed_count}")
    
    if failed_count == 0:
        print("\n✅ ALLE URLS SIND GRÜN! Der Sanity Check war erfolgreich.")
    else:
        print(f"\n❌ ES GIBT FEHLER! {failed_count} URLs funktionieren nicht.")
        print(f"Fehlgeschlagene IDs: {', '.join(map(str, failed_items))}")

# Aufruf der Funktion
check_image_urls("mediaData.js")