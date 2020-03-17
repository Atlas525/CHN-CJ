function getStyle(obj, name) {
	if (obj.currentStyle) {
		return currentStyle[name]
	}
	else {
		return getComputedStyle(obj, false)[name]
	}
}
//startMove(oDiv,{width:200px,height:300px},function)
function startMove(obj, json, fnEnd) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function () {
		var bStop = true    //假设所有值都已经完成	
		for (arr in json) {
			var cur = 0
			if (arr == 'opacity') {
				cur = Math.round(parseFloat(getStyle(obj, arr)) * 100)
			}
			else {
				cur = parseInt(getStyle(obj, arr))
			}
			var speed = (json[arr] - cur) / 10
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

			if (cur != json[arr])
				bStop = false

			if (arr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'
				obj.style.opacity = (cur + speed) / 100
			}
			else {
				obj.style[arr] = cur + speed + 'px'
			}
		}
		if (bStop) {
			clearInterval(obj.timer)
			if (fnEnd) fnEnd()
		}
	}, 20)
}