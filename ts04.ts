//타입을 정해서 에러를 없애기
//같은 프로젝트 안에 다른 파일과 이름이 겹치면 안 됨
type obj04Type = {
  num : number[] | boolean 
  str : string 
  name : string | string[]
}

let 객체04: obj04Type = {
  num : [100, 102, 104],
  str : "str",
  name : "son"
}

객체04.num[4] = false
객체04.name = ['lee', 객체04.str]


//타입 정하기
let 사람04 : string = '홍길동'
let 나이04 : number | undefined = undefined  //숫자도 가능해야함
let 성인04 : boolean = false

나이04 = 33

let 친구04 : (string | number | undefined | boolean)[] = [사람04, 나이04, 성인04]