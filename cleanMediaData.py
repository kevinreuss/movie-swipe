import re

# Datei einlesen
with open('mediaData.js', 'r', encoding='utf-8') as file:
    content = file.read()

# Regulärer Ausdruck, um die Objekte im Array zu finden
pattern = r'(\s*\{\s*id:\s*)(\d+)(,[\s\S]*?\},)'
matches = re.findall(pattern, content)

# Sortiere die Matches nach der aktuellen ID
sorted_matches = sorted(matches, key=lambda x: int(x[1]))

# Ersetze die IDs durch fortlaufende Nummern, beginnend bei 0
new_content = content
for i, match in enumerate(sorted_matches):
    old_id_part = match[0] + match[1]
    new_id_part = match[0] + str(i)
    new_content = new_content.replace(old_id_part, new_id_part, 1)

# Regulärer Ausdruck, um die Bildpfade zu finden
image_pattern = r'(image:\s*")([^"]+)(\._V1_\.jpg")'
image_matches = re.findall(image_pattern, new_content)

# Ersetze die Bildpfade durch optimierte Versionen
for match in image_matches:
    old_image_url = match[0] + match[1] + match[2]
    # Erstelle die optimierte URL mit einer Breite von 300px
    new_image_url = match[0] + match[1] + "._V1_SX300_.jpg\""
    new_content = new_content.replace(old_image_url, new_image_url)

# Schreibe die aktualisierte Datei
with open('mediaData.js', 'w', encoding='utf-8') as file:
    file.write(new_content)

# Zähle die Anzahl der optimierten Bilder
image_count = len(image_matches)

print(f"Die IDs wurden erfolgreich aktualisiert. Es wurden {len(matches)} Einträge bearbeitet.")
print(f"Die Bildpfade wurden optimiert. Es wurden {image_count} Bilder auf eine Breite von 300px angepasst.")