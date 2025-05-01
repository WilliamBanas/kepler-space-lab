#!/bin/sh
set -e

echo "🔄 Waiting for the database..."

echo "🔄 Prisma migrations are bring applied..."
npx prisma migrate deploy

echo "🔧 Generating Prisma client..."
npx prisma generate

echo "🌱 Seeding database..."
npx prisma db seed

echo "✅ The database has been succesfully initialized !".