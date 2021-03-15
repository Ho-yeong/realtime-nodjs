# Real time painting game

Node.js express 서버, SocketIO 를 활용하여 리얼타임 채팅 구현 

자바스크립트 이벤트, 마우스를 사용하는 그림 그리기 게임

## used stacks

```
- Server
    - Babel
    - express
    - socket.io
    
- Front
    - Babel
    - gulp
    - gulp-sass
    - gulp-autoprefixer
    - gulp-browserify
    - gulp-csso
    - pug
    - eslint
  ```

### Run Server / 서버 실행

```
npm run dev:server
```

## Game Flow / 게임 흐름

* 최소 2명 이상 유저 필요
* 2명 이상 참가 시 게임 자동 시작
* 서버에 입력되어 있는 랜덤 단어를 한명의 유저가 받고 그림을 그린다.
* 나머지 유저들이 채팅창을 통해 정답을 맞춘다
* 제한 시간은 30초
* 제한 시간이 끝날때까지 아무도 정답을 못맞출시 게임은 자동으로 끝나게 되며 3초의 휴식시간 뒤 다음게임이 자동 시작된다.

## Main UI

![real time jpg](https://user-images.githubusercontent.com/58277160/111113385-08e11980-85a5-11eb-9269-6a2a6fc88452.png)


## Acknowledgments / 감사의 말

* Thank you for coming here

# realtime-nodjs

Realtime Drawing Game built with SocketIO, Gulp and Node
