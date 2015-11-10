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

// For episode 9 ----------
// 1.
// make(製造商), numberOfWheels(輪子數), 
// displacement(排氣量), habitat(棲息地)

// 2.
// rank(號碼), suit(花色), 
// color(顏色), bloodType(血型)

// {}, {屬性名:值, 屬性名:值, .....}
var a = {};
var myCar = {
    make: 'Nissan',
    numberOfWheels: 4,
    displacement: 3800
};
var hisCard = {
    rank: 5,
    suit: 'spade',
    color: 'black'
};

/*
console.log('a');
console.log(a);
console.log('myCar');
console.log(myCar);
console.log('hisCard');
console.log(hisCard);
*/

// 如何取得物件某個屬性的值
//console.log(myCar.make);

// 改值
/*
hisCard.rank = 10;
hisCard.suit = 'heart';
hisCard.color = 'red';

console.log(hisCard);
*/
// 動態綁上新屬性
myCar.year = 2013;
myCar.model = 'GTR';

//console.log(myCar);

// 參考(reference)，可以想成是"把手"
var a = 17;
var b = a;
a = 29;

//console.log(a);
//console.log(b);
var herCard = hisCard;
hisCard.rank = 12;
hisCard.suit = 'diamond';
hisCard.red = 'red';

console.log(hisCard);
console.log(herCard);

// For episode 10 ----------
// 介紹內建模組Math的兩個函式Math.ceil, Math.random
// Math.ceil(x) 在大於或等於x的整數之中取最小的一個
//console.log(Math.ceil(-0.5));

// Math.random() 取一個大於等於0而且小於1的數 (0 <= y < 1)
//console.log(Math.random());

// 開始擲骰子
/*
function rollDice(maxValue) {
    var tmp = Math.random() * maxValue;
    var n = Math.ceil(tmp);
    console.log('Just rolled the dice and got ' + n);       
    return n;
}*/
var rollDice = function(maxValue) {
    var tmp = Math.random() * maxValue;
    var n = Math.ceil(tmp);
    console.log('Just rolled the dice and got ' + n);       
    return n;
};

var n0, n1, n2;
n0 = rollDice(37);
n1 = rollDice(37);
n2 = rollDice(37);

console.log(n0);
console.log(n1);
console.log(n2);

// For episode 11 ----------
// scope 可視範圍, execution context 執行環境

// 全域(global) 藍色

var who = 'Steph';
/*
var move = function() { // 紅色
    var n = Math.ceil(Math.random() * 7);
    console.log(who + ' made ' + n + ' three pointer(s)');
};
move();
*/

/*
var makeMoveFunction = function() { // 紅色
    var who = 'LeBron';
    // 回傳一個函式
    return function(troll) { // 綠色
        var n = Math.ceil(Math.random() * 6);
        if (troll) {
            var m = who + ' took ' + n + ' step(s)';
        } else {
            var m = who + ' made ' + n + ' three pointer(s)';
        }
        console.log(m);
    };
};
var move = makeMoveFunction();
move(false);
move(true);
*/


function hoistMe() {
    console.log(mm);
    var mm = 1007;
}
hoistMe();
