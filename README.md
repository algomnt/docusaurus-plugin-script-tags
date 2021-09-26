# Docusaurus-plugin-script-tags


```sh
yarn add docusaurus-plugin-script-tags
```

## How to use

```js
module.exports = {
  plugins: ['docusaurus-plugin-script-tags'],
  themeConfig: {
      tags: {
            headTags: [{
                tagName: "script",
                innerHTML: `
                console.log("we are on page", window.location.href);
                `,
            }],
        },
  },
};
```