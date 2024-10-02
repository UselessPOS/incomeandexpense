
import { neon } from "@neondatabase/serverless"
import env from 'dotenv'

env.config()

export const sql = neon(process.env.DATABASE_URL)