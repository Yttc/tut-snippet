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

// For episode 7 ----------

var i = 0;
while (i < 10) {
  i = i + 1;
  console.log('Number of laps = ' + i);
}

var i = 0;
while (i < 10) {
  i = i + 1;
  console.log('Number of laps = ' + i);
  if (i === 5) {
    break;
  }
}

var i = 0;
while (i < 10) {
  i = i + 1;
  if (i === 7) {
    continue;
  }
  console.log('Number of laps = ' + i);
}

// 未介紹 do...while，有興趣的朋友請參考
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while

for (var i = 0; i < 10; i++) {
  console.log('Number of laps = ' + i);
}

// For episode 8 ----------

// 陣列(Array) 條狀(1維)容器

var a = [];
var c = [6, 4, 2, 9];
var b = [5, 17];

// 容器使用方法 ----
// 1. 取特定位置的值 利用索引(index)
//console.log(c[3]);

// 2. 長度
//console.log(b.length);

// 3. 從尾巴新增項目
b.push(13);

// 4. 從尾巴抽取項目
b.pop();

// 5. 從頭新增項目
b.unshift(7);

// 6. 從頭抽取項目
b.shift();

// 7. 接合
b.splice(1, 1, 13, 3);
b.splice(1, 1);
b.splice(1, 0, 6, 29);


//console.log('b');
//console.log(b);

// 8. 求特定值之索引
//console.log(c.indexOf(29));
//console.log(b.indexOf(29));

// 9. 逐個讀出
for (var i = 0, len = b.length; i < len; i++) {
    console.log(b[i]);
}
