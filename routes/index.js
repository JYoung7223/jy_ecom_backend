const router = require("express").Router();
const apiRoutes = require("./api");

// Initialize Base Routes

// API Routes
router.use("/api", apiRoutes);

// HTML Routes
router.use((req,res) => {
    res.send("<h1> Interface not Implemented </h1>");
});

module.exports = router;