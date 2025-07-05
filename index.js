document.addEventListener('DOMContentLoaded', () => {
    // おみくじ結果の画像パスを定義します
    const omikujiImages = {
        daikichi: 'src/大吉.png',
        chukichi: 'src/中吉.png',
        kichi:    'src/吉.png',
        kyo:      'src/凶.png'
    };

    // 初期のおみくじ画像のパスを保存しておきます。
    const initialOmikujiImageSrc = 'src/おみくじ画像.png';

    // HTML要素を取得します

    // おみくじページのボタンと画像
    const drawOmikujiButton = document.getElementById('draw-omikuji'); 
    const omikujiImage = document.getElementById('omikuji-image');

    // 「ホームに戻る」ボタン (開発者一覧ページ用)
    const backToHomeButton = document.getElementById('back-to-home-button'); 

    // 「ホームに戻る」ボタン (おみくじ紹介ページ用)
    const anotherBackToHomeButton = document.getElementById('another-back-to-home-button');

    // おみくじを引くボタンのイベントリスナー（ホームページ用）
    if (drawOmikujiButton) {
        drawOmikujiButton.addEventListener('click', () => {
            // 現在のボタンのテキストを確認します
            if (drawOmikujiButton.textContent === 'もう一度引く') {
                // ボタンが「もう一度引く」の場合、初期状態に戻す
                omikujiImage.src = initialOmikujiImageSrc;
                omikujiImage.alt = 'おみくじ画像';
                drawOmikujiButton.textContent = 'おみくじを引く'; // ボタンのテキストを元に戻す
                return; // ここで処理を終了し、おみくじを引く処理には進まない
            }

            // 0から1の間の乱数を生成します
            const n = Math.random();

            let resultText = ''; // 結果のテキストを格納
            let resultImageSrc = ''; // 結果の画像パスを格納

            // 乱数nに応じて結果を決定します
            if (n < 0.25) { // 例: 0% ～ 25% の確率
                resultText = '大吉';
                resultImageSrc = omikujiImages.daikichi;
            } else if (n < 0.50) { // 例: 25% ～ 50% の確率
                resultText = '凶';
                resultImageSrc = omikujiImages.kyo;
            } else if (n < 0.75) { // 例: 50% ～ 75% の確率
                resultText = '中吉';
                resultImageSrc = omikujiImages.chukichi;
            } else { // 例: 75% ～ 100% の確率
                resultText = '吉';
                resultImageSrc = omikujiImages.kichi;
            }

            // おみくじ画像を更新します
            omikujiImage.src = resultImageSrc;
            omikujiImage.alt = resultText;

            // ボタンのテキストを「もう一度引く」に変更
            drawOmikujiButton.textContent = 'もう一度引く';
        });
    }

    // --- ホームに戻る機能のイベントリスナー ---
    // 'back-to-home-button' (開発者一覧ページ用) が存在する場合にイベントリスナーを設定
    if (backToHomeButton) { 
        backToHomeButton.addEventListener('click', () => {
            // ホームページのファイル名に合わせてパスを調整してください
            window.location.href = 'index.html'; 
        });
    }

    // 'another-back-to-home-button' (おみくじ紹介ページ用) が存在する場合にイベントリスナーを設定
    if (anotherBackToHomeButton) {
        anotherBackToHomeButton.addEventListener('click', () => {
            // ホームページのファイル名に合わせてパスを調整してください
            window.location.href = 'index.html';
        });
    }
});
