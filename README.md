# Websocket



websocket의 개념에 대해서 학습

웹소켓은 HTML5 와 같이 출현

### 클라이언트 <-> 서버 HTTP (BFF)

1. 사용자가 요청

2. 서버에서 받음
3. 서버에서 응답을 줌 (클라이언트가 요청한 횟수만큼 반응)
4. 만약 제 3자가 요청을 보낸다면..? 다른 사용자들에게는 표시되지 않음. => 웹소켓 출현
5. 웹소켓은 1요청 1응답이 아니라 비대칭적인 요청/응답이 가능함



## Socket.io

웹 소켓 자체는 아닌데, 웹소켓의 편의 기능을 많이 넣은 라이브러리(패키지?) 이다.

원래 WS 패키지를 사용해야하지만 Socket.io가 편하다.

## socketserver

`express` 를 사용하여 `socket.io` 를 사용한다.

웹소켓은 이벤트 방식으로 동작한다는 사실!



### 함수들

```javascript
io.on("NAME", (socket)=>{});
```

이벤트를 발생시킴.

사용 예시

```javascript
io.on("connection", (socket) => {
  // 처음 연결되었을때 실행
})
```





```javascript
// 이벤트 호출
socket.emit('이벤트 이름', params);
// 이벤트 받음
socket.on('이벤트 이름', (params)); => 요청에 대한 응답이라고 볼 수 있다.

// socket.emit() 을 사용하면 새롭게 접속한 사용자에게만 표시됨. (요청을 보낸 클라이언트에게만 전송됨)
// 연결되어있는 모든 클라이언트에게 전송(서버에서 사용)
io.emit('이벤트 이름', params);
```



## socketpractice

`App.js` 에 관련 페이지 만들어 둠

`npm install socket.io-client` 로 설치해야 사용 가능

```javascript
function App() {
  const socket = io.connect('http://localhost:5000'); // 연결함

  return (
    <div>
      "안녕하세요"
    </div>
  );
}
```



단어의 동적 표시를 위해 State 를 사용한다.

```javascript
  useEffect(() => {
    setText([...Text, {"text": "끄아아아ㅇ"}]); // 이런 방식으로 동적으로 텍스트를 주가할 수 있다.
  }, []);

```

state를 통해 값을 동적으로 변경할 수 있다.



# SocketServer

```javascript
io.on('send Message', (data) => { // data=> string
      io.emit('send Message', {
        text: data,
      });
    });
```

다음 코드를 이용해 메시지를 받자 마자 모든 사람들에게 전달해 준다.