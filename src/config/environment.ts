export const environment = {
  api: {
    version: process.env.API_VERSION || 'v1'
  },
  server: {
    port: process.env.PORT || 3333
  },
  db: {
    database: process.env.DB_DATABASE || 'test',
    username: process.env.DB_USERNAME || 'test',
    password: process.env.DB_PASSWORD || 'test',
    dialect: process.env.DB_DIALECT || 'postgres'
  },
  security: {
    saltRounds: process.env.SALT_ROUNDS || 10,
    apiSecret: process.env.API_SECRET || 'vollare-api-secret'
  }
}
