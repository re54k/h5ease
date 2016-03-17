该方案帮助开发者能像开发PC一样来做 mobile web 开发，开发者可以脱离适配的约束，完全按照设计稿的尺寸进行编写，so~

> 妈妈再也不用担心我没做过移动开发了

## Use In Production

1. 设置 viewport meta 标签 `<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">`。
2. 在 `html` 标签上设定设计宽度（`data-design-width`），如果留空，默认按照 `750px` 计算。
3. 在 `head` 标签里尽量靠前引入 `rem.js`，减少重绘引起的页面的闪动。
4. 配合 gulp 转换 px 到 rem，并对 border-width 做高清处理。

> 建议使用线上的通用链接：
http://img5.cache.netease.com/utf8/3g/util/rem.min.js

That's all!

### Need a demo ?

```
npm start
```

然后浏览器打开 [http://localhost:3000/](http://localhost:3000/) 查看。