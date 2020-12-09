const router = require("express").Router();
const { Category, Product } = require("../../model");

// API endpoint = /api/category
// What endpoints will we handle
// GET /  (return all)
router.get("/", (req, res) => {
    Category.findAll()
        .then((categories) => {
            res.status(200).json(categories);
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /:id  (return only id given)
// be sure to include its associated Products
router.get("/:id", (req, res) =>{
    Category.findAll(
        {
            where: { id: req.params.id }
        })
        .then((categories) => {
            res.status(200).json(categories);
        })
        .catch((err) =>{
            console.log(err);
            res.status(500).json(err);
        });
});

// POST  (create)
// be sure to include its associated Products
router.post("/", (req, res) => {
    Category.create(req.body)
        .then((category) => {
            res.status(200).json(category);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /:id (update data for id given)
router.put("/:id", (req, res) => {
    Category.update(req.body,
        {
            where: { id: req.params.id }
        })
        .then((category) => {
            res.status(200).json(category);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /:id (delete given id)
router.delete("/:id", (req, res) => {
    Category.destroy(
        {
            where: { id: req.params.id }
        })
        .then((category) => {
            res.status(200).json(category);
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;