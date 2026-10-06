# こどもゲームズ（kids-game）

GitHub Pages で公開している、ちいさな子（1〜3さい）向けのブラウザゲーム集です。公開 URL は https://apapane-yukinosato.github.io/kids-game/

## 構成

- `index.html` … ゲーム一覧のメニュー。ゲームを追加したら `<ul class="list">` の先頭に `<li>` のカードを1つ足す
- `README.md` … ゲーム一覧の表（URL つき）と構成。ゲームを追加したら1行足す
- `icon-180.png` … ホーム画面に追加したときのアイコン（子供向けなので、かわいいりんごちゃん（顔なし）の絵）。ゲームのページにも `<link rel="apple-touch-icon" href="../icon-180.png">` を入れる
- `sw.js` / `manifest.webmanifest` … オフライン対応（Service Worker）とホーム画面アプリの設定。**ゲームを追加・変更したら、`sw.js` の `VERSION` を上げ、新しいゲームのページを `PRECACHE` に足す**（足さないとオフラインで開けない）。`index.html` と各ゲームのページには、manifest の `<link>` と Service Worker の登録（`</body>` の直前）を入れる。iPhone の「ホーム画面に追加」で、一度オンラインで開いたあとは圏外でも遊べる
- `<game>/index.html` … 1ゲーム＝1フォルダ＝1ファイル（HTML/CSS/JS をすべて1ファイルに入れる）。外部ライブラリは基本なし。音は WebAudio で合成する

## すべてのゲームに必ず入れるもの

- 「← 一覧」リンク（`../`）をヘッダーに
- スマホ（縦 390px 幅）で遊べるレイアウトと、タッチ用ボタン。**ダブルタップでズームしない**（`maximum-scale=1,user-scalable=no`、`touch-action:manipulation`、dblclick/gesture の preventDefault）
- 音の ON/OFF（localStorage に保存）
- スワイプで一覧にもどらないガード（`</body>` の直前に置く「swipe guard」スニペット。`tacchi/index.html` からそのままコピーする）
- テスト用フック `window.__<game>`（状態の取得、`step(dt)` で時間を進める）

## 確認のしかた

- `python3 -m http.server` で配信し、Playwright（Chromium）でスマホ幅と PC 幅のスクリーンショットを撮って見た目を確認する
- コンソールエラーがないことを確認する
