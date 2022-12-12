# 🛒장바구니 페이지 구현

localStorage를 활용한 장바구니 페이지 구현하기.

- 배포 : [배포 바로가기](https://cart-megachang.netlify.app/)

## `프로젝트 설치 및 실행 방법`

### ✅ 설치방법

1. Node.JS를 다운받아 설치해주세요.
2. 리포지토리를 클론해주세요.

```
https://github.com/Sophie0527/cart_project.git
```

3. dependencies를 설치해주세요.
```
npm install
```


### ✅ 실행방법

1. 다음 명령어를 이용해 server를 실행해주세요.
```
npm start
```

2. 브라우저에서 [http://localhost:3000](http://localhost:3000) 에 접속해주세요.
  
&nbsp;
  
## `프로젝트 구현사항`

### ✅ 상품 목록 페이지
[http://localhost:3000/](http://localhost:3000/)
1. 정렬기능
```
정렬 기준: ①인기순, ②낮은 가격순, ③높은 가격순
```

2. 페이지네이션

3. 장바구니 버튼


### ✅ 장바구니 페이지
[http://localhost:3000/cart](http://localhost:3000/cart)
1. 상품 수량 조정
```
최소 1개의 수량은 지정됨
```

2. 상품 삭제

3. 쿠폰 적용
```
쿠폰 type: ①정액 할인, ②비율 할인
```

&nbsp;

## `localStorage 사용법`

### ✅ 기본 사용 방법
```js
// localStorage 데이터 저장하기
localStorage.setItem("key", value);

// localStorage 데이터 읽어오기
localStorage.getItem("key");

// localStorage 데이터 삭제하기
localStorage.removeItem("key");

// localStorage 데이터 삭제
localStorage.clear();
```

### ✅ 주의 사항

1. 웹 스토리지를 사용할 때 주의해야 할 부분
```
오직 문자형(string) 데이터 타입만 저장가능
```

2. 위 문제의 해결 방법
```js
// JSON 형태로 데이터를 읽고 쓰기.
localStorage.setItem("key", JSON.stringify(value));
```
