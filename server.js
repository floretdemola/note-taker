const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

// Making the public folder accessible to the client side
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Include apiRoutes feature in the Express server
app.use("/api", apiRoutes);

// Include htmlRoutes feature in the Express server
app.use("/", htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});