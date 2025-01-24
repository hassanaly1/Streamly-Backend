// require("dotenv").config({ path: "./.env" });
import dotenv from "dotenv";
import connectToDatabase from "./db/database.js";
dotenv.config({ path: "./.env" });

connectToDatabase();

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`);
    app.on("error", (error) => console.error(error));
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
    // throw error
  }
})();
*/
