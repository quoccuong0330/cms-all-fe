const { createInitSectionOfPage, getAllSectionOfPages } = require('~/models/SectionOfPage.model.ts');

async function action(req, res) {
  const data = req.body.d;

  const dataHandle = JSON.parse(data);

  const sectionArray = await getAllSectionOfPages();
  if (sectionArray.status) {
    if (sectionArray.payload.length === 0) {
      const create = await createInitSectionOfPage(dataHandle);
      if (create.status) {
        res.send({
          errCode: 1,
          message: `Init successfully`
        });
      }
    } else {
      res.send({
        errCode: 1,
        message: `Cant not init. Contact dev.`
      });
    }
  }
}

exports.action = action;

