var 문자열_js = "문자";
var 문자열_2 = '문자'; //간단한 건 생략 (string, number, boolean 등 한 자료형의 값만 들어있는 경우)
//복잡한 타입에 대해서는 명시
var 문자열과숫자 = 33;
문자열과숫자 = '냠';
var 배열 = [1, 2, 3];
//fetch를 써서 배열을 받아온다. [비어있음] => [data, data] : 문자열 또는 숫자
var fetch배열 = [1, '2', false];
function 데이터사용(x) {
    if (typeof x === 'string') {
        return Number(x[0]) + '1'; //이어붙이기
    }
    else if (typeof x === 'number') {
        return x[0] + 1; //더하기
    }
    else {
        return 1; //1 반환
    }
}
데이터사용(fetch배열);
//만약 함수의 리턴이 없으면 void
//void => 비어있다
//숫자를 매개변수로 받아서 리턴값은 없는 함수
function 리턴없음(num) {
    if (num) {
        console.log(num);
    }
    else {
        console.log('없음');
    }
}
//타입스크립트는 자바스크립트와는 다르게 매개변수로 만든 만큼 채워줘야 "사용" 가능
리턴없음(3);
//리턴없음() => 에러
//해당 매개변수에 대해 비워져도 되게 하고싶으면 => ? 
리턴없음();
