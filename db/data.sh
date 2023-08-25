# !/bin/bash

# Specify the path to the SQLite database file
DB_FILE="./db_osvita.db"

# Execute the SQL commands from data.sql using sqlite3
sqlite3 "$DB_FILE" < data.sql