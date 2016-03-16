/**
 * MobileWeb 页面适配助手， 该 js 应在 head 中尽早引入，减少重绘。
 *
 * 页面无需写 <meta name="viewport" ...> 标签；
 * 唯一需要配置的参数为“视觉设计宽度“，于 HTML 标签的 data-design-width 值，默认 750；
 * 该方法会在 HTML 标签上设置 data-dpr=[dpr] 属性，可用于特殊适配；
 * 暴露全局方法 px2rem 用于 js 中尺寸相关调用；
 * 对应 css 开发，任何弹性尺寸均使用 rem 单位，rem 值为 视觉设计宽度 / 100;
 * 		scss 中 利用 $ppr(pixel per rem) 进行单位转换， 变量设置 -- $ppr: 100px/1rem;
 *      元素尺寸写法 -- body { width: 750px/$ppr; } .someclass { margin-top: 20px/$ppr; }
 */

!(function(win, doc) {
	var metaEl = doc.querySelector('meta[name="viewport"]'),
		docEl = doc.documentElement,
		designWidth = docEl.dataset.designWidth || 750,
		dpr = Math.min(Math.floor(win.devicePixelRatio || 1), 3),
		scale = 1 / dpr,
		content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale,
		rem, tid;

	if ( metaEl ) {
		metaEl.setAttribute('content', content);
	} else {
		metaEl = doc.createElement('meta');
		metaEl.setAttribute('name', 'viewport');
		metaEl.setAttribute('content', content);
		docEl.firstElementChild.appendChild(metaEl);
	}

	docEl.dataset.dpr = dpr;

	// 更新 rem
	var updateREM = function() {
		var width = docEl.getBoundingClientRect().width || win.innerWidth;

		width = Math.min(width, designWidth * dpr);
		rem = width / designWidth * 100;
		docEl.style.fontSize = rem + 'px';
	};
	updateREM();

	// 全局方法，px 转 rem
	win.px2rem = function(px) {
		return parseInt(px) / 100;
	};

	win.addEventListener('resize', function() {
		clearTimeout(tid);
		tid = setTimeout(updateREM, 100);
	}, false);

	win.addEventListener('pageshow', function(e) {
		if ( e.persisted ) {
			clearTimeout(tid);
			tid = setTimeout(updateREM, 100);
		}
	}, false);
})(window, document);