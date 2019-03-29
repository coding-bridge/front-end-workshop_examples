## Instructions

### 👉 [Static and dynamic](https://github.com/coding-bridge/front-end-workshop_examples/tree/master/static-and-dynamic) website difference demo

This is an easy demonstration of the difference between static and dynamic website.

#### Installation:

1. in terminal, type `pwd` to make sure you're in this `static-and-dynamic` directory
2. type `npm install` (to install the `express` package specified in `package.json` file)

#### How to:

1. in terminal, type `node server.js`, and open `localhost:8000` in your browser
2. double click `static-index.html` file to open it in browser
3. play with the emoji links in webpage

#### Key points:

In `dynamic-index.html`, the `href` links in `a` tags are:

```
<a href="/mind-blown">🤯</a>
<a href="/frustrated">😭</a>
<a href="/huge-love">😍</a>
```

In `static-index.html`, the links are:

```
<a href="./pages/mind-blown.html">🤯</a>
<a href="./pages/frustrated.html">😭</a>
<a href="./pages/huge-love.html">😍</a>
```