const router = require("express").Router();
const {Tag, Product, ProductTag} = require("../../model");

// API endpoint = /api/tag

// What endpoints will we handle
// GET /  (return all)
// be sure to include its associated Product data
router.get("/", (req, res) => {

});

// GET /:id  (return only id given)
// be sure to include its associated Product data
router.get("/:id", (req, res) =>{

});

// POST  (create)
router.post("/", (req, res) => {
    Tag.create(req.body)
        .then((tag) => {
            res.status(200).json(tag);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /:id (update data for id given)
router.put("/:id", (req, res) => {
    Tag.update(req.body,
        {
            where: { id: req.params.id }
        })
        .then((tag) => {
            res.status(200).json(tag);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /:id (delete given id)
router.delete("/:id", (req, res) => {
    Tag.destroy(
        {
            where: { id: req.params.id }
        })
        .then((tag) => {
            res.status(200).json(tag);
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;