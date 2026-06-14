import json
import csv

# Загрузить GeoJSON из файла или URL
# Если с диска:
with open('/Users/denis/www/Akkuratistki/lodz.geojson', 'r', encoding='utf-8') as f:
    geojson = json.load(f)

# Извлечь все почтовые индексы
rows = []
for feature in geojson['features']:
    props = feature['properties']
    geom = feature['geometry']
    # Сохранить полигон как JSON строку
    polygon_json = json.dumps(geom)
    rows.append({
        'SYMBOL': props.get('Name', ''),           # "90-205", "91-149", etc
        'ACTIVE': False,                           # По умолчанию НЕ отмечены
        'delivery_time_min': '',                   # Заполнит Мирзо
        'delivery_time_max': '',                   # Заполнит Мирзо
        'zone_name': '',                           # Опционально
        'GMINA': props.get('Gmina', ''),          # "LODZ"
        'TERYT': props.get('TERYT', ''),          # "1061011"
        'VALUE': props.get('Value', 0),           # Значение из датасета
        'PC_NUM': props.get('PC_NUM', 0),         # Номер почтового кода
        'polygon_geometry': polygon_json,          # Полный полигон как JSON
        'notes': ''                                # Внутренние заметки
    })

# Сохранить как CSV
with open('/Users/denis/www/Akkuratistki/postcodes.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=[
        'SYMBOL', 'ACTIVE', 'delivery_time_min', 'delivery_time_max', 
        'zone_name', 'GMINA', 'TERYT', 'VALUE', 'PC_NUM', 
        'polygon_geometry', 'notes'
    ])
    writer.writeheader()
    writer.writerows(rows)

print(f'✓ Готово! Экспортировано {len(rows)} почтовых индексов')
print(f'✓ Файл: postcodes.csv')
print(f'Примеры:')
for row in rows[:3]:
    print(f"  - {row['SYMBOL']} ({row['GMINA']})")