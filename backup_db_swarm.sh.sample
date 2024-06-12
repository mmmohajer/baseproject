#!/bin/bash

# Get the container ID for the API container
API_CONTAINER_ID=$(docker ps --filter "name=app_api" -q)

# Check if the API container ID is not empty
if [ ! -z "$API_CONTAINER_ID" ]; then
    # Copy files from the API container
    docker cp "$API_CONTAINER_ID:/usr/src/app/vol/media" /home/iswad/media_backups
else
    echo "Error: API Container not found."
fi

# Get the container ID for the DB container
DB_CONTAINER_ID=$(docker ps --filter "name=app_db" -q)

# Check if the DB container ID is not empty
if [ ! -z "$DB_CONTAINER_ID" ]; then
    # Backup the database
    docker exec $DB_CONTAINER_ID pg_dump DB_NAME -U DB_USER > /var/www/app/db_backups/db_backup_$(date +%Y-%m-%d_%H-%M-%S).sql
    
    # Delete old database backups
    find /var/www/app/db_backups -type f -mmin +1200 -delete
    
    # Copy the database backup to the specified directory
    mkdir -p /home/iswad/db_backups
    cp -R /var/www/app/db_backups /home/iswad/db_backups/db_backup_$(date +%Y-%m-%d_%H-%M-%S)
    
    # Delete old backups from the backup directory
    find /home/iswad/db_backups -type f -mtime +15 -delete
    find /home/iswad/db_backups -type d -empty -delete
else
    echo "Error: DB Container not found."
fi
