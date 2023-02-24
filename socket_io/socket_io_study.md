## Socket_io_practice
socket.io 학습용 repo

# 1일차
- Socket.io에 대한 개념을 잡고, 간단한 메시지 교환 로직을 확인
## Socket.io + ReactJS 튜토리얼 | 초보자를 위한 Socket.io 배우기
https://www.youtube.com/watch?v=djMy4QsPWiI

![image](https://user-images.githubusercontent.com/110171787/219956351-0ad7cb70-e134-485f-9073-bf17e36ec583.png)
- 서버와 유저(클라이언트) 간 데이터를 교환하기 위한 방식으로는,
- 전통적인 방식 => HTTP요청을 하면 가능하다. (fetch(URL))
- 하지만 이 방식은 지속적인 교환을 하는데 불편함을 느끼게 충분했고,
- 대안이 필요했다.

## 대안
1. Server_Sent_Event
- 해당 방식은 HTTP 통신을 계속 유지하지만, 유저는 계속 수신만 하는 라디오 방송 수신 개념이다.
2. Socket.io
- 연결이 끊겨도 자동 재접속이 가능하며, 접속자마다 자동으로 아이디를 부여할 수 있다.
- 모든 웹소켓 유저에게 메세지를 보낼 수 있다.
- 웹 소켓을 이용한 방을 생성할 수 있다.

# socket.io 디렉토리
![image](https://user-images.githubusercontent.com/110171787/219956711-c4852505-5fe7-4703-8c90-ff2a7b1fb71d.png)
- 연습용 디렉토리이기에 간단하다.
## Server_Dir 구성
```bash
yarn init
yarn add express cors nodemon socket.io
```

<br/>

### index.js

![image](https://user-images.githubusercontent.com/110171787/219956971-e24ba9a8-4c17-4dd8-9031-7fe6b3b111fe.png)

- 서버를 채찍질하기 위해 설치만 모듈로부터 express, http, socket.io, cors를 뽑아내 변수로 사용한다.
- 다수의 socket.io 초기 연결 문제는 여기 CORS 문제로부터 발생한다.
- 이를 해결하기 위해선 CORS 미들웨어를 적용하는 것이 필요하다.(권장)
- CORS에 대한 초기 옵션값을 설정해주고,
- server.listen을 통해 해당 포트로 지정 함수를 실행시킨다.

<hr/>

__CORS(Cross-Origin-Resource-Sharing)__: 도메인 및 포트가 다른 서버로 클라이언트가 요청했을 때 브라우저가 보안상의 이유로 API를 차단하는 문제다.
CORS 이슈를 해결하기 위해선 
```javascript
app.get('/', (req,res) => {
  res.header("Access-Control-Allow-Origin", "*");
  ...
}
```
와 같은 헤더를 추가하여 Cross-origin을 허락하는 방식과 미들웨어인 __cors__를 활용하여 해결할 수 있다.
지금의 예제에선 이 방식을 사용했다.
특정 URL만을 허용하고 싶다면,

```javascript
const cors = require('cors');
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
}
app.use(cors(corsOptions));
```
위 코드로 추가 사용이 가능하다.

# 서버 구동 테스트
- index.js 파일로 소켓 설정을 마쳤다면, 돌려볼 차례다.
```bash
node index.js
``` 
를 통해 굴려보자
![image](https://user-images.githubusercontent.com/110171787/219957884-84181220-800c-4598-bfcd-f7b73d6aa248.png)
- 잘 돌아간다.

![image](https://user-images.githubusercontent.com/110171787/219957981-e8649efa-8a13-4926-8e84-a00593034546.png)
-우리는 nodemon(변경사항 감지 시 자동 적용, 앱 재시작 툴)을 설치했기 때문에, server 디렉토리의 package.json파일에서 script/ start를 위와 같이 추가해준다.
- 이렇게 설치하면 변경사항이 있을 때마다 일일이 서버를 죽이고 재가동시키는 미친 짓 대신 yarn start 이후 자동적용되는 편안함을 맛볼 수 있다.

## Client_Dir 구성
```bash
yarn create react-app .
```
으로 구성. 각각의 터미널을 따로 구동해 확인하도록 한다.

필요없는 리소스 파일, 테스트 파일, css 파일을 제거해서 디렉토리를 정리해준다.
![image](https://user-images.githubusercontent.com/110171787/219958382-d22a70b1-c6b2-49ee-8938-fdb7555e4037.png)
- 이후 간단한 입력 폼과 버튼이 있는 구조를 생성해보자.
- 여기서 확인할 수 있는 통신 원리는 이벤트 emit과 listen으로 간단히 설명이 가능하다.
- 메시지를 보내는 유저는 보내는 이벤트에 대해 emit을 하고 있고, 수신하는 유저는 이를 listen하는 것이다.
![image](https://user-images.githubusercontent.com/110171787/219958606-6421478c-0679-45e5-8aff-9da52fd755bb.png)
버튼의 emit 이벤트를 프론트단에서 function으로 구성하기 위해서는 프론트에서도 socket.io 모듈을 설치해야한다. 

```bash
yarn add socket.io-client
```
을 통해 클라이언트 socket.io를 설치해주자.
<br/>
![image](https://user-images.githubusercontent.com/110171787/219958817-9d10ac34-7fbd-40c8-9238-be1f2e84e8bf.png)
해당 패키지로 백엔드 서버와 연결하는 io.connect를 입력한다(BE 주소는 현재 localhost:3001, FE는 localhost:3000 구동 중)
이것으로 우리는 서버에 emit을 하던, listen을 하던 지지고 볶을 수 있게 됐다!
** 위에 localhost 입력시 http로 url을 타고가야 SSL 오류가 발생하지 않는다.

![image](https://user-images.githubusercontent.com/110171787/219959379-725483f6-c861-4e38-b83d-37776ad55745.png)
서버 단의 index파일에서 io.on[listen의 의미]로 connect됐을 때 socket.id를 뽑게 하면 애초에 socket.io 장점으로 꼽았던 연결 유저마다의 ID 출력이 가능했다.

![image](https://user-images.githubusercontent.com/110171787/219959809-c0327954-b758-4cd2-9018-4dfc0dbb2dd2.png)
- BE index.js에 listen 행위를 지정하고 FE의 index.js에 사용 함수를 설정한다.
![image](https://user-images.githubusercontent.com/110171787/219959844-f1497c1d-a01b-4385-adb8-b392c2cfd4fc.png)
- 이후 브라우저 상에서 버튼을 눌렀을 때, onclick함수로 설정한 메시지 전송 emit이 실행되고, BE에서 해당 데이터를 출력한다.
![image](https://user-images.githubusercontent.com/110171787/219959884-ca08f90a-0658-4b61-a633-6dc49aa97e52.png)

장점 중 하나였던 전체 메시지 발송은 어떻게 할까?
![image](https://user-images.githubusercontent.com/110171787/219959994-c9eb19ac-996c-4317-a341-f7453cbdcf1d.png)
- BE 서버에서 emit을 하는 논리이므로, 해당 코드를 추가한다.
- 나를 제외한 접속자 모두가 메시지를 listen하므로 함수를 구성하고
리액트 앱에서는,
![image](https://user-images.githubusercontent.com/110171787/219960310-a409ee9c-892e-43c8-b0d6-aadb38d7dba5.png)
- useEffect 훅으로 메시지를 계속 감지하도록 한다.
