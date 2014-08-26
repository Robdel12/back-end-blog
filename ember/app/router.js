import Ember from "ember";

var Router = Ember.Router.extend({
  location: FrontEndENV.locationType
});

Router.map(function() {
  this.route("about");
  this.route("portfolio");
  this.route("login");
  this.route("dashboard");
  this.resource("posts", function() {
    this.route("show", {path: "/:post_slug"});
    this.route("edit", {path: "/:post_slug/edit"});
    this.route("new");
  });
  this.route('error404', { path: '/*path' }); //404s son
});

export default Router;
