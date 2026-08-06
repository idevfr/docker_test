import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./db/index.js";

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app is running at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
