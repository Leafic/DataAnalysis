function init_dropdown() {
	$('#gnb').hover(function() {
		$('#gnb_sub').fadeIn();
	},
	function() {
		$('#gnb_sub').hide();
	});
}

$(document).ready(function() {
	init_dropdown();
});