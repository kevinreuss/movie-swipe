import re

# Datei einlesen
with open('mediaData.js', 'r', encoding='utf-8') as file:
    content = file.read()

# Regulärer Ausdruck, um die Objekte im Array zu finden
pattern = r'(\s*\{\s*id:\s*)(\d+)(,[\s\S]*?\},)'
matches = re.findall(pattern, content)

# Sortiere die Matches nach der aktuellen ID
sorted_matches = sorted(matches, key=lambda x: int(x[1]))

# Ersetze die IDs durch fortlaufende Nummern als Strings, beginnend bei 0
new_content = content
for i, match in enumerate(sorted_matches):
    old_id_part = match[0] + match[1]
    new_id_part = match[0] + f'"{i}"'  # ID als String in Anführungszeichen
    new_content = new_content.replace(old_id_part, new_id_part, 1)

# Schreibe die aktualisierte Datei
with open('mediaData.js', 'w', encoding='utf-8') as file:
    file.write(new_content)

print(f"Die IDs wurden erfolgreich als Strings aktualisiert. Es wurden {len(matches)} Einträge bearbeitet.")