const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// API endpoint = /api/tag

// What endpoints will we handle
// GET /  (return all)
// be sure to include its associated Product data
router.get("/", async (req, res) => {
    try {
        let tagData = await Tag.findAll({ include: [{ model: Product }] })
        console.log(tagData);
        if (!tagData) {
            res.status(400).json({ message: "No Tags Found" });
        } else {
            res.status(200).json(tagData);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET /:id  (return only id given)
// be sure to include its associated Product data
router.get("/:id", async (req, res) => {
    try {
        let tagData = await Tag.findAll(
            {
                include: [{ model: Product }],
                where: { id: req.params.id }
                
            });
        console.log(tagData);
        if (!tagData) {
            res.status(400).json({ message: `Tag with id:${req.params.id} Not Found` });
        } else {
            res.status(200).json(tagData);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST  (create)
/* req.body should look like this...
    {
      tag_name: "pop culture"
    }
  */
router.post("/", (req, res) => {
    console.log(req.body);
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
/* req.body should look like this...
    {
      tag_name: "pop culture"
    }
  */
router.put("/:id", (req, res) => {
    console.log(req.body);
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
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;