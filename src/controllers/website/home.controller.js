const sidebar = require('../../services/website/sidebar.control');
const { getDataHeader, getDataFooter, getDataHomePage } = require('../../config/init/global-header');

async function action(req, res) {
  const role_current_user = process.env.BY_PASS_USER || req.user.role;
  let sidebar_data = await sidebar('b1', role_current_user);

  const headerUI = await getDataHeader();
  const footerUI = await getDataFooter();
  const homePageUI = await getDataHomePage();

  res.render(sidebar_data.active_page.page_name, {
    layout: './layouts/website/full-width-layout.ejs',
    ...sidebar_data,
    headerUI,
    footerUI,
    homePageUI
  });
}

exports.action = action;

