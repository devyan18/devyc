export function settingsExample () {
  return (
`const settings = {
  PORT: String(process.env.PORT) || "4000",
  MONGO_URI: String(process.env.MONGO_URI) || "mongodb://localhost:27017/database-name",
  SECRET: String(process.env.SECRET) || "mysupersecretsecret"
}

export default settings`
  );
}
