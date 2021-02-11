"use strict";

module.exports = {
  get: function get(req, res) {
    var sess;
    return regeneratorRuntime.async(function get$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sess = req.session;
            console.log('server session controller /session');
            console.log(req.session);
            res.send({
              sess: sess
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};