import { createConnection } from "mysql";

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "12457812",
    database: "pokemon"
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
    } else {
        console.log("Connected to MySQL database");
    }
});

export default db;