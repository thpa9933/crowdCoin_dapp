const routes = require('next-routes')();

// colon indicates the variable address will be dynanmic
// first argument is var and second indicates what component to display
routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', 'campaigns/requests/index')
    .add('/campaigns/:address/requests/new', 'campaigns/requests/new');

module.exports = routes;