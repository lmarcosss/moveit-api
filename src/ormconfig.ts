export default {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [process.env.ENTITIES],
    "migrations": [process.env.MIGRATIONS],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    },
    synchronize: true,
    logging: true,
}