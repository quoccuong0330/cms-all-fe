const { resetSectionOfPage } = require('../../models/SectionOfPage.model');
const { resetPage } = require('../../models/Page.model');

async function action(req, res) {
  console.log('done 1');
  await resetSectionOfPage();
  await resetPage();
  console.log('done');
}

exports.action = action;

