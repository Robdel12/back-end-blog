eval("//# sourceURL=assets/ember-cli/loader.js");

;eval("define(\"front-end/adapters/application\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.ActiveModelAdapter.extend({\n      namespace: \"api\"\n    });\n  });//# sourceURL=front-end/adapters/application.js");

;eval("define(\"front-end/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: \'front-end\', // TODO: loaded via config\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, \'front-end\');\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=front-end/app.js");

;eval("define(\"front-end/components/c-disqus\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Em = __dependency1__[\"default\"];\n\n    var CDisqusComponent = Ember.Component.extend({\n\n      didInsertElement: function () {\n        var page_id = window.location.href,\n            disqus_identifier = page_id,\n            disqus_url = page_id,\n            disqus_title = Em.$(\'title\').text(),\n            disqus_shortname = \'robertdeluca\', // CHANGE, USE YOURS\n            el_id = disqus_shortname + Date.now();\n\n        this.set(\'page_id\', el_id);\n\n        var dsq = document.createElement(\'script\');\n        dsq.type = \'text/javascript\';\n        dsq.async = true;\n        dsq.src = \'http://\' + disqus_shortname + \'.disqus.com/embed.js\';\n        dsq.id = el_id;\n        (document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0]).appendChild(dsq);\n      },\n\n      willDestroyElement: function () {\n        Em.$(\'#\' +  this.get(\'page_id\')).remove();\n      }\n    });\n\n    __exports__[\"default\"] = CDisqusComponent;\n  });//# sourceURL=front-end/components/c-disqus.js");

;eval("define(\"front-end/controllers/login\", \n  [\"ember\",\"simple-auth/mixins/login-controller-mixin\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var LoginControllerMixin = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Controller.extend(LoginControllerMixin, {\n      authenticator: \'simple-auth-authenticator:devise\',\n      error: false,\n      errorMessage: \"oh noes\"\n    });\n  });//# sourceURL=front-end/controllers/login.js");

;eval("define(\"front-end/controllers/posts/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var PostsController = Ember.ArrayController.extend({\n      sortProperties: [\'id\'],\n      sortAscending: false\n    });\n\n    __exports__[\"default\"] = PostsController;\n  });//# sourceURL=front-end/controllers/posts/index.js");

;eval("define(\"front-end/helpers/format-copyrightdate\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Handlebars.makeBoundHelper(function() {\n      return new Date().getFullYear();\n    });\n  });//# sourceURL=front-end/helpers/format-copyrightdate.js");

;eval("define(\"front-end/helpers/format-markdown\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Handlebars.makeBoundHelper(function(value, options) {\n      if (!value || !options){ return; }\n      return new Ember.Handlebars.SafeString(window.markdown.toHTML(value));\n    });\n  });//# sourceURL=front-end/helpers/format-markdown.js");

;eval("define(\"front-end/initializers/simple-auth-devise\", \n  [\"simple-auth-devise/initializer\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var initializer = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = initializer;\n  });//# sourceURL=front-end/initializers/simple-auth-devise.js");

;eval("define(\"front-end/initializers/simple-auth\", \n  [\"simple-auth/initializer\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var initializer = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = initializer;\n  });//# sourceURL=front-end/initializers/simple-auth.js");

;eval("define(\"front-end/models/post\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n      post_slug: DS.attr(\"string\"),\n      title: DS.attr(\"string\"),\n      published_date: DS.attr(\"date\"),\n      formatted_date: function() {\n        return moment(this.get(\"published_date\")).format(\"MMM Do\");\n      }.property(\"published_date\"),\n      excerpt: DS.attr(\"string\"),\n      body: DS.attr(\"string\")\n    });\n  });//# sourceURL=front-end/models/post.js");

;eval("define(\"front-end/models/posts\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n      post_slug: DS.attr(\"string\"),\n      title: DS.attr(\"string\"),\n      published_date: DS.attr(\"date\"),\n      formatted_date: function() {\n        return moment(this.get(\"published_date\")).format(\"MMM Do\");\n      }.property(\"published_date\"),\n      excerpt: DS.attr(\"string\"),\n      body: DS.attr(\"string\")\n    });\n  });//# sourceURL=front-end/models/posts.js");

;eval("define(\"front-end/router\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: FrontEndENV.locationType\n    });\n\n    Router.map(function() {\n      this.route(\"about\");\n      this.route(\'login\');\n      this.resource(\"create\", function(){\n        this.route(\"new\");\n      });\n      this.resource(\'posts\', function() {\n        this.route(\'show\', {path: \'/:post_slug\'});\n      });\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=front-end/router.js");

