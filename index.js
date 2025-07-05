document.addEventListener('DOMContentLoaded', () => {
    const omikujiResults = {
        daikichi: {
            text: '大吉',
            msg: 'GitHub Sponsors を通じて太っ腹なスポンサーがつきます。これであなたの開発は安泰です!',
            food: 'メンチカツ',
            animal: '孔雀',
        },
        chukichi: {
            text: '中吉',
            msg: '提出したコードにちょっとした問題があるけど、営業の努力で顧客に気づかれない！後で直しましょう！',
            food: 'ハンバーグ',
            animal: '麒麟',
        },
        kichi: {
            text: '吉',
            msg: '綿あめのようにふわふわした案件が下されるでしょう。めげずに己の信念を貫き、仕事を終わらせましょう。',
            food: '餃子',
            animal: '白虎',
        },
        kyo: {
            text: '凶',
            msg: 'まるで時間が過ぎたスパゲッティのようなコードで運営を任されました。おとなしくゼロからコードを書き直そう。',
            food: 'パスタ',
            animal: '赤龍',
        }
    };

    // index.htmlでのおみくじ引く処理
    const drawOmikujiButton = document.getElementById('draw-omikuji');
    if (drawOmikujiButton) {
        drawOmikujiButton.addEventListener('click', () => {
            // 乱数で結果を決定
            const n = Math.random();
            let key;
            
            if (n < 0.25) {
                key = 'daikichi';
            } else if (n < 0.50) {
                key = 'chukichi';
            } else if (n < 0.75) {
                key = 'kichi';
            } else {
                key = 'kyo';
            }
            
            // 結果をlocalStorageに保存
            localStorage.setItem('omikujiResult', JSON.stringify(omikujiResults[key]));
            
            // 結果ページに遷移
            window.location.href = 'result.html';
        });
    }

    // result.htmlでの結果表示処理
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const luckyFood = document.getElementById('lucky-food');
    const luckyAnimal = document.getElementById('lucky-animal');
    const drawAgainButton = document.getElementById('draw-again');

    if (resultTitle && resultMessage && luckyFood && luckyAnimal) {
        // localStorageから結果を取得
        const savedResult = localStorage.getItem('omikujiResult');
        if (savedResult) {
            const result = JSON.parse(savedResult);
            resultTitle.textContent = result.text;
            resultMessage.textContent = result.msg;
            luckyFood.textContent = result.food;
            luckyAnimal.textContent = result.animal;
        }
    }

    // もう一度引くボタンの処理
    if (drawAgainButton) {
        drawAgainButton.addEventListener('click', () => {
            localStorage.removeItem('omikujiResult');
            window.location.href = 'index.html';
        });
    }
});
