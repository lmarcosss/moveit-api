import { ConnectionOptions } from "typeorm";

export default {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [process.env.ENTITIES],
    "migrations": [process.env.MIGRATIONS],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    },
    // synchronize: false,
    // logging: true,
    // extra: {
    //     ssl: {
    //         rejectUnauthorized: false,
    //     },
    // }
} as ConnectionOptions
