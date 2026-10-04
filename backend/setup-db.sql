-- BrightSeed Hub Database Setup Script
-- Run this in pgAdmin or psql as the postgres superuser

-- 1. Create the user (role)
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'brightseedhub_user') THEN
    CREATE ROLE brightseedhub_user WITH LOGIN PASSWORD 'password';
  END IF;
END
$$;

-- 2. Create the database
SELECT 'CREATE DATABASE brightseedhub OWNER brightseedhub_user'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'brightseedhub')\gexec

-- 3. Grant privileges
GRANT ALL PRIVILEGES ON DATABASE brightseedhub TO brightseedhub_user;

-- Done! The Sequelize ORM will auto-create the tables when the server starts.
