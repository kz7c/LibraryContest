import dotenv from 'dotenv'
dotenv.config()
const apikey :string = process.env.RENV_API ?? "";
import { Renv } from "@renv/node"
const client = new Renv("your_renv_token_here")
await client.load("branch_name")

client.get(apikey)