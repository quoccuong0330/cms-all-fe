const sidebar = require('../../services/website/sidebar.control');

async function action(req, res) {
  const role_current_user = process.env.BY_PASS_USER || req.user.role;
  let sidebar_data = await sidebar('b4', role_current_user);

  res.render(sidebar_data.active_page.page_name, {
    layout: './layouts/website/full-width-layout.ejs',
    ...sidebar_data
  });
}

exports.action = action;