;eval("define(\"front-end/routes/application\", \n  [\"ember\",\"simple-auth/mixins/application-route-mixin\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var ApplicationRouteMixin = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend(ApplicationRouteMixin);\n  });//# sourceURL=front-end/routes/application.js");

;eval("define(\"front-end/routes/posts/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n      model: function() {\n        return this.store.find(\'posts\');\n      }\n    });\n  });//# sourceURL=front-end/routes/posts/index.js");

;eval("define(\"front-end/routes/posts/show\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var PostsRoute = Ember.Route.extend({\n      model: function(params) {\n        return this.store.find(\'posts\', params.post_slug).then(function (slug) {\n          return slug;\n        });\n        // return this.store.find(\'posts\', {post_slug: params.post_slug});\n      }\n    });\n\n    __exports__[\"default\"] = PostsRoute;\n  });//# sourceURL=front-end/routes/posts/show.js");

;eval("define(\"front-end/routes/protected\", \n  [\"ember\",\"simple-auth/mixins/authenticated-route-mixin\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var AuthenticatedRouteMixin = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend(AuthenticatedRouteMixin);\n  });//# sourceURL=front-end/routes/protected.js");

;eval("define(\"front-end/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"About\");\n      }\n\n    function program3(depth0,data) {\n      \n      \n      data.buffer.push(\"Blog\");\n      }\n\n    function program5(depth0,data) {\n      \n      var buffer = \'\';\n      data.buffer.push(\"\\n          <a \");\n      data.buffer.push(escapeExpression(helpers.action.call(depth0, \"invalidateSession\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data})));\n      data.buffer.push(\" href=\\\"#\\\">Logout</a>\\n        \");\n      return buffer;\n      }\n\n    function program7(depth0,data) {\n      \n      var buffer = \'\', stack1, helper, options;\n      data.buffer.push(\"\\n          \");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"create.new\", options) : helperMissing.call(depth0, \"link-to\", \"create.new\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n        \");\n      return buffer;\n      }\n    function program8(depth0,data) {\n      \n      \n      data.buffer.push(\"New post\");\n      }\n\n      data.buffer.push(\"<div class=\\\"main-container\\\">\\n  <nav>\\n    <ul>\\n      <li>\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"about\", options) : helperMissing.call(depth0, \"link-to\", \"about\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</li>\\n      <li>\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"posts\", options) : helperMissing.call(depth0, \"link-to\", \"posts\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</li>\\n      <li>\\n        \");\n      stack1 = helpers[\'if\'].call(depth0, \"session.isAuthenticated\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n      </li>\\n      <li>\\n        \");\n      stack1 = helpers[\'if\'].call(depth0, \"session.isAuthenticated\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n      </li>\\n    </ul>\\n  </nav>\\n  <section class=\\\"hero\\\">\\n    <header>\\n      <h1>Hi, I\'m Robert.</h1>\\n      <p>And I create online awesome.</p>\\n    </header>\\n  </section>\\n  <div class=\\\"inner-container\\\">\\n    \");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n  </div>\\n  <footer>\\n    <div class=\\\"footer-content\\\">\\n      <p>&copy; \");\n      stack1 = helpers._triageMustache.call(depth0, \"format-copyrightdate\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\" - <a href=\\\"https://github.com/Robdel12\\\">Check out my Github</a></p>\\n    </div>\\n  </footer>\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=front-end/templates/application.js");

;eval("define(\"front-end/templates/components/c-disqus\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<div id=\\\"disqus_thread\\\"></div>\\n\");\n      \n    });\n  });//# sourceURL=front-end/templates/components/c-disqus.js");

