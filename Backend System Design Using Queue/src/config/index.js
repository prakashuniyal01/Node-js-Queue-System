import { config } from "dotenv"

config()

const {
  PORT,
  MONGODB_URI,
  NODE_ENV,
  CORS_ORIGIN,
//   COMMON_JWT_KEY,
} = process.env

const Config = {
  PORT,
  MONGODB_URI,
  NODE_ENV,
  CORS_ORIGIN,
//   COMMON_JWT_KEY,
}

export default Config