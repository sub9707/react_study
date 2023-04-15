# Next.js 학습
본 학습 내용은 Next.js의 새 버전 13 beta를 토대로 기존 버전과 다른 내용을 공부하여 기록하였습니다.<br/>
<strong>참고 Docs</strong> <br/> 
<a href="https://nextjs.org/docs">Next js : https://nextjs.org/docs</a> <br/>
<a href="https://beta.nextjs.org/docs">Next js beta: https://beta.nextjs.org/docs</a>


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
### 2. API Routes
본래의 방식은 pages에 js 파일을 넣고, url에 따라 api 함수를 호출하여 HTTP 통신을 하였으나,<br/>
beta 버전에서의 API 라우팅은 조금 변경되었다. <br/>
우선, app 디렉토리에 api 폴더를 생성하고 pages 처럼 url 구성에 따라 폴더를 만들어 구조를 생성한다.<br/>

app/api/test 구조에 apitest.tsx 파일이 있다고 가정하자. <br/>
아래처럼 GET/POST 함수를 작성한다. <br/>
```javascript
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log("Handling GET request Done!");
  return NextResponse.json({ msg: "Finally Done..!" });
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // POST 함수 작성
  return;
}
```
여기서 import 첫 줄은 request와 response의 타입을 지정하기위함이고, <br/>
NextResponse는 return을 할 때 기존 react와 Next js 프레임워크에서 사용하던 res.status(200)을 대체하는 Method이다. <br/>
JSON 객체가 아닌 다른 data를 리턴하고 싶다면, <br/>
```
return new Response(data)
```
를 활용하면 된다. <br/>

이 후 url 입력창에 get 메서드를 실행하기 위해 구조대로 "localhost:3000/list"를 입력하면 폴더 내부에 있던  <br/>
apitest.tsx 파일의 GET 메서드가 호출되면서 페이지에 return 값이 출력된다. <br/>
(아래는 디렉토리와 파일명이 다른 예시)<br/>
![image](https://user-images.githubusercontent.com/110171787/232242054-bc80a53e-ca61-42e4-be85-f257ec2e5b07.png)

