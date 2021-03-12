const express = require("express");
const router = express.Router();
const nunjucks = require("nunjucks");

function testMiddleware(req, res, next) {
    console.log("첫번째 미들웨어");
    next();
}

function testMiddleware2(req, res, next) {
    console.log("두번째 미들웨어");
    next();
}

// localhost:3000/admin
router.get("/", testMiddleware, testMiddleware2, (req, res) => {
    res.send("admin 이후 url");
});

// localhost:3000/admin/products
router.get("/products", (_, res) => {
    res.render("admin/products.html", {
        message: "hellodcda",
        online: "express",
    });
});

router.get("/products/write", (req, res) => {
    res.render("admin/write.html");
});

router.post("/products/write", (req, res) => {
    res.send(req.body);
});

module.exports = router;
