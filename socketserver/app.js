// express.js

// Node 에서 모듈임포트 (ES5 문법, ES6는 import 사용)
// import express;
const express = require('express');
const app = express();

const server = app.listen(5000); // express 서버를 5000 번 포트에 연결
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  }); // 소켓에 연결

io.on('connection', (socket) => {
    // 연결되었을 때 실행되는 로직
    // 모든 로직은 이곳에서 실행
    // 이벤트 호출 => socket.emit('이벤트 이름', params);
    // 이벤트 받음 => socket.on('이벤트 이름', (params));
    
    // socket.emit('hello', "안녕하세요");

    // io.emit('hello everyone', "모두 안녕하세요");
    io.emit('sendText', {
      text: '서버에서 넘어온 값이에요',
    });

    socket.on('send Message', (data) => { // data=> string
      io.emit('send Message', {
        text: data,
      });
    });
    
});



// react port 3000 번이랑 연결을 해줘야한다.
// TCP/IP 는 연결지향을 주로 사용함. 1대1로 연결을 시켜놓고 데이터를 이동하는 방식
// 파일의 무결성을 보장하는 방식이다. (스트리밍 할 때)
