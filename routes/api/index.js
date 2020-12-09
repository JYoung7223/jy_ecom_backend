const router = require("express").Router();
const categoryRoutes = require("./categoryRoutes.js");
const productRoutes = require("./productRoutes.js");
const tagRoutes = require("./tagRoutes.js");

// Initialize Base API routes
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
router.use("/tag", tagRoutes);

module.exports = router;