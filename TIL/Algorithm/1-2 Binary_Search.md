# 이진검색과 정렬
## 이진검색 
* 배열 data에 n개의 문자열이 오름차순으로 정렬되어 있다.
```ruby 
int binarySearch(int n, char *data[], char *target) {
int begin = 0, end = n-1;
    while(begin <= end) {
        int middle = (begin + end)/2;
        int result = strcmp(data[middle], target);
        if (result == 0)
            return middle;
        else if (result < 0)
            begin = middle+1;
        else
            end = middle-1;
}
        return -1;
}
```
한 번 비교할 때마다 남아있는 데이터가 절반으로 줄어든다.
따라서 시간복잡도는 O(log2n)이다.

>데이터가 연결리스트에 오름차순으로 정렬되어 있다면?
연결리스트에서는 가운데(middle) 데이터를 O(1)시간에 읽을 수 없음
따라서 이진검색을 할 수 없다.
순차검색의 시간복잡도는 O(n)이고 이진검색은 O(log2n)이다. 둘의 차이는 매우 크다.

<br><br><br>

## 버블정렬(bubble sort) 
* 버블 정렬은 첫 번째 자료와 두 번째 자료를, 두 번째 자료와 세 번째 자료를, 세 번째와 네 번째를, … 이런 식으로 (마지막-1)번째 자료와 마지막 자료를 비교하여 교환하면서 자료를 정렬한다.
```ruby
void bubbleSort(int data[], int n) {
    for ( int i=n-1; i>0; i--) {
        for ( int j=0; j<i; j++ ) {
            if (data[j] > data[j+1]) {
                int tmp = data[j];
                data[j] = data[j+1];
                data[j+1] = tmp;
            }
        }
    }
}
```
시간복잡도는 O(n^2)이다.

>데이터가 연결리스트에 오름차순으로 정렬되어 있다면?

[이전 1-1](https://github.com/MinsoftK/TIL/blob/master/Algorithm/1-1%20Analysis_of_Algortihm.md)
<br>

[다음 2-1](https://github.com/MinsoftK/TIL/blob/master/Algorithm/2-1%20Recusion.md)

