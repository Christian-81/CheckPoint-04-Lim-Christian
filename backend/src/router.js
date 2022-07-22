const express = require("express");

const { ProductController } = require("./controllers");
const { MenuController } = require("./controllers");

const router = express.Router();

// router.get("/items", ItemController.browse);
// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

// NE PAS OUBLIER D'AJOUTER LA CONST EN LIGNE 3
router.get("/products", ProductController.browse);
router.get("/products/:id", ProductController.read);
router.put("/products/:id", ProductController.edit);
router.post("/createproduct", ProductController.add);
router.delete("/deleteproduct/:id", ProductController.delete);

router.get("/menu", MenuController.browse);
router.get("/menu/:id", MenuController.read);
router.put("/menu/:id", MenuController.edit);
router.post("/menu", MenuController.add);
router.delete("/menu/:id", MenuController.delete);

module.exports = router;
