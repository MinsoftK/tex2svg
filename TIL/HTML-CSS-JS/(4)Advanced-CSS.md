## 2-8. Transitions
### Transitions이란?
* 이동/변경을 멋지게 보여주는 효과

```ruby
  <style>
    .box{
        background-color:red;
        color:white;
       
       transition:background-color .5s ease-in-out;
        }
       //전부 바꾸고 싶을땐 transition:all 로 적는다. 
        //색깔만 바꾸고 싶을때는
        transition:color로 적는다.
    
    .box:hover{
        background-color:green;
        font-size:40px;
        }
    </style>
    <span class="box">
        lalala
    </span>
```
* Transition은 하나의 state에서 다른 state로 넘어갈 때 나타나는 효과 
* Transition은 focus, active, hover에서 효과적으로 적용이 된다. 

## 2-9. Transformations
### Transformations이란?
* html문서의 element들을 변경, 모습이 변하게 하는 효과들.(element의 모습을 바꿀 수 있다.)

```ruby
 <style>
    .box{
        width:500px;
        height:500px;
        background:red;
        transition: transform .5s ease-in-out;
        }
        </style>
    <div class="box">
    </div>

    .box:hover{ transform:rotate(20deg) scale(.5, .5);}

    trasition 과 tranform을 함께 이용하여 시각적인 효과를 줄 수 있다.

    scale 은 사이즈를 줄일 수 있다.
```
* 다양한 transform을 연습해보는 사이트를 방문해서 다양한 것을 경험해보자
>[Transformation 연습](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)


