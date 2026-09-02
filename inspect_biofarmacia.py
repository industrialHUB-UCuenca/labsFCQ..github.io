import html
import re
import urllib.request

url = "https://www.ucuenca.edu.ec/carreras/bioquimica-y-farmacia/#docentes"
content = urllib.request.urlopen(url).read().decode("utf-8", "replace")

terms = [
    "Narváez",
    "Narv",
    "Montaleza",
    "León",
    "Jessica",
    "Freddy",
    "Bustamante",
    "Fabricio",
    "Riera",
    "Priscila",
    "Plaza",
    "Andrea",
    "Cabrera",
]

for term in terms:
    print(f"\n--- {term} ---")
    found = False
    for match in re.finditer(term, content, re.I):
        found = True
        block = content[max(0, match.start() - 1600) : match.start() + 2200]
        text = re.sub("<[^>]+>", " ", block)
        text = html.unescape(re.sub(r"\s+", " ", text)).strip()
        images = re.findall(r"https://[^\"']+\.(?:jpg|jpeg|png|webp)", block, re.I)
        emails = re.findall(r"[\w.\-]+@ucuenca\.edu\.ec", block, re.I)
        print(text[:1500].encode("utf-8", "replace").decode("utf-8"))
        print("IMAGES:", images[:6])
        print("EMAILS:", emails[:6])
        print("---")
        break
    if not found:
        print("No encontrado")
