(function(window){var svgSprite='<svg><symbol id="icon-gerenzhongxin" viewBox="0 0 1024 1024"><path d="M737.6339 307.355133c0 124.900661-100.842733 225.742371-225.742371 225.742371s-225.742371-100.842733-225.742371-225.742371S386.990868 81.612763 511.89153 81.612763 737.6339 182.455495 737.6339 307.355133z"  ></path><path d="M798.012036 896.469442l-592.279395 0c-26.110681 0-37.258579-19.169595-37.258579-46.063105l0 0.408299c0-155.563008 113.143896-277.718139 264.176728-277.718139l139.261741 0c151.032832 0 283.395442 123.471103 283.395442 279.034111l0-2.178619C855.308997 876.846522 824.122717 896.469442 798.012036 896.469442z"  ></path></symbol><symbol id="icon-iconmore" viewBox="0 0 1024 1024"><path d="M61.062727 62.597687 61.062727 241.4624l896.41623 0L957.478957 62.597687 61.062727 62.597687zM61.062727 599.210247l896.41623 0 0-178.873923-896.41623 0L61.062727 599.210247zM61.062727 956.967304l896.41623 0 0-178.873923-896.41623 0L61.062727 956.967304z"  ></path></symbol><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M492.675886 904.817574L885.696074 511.797385 492.675886 118.777197c-12.258185-12.258185-12.432147-32.892131 0.187265-45.51052 12.707416-12.707416 32.995485-12.703323 45.511543-0.187265l411.660734 411.660734c7.120165 7.120165 10.163477 17.065677 8.990768 26.624381 1.500167 9.755178-1.5104 20.010753-8.990768 27.491121L538.374694 950.515359c-12.258185 12.258185-32.892131 12.432147-45.511543-0.187265-12.707416-12.707416-12.703323-32.995485-0.187265-45.51052z"  ></path></symbol><symbol id="icon-jiantouxia" viewBox="0 0 1024 1024"><path d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)