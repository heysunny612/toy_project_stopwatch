# 토이프로젝트 스톱워치

![Animation](https://user-images.githubusercontent.com/127499117/235417558-97445165-ea87-44e4-9aa4-16c5650dd7d9.gif)



>이번 프로젝트를 통해 브라우저가 제공해 주는 API인 setInterval 함수를 배울 수 있었고, 자바스크립트 ES6에 추가된 class 문법 또한 배울 수 있었다. 이전에 문법 공부할 때 이미 사용법은 배운 상태라 문법 사용에 대한 어려움은 없었지만, 언제 이 문법을 적용해야 하는지는 아직 조금 더 많은 경험이 필요한 거 같다! 그리고 자바스크립트에서 제공해 주는 Date 생성자 함수와 메서드를 사용해 보았는데, 내가 알고 있는 시간과 비교해서 조금 생소? 한 시간이라 조금 당황했지만, 제공해 주는 메서드를 사용하면, 기존과 동일한 시간을 만들 수 있다는 것도 알게 되었다. 

<br/>
<br/>

## 새로 배운 것들

 <br/>

```js
start() {
    clearInterval(this.interval);
    this.startTime = Date.now() - this.elapsedTime;
    this.interval = setInterval(this.startTimer.bind(this), 10);
  }
  stop() {
    clearInterval(this.interval);
  }
```

## 1.setInterval & clearInterval

> setInterval: setInterval 함수는 두 번째 인수로 전달받은 시간(ms , 1/1000)으로 **"반복"** 동작하는 타이머를 생성한다. 이후, 타이머가 만료될 때마다 첫 번째 인수로 전달받은 콜백 함수가 반복 호출된다. 이는 타이머가 취소될 때까지 계속된다. 매개변수로는 콜백 함수, 시간, 파리 미터 1, 파라미터 2... 을 전달한다. 콜백 함수에 전달해야 할 인수가 존재하는 경우 세 번째 이후의 인수로 전달할 수 있다.  

> clearInterval :setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 **"타이머 id를 반환"** 한다.setInterval 함수가 반환한 타이머 id를 clearInterval 함수의 인수로 전달하여, 타이머를 취소할 수 있다. 

 <br/>

```js
 timeToString(time) {
    const date = new Date(time);
    const minutes = this.timeToTwoString(date.getUTCMinutes());
    const seconds = this.timeToTwoString(date.getUTCSeconds());
    const milliseconds = this.timeToTwoString(date.getMilliseconds());
    return `${minutes}:${seconds}.${milliseconds}`;
  }

  startTimer() {
    this.elapsedTime = Date.now() - this.startTime;
    const time = this.timeToString(this.elapsedTime);
    this.timer.innerHTML = time;
  }

  start() {
    clearInterval(this.interval);
    this.startTime = Date.now() - this.elapsedTime;
    this.interval = setInterval(this.startTimer.bind(this), 10);
  }
```
## 2. new Date(milliseconds) & Date.now()
> new Date(milliseconds): Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다 

> Date.now():  1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 미리 초를 숫자로 반환한다.

> 적용 :setInterval()을 사용하여 주기적으로 콜백 함수를 실행하지만, 실제 시간을 계산하는 데는 사용하지 않는다. 이는 자바스크립트 특성상 싱글스레드라 타이머 이벤트가 정확한 간격으로 발생하지 않기 때문이다. 자바스크립트의 Date.now()를 사용하면 항상 정확한 시간을 반환한다. 따라서 Date.now()를 사용해 현재 시간을 가져오고, 이 현재 시간을 경과된 시간과 비교해 실제 경과된 시간을 계산한다.
