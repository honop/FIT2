$(function(){
	$('#fadein_area p ').hide();	// リストを非表示
	$('#fadein_area p ').each(function(i) {	// 繰り返し処理
		$(this).delay(500 * i).fadeIn(1000); // 遅延させてフェードイン
	});
});
// 「http://www.dataplan.jp/blog/jquery/203」を参考。 //


page = 0;
pages = ["p1","p2","p3"];
function next(){
if (page < pages.length){
   var prev = document.getElementById(pages[page]);
    prev.style.display = "none";
    page++;
   var next = document.getElementById(pages[page]);
    next.style.display = "block";
  }
}


$(function () {
    setTimeout('shining()'); //アニメーションを実行
});
function shining() {
    $("#shining").animate({
        opacity: ".3"
    }, 2000).animate({
        opacity: "1"
    }, 2000);
    setTimeout("shining()", 2000); //アニメーションを繰り返す間隔
}


$(function () {
    setTimeout('shining1()'); //アニメーションを実行
});
function shining1() {
    $("#shining1").animate({
        opacity: ".3"
    }, 1000).animate({
        opacity: "1"
    }, 1000);
    setTimeout("shining1()", 3000); //アニメーションを繰り返す間隔
}
//「http://gimmicklog.main.jp/jquery/212/」を参照。

function sound(){
	document.getElementById('sound-file').play(); /*https://dova-s.jp/se/play419.html*/
	var str = document.getElementById('voice').innerHTML;
    if (str.length<32){
    str = str + 'にゃ〜！';
    document.getElementById('voice').innerHTML= str;
  }else{
    alert("満足だにゃ〜");
		b = '<a href="uranai3a.html"><input type="button" value="おや…？"></a>';
		document.getElementById("change").innerHTML= b;
}
}

var mikuji = Math.floor(Math.random()*8 +0);
var script = ["中吉だよ！まずまずだね！","小吉か……まずまずだね！","中吉だあ〜！まあまあな運勢だね！","凶(´・ω・`)","大吉だよ！何か良い事あるかも！やったね！","吉(。・ω・。)","大凶(((((((( ；ﾟДﾟ))))))))","大凶((((;´･ω･`)))","中吉か！"]
function fortune(){
alert("貴女の運勢は…");
	for(var i=0; i<9; i++){
		if(mikuji==i){
			document.getElementById('fortune').innerHTML = '<p><img src=\"photo/' + i + '.png\" width="255"></p>';
			document.getElementById('change1').innerHTML = '<p><a href="http://web.sfc.keio.ac.jp/~t18105ku/info2/uranai_game/nekomikuji_enda.html"><input type="button" value="次へ"></a></p>'
			document.getElementById('script').innerHTML = script[i];
		}
	}
}
