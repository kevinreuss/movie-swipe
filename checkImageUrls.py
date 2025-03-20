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
    
    # Liste für funktionierende Elemente
    working_items = []
    
    print(f"Überprüfe {len(media_data)} Bildpfade...")
    
    for item in media_data:
        image_url = item['image']
        title = item['title']
        item_id = item['id']
        
        try:
            response = requests.get(image_url, timeout=5)
            
            if response.status_code == 200:
                print(f"✅ ID {item_id}: '{title}' - OK")
                working_items.append({
                    'title': title,
                    'image': image_url
                })
            else:
                print(f"❌ ID {item_id}: '{title}' - Fehler {response.status_code}")
                
                # Versuche, die URL zu korrigieren (SX300 entfernen)
                if "_SX300_" in image_url:
                    fixed_url = image_url.replace("_SX300_", "_")
                    print(f"   Versuche korrigierte URL: {fixed_url}")
                    
                    try:
                        fixed_response = requests.get(fixed_url, timeout=5)
                        
                        if fixed_response.status_code == 200:
                            print(f"✅ ID {item_id}: Korrigierte URL funktioniert!")
                            working_items.append({
                                'title': title,
                                'image': fixed_url
                            })
                        else:
                            print(f"❌ ID {item_id}: Korrigierte URL funktioniert nicht - Fehler {fixed_response.status_code}")
                    except requests.exceptions.RequestException as e:
                        print(f"❌ ID {item_id}: Fehler bei korrigierter URL: {str(e)}")
                else:
                    print(f"❌ ID {item_id}: Keine Korrektur möglich")
                
            # Kurze Pause, um Server nicht zu überlasten
            time.sleep(0.5)
            
        except requests.exceptions.RequestException as e:
            print(f"❌ ID {item_id}: '{title}' - Fehler: {str(e)}")
            
            # Versuche, die URL zu korrigieren (SX300 entfernen)
            if "_SX300_" in image_url:
                fixed_url = image_url.replace("_SX300_", "_")
                print(f"   Versuche korrigierte URL: {fixed_url}")
                
                try:
                    fixed_response = requests.get(fixed_url, timeout=5)
                    
                    if fixed_response.status_code == 200:
                        print(f"✅ ID {item_id}: Korrigierte URL funktioniert!")
                        working_items.append({
                            'title': title,
                            'image': fixed_url
                        })
                    else:
                        print(f"❌ ID {item_id}: Korrigierte URL funktioniert nicht - Fehler {fixed_response.status_code}")
                except requests.exceptions.RequestException as e2:
                    print(f"❌ ID {item_id}: Fehler bei korrigierter URL: {str(e2)}")
            else:
                print(f"❌ ID {item_id}: Keine Korrektur möglich")
    
    # Erstelle neue Datei mit nur funktionierenden Elementen und neuen IDs
    print(f"\nErstelle neue Datei mit {len(working_items)} funktionierenden Elementen...")
    
    # Extrahiere den JavaScript-Variablennamen und den Anfang/Ende der Datei
    var_name_match = re.search(r'(const|var|let)\s+(\w+)\s*=\s*\[', content)
    var_name = var_name_match.group(2) if var_name_match else "mediaData"
    
    # Erstelle den neuen Inhalt
    new_content = f"const {var_name} = [\n"
    
    for i, item in enumerate(working_items):
        new_content += f"  {{\n"
        new_content += f"    id: {i},\n"
        new_content += f"    title: \"{item['title']}\",\n"
        new_content += f"    image: \"{item['image']}\"\n"
        new_content += f"  }}"
        if i < len(working_items) - 1:
            new_content += ","
        new_content += "\n"
    
    new_content += "];\n"
    
    # Schreibe den neuen Inhalt in die Datei
    with open(media_data_file, 'w', encoding='utf-8') as file:
        file.write(new_content)
    
    # Ergebnisse ausgeben
    print("\n--- Zusammenfassung ---")
    print(f"Ursprüngliche Anzahl der Elemente: {len(media_data)}")
    print(f"Anzahl der funktionierenden Elemente: {len(working_items)}")
    print(f"Entfernte Elemente: {len(media_data) - len(working_items)}")
    print(f"Neue Datei wurde mit {len(working_items)} Elementen erstellt, IDs beginnen bei 0.")

# Aufruf der Funktion
check_image_urls("mediaData.js")