$(function(){
  let pageCount = 1;
<<<<<<< HEAD
  //pageCountを1と設定
  let presearchWord = "";
  //presearchWordに空の変数を定義
  $(".search-btn").on("click",function(){
    const searchWord = $("#search-input").val();
    //#search-inputに入力した文字を変数searchWordに格納
    if(presearchWord !== searchWord){
    //presearchWordがsearchWordと同一でない場合下記の処理
      presearchWord = searchWord;
      //presearchWordとsearchWordを同一にする
      pageCount = 1;
      //pageCountを1にする
      $(".lists").empty();
    }else{
      pageCount = pageCount + 1;
      //pageCountに1を足す
    }
    const settings ={
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    }
    // Ajaxの実行
    //.doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
    $.ajax(settings).done(function (response){
      const result = response['@graph'];
      //resultに[@graph]データを格納
      displayResult(result)
      //deisplayResultを実行
    }).fail(function (err){
    //.failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取っている
      displayError(err)
    });
  });
  function displayResult(result){
    //下記の処理をdisplayResulC:\Users\hmomo\prs-work\jQuery\実装\jquery_practice\q8\work\index.htmltという変数に格納
    $(".message").remove();
    //messageのクラス名の要素を削除
    if (result[0].items !== undefined){
    //x[0].itemsが定義されていないときに処理に入る
      $.each(result[0].items,function(index,value){
      //引数xに対しての繰り返し処理
        const displayText = '<li class="lists-item"><div class="list-inner"><p>タイトル:' + ((value.title ? value.title :"作者ふめい")+ "</p>" +
                            "<p>作者:") + ((value["dc:creator"] ? value["dc:creator"]:"タイトル不明")+ "</p>" + "<p>出版社:") + ((value["dc:publisher"] ? value["dc:publisher"] :"出版社不明") + "</p>" +
                            "<a href=" + value.link["@id"] + ">書籍情報</a></div></li>");
        $(".lists").prepend(displayText);
        //listsクラス名のと要素の最初にdisplayTextに格納した要素を追加
      });
    }else{
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
      //それ以外の場合message追加
    }
  };
  function  displayError(err){
  //関数名displayerrorに以下の処理を格納
    $(".lists").empty();
    //lists要素を空に
    $(".message").remove();
    //message要素を空に
    if(err.status === 0){
    //errのstatusの値が0の時に
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      //messageを追加
    }else if(err.status === 400){
    //errのstatusの値が400(検索ワードが空欄)の時に
      $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>');
      //messageを追加
    }else{
    //errのstatusの値がそれ以外の時に
      $(".lists").before('<div class="message">予期せぬエラーが発生しました。<br>再読み込みしてください。</div>');
      //messageを追加
    };
  };
  $(".reset-btn").on("click",function(){
  //reset-btnが押されたときに実行
    $(".lists").empty();
    //lists要素を空に
    $(".message").remove();
    //message要素を削除
    $("#search-input").val("");
    //search-inputを空に
    presearchWord = "";
    //presearchWordを空に
    pageCount = 1;
    //pageCountを1とする
=======
  // pageCountを1と設定
  let presearchWord = '';
  // presearchWordに空の変数を定義
  $('.search-btn').on('click', function(){
    const searchWord = $('#search-input').val();
    // #search-inputに入力した文字を変数searchWordに格納
    if(presearchWord !== searchWord){
    // presearchWordがsearchWordと同一でない場合下記の処理
      presearchWord = searchWord;
      // presearchWordとsearchWordを同一にする
      pageCount = 1;
      // pageCountを1にする
      $('.lists').empty();
    }else{
      pageCount = pageCount + 1;
      // pageCountに1を足す
    }
    const settings ={
      'url': `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      'method': 'GET'
    };
    // Ajaxの実行
    // .doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
    $.ajax(settings).done(function (response){
      const result = response['@graph'];
      // resultに[@graph]データを格納
      displayResult(result);
      // deisplayResultを実行
    }).fail(function (err){
    // .failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取っている
      displayError(err);
    });
  });
  function displayResult(result){
    // 下記の処理をdisplayResulC:\Users\hmomo\prs-work\jQuery\実装\jquery_practice\q8\work\index.htmltという変数に格納
    $('.message').remove();
    // messageのクラス名の要素を削除
    if (result[0].items !== undefined){
    // x[0].itemsが定義されていないときに処理に入る
      $.each(result[0].items, function(index, value){
      // 引数xに対しての繰り返し処理
        const displayText = '<li class="lists-item"><div class="list-inner"><p>タイトル:' + ((value.title ?
          value.title :
          '作者ふめい')+'</p>' + '<p>作者:') + ((value['dc:creator'] ?
          value['dc:creator']:
          'タイトル不明') + '</p>' + '<p>出版社:') + ((value['dc:publisher'] ?
          value['dc:publisher'] :
          '出版社不明') + '</p>' + '<a href=' + value.link['@id'] + '>書籍情報</a></div></li>');
        $('.lists').prepend(displayText);
        // listsクラス名のと要素の最初にdisplayTextに格納した要素を追加
      });
    }else{
      $('.lists').before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
      // それ以外の場合message追加
    }
  }
  function  displayError(err){
  // 関数名displayerrorに以下の処理を格納
    $('.lists').empty();
    // lists要素を空に
    $('.message').remove();
    // message要素を空に
    if(err.status === 0){
    // errのstatusの値が0の時に
      $('.lists').before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      // messageを追加
    }else if(err.status === 400){
    // errのstatusの値が400(検索ワードが空欄)の時に
      $('.lists').before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>');
      // messageを追加
    }else{
    // errのstatusの値がそれ以外の時に
      $('.lists').before('<div class="message">予期せぬエラーが発生しました。<br>再読み込みしてください。</div>');
      // messageを追加
    }
  }
  $('.reset-btn').on('click', function(){
  // reset-btnが押されたときに実行
    $('.lists').empty();
    // lists要素を空に
    $('.message').remove();
    // message要素を削除
    $('#search-input').val('');
    // search-inputを空に
    presearchWord = '';
    // presearchWordを空に
    pageCount = 1;
    // pageCountを1とする
>>>>>>> origin/master
  });
});