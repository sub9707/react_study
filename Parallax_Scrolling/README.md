# Parallax Scrolling 기법
- 레이어별로 스크롤 속도를 다르게 셋팅해 화면에 입체감을 주는 디자인 기법이다.
- 제일 대표적인 Parallax Scroll 예시인 FireWatch 예시.
<img src='https://s3.amazonaws.com/www-inside-design/uploads/2019/06/image9.gif' width="80%" />

## JavaScript만 사용
```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="./index.css" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="div-1">1</div>
    <div id="div-2">2</div>
  </body>

  <script>
    window.addEventListener("scroll", () => {
      document.getElementById("div-1").style.transform = `translateY(${
        window.scrollY * 0.5
      }px)`;
    });
  </script>
</html>
```
