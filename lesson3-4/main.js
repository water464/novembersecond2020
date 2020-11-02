// もともとの要素にイベントハンドラを登録する
$('.child').on('click', () => {
  console.log('.childのイベントハンドラ');
});

// DOM要素を生成する
const $newElement = $('<p>', {
  class: 'child',
  text: '追加した要素',
});

// 生成したDOM要素にイベントハンドラを登録する
$newElement.on('click', () => {
  console.log('追加した.childのイベントハンドラ');
});

$('#parent').append($newElement);