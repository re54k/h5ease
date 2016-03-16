/**
 * MobileWeb 页面适配助手， 该 js 应在 head 中尽早引入，减少重绘。
 *
 * 页面写死 <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">；
 * 唯一需要配置的参数为“视觉设计宽度“，于 HTML 标签的 data-design-width 值，默认 750；
 * 该方法会在 HTML 标签上设置 data-dpr=[dpr] 属性，可用于特殊适配；
 * 暴露全局方法 px2rem 用于 js 中尺寸相关调用；
 * 对应 css 开发，任何弹性尺寸均使用 rem 单位，rem 值为 视觉设计宽度 / 100;
 * 		scss 中 利用 $ppr(pixel per rem) 进行单位转换， 变量设置 -- $ppr: 100px/1rem;
 *      元素尺寸写法 -- body { width: 750px/$ppr; } .someclass { margin-top: 20px/$ppr; }
 */

(function(win, doc) {
	var docEl = doc.documentElement,
		designWidth = docEl.dataset.designWidth || 750,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

	// ios 下标记 dpr
	if ( /iphone|ipod|ipad/gi.test(navigator.userAgent) ) {
		docEl.dataset.dpr = win.devicePixelRatio;
	}

	// 更新 rem
	var updateREM = function() {
		var width = Math.min(docEl.clientWidth, designWidth),
			ppr = width / designWidth * 100;

		docEl.style.fontSize = ppr + 'px';
	};
	updateREM();

	// 全局方法，px 转 rem
	win.px2rem = function(px) {
		return parseInt(px) / 100;
	};

	doc.addEventListener && win.addEventListener(resizeEvt, updateREM, false);
})(window, document);