var express = require('express');
var router = express.Router();
var path = require('path');
const cors = require('cors');
// ===== ===== ===== =====
const cors_conf = require('../../config/config.json').cors;

// ===== ===== ===== =====
const homeController = require('../../controllers/website/home.controller');
const productController = require('../../controllers/website/product.controller');
const productDetailController = require('../../controllers/website/productDetail.controller');

// ===== ===== router ===== =====
router.get('/', (req, res) => {
  // sidebarControl.getSidebarContent("a1")

  res.render('website/header', {
    layout: './layouts/website.ejs',
    page_title: 'this is my website'
  });
});

router.post('/test', cors(cors_conf), (req, res) => {
  res.render('layout');
});

router.get('/home', (req, res) => {
  homeController.action(req, res);
});

router.get('/', (req, res) => {
  homeController.action(req, res);
});

router.get('/product', (req, res) => {
  productController.action(req, res);
});

router.get('/detail-product', (req, res) => {
  productDetailController.action(req, res);
});

router.get('/product-category/:category', (req, res) => {
  productController.action(req.res);
});

module.exports = router;

