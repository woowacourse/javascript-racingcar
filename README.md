<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>

## 🎥 시연 영상

<img width="500px;" src="https://user-images.githubusercontent.com/78203399/218297711-cbbf6807-006b-47c7-bb18-af8090aac4bf.gif" />

## 📌 실행 방법

```
// After git clone this repo

cd javascript-racingcar

yarn install

node src
```

## 🕹️ 게임 하는 방법

### 1. 자동차 이름들 입력

> 자동차 이름들을 입력한다. 이때 자동차 이름들은 각각 1~5자만 입력 가능하고 특수문자(공백 포함)은 입력이 불가능하다.
>
> 입력을 잘못했을 시 에러 메세지를 출력, 다시 한 번 입력이 가능합니다.

```
에러 발생1 : ' honux'와 ' crong'이라는 이름이 공백이 들어가 에러

경주할 자동차 이름을 입력하세요.
pobi, honux, crong

---

에러 발생2 : 이름의 길이가 1~5 사이가 아닐 경우 에러

경주할 자동차 이름을 입력하세요.
pobi,, crong

성공 사례

경주할 자동차 이름을 입력하세요.
pobi,crong,honux

```

### 2. 경주 횟수 입력

> 자동차들이 몇번 이동할지 입력합니다. 전진 여부는 랜덤함수에 따라 전진할 수도 전진하지 않을 수도 있습니다.
>
> 숫자만 입력 가능합니다. (입력을 잘못했을 시 에러 메세지를 출력, 다시 한 번 입력이 가능합니다.)

```
에러 예시: 문자를 입력했을 경우

시도할 횟수는 몇 회인가요?
a

성공 예시:

시도할 횟수는 몇 회인가요?
5
```

### 결과 출력

> 시도한 횟수만큼 경주를 레이스 여부를 결과로 나타낸다.

```
경주할 자동차 이름을 입력하세요.
pobi,crong,honux

시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
crong : -
honux : -

pobi : --
crong : -
honux : --

pobi : ---
crong : --
honux : ---

pobi : ----
crong : ---
honux : ----

pobi : -----
crong : ----
honux : -----

pobi : -----
crong : ----
honux : -----
```
