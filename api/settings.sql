CREATE DATABASE tdp;
CREATE USER tdpuser WITH PASSWORD 'tdp';
GRANT ALL PRIVILEGES ON DATABASE tdp TO tdpuser;
GRANT postgres TO tdpuser;