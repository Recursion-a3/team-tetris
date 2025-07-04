document.addEventListener('DOMContentLoaded', () => {
    // おみくじ結果の画像パスを定義します。
    const omikujiImages = {
        daikichi: 'src/大吉.png',
        chukichi: 'src/中吉.png',
        kichi:    'src/吉.png',
        kyo:      'src/凶.png'
    };

    // HTML要素を取得します
    const drawOmikujiButton = document.getElementById('draw-omikuji');
    const omikujiImage = document.getElementById('omikuji-image');

    // ボタンのクリックイベントリスナーを設定します
    drawOmikujiButton.addEventListener('click', () => {
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

        // 結果をアラートで表示します
        alert('あなたのおみくじ結果は「' + resultText + '」でした！');

        // ボタンのテキストを「もう一度引く」
         drawOmikujiButton.textContent = 'もう一度引く';
    });
});
