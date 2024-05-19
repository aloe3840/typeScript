//object 공통타입
type objType = {
  [key: string]: number
}

let objVar : objType = {age: 33, height: 172.2} //객체의 각 요소값에 숫자만 넣으려면

//클래스
class MyCalss{
  멤버변수 : string

  constructor(매개변수: string){
    this.멤버변수 = 매개변수
  }
}

//constructor => 생성자 (클래스를 객체화 하는 순간 발동되는 함수)
let 객체1 = new MyCalss('str1')
let 객체2 = new MyCalss('str2')  // 자료형 맞춰주기 
