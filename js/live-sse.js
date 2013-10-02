$(function(){
	var last;
	var max_margin = 100;
	var atbottom = true;
	var history_end = false;

	window.socket = sse.open('http://nodeirc-wwicks.rhcloud.com/live', {
		"open": function(e){
			connection.innerHTML = connection.className = "connected";
		},
		"closed": function(e){
			connection.innerHTML = connection.className = "disconnected";
		},
		"connecting": function(e){
			connection.innerHTML = connection.className = "connecting";
		},
		"history": message,
		"history_end": function(e){
			history_end = true;
			console.log('history_end');
			$('#spin').removeClass('loading');
		},
		"message": message
	});
	$(events).scroll(function (e) {
		atbottom = ((events.scrollHeight - events.offsetHeight) - events.scrollTop) < 10;
		if(!events.scrollTop && history_end){
			var time = events.firstChild.firstChild;
			var start = time.getAttribute('datetime');
			var name_span = time.nextSibling;
			var top = name_span.offsetTop;
			$('#spin').addClass('loading');
			$.get("http://nodeirc-wwicks.rhcloud.com/messages?limit=100&start="+start, function(response){
				response.forEach(prepend);
				events.scrollTop = name_span.offsetTop-top;
				$('#spin').removeClass('loading');
			})
		}
	});
	function message(e){
		var event = e.data;
		event = JSON.parse(event);
		if(event.connected===true){
			events.innerHTML = "";
			return;
		}

		switch(event.command){
			case 'PRIVMSG':
				var bottom = atbottom;

				event = {
					"_id": event.ts,
					"from": event.nick,
					"msg": event.params[1]
				}
				if(e.type==='history')
					prepend(event)
				else
					append(event);

				if(bottom){
					events.scrollTop = 9999999;
				}
				break;
			case 'JOIN':
				break;
			case 'PART':
			case 'QUIT':
				break;
		}
	}
	function prepend(event){
		var $first = $(events.firstChild);
		if($first.length) {
			var other_event = new Date($first.find('time').attr('datetime'));
			var margin = (Math.abs(Date.parse(event._id) - other_event)/1000)|0;
			//older than 5 min gets trimmed.
			if(margin>max_margin){
				margin = max_margin;
			}
			else {
				$first.addClass('notime');
			}
		}
		else {
			last = event;
		}
		var $new = newItem(event).css('margin-bottom', margin);
		events.insertBefore($new[0], events.firstChild)
	}
	function append(event){
		var $last = $(events.lastChild);
		var $new = newItem(event);

		if($last.length) {
			last = event;
			var other_event = new Date($last.find('time').attr('datetime'));
			var margin = (Math.abs(Date.parse(event._id) - other_event)/1000)|0;

			if(margin>max_margin){
				margin = max_margin;
			}
			else $new.addClass('notime');
			$last.css('margin-bottom', margin);
		}

		events.appendChild($new[0]);
		clearTimeout(ival);
		ival = setTimeout(ticktock, 1000);
	}
	function newItem(event){
		var $new = $('<p>');
		var msg = event.msg;
		var action = /^\u0001?ACTION /.exec(msg)
		if(action){
			$new.addClass('action');
			msg = ' '+ purdy(msg.substr(action[0].length));
		}

		var iso = event._id;
		$('<time>').attr('datetime', iso).text(moment(event._id).timeago()).appendTo($new);
		$('<span class=nick>').text(event.from).appendTo($new);
		$('<span class=msg>').html(purdy(msg||'')).appendTo($new);
		return $new;
	}

	var map = { '&':'&amp;', '<':'&lt;', '>':'&gt;'};
	var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
	function purdy(msg){
		return msg
			.replace(/[&<>]/g, function(c) { return map[c]; })
			.replace(url, function(a){ return a.link(a); });
	}

	function ticktock(){
		$('time').each(function(i, el){
			var x = el.getAttribute('datetime');
			el.innerHTML = moment(x).timeago();
		});
		if(!last) return;
		var margin = ((+new Date() - last.ts)/1000)|0;
		if(margin>max_margin)
			margin = max_margin;
		else
			ival = setTimeout(ticktock, 1000);

		$(events.lastChild).css('margin-bottom', margin);

		if(atbottom){
			events.scrollTop = 999999;
		}
	}
	var ival = setTimeout(ticktock, 1000);

	moment.fn.timeago = function() {
		var diff = Math.abs(this.diff());
		var date = this.toDate();
		if (diff > 86400000) {
			if (diff < 172800000)
				return 'Yesterday at ' + date.toLocaleTimeString();
			return date.toDateString()
		}
		var time = date.toLocaleTimeString();
		return time +' ('+ this.fromNow() +')';
	};

});
