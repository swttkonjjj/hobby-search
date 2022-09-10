// ==UserScript==
// @name         hobby_search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @homepageURL https://github.com/swttkonjjj/hobby-search
// @description  在兴趣爱好数据库中增加bilibli和百度搜索
// @author       swtt
// @license     MIT
// @match        http://hobby.lkszj.info/info?id=*
// @icon         https://gitee.com/swttkonjjj/hobby-search/raw/master/img/icon256.png
// @grant        GM_addStyle
// ==/UserScript==

function main() {
    let element = document.getElementById("info")
    let keyword = element.textContent

    let biliSearch = 'https://search.bilibili.com/all?keyword=' + keyword
    let baiduSearch = 'https://www.baidu.com/s?wd=' + keyword

    biliSearch = '<a target="_blank" href=' + biliSearch + '><button id=biliSearch>bilibili搜索</button></a> '
    baiduSearch = '<a target="_blank" href=' + baiduSearch + '><button id=baiduSearch>Baidu搜索</button></a> '

    element.innerHTML = '<div>' + biliSearch + baiduSearch + '</div>' + keyword

    if (keyword != ' - - - ') {
        clearInterval(myVar)
    }
}

let biliCss = '#biliSearch { height: 45px;background-color: #00aeec;border-radius: 5px;color: white;font-size: large;'
let baiduCss = '#baiduSearch { height: 45px;background-color: #4e6ef2;border-radius: 5px;color: white;font-size: large;'

GM_addStyle(biliCss)
GM_addStyle(baiduCss)

let myVar = setInterval(main, 100);
