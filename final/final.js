$(function(){
	$('#fadein_area p ').hide();	// リストを非表示
	$('#fadein_area p ').each(function(i) {	// 繰り返し処理
		$(this).delay(500 * i).fadeIn(1000); // 遅延させてフェードイン
	});
});
// 「http://www.dataplan.jp/blog/jquery/203」を参照。 //
