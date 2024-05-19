//type을 저장 (type alias)

type myNewType = string | undefined | number  //변수타입

//함수에 쓰이는 타입을 저장할 수도 있음 (매개변수와 리턴의 타입을 저장)

//str이라는 문자열을 받아서 number타입으로 return하는 타입
type myFuncType = (str: string)=>number

//함수 타입 적용
let 함수09 : myFuncType = (str)=>{
  return 10
}  //str을 받고 number타입을 return해줘야함. 안 하면 오류

let num = 함수09('안녕')

//클래스 타입 (클래스: 변수랑 함수를 주제에 맞게 뭉쳐놓은 것)
class Person{
  //멤버변수(클래스 안에 있는 변수)
  name : string; //사람 이름
  age : number ;  //사람 나이
  job : string ;  //사람 직업

  //메서드(클래스 안에 있는 함수)
  소개함수() : void {
    console.log(this.name, "는(은)", this.job, "이다")
  }

  //특별한 메서드 (처음 생성할 때 사용되는 생성자)
  constructor(name : string, age : number, job : string){
    //매개변수로 받은 것을 멤버변수에 백업 (생성자의 역할)
    this.name = name
    this.age = age
    this.job =  job

  }
}

let 짱구아빠 = new Person('신형만', 40, '회사원')  //new생성자()
let 짱구 = new Person('짱구', 7, '유치원생')  //new constructor()

console.log(짱구아빠.소개함수())
console.log(짱구.소개함수())