import sequelize from "./db-postgres.js";
// import sequelize from "./db-mysql.js";
import User from "./models/user-model.js";

//connect to db and sync models
const syncModels = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

export { syncModels, User, sequelize };