<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>

<br>

## 실행 방법

1. 레포지토리 클론

```bash
git clone -b leejin-yang --single-branch https://github.com/woowacourse/javascript-racingcar.git
```

2. 게임 실행

```bash
node src
```

<br>

## 게임 진행

- 자동차 이름을 입력한다.

> 이름은 한글 또는 영문자만 입력이 가능하다. 쉼표를 기준으로 구분해 입력한다.
>
> 이름의 길이는 1자 이상 5자 이하만 입력이 가능하다.
>
> 중복되지 않게 이름을 입력해야 한다.

```bash
경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).
황펭,파인
```

- 시도할 횟수를 입력한다.

> 시도할 횟수는 자연수만 입력이 가능하다.

```bash
시도할 회수는 몇회인가요?
3
```

- 각 자동차가 시도 횟수동안 이동하거나 이동하지 않는다.

- 가장 먼 거리를 이동한 자동차가 우승한다.

> 우승 자동차는 한 대 이상일 수 있다.

```bash
실행 결과
황펭 : -
파인 : -

황펭 : --
파인 : -

황펭 : ---
파인 : -

황펭 : ---
파인 : --

황펭 최종 우승했습니다.
```
