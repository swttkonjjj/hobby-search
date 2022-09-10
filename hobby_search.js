// ==UserScript==
// @name         hobby_search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在xin'q
// @author       swtt
// @match        http://hobby.lkszj.info/info?id=*
// @icon         https://github.com/swttkonjjj/hobby-search/blob/master/img/icon.jfif
// @grant        GM_addStyle
// ==/UserScript==

function main() {
    let element = document.getElementById("info")
    let keyword = element.textContent

    let biliSearch = 'https://search.bilibili.com/all?keyword=' + keyword
    let baiduSearch = 'https://www.baidu.com/s?wd=' + keyword

    biliSearch = '<a target="_blank" href=' + biliSearch + '><button id=biliSearch>bilibili搜索</button></a> '
    baiduSearch = '<a target="_blank" href=' + baiduSearch + '><button id=baiduSearch>baidu搜索</button></a> '

    element.innerHTML = '<div>' + biliSearch + baiduSearch + '</div>' + keyword

    let bilicss = '#biliSearch { height: 45px;background-color: #00aeec;border-radius: 5px;color: white;font-size: large;'
    let baiducss = '#baiduSearch { height: 45px;background-color: #4e6ef2;border-radius: 5px;color: white;font-size: large;'

    GM_addStyle(bilicss)
    GM_addStyle(baiducss)
}

main()

