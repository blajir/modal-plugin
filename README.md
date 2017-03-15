# modal-plugin

モーダル用のプラグイン　　

##　概要
モーダル用のプラグインです。
data属性タグの中に、モーダルで表示したい要素を記述します。
[-modal-title][-modal-text][-modal-iamge]が表示可能です。　　

##　使い方　　
###　HTML　　
    <a data-modal-title="AddImage" data-modal-text="モーダル2" class="modal" data-modal-image="http://placehold.jp/640x240.png">モーダル2</a>
  
###　script
    $('.modal').on('click', function () {
      $(this).modal();
      easing: 'linear',
      animation: 'slideDown'
    });

対象のDOM要素に対して、実行します。
## 必要とするもの
・jQuery 1.7以上
## プラグインオプション
```speed: 800 ```

モーダルを表示する速度。デフォルト値は800
***

```easing: 'swing' ```

モーダルを表示する際のエージング・アニメーション。デフォルト値は'swing'
***

```animation: false ```

モーダルを表示する際のアニメーション。デフォルト値は`false`。  
オプションでslideDown, slideUpがある。
***

## デモページ
[基本サンプル](https://blajir.github.io/modal-plugin/)
