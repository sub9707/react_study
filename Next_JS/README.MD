# Next.js 학습
본 학습 내용은 Next.js의 새 버전 13 beta를 토대로 기존 버전과 다른 내용을 공부하여 기록하였습니다.<br/>
참고 Docs <br/> 
<a href="https://nextjs.org/docs">Next js : https://nextjs.org/docs</a>
<a href="beta.nextjs.org/docs">Next js beta: beta.nextjs.org/docs</a>


## Page Routing
Next js는 React App Framework로써 프로젝트 구조도 변화하였다. <br/>
 우선 프로젝트를 생성할 때, src/ 구조를 선택할 지는 개인의 판단에 맡기는 듯하다. <br/>
난 기존 React 앱에서 사용하던 src 구조를 사용하였다. <br/>
 src 폴더를 사용하지 않는다면, public과 함께 있는 해당 폴더가 root 위치가 될 것이다.<br/>
<br/>
현재 Next.js에는 아직은 beta 기능으로 시험 중인 기능이 있다.

### 1. app 디렉토리, Routing
보통은 root 폴더에 public과 layout.tsx, global.css를 넣고 페이지를 다룬다.<br/>
 하지만 app 디렉토리를 추가하면 라우팅을 하는 url 구조가 app 부터 시작함을 선언하는 것과 같다. <br/>
기존에는 root 폴더의 pages 폴더를 만들고, 원하는 url 이름대로 폴더를 차근히 만들어 라우팅을 구성했다.
```
ex) 기존 방식
localhost:3000/list => root/pages/list
```

```
ex)  src, app 구조 차용 방식
localhost:3000/list => src/app/list 폴더의 page.tsx 페이지를 렌더링
```
