// For episode 3 ----------

// Number 數
0
1
1024
20.5
-17
-23.09

10 + 21
7 + 5.1
1 + 2 + 3
1 + 2 * 3
(1 + 2) * 3
20 - 10
20 - 10 / 2
12 % 5
12 - 2 % 5
(12 - 2) % 5

// String 字串
"hello"
'world'
"hello" + "world"
'how\'s it going?'

parseInt('100') // 分析看看這是甚麼整飾
parseInt('29.37')
parseFloat('29.37') // 分析看看這是甚麼小數
parseInt('-31')

// Boolean 布林值
true    // 真, 成立
false   // 假, 不成立

3 > 2
19 < 3
43 >= 17
43 <= 43

// 把數變成字串再相加
'5' + 3
'abc' + 321

// For episode 4 ----------

var a = 1;    // var 用來宣告變數, block-scope: let, const,... ECMAScript 6 之後補充
              // = 是指定的意思
var b = "shiba";
var c;    // undefined, 未定義，不知道是什麼值
c = true;
var d = null;    // 沒有值

a = a + 1;
a += 1;
a++;    // a = a + 1 回傳舊a值
++a;    // a = a + 1 回傳新a值

b += 'world';

var e = 17;
e /= 5; // e = e / 5
var f = 17;
f %= 5; // f = f % 5

// For episode 5 ----------

var t0 = true, t1 = true;
var f0 = false, f1 = false;
t0
!t0 // ! 為"否定"的意思
f0
!f0

t0 && t1 // "而且"，當所有條件都成立時才成立
t0 && f0
f0 && f1
t0 || f0 // "或者"，只要有一個條件成立就成立
f0 || f1
t0 || t1
// && 真正的意義是當先行的運算元可以被轉成 true 時回傳之後的運算元
//    否則回傳先行運算元
// || 當先行運算元可以被轉成 true 拾回傳先行運算元
//    否則回傳後運算元

var m = 20;
m == 20
m != 20
m == '20' // 由於資料型態的轉換 此行比較結果為真
m != '20'

// 比較嚴格的比較
m === 20
m !== 20
m === '20' // 由於不轉換資料型態 此行比較結果為假
m !== '20'

// For episode 6 ----------

// 印出東西到 JavaScript console
console.log('Just wanted to say hello');

var day = 1;

// if 就是"如果"的意思
// else 就是"不然"
// else if 是"不然如果""

if (day === 1) {
  // 這是星期一
  console.log('This is Monday');
}

if (day === 1) {
  console.log('This is Monday');
} else {
  console.log('This is not Monday');
}

if (day === 1) {
  console.log('This is Monday');
} else if (day === 2) {
  console.log('This is Tuesday');
} else if (day === 3) {
  console.log('This is Wednesday');
} else {
  console.log('Good day anyway');
}

if (day === 6 || day === 7) {
  console.log('Happy weekend!!!');
} else {
  console.log('Not so happy');
}
