import '../scss/main.scss'
// test.jsファイルを読み込む
import {showSlideMenu} from "./test";

// test.jsに定義されたJavaScriptを実行する
showSlideMenu();

// Use test of 'Promise'
new Promise(()=>{console.log("promise")})

// Use test of 'async await'
async function hoge() {
    await console.log('aaa');
}
hoge();

// Use test of 'Object.entries'
Object.entries({ foo: 'baz' });