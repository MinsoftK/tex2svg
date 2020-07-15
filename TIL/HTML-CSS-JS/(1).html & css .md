# HTML, CSS
docs: HTML, CSS에 대한 간략한 설명
## 목차
1. HTML
2. CSS




## 1. html이란?
* Hyper Text Markup Language
* 웹 사이트의 각 요소가 무엇을 뜻하는지 알려주는 언어

```!Doctype:html```로 html 타입을 정해준다.

### 1-1. meta tag 
* 추가 정보를 알려주는 것
* 웹페이지에 검색했을 때 나오는 내용이 meta 내용이다.
```ruby
<meta charset="utf-8">
<meta name="description" content="Welcome to my web">
```
### 1-2. head에는 information body에는 contents가 들어간다.

### 1-3. semantic & non semantic
* sematnic은 뜻, 의미가 있는 태그
* non-semantic은 아무 의미가 없는 태그

```ruby
Semantic (의미를 가지는 tag들)
<h1>this is title</h1>
<section>This is an important section</section>
------------------------------------------------
Non-Semantic (의미가 없는 tag들)
<div>우리가 박스 같은 것이 필요할때 사용</div>
<span>텍스트를 위한 컨테이너가 필요할 때 사용</span>
```
### 1-4. ID & Class
* ID : 각 element당 ID는 한개씩만 가질 수 있다. ID는 고유하기 때문에 마치 **여권번호**같은 것
>```ruby
><header id="headerNumberOne" class="defaultHeader">
>```
> 즉, 고유한 element를 사용할때 ID를 적용한다.
<br>

* Class : 내 이름처럼 반복가능하다. 2개 이상의 element가 중복해서 class를 가질 수 있다.
> 즉, 고유하지 않은 반복되는 element의 경우 class를 적용한다.


## 2. CSS란?
* html을 더욱 쉽고 사용자가 보기 좋게 스타일을 꾸밀 수 있게 도와주는 속성
* Selector 파트와 Property로 이루어짐.
>```ruby
>h1{   Property-value=true ; }
> h1은 셀럭터 {}안의 내용이 property가 된다
>```
>모든 태그들이 셀렉터가 될 수 있음 , 그안의 값을 정하는 것을 property-value라 한다.

### 2-1. CSS를 HTML에 넣는 방법
* inline 방법
```ruby
<style>
  background-color: red;
}
</style>
```
>하지만 같은 배경색을 써야하는 모든 html에 해당 css를 붙여넣기해야한다.
>굉장히 **비효율적이다.

* External 적용 방법
css파일 자체를 적용시킨다. 적용방법은 html의 head에 css를 불러준다.
```ruby 
<link href="styles.css" rel="stylesheet">
(css가 있는 파일의 경로를 넣어준다)
```
### 2-2. Box 모델
* [Box model](https://media.vlpt.us/images/kpl5672/post/de021ddb-fe7e-4041-9224-15748afdb064/boxmodel.gif)을 그림으로 먼저 확인해보자.
* 그림과 같이 우리가 작성한 내용인 Content를 감싸는 padding 그것을 감싸고 있는 border, 이것을 감싸는 margin이 있다.
* 정리하면 border를 기준으로 안쪽을 padding 바깥쪽을 margin이라고 한다. 어느 방향으로 원하는대로 간격을 조절할 수 있다. 

```ruby
만약 padding을 상-하-좌-우 모두 간격을 주고 싶으면 
padding : 10px;

상-하, 좌-우 를 각각 주고 싶다면
padding : 20px 10px; 로 작성

상,우,하,좌 (시계방향)으로 각각 주고싶다면
padding : 5px 10px 15px 20px; 로 작성한다.

border-width :5px;
border-color :red;
border-style :dashed;

border:5px solid red; 로 줄여쓸 수도 있다. 
```

### 2-3. Inline & Block & Inline Block
* [그림으로 먼저 알아보자](https://media.vlpt.us/images/zwon111/post/c5f3432a-0fd3-4965-9e42-822768481b2e/image.png)
* Block : 바로 옆에 아무것도 없을 때, 블록이라고 한다. 무언가가 옆에 위치하면 안된다.
* Inline-Block : 각 박스들이 서로 옆에 위치한다.
* 디폴트 값은 block으로 된다.
* 그렇다면 **Inline은?**
박스의 모든 property 값을 지운다. 
> Inline을 쓰면 블록이 아닌게 되고 텍스트처럼 적용이 된다. 
> 즉, span에다가 쓸 수 있다. 내가 "test" 라는 글자를 썼으면 이 글자에 맞춰서 형성됨.
> 컨텐츠의 길이만 존재한다고 생각하면 되겠다.
> 헷갈릴 수도 있지만 그림으로 이해를 다시 해보길 바란다.

### 2-4. Position Property (static, fixed, absoulte, relative)
* position : static; 
>스크롤이 됐을 때 그자리에 계속 남아있다.
* position : fixed;
>스크롤이 됐을 때 내 화면에 고정돼 있다.
> 즉, 내가 스크롤을 내리면 Banner처럼 계속 따라오는 것은 fixed 되었기 때문이다.

* 박스의 고유값 ID를 통해 간격을 줄 수 있다.
```ruby
#boxTwo
 height:300px;
 width:300px;
 background-color: green;
 position:fixed;
 bottom:10px;
 left : 0;
 
 > 이를 이용해 상단 Banner가 따로오게 만들 수 있다.
 ```
 
 * position : absolute;
 > 포지션 absolute가 설정되면 html 상에서 해당 element와 관계가 있는(relative-부모박스) element를 살펴보고 이에 상응해서 포지션이 결정됨.
 > 부모 박스와 상응하는 관계가 없는 경우엔 우리가 설정한 값대로 움직인다.
 
 ```ruby
 .abs-box{
  width: 400px;
  height: 400px;
  background-color: yellow;
  position:relative **이 값이 없으면 자식이 상응하는 관계 찾지못한다**
  }
 .abs-child{
 width: 400px;
  height: 400px;
  background-color: yellow;
  position:absolute  (relative가 없으면 의미가 없다)
  }
  
  ```
  
