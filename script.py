import pymysql
import json

# Step 1: Load data from JSON file
with open('data.json', 'r') as f:
    data = json.load(f)

# Step 2: Connect to MySQL database
conn = pymysql.connect(
    host='localhost',
    user='root',       # 🔁 Replace with your MySQL username
    password='123456',   # 🔁 Replace with your MySQL password
    database='goproject',   # 🔁 Replace with your database name
    charset='utf8mb4'
)

try:
    with conn.cursor() as cursor:
        # Step 3: Prepare SQL insert statement
        sql = """
        INSERT INTO products (
            id, image_url, brand, para, price_display, rs,
            strikedoffprice_display, offer, atc, atw, category
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        # Step 4: Insert each product into the table
        for item in data:
            values = (
                item['id'],
                item['image_url'],
                item['brand'],
                item['para'],
                item['price'],
                item['rs'],
                item['strikedoffprice'],
                item['offer'],
                item.get('atc', ''),  # default to empty string if missing
                item.get('atw', ''),
                item.get('category', '')
            )
            cursor.execute(sql, values)

        conn.commit()
        print(f"{cursor.rowcount} records inserted successfully.")

finally:
    conn.close()
