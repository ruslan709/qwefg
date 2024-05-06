/*
You can use this file with your scripts.
It will not be overwritten when you upgrade solution.
*/
$(document).ready(function(){
	if($(".subscribe-edit").length > 0) {
		if($(".subscribe-edit p font.notetext").text() == "Спасибо, подписка подтверждена.") {
			try {
				yaCounter21636724.reachGoal("SEND_SUBSCRIBE");
				console.log("SEND_SUBSCRIBE");
				ga('send', 'event', "send", "subscribe");
			} catch(e) {
					console.log("Error SEND_SUBSCRIBE");
				}
			}
		}
	if($(".newbanA").length > 0) {
		$(".newbanA").click(function() {
			try {
				yaCounter21636724.reachGoal("CLICK_CAT_FROM_ABOUT");
				console.log("CLICK_CAT_FROM_ABOUT");
				ga('send', 'event', "click", "cat_from_about");
			} catch(e) {
					console.log("Error CLICK_CAT_FROM_ABOUT");
				}
			});
		}
	if(location.pathname.indexOf("/order/") !== -1) {
		if ($("h1").text() == "Заказ сформирован") {
			try {
				yaCounter21636724.reachGoal("SEND_ORDER");
				console.log("SEND_ORDER");
				ga('send', 'event', "send", "order");
			} catch(e) {
					console.log("Error SEND_ORDER");
				}
			}
		}
	
	if($(".otlozh").length > 0) {
		$(".otlozh").click(function() {
			try {
				yaCounter21636724.reachGoal("CLICK_OTLOZH");
				console.log("CLICK_OTLOZH");
				ga('send', 'event', "click", "otlozh");
			} catch(e) {
					console.log("Error CLICK_OTLOZH");
				}
			});
		}
});