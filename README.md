# Web_javascript_slide
輪播製作

# 範例展示
https://johnworker.github.io/Web_javascript_slide/

# CDN 連結

CSS CDN，放在Head

```
<link rel="stylesheet" href="https://johnworker.github.io/Web_javascript_slide/style.css">
```

JS CDN，放在 body 結束標籤上方

```
<script src="https://johnworker.github.io/Web_javascript_slide/main.js"></script>
```

# 屬性說明

屬性名稱 | 屬性說明
--------|--------
data-s-interval | 自動撥放間隔時間， 單位為毫秒
data-s-showdots | 是否要顯示點點，false 為否，true 為是 

# HTML 架構

```
<!-- 輪播圖大盒子 -->
<!-- 寫法：#slider-box>(.slider-item>h1)*3 -->
<div id="slider-box" data-s-interval="3000" data-s-showdots="true" >
    <!-- 輪播圖內的項目，圖片與內容 -->
    <div class="slider-item slider-active">
        <h1>衣服 1</h1>
    </div>
    <div class="slider-item">
        <h1>衣服 2</h1>
    </div>
    <div class="slider-item">
        <h1>衣服 3</h1>
    </div>
    <!-- 上一張與下一張按鈕 -->
    <div id="slider-prev"></div>
    <div id="slider-next"></div>
    <!-- 點點 -->
    <!-- 寫法：#slider-dots>(span.slider-dots)*3 -->
    <div id="slider-dots">
        <span class="slider-dot slider-dot-active"></span>
        <span class="slider-dot"></span>
        <span class="slider-dot"></span>
```