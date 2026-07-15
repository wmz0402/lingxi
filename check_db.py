import sqlite3
import sys

# Force UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

conn = sqlite3.connect('lingxi.db')
conn.text_factory = lambda x: str(x, 'utf-8', errors='replace')
cursor = conn.execute('SELECT name, description FROM course')
courses = cursor.fetchall()
print("Courses in database:")
for i, (name, desc) in enumerate(courses, 1):
    print(f"{i}. {name}")
    if desc:
        print(f"   Description: {desc[:50]}...")
conn.close()
