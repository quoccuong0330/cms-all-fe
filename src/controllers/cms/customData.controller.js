const sidebarControl = require('../../services/cms/sidebarControl');

async function action(req, res) {
  const role_current_user = process.env.BY_PASS_USER || req.user.role;
  let sidebar_data = await sidebarControl('a62', role_current_user);

  res.render(sidebar_data.active_page.page_name, {
    ...sidebar_data,
    layout: './layouts/cms-layout.ejs'
  });
}

exports.action = action;

