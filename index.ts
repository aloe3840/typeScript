// .ts: 타입스크립트 파일
// .tsx: jsx용 ts파일
// 설치하려면 npm install -g typescript
//nodejs가 먼저 설치 돼 있어야함
//tsconfig.json 파일을 생성하고 아래와 같이 입력
/*
{
  "compilerOptions":{
    "target":"ES5",
    "module": "CommomJS"
  }
}
*/
//tsc -w로 실행 (js파일로 변환)
//index.ts => index.js로 변환 시켜줌 코드까지 다
//오류방지를 위해 자료형을 정확히 하고 실행은 js로 하는 것

//ts => js에 type검사를 강화한 버전

let myName = '홍길동'
myName = '김유신'
//myName = 33

//String, number, boolean, undefined, [], {}, bigint, null 대표적인 자료형들
let 이름 : String = '사과'
let 숫자 : number = 33
const 나이 = [1, 2, 3, 4]
let 문자열 : String = "문자열"
let 객체 : {이름: String, 나이: number} = {이름: '안녕', 나이: 44}

let 오브젝트 : {_name: String, _age: number, _adult: boolean} = {
  _name: '이름',
  _age: 19,
  _adult: false
  
}

//title, btn
let title = document.getElementById('title');
let btn = document.getElementById('btn');
//버튼 누르면 title태그의 html내용을 '반갑습니다'로 바꿔주자
//1. 버튼 아이디 찾아서 클릭 이벤트 넣기
if(btn != null){
    btn.addEventListener('click', ()=>{
    if(title != null){
      title.innerHTML = '반갑습니다'
    } 
  })
}else{
  console.log('btn이 없습니다')
}