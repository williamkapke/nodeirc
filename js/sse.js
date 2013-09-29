(function () {
	window.sse = window.sse || {
		debug: !!~window.location.search.indexOf('sse=debug'),
		open: function(url, events){
			var source = new EventSource(url);
			source.close = function(){
				//very odd: this causes the underlying connection to close
				source.dispatchEvent(new CustomEvent('closed'));
				EventSource.prototype.close.call(source);
			}
			var open = false;
			source.addEventListener('message', function (e) {
				log(e.data);
			}, false);
			source.addEventListener('open', function (e) {
				open = true;
				log('opened:' + url);
			}, false);
			source.addEventListener('closed', function (e) {
				open = false;
				log('closed:' + url);
			}, false);
			source.addEventListener('error', function (e) {
				if(open && source.readyState !== EventSource.OPEN){
					open = false;
					var event = source.readyState === EventSource.CLOSED? "closed" : "connecting";
					source.dispatchEvent(new CustomEvent(event));
					log("connection closed");
				}
				else
					log(JSON.stringify(e))
			}, false);

			if(events) {
				Object.keys(events).forEach(function(e){
					source.addEventListener(e, events[e], false);
				});
			}
			return source;
		},
		log: (console && console.log ?
			function () { if (sse.debug) console.log.apply(console, arguments); }
			: function(){}
		)
	};
	var log = sse.log;
})();