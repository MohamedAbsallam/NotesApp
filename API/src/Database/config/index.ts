import dotenv from "dotenv";

// Config .env File
dotenv.config();

const {
  PORT,
  NODE_ENV,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_DB_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  BCRYPT_PASSWORD,
  SALT_ROUNDS,
  SECRET_TOKEN,
} = process.env;

export default {
  port: PORT,
  host: POSTGRES_HOST,
  dbport: POSTGRES_PORT,
  database: NODE_ENV === "dev" ? POSTGRES_DB : POSTGRES_DB_TEST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  pepper: BCRYPT_PASSWORD,
  salt: SALT_ROUNDS,
  token: SECRET_TOKEN,
};