;eval("define(\"front-end/templates/create/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, escapeExpression=this.escapeExpression, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n    <div data-alert class=\\\"alert-box alert radius\\\">\\n      \");\n      stack1 = helpers._triageMustache.call(depth0, \"errorMessage\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n    </div>\\n  \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<h1>Login</h1>\\n<form \");\n      data.buffer.push(escapeExpression(helpers.action.call(depth0, \"authenticate\", {hash:{\n        \'on\': (\"submit\")\n      },hashTypes:{\'on\': \"STRING\"},hashContexts:{\'on\': depth0},contexts:[depth0],types:[\"STRING\"],data:data})));\n      data.buffer.push(\">\\n  \");\n      stack1 = helpers[\'if\'].call(depth0, \"error\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\\n  <label for=\\\"identification\\\">Email</label>\\n  \");\n      data.buffer.push(escapeExpression(helpers.view.call(depth0, \"Ember.TextField\", {hash:{\n        \'id\': (\"identification\"),\n        \'valueBinding\': (\"identification\"),\n        \'placeholder\': (\"Enter Email\")\n      },hashTypes:{\'id\': \"STRING\",\'valueBinding\': \"STRING\",\'placeholder\': \"STRING\"},hashContexts:{\'id\': depth0,\'valueBinding\': depth0,\'placeholder\': depth0},contexts:[depth0],types:[\"ID\"],data:data})));\n      data.buffer.push(\"\\n\\n  <label for=\\\"password\\\">Password</label>\\n  \");\n      data.buffer.push(escapeExpression(helpers.view.call(depth0, \"Ember.TextField\", {hash:{\n        \'id\': (\"password\"),\n        \'type\': (\"password\"),\n        \'valueBinding\': (\"password\"),\n        \'placeholder\': (\"Enter Password\")\n      },hashTypes:{\'id\': \"STRING\",\'type\': \"STRING\",\'valueBinding\': \"STRING\",\'placeholder\': \"STRING\"},hashContexts:{\'id\': depth0,\'type\': depth0,\'valueBinding\': depth0,\'placeholder\': depth0},contexts:[depth0],types:[\"ID\"],data:data})));\n      data.buffer.push(\"\\n\\n  <button type=\\\"submit\\\">Login</button>\\n</form>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=front-end/templates/create/index.js");

;eval("define(\"front-end/templates/create/new\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<h1>Hello</h1>\\n\");\n      \n    });\n  });//# sourceURL=front-end/templates/create/new.js");

;eval("define(\"front-end/templates/login\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;\n\n\n      data.buffer.push(\"<form \");\n      data.buffer.push(escapeExpression(helpers.action.call(depth0, \"authenticate\", {hash:{\n        \'on\': (\"submit\")\n      },hashTypes:{\'on\': \"STRING\"},hashContexts:{\'on\': depth0},contexts:[depth0],types:[\"ID\"],data:data})));\n      data.buffer.push(\">\\n  <label for=\\\"identification\\\">Login</label>\\n  \");\n      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{\n        \'id\': (\"identification\"),\n        \'placeholder\': (\"Enter Login\"),\n        \'value\': (\"identification\")\n      },hashTypes:{\'id\': \"STRING\",\'placeholder\': \"STRING\",\'value\': \"ID\"},hashContexts:{\'id\': depth0,\'placeholder\': depth0,\'value\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"input\", options))));\n      data.buffer.push(\"\\n  <label for=\\\"password\\\">Password</label>\\n  \");\n      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{\n        \'id\': (\"password\"),\n        \'placeholder\': (\"Enter Password\"),\n        \'type\': (\"password\"),\n        \'value\': (\"password\")\n      },hashTypes:{\'id\': \"STRING\",\'placeholder\': \"STRING\",\'type\': \"STRING\",\'value\': \"ID\"},hashContexts:{\'id\': depth0,\'placeholder\': depth0,\'type\': depth0,\'value\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"input\", options))));\n      data.buffer.push(\"\\n  <button type=\\\"submit\\\">Login</button>\\n</form>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=front-end/templates/login.js");

;eval("define(\"front-end/templates/posts/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1, helper, options;\n      data.buffer.push(\"\\n  <div class=\\\"posts\\\">\\n    <div class=\\\"blog-left\\\">\\n      <span class=\\\"post-date\\\">\\n        <span class=\\\"inner-date\\\">\");\n      stack1 = helpers._triageMustache.call(depth0, \"formatted_date\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</span>\\n      </span>\\n    </div>\\n    <div class=\\\"blog-right\\\">\\n      <h3 class=\\\"posts-title\\\">\");\n      data.buffer.push(escapeExpression((helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:[\"ID\",\"STRING\",\"ID\"],data:data},helper ? helper.call(depth0, \"title\", \"posts.show\", \"\", options) : helperMissing.call(depth0, \"link-to\", \"title\", \"posts.show\", \"\", options))));\n      data.buffer.push(\"</h3>\\n      <span class=\\\"posts-excerpt\\\">\");\n      stack1 = helpers._triageMustache.call(depth0, \"excerpt\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\" \");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],data:data},helper ? helper.call(depth0, \"posts.show\", \"\", options) : helperMissing.call(depth0, \"link-to\", \"posts.show\", \"\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</span>\\n    </div>\\n  </div>\\n\");\n      return buffer;\n      }\n    function program2(depth0,data) {\n      \n      \n      data.buffer.push(\" [Read More] \");\n      }\n\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=front-end/templates/posts/index.js");

