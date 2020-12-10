const router = require("express").Router();
const { Category, Product } = require("../../model");

// API endpoint = /api/category
// What endpoints will we handle
// GET /  (return all)
// be sure to include its associated Products
router.get("/", async (req, res) => {
    try {
        let categoryData = await Category.findAll({ include: [{ model: Product }] })
        console.log(categoryData);
        if (!categoryData) {
            res.status(400).json({ message: "No Categories Found" });
        } else {
            res.status(200).json(categoryData);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET /:id  (return only id given)
// be sure to include its associated Products
router.get("/:id", async (req, res) => {
    try {
        let categoryData = await Category.findAll(
            {
                where: { id: req.params.id }
            },
            {
                include: [{ model: Product }]
            });
        console.log(categoryData);
        if (!categoryData) {
            res.status(400).json({ message: `Category with id:${req.params.id} Not Found` });
        } else {
            res.status(200).json(categoryData);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST  (create)
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
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;