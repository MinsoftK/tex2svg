## 2-7. CSS states
```ruby
<body>
    <style>
    .box{
        background-color:red;
        font-size:40px;
        }
    </style>
    <span class="box">
        lalala
    </span>
</body>
```
* inspection에서 :hov 를 살펴보면 active, focus, visited, hover가 있다.

* hover를 살펴보자

```ruby
.box:hover{
     background-color:pink;
     무언가가 올라가면 state가 변한다.
}
```
>마우스가 올라가면 상태가 변한다.

* active를 살펴보자

```ruby
.box:active{
     background-color:pink;
     무언가가 올라가면 state가 변한다.
}
```
>클릭하면 상태가 변한다.

* focus를 살펴보자

```ruby
.box:focus{
     background-color:pink;
     무언가가 올라가면 state가 변한다.
}
```
>focus 됐을시 state가 변한다
> hover보다 중요하기 때문에 hover는 작동하지 않는다.
