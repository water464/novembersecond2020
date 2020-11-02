// Flickr API key
const apiKey = 'ce9c4a1c3c44cb59cbcdbd525830a97b';

// Flickr画像データのURLを返す
const getFlickrImageURL = (photo, size) => {
  let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${
    photo.secret
  }`;
  if (size) {
    // サイズ指定ありの場合
    url += `_${size}`;
  }
  url += '.jpg';
  return url;
};

// Flickr画像の元ページのURLを返す
const getFlickrPageURL = photo => `https://www.flickr.com/photos/${photo.owner}/${photo.id}`;

// Flickr画像のaltテキストを返す
const getFlickrText = (photo) => {
  let text = `"${photo.title}" by ${photo.ownername}`;
  if (photo.license === '4') {
    // Creative Commons Attribution（CC BY）ライセンス
    text += ' / CC BY';
  }
  return text;
};

// リクエストパラメータを作る
const parameters = $.param({
  method: 'flickr.photos.search',
  api_key: apiKey,
  text: 'cat', // 検索テキスト
  sort: 'interestingness-desc', // 興味深さ順
  per_page: 4, // 取得件数
  license: '4', // Creative Commons Attributionのみ
  extras: 'owner_name,license', // 追加で取得する情報
  format: 'json', // レスポンスをJSON形式に
  nojsoncallback: 1, // レスポンスの先頭に関数呼び出しを含めない
});
const url = `https://api.flickr.com/services/rest/?${parameters}`;
console.log(url);

const parameters2 = $.param({
  method: 'flickr.photos.search',
  api_key: apiKey,
  text: 'puppies dog puppy', // 検索テキスト
  sort: 'interestingness-desc', // 興味深さ順
  per_page: 4, // 取得件数
  license: '4', // Creative Commons Attributionのみ
  extras: 'owner_name,license', // 追加で取得する情報
  format: 'json', // レスポンスをJSON形式に
  nojsoncallback: 1, // レスポンスの先頭に関数呼び出しを含めない
});
const url2 = `https://api.flickr.com/services/rest/?${parameters2}`;
console.log(url2);





// 猫の画像を検索して表示
$.getJSON(url, (data) => {
  console.log(data);

  // データが取得できなかった場合
  if (data.stat !== 'ok') {
    console.error('データの取得に失敗しました。');
    return;
  }

  // 空の<div>を作る
  const $div = $('<div>');

  // ヒット件数
  //$div.append(`<div>${data.photos.total} photos in total</div>`);

  for (let i = 0; i < data.photos.photo.length; i++) {
    const photo = data.photos.photo[i];
    const photoText = getFlickrText(photo);

    // $divに <a href="..." ...><img src="..." ...></a> を追加する
    $div.append(
      $('<a>', {
        href: getFlickrPageURL(photo),
        class: 'd-inline-block',
        target: '_blank', // リンクを新規タブで開く
        'data-toggle': 'tooltip',
        'data-placement': 'bottom',
        title: photoText,
      }).append(
        $('<img>', {
          src: getFlickrImageURL(photo, 'q'),
          width: 150,
          height: 150,
          alt: photoText,
        }),
      ),
    );
  }
  // $divを#mainに追加する
  $div.appendTo('#main');

  // BootstrapのTooltipを適用
  $('[data-toggle="tooltip"]').tooltip();
});

// 犬の画像を検索して表示
$.getJSON(url2, (data) => {
  console.log(data);

  // データが取得できなかった場合
  if (data.stat !== 'ok') {
    console.error('データの取得に失敗しました。');
    return;
  }

  // 空の<div>を作る
  const $div2 = $('<div>');

  // ヒット件数
  //$div2.append(`<div>${data.photos.total} photos in total</div>`);

  for (let i = 0; i < data.photos.photo.length; i++) {
    const photo = data.photos.photo[i];
    const photoText = getFlickrText(photo);

    // $divに <a href="..." ...><img src="..." ...></a> を追加する
    $div2.append(
      $('<a>', {
        href: getFlickrPageURL(photo),
        class: 'd-inline-block',
        target: '_blank', // リンクを新規タブで開く
        'data-toggle': 'tooltip',
        'data-placement': 'bottom',
        title: photoText,
      }).append(
        $('<img>', {
          src: getFlickrImageURL(photo, 'q'),
          width: 150,
          height: 150,
          alt: photoText,
        }),
      ),
    );
  }
  // $div2を#mainに追加する
  $div2.appendTo('#main');

  // BootstrapのTooltipを適用
  $('[data-toggle="tooltip"]').tooltip();
});