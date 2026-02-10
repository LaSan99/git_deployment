require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// ✅ Only connect to MongoDB if URI exists
if (process.env.MONGO_URI) {
  connectDB();
} else {
  console.log("MONGO_URI not found — skipping DB connection");
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
