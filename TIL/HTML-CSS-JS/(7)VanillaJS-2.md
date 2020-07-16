## JS에 대하여
```ruby
1   let a=221;
2   let b= a-5;
3   console.log(b);

지켜야할 규칙이 있다 
한줄씩 적어야 한다.
이것을 Lines라 하지만
Expressions이라고 부른다. 모든 expression은 한줄을 가져야 한다.
```

* const란? constant 상수 변하지 않는 값.

* Array란? 리스트,배열 
> [ braket으로 감싼다.]
* Object란?
```ruby
culy braket으로 감싼다. {}
const min={
    name:"minsung",
    age:33,
    gender:"male",
    food[{name:"kimchi",fatty:false},{name:"cheese buger" fatty:true}]
 }
 console.log(min.gender);
 min.gender:"female";
 console.log(min.gender);
 
 const min의 내용은 바뀌지만 min은 바뀌지 않는다. Array에 Object를 넣을 수 있다.
 ```

 * JS에선 "" 도 스트링이고 '' 도 스트링이다.
 * 그런데 너무 지겨워서 백틱(`)을 생각해냈다.
 ```ruby
 function say(name,age){
     console.log(`Hello ${name} you are ${age} years old`);
 }

say("min",29);
기존의 "",''를 쓰는 것보다 훨씬 효율적이다.
```

* 이제 return을 사용한다.
```ruby
 function say(name,age){
     return (`Hello ${name} you are ${age} years old`);
 }
const greet=say("min",29);
console.log(greet)
```
*return이 greet에 들어간다.

* 우리만의 객체를 만들어보자.
```ruby
const cal={
    plus:function(a,b){
        return a+b;
    }
}
cal.plus(5,5);
```
