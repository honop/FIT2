$(function(){
	$('#fadein_area p ').hide();	// リストを非表示
	$('#fadein_area p ').each(function(i) {	// 繰り返し処理
		$(this).delay(500 * i).fadeIn(1000); // 遅延させてフェードイン
	});
});
// 「http://www.dataplan.jp/blog/jquery/203」を参考。 //


function q1(){
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");
  var over = document.getElementById("over");
  var correct = document.getElementById("correct");

  if((a.value=="1,4,7" && b.value=="20,14,8,2,-4" && c.value=="1,2,4,8,16,32,64,128")||(a.value=="1, 4, 7" && b.value=="20, 14, 8, 2, -4" && c.value=="1, 2, 4, 8, 16, 32, 64, 128")){
    alert("全問正解!")
    location.href="fit2b.html"
  }else{
    alert("ゲームオーバー!");
    a.value="1,4,7";
    b.value="20,14,8,2,-4";
    c.value="1,2,4,8,16,32,64,128";
    over.innerHTML='<a href="end1b.html"><input type="button" class="square_btn1" value="GAME OVER"></a>'
    correct.innerHTML='<font size="2" color="red">正解は以下の通りだよ</font>';
  }
}

function q2(){
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");
  var d = document.getElementById("d");
  var over = document.getElementById("over");
  var correct = document.getElementById("correct");

  if((a.value=="x==4" && (b.value=='s=="keio"||s=="sfc"'||b.value=='s=="sfc"||s=="keio"') && (c.value=="x>=30&&x<120"||c.value=="x<120&&x>=30") && d.value=="x%y==0")){
    alert("全問正解!")
    location.href="fit3b.html"
  }else{
    alert("ゲームオーバー!");
    a.value="x==4";
    b.value='s=="keio"||s=="sfc"';
    c.value="x>=30&&x<120";
    d.value="x%y==0";
    over.innerHTML='<a href="end1b.html"><input type="button" class="square_btn1" value="GAME OVER"></a>'
    correct.innerHTML='<font size="2" color="red">正解は以下の通りだよ</font>';
  }
}

function q3(){
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");
  var over = document.getElementById("over");
  var correct = document.getElementById("correct");

  if(a.value=="ichiaki" && b.value=="0" && c.value=="return"){
    alert("全問正解!")
    location.href="fit4b.html"
  }else{
    alert("ゲームオーバー!");
    a.value="ichiaki";
    b.value="0";
    c.value="return";
    over.innerHTML='<a href="end1b.html"><input type="button" class="square_btn1" value="GAME OVER"></a>'
    correct.innerHTML='<font size="2" color="red">正解は以下の通りだよ</font>';
  }
}


function q4(){
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");
  var d = document.getElementById("d");
  var e = document.getElementById("e");
  var f = document.getElementById("f");
  var g = document.getElementById("g");
  var h = document.getElementById("h");
  var over = document.getElementById("over");
  var correct = document.getElementById("correct");

  if(a.value=="var x=20; x<100; x=x+10" && b.value=="x" && c.value=="x+20" && d.value=="var x=0; x<100; x=x+10" && e.value=="var y=0; y<100; y=y+10" && f.value=="(x+y)%30==10" && g.value=="x" && h.value=="y"){
    alert("全問正解!")
    location.href="fit5b.html"
  }else{
    alert("ゲームオーバー!");
    a.value="var x=20; x<100; x=x+10";
    b.value="x";
    c.value="x+20";
    d.value="var x=0; x<100; x=x+10";
    e.value="var y=0; y<100; y=y+10";
    f.value="(x+y)%30==10";
    g.value="x";
    h.value="y";
    over.innerHTML='<a href="end1b.html"><input type="button" class="square_btn1" value="GAME OVER"></a>'
    correct.innerHTML='<font size="2" color="red">正解は以下の通りだよ</font>';
  }
}


function q5(){
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");
  var d = document.getElementById("d");
  var e = document.getElementById("e");
  var f = document.getElementById("f");
  var g = document.getElementById("g");
  var h = document.getElementById("h");
  var i = document.getElementById("i");
  var j = document.getElementById("j");
  var k = document.getElementById("k");
  var l = document.getElementById("l");
  var over = document.getElementById("over");
  var correct = document.getElementById("correct");

  if(a.value=="text" && b.value=="button" && c.value=="onclick" && d.value=="factorial" && e.value=="getElementById" && f.value=="value" && g.value=="Number" && h.value=="num<1" && i.value=="num-1" && j.value==">0" && k.value=="num*i" && l.value=="num"){
    alert("全問正解!おめでとう！")
    location.href="end2.html"
  }else{
    alert("ゲームオーバー!");
    a.value="text";
    b.value="button";
    c.value="onclick";
    d.value="factorial";
    e.value="getElementById";
    f.value="value";
    g.value="Number";
    h.value="num<1";
    i.value="num-1";
    j.value=">0";
    k.value="num*i";
    l.value="num";
    over.innerHTML='<a href="end1b.html"><input type="button" class="square_btn1" value="GAME OVER"></a>'
    correct.innerHTML='<font size="2" color="red">正解は以下の通りだよ</font>';
  }
}

function factorial(){
  var n = document.getElementById("num").value;
  var num = Number(n);

  if(num<1){
    alert("自然数を入力してください")
    return;
  }
  for(var i = num-1; i>0; i--){
    num=num*i;
  }
  alert(num)
}
//「https://mae.chab.in/archives/2231」より参照//


function secret(){
	alert('おめでとう！あなたは"Secret Route"に突入しました！');
}
