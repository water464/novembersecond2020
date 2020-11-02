/**
 * selectorに該当するタブを表示する
 */
const showTab = (selector) => {
  // 引数selectorの中身をコンソールで確認する
  console.log(selector);

  // 一度すべての.tabs-menu からactiveクラスを削除する
  $('.tabs-menu div').removeClass('active');
  // 一度すべての.tabs-content > divを非表示にする
  $('.tabs-content > div').hide();

  if (selector == 'tab-menu-a'){
    console.log("tab-menu-aをクリック");
    $("#tab-menu-a").addClass('active');
    $("#tabs-a").show();
    
  } else if (selector == 'tab-menu-b'){
    console.log("tab-menu-bをクリック");
    $("#tab-menu-b").addClass('active');
    $("#tabs-b").show();
    
  } else if (selector == 'tab-menu-c'){
    console.log("tab-menu-cをクリック");
    $("#tab-menu-c").addClass('active');
    $("#tabs-c").show();
  }

  // .tabs-content > divのうち、selectorに該当するものだけを表示する
  $(selector).show();
};

// タブがクリックされたらコンテンツを表示
$('.tabs-menu div').on('click', (e) => {

  // idの値を受け取った後、showTab()関数に渡す。e.targetはクリックされたタブ（.tabs-menu div）を表す
  const selector = $(e.target).attr('id');
  showTab(selector);
});

// 初期状態として1番目のタブをactive表示
showTab('tab-menu-a');