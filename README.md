# kids-game
子供向け用ゲーム

ブラウザで遊べる、ちいさな子向けのゲーム集です。

公開 URL（GitHub Pages）：https://apapane-yukinosato.github.io/kids-game/

| | ゲーム | URL | 内容 |
|---|---|---|---|
| 🖍️ | ぜんがめんおえかき | https://apapane-yukinosato.github.io/kids-game/zengamen/ | 画面ぜんぶがキャンバスのおえかき。ゆびでなぞると、にじいろの線がひける（何本の指でもOK）。右上のほうきを長おしすると全部消える。ダブルタップでズームしない。音は出ません。 |
| 🧸 | 2さいのあそび | https://apapane-yukinosato.github.io/kids-game/nisai/ | 2さい向けのあそび10こを1ページにまとめたもの（ぷちぷち・おえかき・ごしごし・かたちあわせ・つみき・ほたる・ぬいてみよう・でんしゃ・ボールあそび・おうちのあかり）。下のボタンでえらぶ。ダブルタップでズームしない。音は出ません。 |
| 🍎 | タッチであそぼ | https://apapane-yukinosato.github.io/kids-game/tacchi/ | 1〜3さいの子向けのタッチあそび12面（りんご・しゃぼんだま・たまご・おさかな・のりもの・はなび・どうぶつ・おはな・ふうせん・にじ・ゆきだるま・もぐもぐ）。どこをさわっても大丈夫。ダブルタップでズームしない。音は出ません（静かな場所向け）。 |

## オフラインで遊ぶ（iPhone）
Safari でこのページを開き、「共有」→「ホーム画面に追加」で登録します。一度オンラインで開けば、そのあとは圏外でも遊べます（Service Worker でページを端末に保存します）。更新があると、次に開いたときに自動で新しくなります。

## 構成
```
.
├── index.html     … ゲーム一覧（メニュー）
├── icon-180.png   … ホーム画面用アイコン（apple-touch-icon）
├── icon-512.png
├── manifest.webmanifest … ホーム画面アプリの設定
├── sw.js          … オフライン対応（Service Worker）
├── LICENSE
├── zengamen/      … ぜんがめんおえかき
├── nisai/         … 2さいのあそび（10こ）
└── tacchi/        … タッチであそぼ
```
