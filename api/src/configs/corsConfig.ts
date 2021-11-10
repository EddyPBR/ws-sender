export const corsConfig = {
  origin: process.env.WEB_CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "DELETE"]
}