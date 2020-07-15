# Recursive Thinking
(순환적으로 사고하기)
<br><br><br>

## Recursion은 수학함수 계산에만 유용한가?
수학함수 뿐만 아니라 다른 많은 문제들을
recursion으로 해결할 수 있다.

## 문자열의 길이 계산 
```ruby
자바
public static int length(String str){
    if(str.equals(""))
        return 0;
    else
        return 1+length(str.substring(1));
}
```

## 문자열을 뒤집어 프린트
```ruby
자바
public static void printCharsReverse(String str){
    if(str.length()==0)
        return;
    else {
        printCharReverse(str.substring(1));
        system.out.print(str.charAt(0));
    }
}
```

## 2진수로 변환하여 출력

```ruby
C언어
void printInBinary(int n) {
    if (n<2)
        printf(“%d”, n);
    else {
        printInBinary(n/2);
    printf(“%d”, n%2);
    }
}
```

## 배열의 합 구하기
```ruby
public static int sum(int n, int[] data){
    if(n <=0)
        return 0;
    else 
        return sum(n-1, data) + data[n-1];
}
```

## Recursion vs. Iteration
* 모든 순환함수는 반복문(iteration)으로 변경 가능
* 그 역도 성립함. 즉 모든 반복문은 recursion으로 표현 가능함
* 순환함수는 복잡한 알고리즘을 단순하고 알기 쉽게 표현하는 것을 가능하게 함
하지만 함수 호출에 따른 오버해드가 있음 (매개변수 전달, 액티베이션 프레임 생성 등)


[이전장 2-1](https://github.com/MinsoftK/TIL/blob/master/Algorithm/2-1%20Recusion.md)

<br>

[다음장 2-3](https://github.com/MinsoftK/TIL/blob/master/Algorithm/2-3%20Recursive.md)

