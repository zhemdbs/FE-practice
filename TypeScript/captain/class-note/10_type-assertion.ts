// 타입 단언(type assertion)
var a;
var b = a as string;


// DOM API 조작
// <div id="app">hi</div>

var div = document.querySelector('div');
div?.innerText

var div2 = document.querySelector('div') as HTMLDivElement;
div2.innerText;
