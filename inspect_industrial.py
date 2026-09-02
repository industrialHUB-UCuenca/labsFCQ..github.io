import html
import re
import urllib.request

url = "https://www.ucuenca.edu.ec/carreras/ingenieria-industrial/#docentes"
content = urllib.request.urlopen(url).read().decode("utf-8", "replace")

for term in ["Noe Rodrigo", "Guamán G", "Guam", "Jenny", "Maritza Rojas", "Cajamarca"]:
    print(f"\n--- {term} ---")
    for match in re.finditer(term, content, re.I):
        block = content[max(0, match.start() - 1400) : match.start() + 1800]
        text = re.sub("<[^>]+>", " ", block)
        text = html.unescape(re.sub(r"\s+", " ", text)).strip()
        images = re.findall(r"https://[^\"']+\.(?:jpg|jpeg|png|webp)", block, re.I)
        emails = re.findall(r"[\w.\-]+@ucuenca\.edu\.ec", block, re.I)
        print(text[:1200].encode("utf-8", "replace").decode("utf-8"))
        print("IMAGES:", images[:5])
        print("EMAILS:", emails[:5])
        print("---")
        break