;eval("define(\"front-end/templates/posts/show\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"<div class=\\\"post\\\">\\n  <h1 class=\\\"post-title\\\">\");\n      stack1 = helpers._triageMustache.call(depth0, \"title\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h1>\\n  \\n\\n  \");\n      data.buffer.push(escapeExpression((helper = helpers[\'format-markdown\'] || (depth0 && depth0[\'format-markdown\']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data},helper ? helper.call(depth0, \"body\", options) : helperMissing.call(depth0, \"format-markdown\", \"body\", options))));\n      data.buffer.push(\"\\n  \\n\\n  \");\n      stack1 = helpers._triageMustache.call(depth0, \"c-disqus\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=front-end/templates/posts/show.js");

;eval("define(\"front-end/tests/front-end/adapters/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/adapters\');\n    test(\'front-end/adapters/application.js should pass jshint\', function() { \n      ok(false, \'front-end/adapters/application.js should pass jshint.\\nfront-end/adapters/application.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/adapters/application.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/adapters/application.jshint.js");

;eval("define(\"front-end/tests/front-end/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end\');\n    test(\'front-end/app.js should pass jshint\', function() { \n      ok(false, \'front-end/app.js should pass jshint.\\nfront-end/app.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/app.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/app.jshint.js");

;eval("define(\"front-end/tests/front-end/components/c-disqus.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/components\');\n    test(\'front-end/components/c-disqus.js should pass jshint\', function() { \n      ok(false, \'front-end/components/c-disqus.js should pass jshint.\\nfront-end/components/c-disqus.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/components/c-disqus.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\nfront-end/components/c-disqus.js: line 3, col 24, \\\'Ember\\\' is not defined.\\nfront-end/components/c-disqus.js: line 7, col 9, \\\'disqus_identifier\\\' is defined but never used.\\nfront-end/components/c-disqus.js: line 8, col 9, \\\'disqus_url\\\' is defined but never used.\\nfront-end/components/c-disqus.js: line 9, col 9, \\\'disqus_title\\\' is defined but never used.\\n\\n6 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/components/c-disqus.jshint.js");

;eval("define(\"front-end/tests/front-end/controllers/login.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/controllers\');\n    test(\'front-end/controllers/login.js should pass jshint\', function() { \n      ok(false, \'front-end/controllers/login.js should pass jshint.\\nfront-end/controllers/login.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/controllers/login.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/controllers/login.jshint.js");

;eval("define(\"front-end/tests/front-end/controllers/posts/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/controllers/posts\');\n    test(\'front-end/controllers/posts/index.js should pass jshint\', function() { \n      ok(false, \'front-end/controllers/posts/index.js should pass jshint.\\nfront-end/controllers/posts/index.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/controllers/posts/index.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/controllers/posts/index.jshint.js");

;eval("define(\"front-end/tests/front-end/helpers/format-copyrightdate.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/helpers\');\n    test(\'front-end/helpers/format-copyrightdate.js should pass jshint\', function() { \n      ok(false, \'front-end/helpers/format-copyrightdate.js should pass jshint.\\nfront-end/helpers/format-copyrightdate.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/helpers/format-copyrightdate.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/helpers/format-copyrightdate.jshint.js");

;eval("define(\"front-end/tests/front-end/helpers/format-markdown.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/helpers\');\n    test(\'front-end/helpers/format-markdown.js should pass jshint\', function() { \n      ok(false, \'front-end/helpers/format-markdown.js should pass jshint.\\nfront-end/helpers/format-markdown.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/helpers/format-markdown.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/helpers/format-markdown.jshint.js");

;eval("define(\"front-end/tests/front-end/initializers/simple-auth-devise.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/initializers\');\n    test(\'front-end/initializers/simple-auth-devise.js should pass jshint\', function() { \n      ok(false, \'front-end/initializers/simple-auth-devise.js should pass jshint.\\nfront-end/initializers/simple-auth-devise.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/initializers/simple-auth-devise.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/initializers/simple-auth-devise.jshint.js");

;eval("define(\"front-end/tests/front-end/initializers/simple-auth.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/initializers\');\n    test(\'front-end/initializers/simple-auth.js should pass jshint\', function() { \n      ok(false, \'front-end/initializers/simple-auth.js should pass jshint.\\nfront-end/initializers/simple-auth.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/initializers/simple-auth.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/initializers/simple-auth.jshint.js");

