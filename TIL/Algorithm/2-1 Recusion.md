# 2-1 Recursion
* 자기 자신을 호출하는 함수
```ruby
void func(…)
{
…
func(…);
…
}
```

## (1)recursion은 항상 무한루프에 빠질까?
```ruby
int main() {
int result = func(4);
}
int func(int n) {
    if (n==0)
        return 0;
    else
        return n + func(n-1);
}
```
<br>
<br>

### (2)무한루프에 빠지지 않으려면?

```ruby
int func(int n) {
    if (n==0)
        return 0;
    else
        return n + func(n-1);
}
Base case: 적어도 하나의 recursion에 빠지지 않는 경우가 존재해야 한다.
Recursive case: recursion을 반복하다보면 결국 base case로 수렴해야 한다.
n이 0보다 크다면 0에서 n까지의 합은 0에서 n-1까지의 합에 n을 더한 것이다.
```
<br>
<br>


## (3)Factorial: n!
```ruby
int factorial(int n)
{
    if (n==0)
        return 1;
    else
        return n*factorial(n–1);
}
시간복잡도는 O(n) 이다.
```
<br>
<br>

* 이 외에도 여러가지 수열에 Recursive를 이용할 수 있다.
## (4)Fibonacci Number
```ruby
int fibonacci(int n) {
if (n<2)
return n;
else
return fibonacci(n-1) + fibonacci(n-2);
}
```
<br>
<br>

## (5)최대공약수: Euclid Method
```ruby
double gcd(int m, int n) {
    if (m<n) {
        int tmp=m; m=n; n=tmp; // swap m and n
        }
    if (m%n==0)
        return n;
    else
        return gcd(n, m%n);
}
```
[이전장 1-2](https://github.com/MinsoftK/TIL/blob/master/Algorithm/1-2%20Binary_Search.md)

<br>

[다음장 2-2](https://github.com/MinsoftK/TIL/blob/master/Algorithm/2-2%20Recrusive.md)
