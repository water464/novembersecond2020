let name = '太郎さん';
console.log(name);
console.log(name);


let name = '太郎さん';
console.log(name);

name = '花子さん';
console.log(name);


const name = '太郎さん';
console.log(name);
console.log(name);

/*関数の戻り値は、変数などの値として代入できます。先ほどの suido という関数の戻り値を、
cup（コップ）という変数に代入してみましょう。そしてその変数の値を、コンソールに表示します。*/
function suido() { // 関数を定義する
  return '水'; // 戻り値を返す（水が出てくる）
}

const cup = suido(); // 関数を呼び出す（蛇口を開ける）して、cup変数に代入する

console.log(cup); // 変数の値をコンソールに表示する
console.log(cup); // 変数の値をコンソールに表示する

//次に、引数と戻り値の両方を使った例を見てみましょう。正方形の面積を求める関数です。
function findSquareArea(length) { // 関数を定義する
  return length * length; // 引数を２乗した値を、戻り値として返す
}

const result = findSquareArea(5); // 戻り値をresult変数に代入する
console.log(result); // result変数の値を、コンソールに表示する


//上記の関数は、以下のように書くこともできます。

function findSquareArea(length) { // 関数を定義する
  const area = length * length; // 引数を２乗した値を、area変数に代入する
  return area; //area変数の値を、戻り値として返す
}

const result = findSquareArea(5); // 戻り値をresult変数に代入する
console.log(result); // result変数の値を、コンソールに表示する


//次は、引数を２つ使った例です。2つの値を足し算する関数です。
function add(x, y) { // 関数を定義する
  const sum = x + y; // 引数を足し算した値を、sum変数に代入する
  return sum; // sum変数の値を、戻り値として返す
}

const result = add(2, 3); // 戻り値をresult変数に代入する
console.log(result); // result変数の値を、コンソールに表示する

//無名関数
//たとえば、先ほど以下のコードを書きました。

function add(x, y) { // 関数を定義する
  const sum = x + y; // 引数を足し算した値を、sum変数に代入する
  return sum; // sum変数の値を、戻り値として返す
}

const result = add(2, 3); // 戻り値をresult変数に代入する
console.log(result); // result変数の値を、コンソールに表示する
//上記のコードは、無名関数を使って以下のように書き換えることができます。定義した無名関数を変数に代入して、呼び出しています。(この例では分かりませんが、厳密には少し違いがあります。)

const add = function (x, y) { // 無名関数を定義して、変数に代入する
  const sum = x + y;
  return sum;
}

const result = add(2, 3);
console.log(result);


//プロパティの値を取得する
//プロパティの値を取得する方法はいくつかあります。１つは、「オブジェクトの変数名.プロパティ」と書く方法です。

//たとえば以下のコードでは person.name で、nameプロパティの値を取得しています。この書き方を「ドット記法」と呼びます。

const person = {
  name: '桃太郎',
  age: 7,
};
console.log(person.name); // コンソールに「桃太郎」と表示される

//２つ目は、「オブジェクトの変数名[プロパティ名の文字列]」と書く方法です。たとえば person['name'] でも、nameプロパティの値を取得できます。この書き方を「ブラケット記法」と呼びます。

const person = {
  name: '桃太郎',
  age: 7,
};
console.log(person['name']); // コンソールに「桃太郎」と表示される


/*上記ではkeyという変数に、'name' という文字列を代入しています。
そのため person[key] は、personオブジェクトのnameプロパティにアクセスしています。
このようにプロパティ名を変数に代入することで、取得するプロパティの値をJavaScriptで動的に変更できます。

「動的に変更する」というのは、たとえば以下のような例です。*/

const person = {
  name: '桃太郎',
  age: 7,
};

let key = 'name';
console.log(person[key]); // コンソールに「桃太郎」と表示される

key = 'age';
console.log(person[key]); // コンソールに「7」と表示される

/*上記ではpersonオブジェクトに対して、keyという変数をプロパティ名として２回アクセスしています。
key変数の値を途中で変更しているため、取得するプロパティの値も途中で変更されています。
プロパティ名を変数に代入することで、取得するプロパティの値をプログラムの実行結果や
ユーザーの入力などによって変更できます。これが、動的に変更するという意味です。

一方、ドット記法では変数などを使ってプロパティにアクセスできません。
そのため以下のように書いても、プロパティにアクセスできず「undefined」と表示されます。
undefined は、「値が定義（設定）されていない」という意味です。*/

const person = {
  name: '桃太郎',
  age: 7,
};

const nickname = 'name';
console.log(person.nickname); // コンソールに「undefined」と表示される

/*通常の関数と同じく、引数や戻り値も設定できます。
またオブジェクトのメソッドからプロパティにアクセスするときは、
頭に this. を付けます。以下のコードでintroduceメソッドの中からnameプロパティにアクセスしたいときは、
this.nameとなります。*/

const person = {
  name: '桃太郎',
  greet: function(friend) {
    console.log(`${friend}さん、こんにちは！`);
  },
  introduce: function() {
    console.log(`${this.name}と呼んでください！`);
  },
};

person.greet('イヌ'); // コンソールに「イヌさん、こんにちは！」と表示される
person.greet('サル'); // コンソールに「サルさん、こんにちは！」と表示される

person.introduce(); // コンソールに「桃太郎と呼んでください！」と表示される

/*先ほど説明したように、メソッドは短く省略して書くこともできます。
上記のコードは、以下のように書き換えられます。*/

const person = {
  name: '桃太郎',
  greet(friend) {
    console.log(`${friend}さん、こんにちは！`);
  },
  introduce() {
    console.log(`${this.name}と呼んでください！`);
  },
};

person.greet('イヌ');
person.greet('サル');

person.introduce();