var modules = {};

// root module name
modules.main = "guarani";

//components modules
modules.autoResize = modules.main.concat(".autoResize");

// centralized modules
modules.directives = modules.main.concat(".directives");
modules.filters = modules.main.concat(".filters");
modules.services = modules.main.concat(".services");

//controllers modules
modules.search = modules.main.concat(".search");
modules.detail = modules.main.concat(".detail");