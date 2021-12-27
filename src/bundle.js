/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  Employee: {
    fields: {
      id: {
        type: "int32",
        id: 1
      },
      name: {
        type: "string",
        id: 2
      },
      salary: {
        type: "float",
        id: 3
      }
    }
  },
  Employees: {
    fields: {
      employees: {
        rule: "repeated",
        type: "Employee",
        id: 1
      }
    }
  }
});

module.exports = $root;