;eval("define(\"front-end/tests/front-end/models/post.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/models\');\n    test(\'front-end/models/post.js should pass jshint\', function() { \n      ok(false, \'front-end/models/post.js should pass jshint.\\nfront-end/models/post.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/models/post.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\nfront-end/models/post.js: line 8, col 12, \\\'moment\\\' is not defined.\\n\\n3 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/models/post.jshint.js");

;eval("define(\"front-end/tests/front-end/models/posts.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/models\');\n    test(\'front-end/models/posts.js should pass jshint\', function() { \n      ok(false, \'front-end/models/posts.js should pass jshint.\\nfront-end/models/posts.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/models/posts.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\nfront-end/models/posts.js: line 8, col 12, \\\'moment\\\' is not defined.\\n\\n3 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/models/posts.jshint.js");

;eval("define(\"front-end/tests/front-end/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end\');\n    test(\'front-end/router.js should pass jshint\', function() { \n      ok(false, \'front-end/router.js should pass jshint.\\nfront-end/router.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/router.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/router.jshint.js");

;eval("define(\"front-end/tests/front-end/routes/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/routes\');\n    test(\'front-end/routes/application.js should pass jshint\', function() { \n      ok(false, \'front-end/routes/application.js should pass jshint.\\nfront-end/routes/application.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/routes/application.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/routes/application.jshint.js");

;eval("define(\"front-end/tests/front-end/routes/posts/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/routes/posts\');\n    test(\'front-end/routes/posts/index.js should pass jshint\', function() { \n      ok(false, \'front-end/routes/posts/index.js should pass jshint.\\nfront-end/routes/posts/index.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/routes/posts/index.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/routes/posts/index.jshint.js");

;eval("define(\"front-end/tests/front-end/routes/posts/show.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/routes/posts\');\n    test(\'front-end/routes/posts/show.js should pass jshint\', function() { \n      ok(false, \'front-end/routes/posts/show.js should pass jshint.\\nfront-end/routes/posts/show.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/routes/posts/show.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/routes/posts/show.jshint.js");

;eval("define(\"front-end/tests/front-end/routes/protected.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/routes\');\n    test(\'front-end/routes/protected.js should pass jshint\', function() { \n      ok(false, \'front-end/routes/protected.js should pass jshint.\\nfront-end/routes/protected.js: line 0, col 0, Bad option: \\\'moment\\\'.\\nfront-end/routes/protected.js: line 0, col 0, Bad option: \\\'markdown\\\'.\\n\\n2 errors\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/routes/protected.jshint.js");

;eval("define(\"front-end/tests/front-end/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/tests/helpers\');\n    test(\'front-end/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'front-end/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/tests/helpers/resolver.jshint.js");

;eval("define(\"front-end/tests/front-end/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/tests/helpers\');\n    test(\'front-end/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'front-end/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/tests/helpers/start-app.jshint.js");

;eval("define(\"front-end/tests/front-end/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/tests\');\n    test(\'front-end/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'front-end/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/tests/test-helper.jshint.js");

;eval("define(\"front-end/tests/front-end/tests/unit/models/posts-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - front-end/tests/unit/models\');\n    test(\'front-end/tests/unit/models/posts-test.js should pass jshint\', function() { \n      ok(true, \'front-end/tests/unit/models/posts-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=front-end/tests/front-end/tests/unit/models/posts-test.jshint.js");

;eval("define(\"front-end/tests/helpers/resolver\", \n  [\"ember/resolver\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: \'front-end\'\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=front-end/tests/helpers/resolver.js");

;eval("define(\"front-end/tests/helpers/start-app\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    /* global require */\n\n    var Application = require(\'front-end/app\')[\'default\'];\n    var Router = require(\'front-end/router\')[\'default\'];\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({\n        // useful Test defaults\n        rootElement: \'#ember-testing\',\n        LOG_ACTIVE_GENERATION:false,\n        LOG_VIEW_LOOKUPS: false\n      }, attrs); // but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function(){\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=front-end/tests/helpers/start-app.js");

;eval("define(\"front-end/tests/test-helper\", \n  [\"front-end/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n  });//# sourceURL=front-end/tests/test-helper.js");

;eval("define(\"front-end/tests/unit/models/posts-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleForModel = __dependency1__.moduleForModel;\n\n    moduleForModel(\'posts\', \'Posts\', {\n      // Specify the other units that are required for this test.\n      needs: []\n    });\n\n    test(\'it exists\', function() {\n      var model = this.subject();\n      // var store = this.store();\n      ok(model);\n    });\n  });//# sourceURL=front-end/tests/unit/models/posts-test.js");
