"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducer_1 = require("./reducer");
exports.registerStore = redux_1.createStore(reducer_1.registerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//# sourceMappingURL=store.js.map