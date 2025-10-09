"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_swc_1 = __importDefault(require("@vitejs/plugin-react-swc"));
// Configuration for local file access
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_swc_1.default)()],
    base: './',
    build: {
        outDir: 'dist-local',
        assetsDir: 'assets',
    }
});
