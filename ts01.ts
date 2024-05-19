//보통 하나만 쓰면 자료형은 생략함 (let 변수 = 3 이런 거 )
//이 변수에 문자열 또는 숫자를 넣고싶다면 => 유니온타입(타입을 합친다)
let 변수 : (String | number) = '홍길동';
변수 = 33

//ts에선 자료형도 변수로 저장 가능 (type자료형)
type Type변수 = String | number | undefined
let 변수2 : Type변수 = 'str'
변수2 = 3

//배열에서 특정 위치에 오는 값의 데이터를 직접 정해주고 싶다(튜플)
let 일반배열 : number[] = [1, 2, 3, 4]
let 튜플배열 : [number, String, boolean, number] = [2, '안녕', false, 54.6]

//상수의 매개변수와 리턴값의 자료형을 검사
function 함수(num: number): number{
  return 44
}
함수(55)