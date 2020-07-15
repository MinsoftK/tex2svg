# Designing Recursion
* 적어도 하나의 base case, 즉 순환되지 않고 종료되는 case가 있어야 함
* 모든 case는 결국 base case로 수렴해야 함



## 암시적(implicit) 매개변수를 명시적(explicit) 매개변수로 바꾸어라.

## 순차탐색
```ruby
int search (int [] data, int begin, int end, int target){
    if( begin > end) 
        return -1;
    else if(target ==items[begin])
        return begin;
    else 
        return search(data, begin+1, end. target)
}
```
recursion을 이용하지 않을때는 begin을 암묵적으로 0으로 설정하지만 recursive하게 만들려면 begin과 end의 검색구간을 명시적으로 지정해줘야한다.


## 최대값 찾기
```ruby
int findMax(int [] data, int begin, int end){
    if(begin==end)
        return data[begin];
    else
        return Math.max(data[begin], findMax(data,begin+1,end));
}
```
시작값과 +1이 되는 값들의 max값을 찾는다. findMax가 다시 들어간다.

## 이진검색
```ruby
int binarySearch(int data[], int target, int begin, int end) {
    if (begin>end)
        return -1;
    else {
    int middle = (begin+end)/2;
    if (data[middle] == target)
        return middle;
    else if (data[middle] > target)
        return binarySearch(data, target, begin, middle-1);
    else
        return binarySearch(data, target, middle+1, end);
}
}

```
### 순환적 알고리즘 설계의 중요한 점 정리
>적어도 하나의 base case, 즉 순환되지 않고 종료되는 case가 있어야 함

>모든 case는 결국 base case로 수렴해야 함

>암시적(implicit) 매개변수를 명시적(explicit) 매개변수로 바꾸어라.

<br>
<br>

[이전장 2-2](https://github.com/MinsoftK/TIL/blob/master/Algorithm/2-2%20Recrusive.md)


<br>

[다음장 3-1](https://github.com/MinsoftK/TIL/blob/master/Algorithm/2-3%20Recursive.md)
