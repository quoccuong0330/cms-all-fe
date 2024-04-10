const { findAllSectionOfPagesByPageId } = require('../../models/SectionOfPage.model');
const { getHotProduct } = require('../../models/ImageOfProduct.model');
const { findAllCategoryOfProduct } = require('../../models/CategoryOfProduct.model');
const { findAllProduct } = require('../../models/Product.model');

async function getDataHeader() {
  let logo, name;
  const header = await findAllSectionOfPagesByPageId(5);
  if (header.status) {
    const data = header.payload;

    logo = filterItemByLabel(data, 'logo');
    name = filterItemByLabel(data, 'name');
  }
  let headerUI = { logo, name };
  return headerUI;
}

async function getDataFooter() {
  let logo, copyright, column, name, column_1, column_0, column_2;
  const footer = await findAllSectionOfPagesByPageId(6);

  if (footer.status) {
    const data = footer.payload;
    logo = filterItemByLabel(data, 'logo');
    name = filterItemByLabel(data, 'name');
    column = filterItemByLabel(data, 'column');
    copyright = filterItemByLabel(data, 'copyright');
    column_0 = filterItemByLabel(data, 'column_0');
    column_1 = filterItemByLabel(data, 'column_1');
    column_2 = filterItemByLabel(data, 'column_2');
  }
  let footerUI = { logo, column, name, copyright, column_1, column_0, column_2 };
  return footerUI;
}

async function getDataHomePage() {
  let slide,
    left_content,
    banner,
    feature,
    product = [];
  const homePage = await findAllSectionOfPagesByPageId(1);

  if (homePage.status) {
    const data = homePage.payload;
    slide = filterItemByLabel(data, 'slide');
    left_content = filterItemByLabel(data, 'left-content');
    banner = filterItemByLabel(data, 'banner');
    feature = filterItemByLabel(data, 'feature');
  }

  const hotProduct = await getHotProduct(4);
  console.log(hotProduct.payload[0].product);

  if (hotProduct.status) {
    product = hotProduct.payload;
  }

  let homePageUI = { slide, left_content, banner, feature, product };
  return homePageUI;
}

async function getDataProductPage() {
  let category, product;
  const allCategory = await findAllCategoryOfProduct();
  if (allCategory.status) {
    category = allCategory.payload;
  }

  const allProduct = await getHotProduct();
  if (allProduct.status) {
    product = allProduct.payload;
  }

  let productPageUI = { category, product };
  return productPageUI;
}

function filterItemByLabel(data, label) {
  return data.filter((item) => item.label === label && item.display === true);
}

module.exports = { getDataHeader, getDataFooter, getDataHomePage, filterItemByLabel, getDataProductPage };

