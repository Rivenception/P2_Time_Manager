// Import the model (employee.js) to use its database functions.
module.exports = function(app) {

  // Create Routes
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/admin", function(req, res) {
    res.render("admin");
  });

  app.get("/eng", function(req, res) {
    res.render("eng");
  });

  app.get("/mfg", function(req, res) {
    res.render("mfg");
  });

  app.get("/pm", function(req, res) {
    res.render("pm");
  });

  app.get("/pm/:id", function(req, res) {
    res.render("pm");
  });

  app.get("/eng/:id", function(req, res) {
    res.render("eng");
  });

  app.get("/mfg/:id", function(req, res) {
    res.render("mfg");
  });

};
