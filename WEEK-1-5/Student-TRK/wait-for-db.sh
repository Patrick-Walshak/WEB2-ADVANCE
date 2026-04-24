#!/bin/sh
set -e

host="$1"
shift
cmd="$@"

# Wait for MySQL to be ready using netcat
until nc -z "$host" 3306; do
  echo "Waiting for MySQL to be ready..."
  sleep 2
done

# Give MySQL a moment to fully initialize
sleep 5

echo "MySQL is ready! Starting the app..."
exec $cmd
