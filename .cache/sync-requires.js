// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/naservere/code/serviceorderhub-docs-v2/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-lesson-jsx": preferDefault(require("/Users/naservere/code/serviceorderhub-docs-v2/src/templates/lesson.jsx")),
  "component---src-templates-post-jsx": preferDefault(require("/Users/naservere/code/serviceorderhub-docs-v2/src/templates/post.jsx")),
  "component---src-templates-category-jsx": preferDefault(require("/Users/naservere/code/serviceorderhub-docs-v2/src/templates/category.jsx")),
  "component---src-pages-about-jsx": preferDefault(require("/Users/naservere/code/serviceorderhub-docs-v2/src/pages/about.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/naservere/code/serviceorderhub-docs-v2/src/pages/index.jsx"))
}

exports.json = {
  "layout-index.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/offline-plugin-app-shell-fallback.json"),
  "lesson-five.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/lesson-five.json"),
  "post-one.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/post-one.json"),
  "lesson-four.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/lesson-four.json"),
  "lesson-one.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/lesson-one.json"),
  "lesson-six.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/lesson-six.json"),
  "lesson-three.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/lesson-three.json"),
  "lesson-two.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/lesson-two.json"),
  "categories-tech.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/categories-tech.json"),
  "about.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/about.json"),
  "index.json": require("/Users/naservere/code/serviceorderhub-docs-v2/.cache/json/index.json")
}