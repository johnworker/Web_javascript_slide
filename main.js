// 當前輪播的編號，從零開始
var index = 0;
// 下一張按鈕
var nextBtn = document.querySelector("#slider-next");

var items = document.getElementsByClassName("slider-item")

console.log(items.length);
// 下一張按鈕的功能
function next(){
    index++;
    // 如果編號是 項目的數量 就將編號改為玲
    if (index == items.length) {
        index = 0;
    }
    console.log("編號：" + index);
}

// 下一張按鈕.點擊 = 下一張按鈕的功能
nextBtn.onclick = next;