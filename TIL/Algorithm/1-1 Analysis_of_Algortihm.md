> 인프런에서 강의를 하고 계신 [부경대학교 IT융합응용공학과 권오흠 교수님의 알고리즘 배우기 강좌](https://www.inflearn.com/course/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%95%EC%A2%8C/dashboard) 해당 강의 내용을 정리해서 올렸습니다. <br>
교재: 쉽게 배우는 알고리즘: 관계 중심의 사고법(문병로, 한빛 미디어)
<br>참고서적: Cormen,Leiserson, Rivest, Introduction to Algorithms. MIT Press
<br>추천 선수 지식: C언어, 자료구조

# 알고리즘의 분석 
* 알고리즘의 자원 사용량을 분석
* 자원이란 실행 시간, 메모리, 저장장치, 통신등
* 여기서는 실행시간의 분석에 대해서 다룸

## 점근적 표기법을 사용
* 데이터의 개수 n → ∞ 일때 수행시간이 증가하는 growth rate로 시간복잡도를 표현하는 기법
* Θ-표기, Ο-표기 등을 사용
### 유일한 분석법도 아니고 가장 좋은 분석법도 아님 
* 다만 (상대적으로) 가장 간단하며
알고리즘의 실행환경에 비의존적임
그래서 가장 광범위하게 사용됨
<br><br><br>

## 점근적 분석의 예 : 상수 시간 복잡도
* 입력으로 n개의 데이터가 저장된 배열 data가 주어지고, 그 중 n/2번째 데이터를 반환한다. 
```ruby 
int sample(int data[], int n){
    int k=n/2l
    return data[k];
}
```
* n에 관계없이 상수 시간이 소요된다. 이 경우 알고리즘의 시간복잡도는 O(1)이다.
<br><br><br>

## 점근적 분석의 예 : 선형 시간 복잡도
* 입력으로 n개의 데이터가 저장된 배열 data가 주어지고, 그 합을 구하여 반환한다.
```ruby 
int sum(int data[],int n){
    int sum=0;
    for(int i=0; i<n; i++)
        sum = sum +data[i];
    return sum;
}
```
이 알고리즘에서 가장 자주 실행되는 문장이며,
실행 횟수는 항상 n번이다.
가장 자주 실행되는 문장의 실행횟수가 n번이라면
모든 문장의 실행 횟수의 합은 n에 선형적으로 비례하며,
모든 연산들의 실행횟수의 합도 역시 n에 선형적으로 비례한다.
* 선형 시간복잡도를 가진다고 말하고 O(n)이라고 표기한다.
<br><br><br>

## 점근적 분석의 예 : 순차탐색
* 배열 data에 정수 target이 있는지 검색한다.
```ruby 
int search(int n, int data[], int target)
{
    for (int i=0; i<n; i++) {
        if (data[i] == target)
            return i;
    }
    return -1;
}
```
이 알고리즘에서 가장 자주 실행되는 문장이며,
실행 횟수는 최악의 경우 n번이다.

* 최악의 경우 시간복잡도는 O(n)이라고 표기한다.
<br><br><br>

## 점근적 분석의 예 : Quadratic
* 배열 X에 중복된 원소가 있는지 검사하는 함수이다.

```ruby 
bool is_distinct( int n, int x[] )
{
    for (int i=0; i<n-1; i++)
        for (int j=i+1; j<n; j++)
            if (x[i]==x[j])
                return false;
        return true;
}

```
최악의 경우 배열에 저장된 모든 원소 쌍을 비교 하므로
비교 연산의 횟수는 n(n-1)/2이다.
최악의 경우 시간복잡도는 𝑂(n2)으로 나타낸다.

<br><br><br>

## 점근적 표기법
* 알고리즘에 포함된 연산들의 실행 횟수를 표기하는 하나의 기법
* 최고차항의 차수만으로 표시
* 따라서 **가장 자주 실행되는 연산 혹은 문장**의 실행횟수를 고려하는 것으로 충분
<br><br><br>

## [ **다음장 이진검색과 정렬** ](https://github.com/MinsoftK/TIL/blob/master/Algorithm/Binary_Search.md)