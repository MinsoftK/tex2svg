## 2-10. Animations
```ruby
  <style>
    .box{
        width:50px;
        height:50px;
        background:red;
        animation:1.5s scaleAndRotateSquare ease-in-out;
        }
   
   키프레임을 이용해서 애니메이션을 만든다. 상태가 2개라면 from에서 to
  
  @keyframes scaleAndRotateSquare {
        form{
            transform:none;
        }
        to{
            transform: rotate(3turn) scale(.5,.5);
        }
    }
        </style>

>상태가 여러개라면 
0%{transform:none;}
50%{ transform:rotate(1turn) scale(.5,.5)}
100%{transform:none;}
와 같이 나눠서 쓸 수도 있다.
```

## 2-11. MediaQuery
```ruby
   <style>
    body{
         background-color: green;
         }
       
    @media screen and (min-width:320px) and (max-width:640px){
     body{
            background-color:blue;
        } 
    }
    </style>
```
* media 쿼리 설정을 만족하면 그안의 body 태그는 blue로 적용이 된다.
* 최소 320px~640px 사이라는 의미
