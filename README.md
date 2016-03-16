
在 H5 开发中，如果单纯为了页面适配，其实并不需要一套复杂的框架，通过简单的设定及 js 和 css 的配合就能达到比较理想的效果。利用该方案，开发者可以脱离适配的约束，完全按照设计稿的尺寸进行编写，so~

> 妈妈再也不用担心我没做过移动开发了

## Use In Production

1. 在 `html` 标签上设定设计宽度（`data-design-width`），如果留空，默认按照 `750px` 计算。
2. 在 `head` 标签里尽量靠前引入 `viewport.js`，减少重绘引起的页面的闪动。
3. 书写 css 时，弹性尺寸统一使用 `rem` 作为单位，换算比例为 **元素的设计宽度/100**，即 `100px = 1rem`。如果使用预编译库，以 sass 为例，可设定全局变量 `$ppr: 100px/1rem;` 用于单位转换，属性写法：`width: 200px/$ppr;`。
4. 暴露了全局方法 `px2rem` 用于在 js 中转换 `px`。

> 建议使用线上的通用链接：
http://img5.cache.netease.com/utf8/3g/util/viewport.min.js

That's all!

### Need a demo ?

```
npm start
```

然后浏览器打开 [http://localhost:3000/](http://localhost:3000/) 查看。