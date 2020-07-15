
* [GitHub Guides - Mastering Markdown](https://guides.github.com/features/mastering-markdown/) 영어가 가능하다면 공식사이트에 가서 문법을 직접 확인해보길 바란다. 굉장히 자세하게 기술한다. 대부분은 이 글을 읽고 예시를 가져와서 정리했다. 
* 본인은 문법을 바로 익힐 수 있게 적어 놓았기 때문에 HTML과 연관시켜서 tag로 이해를 하고 싶다면 [Markdowm 사용법 총정리](https://heropy.blog/2017/09/30/markdown/)를 참고하길 바란다.

<br><br>

# Markdown 사용법 

## **Bold**(강조) , *italic*(이탤릭체)
```
예시
It's very easy to make some words **bold** and other words *italic* with Markdown. 
You can even [link to Google!](http://google.com)
```
-------------------------------------------------------------------------------------------------------------
Markdown이 적용되면 아래와 같다. <br>
* It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)

<br>
<br>

## Header
```
예시
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```
-------------------------------------
* #을 하나씩 더 붙일수록 글자 크기가 작아진다.

<br>


## 강조
```
예시
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
```
----------------------------------
* >*This text will be italic*
  >_This will also be italic_

  >**This text will be bold**
  >__This will also be bold__

  >_You **can** combine them_



<br>

## 이미지 삽입
```
예시
![GitHub Logo](/images/logo.png)

```
----------------------
* 형식: ![표현할 글자](Link 시킬 url or path)


<br>

## 웹 페이지 링크
```
예시
[GitHub](http://github.com)
```
-------------------------------
* 형식: ![표현할 글자](Link 시킬 Url


<br>

## Blockquotes
```
예시
As Kanye West said:

> We're living the future so
> the present is our past.
```
As Kanye West said:

> We're living the future so
> the present is our past.
-------------------------------
* '>'를 사용해서 블럭화를 할 수 있다.

## Inline code
```
예시
I think you should use an
`<addr>` element here instead.
```
--------------------------------
* I think you should use an
`원하는 부분만을 inline 코드화할 수 있다.` element here instead.

## Syntax highlighting 
```ruby
예시
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
---------------------------------------
* code를 묶을때  ```ruby로 적어준다.





