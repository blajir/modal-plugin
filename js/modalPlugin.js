/*global jQuery, console */
// JavaScript Document
// UTF-8

(function( $ ) {
  $.fn.modal = function(options) {

    // デフォルト値とオプション値をマージ
    var setting = $.extend({
      speed: 800,
      easing: 'swing',
      animation: false
    }, options) ;

    return this.each(function () {
      // 要素を退避
      var $this = this;
      var title = $($this).data('modal-title');
      var text = $($this).data('modal-text');
      var image = $($this).data('modal-image');
      // モーダル表示用テンプレート
      var modalLayerTemplate = '<div class="modal-Layer"></div>';
      var modalContentTemplate = '<div class="modal-Content"></div>';
      var modalContentItem = '';

      /* ==========================================================================
      モーダルコンテンツの位置調整
      ========================================================================== */
      // モーダルコンテンツのposition調整用関数
      function modalResize () {
        var $modalResizeContent = $('.modal-Content');
        var modalContentWidth = $modalResizeContent.width();
        var modalContentHeight = $modalResizeContent.height();

        $modalResizeContent.css({
          marginLeft : '-' + modalContentWidth / 2 + 'px',
          marginTop : '-' + modalContentHeight / 2 + 'px'
        });
      }

      /* ==========================================================================
      モーダルを表示する
      ========================================================================== */
      // モーダルポップアップ関数
      (function modalPopup (modalTitle, modalText, modalImage) {
        // 背景レイヤーの生成
        $(modalLayerTemplate).appendTo('body').hide().fadeIn(
          setting.speed,
          setting.easing
        );

        // 表示コンテンツのチェック
        // 指定タイトルがあれば表示する
        if (modalTitle) {
          modalContentItem += '<h2>' + modalTitle + '</h2>';
        }
        // 指定テキストがあれば表示する
        if (modalTitle) {
          modalContentItem += '<p>' + modalText + '</p>';
        }
        // 指定イメージがあれば表示する
        if (modalImage) {
          modalContentItem += '<img src="' + modalImage + '">';
        }

        // モーダルコンテンツの生成
        var $modalContent = $(modalContentTemplate).appendTo('body');
        $($modalContent).append(modalContentItem);
        // モーダルコンテンツのposition調整
        setTimeout (function () {
          modalResize ();
        }, 50);

        // 指定のモーダルアニメーション
        if (!setting.animation === false) {
          $($modalContent).addClass(setting.animation);
        } else {
          $($modalContent).animate({
            opacity: 1
          }, 1000);
        }
      })(title, text, image);

      /* ==========================================================================
      モーダルを閉じる
      ========================================================================== */
      // モーダルクローズ関数
      function modalClose () {
        var $modalCloseLayer = $('.modal-Layer');
        var $modalCloseContent = $('.modal-Content');

        $($modalCloseLayer).fadeOut(
          setting.speed,
          setting.easing,
          function () {
            $(this).remove();
          }
        );
        $modalCloseContent.fadeOut(
          setting.speed,
          setting.easing,
          function () {
            $(this).remove();
          }
        );
      }

      $('.modal-Layer').on('click', function () {
        modalClose();
      });

    });

  };
})(jQuery);
