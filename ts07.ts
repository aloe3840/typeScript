//변수에 대입될 수 있는 값을 미리 정해놓는다
//Literal types

namespace TS07{   //이름이 겹쳐도 쓸 수 있음(변수 함수 등)
  export let 변수 : '홍길동' | '유관순' | '김유신'   //홍길동, 유관순, 이순신 중에서만 들어오게
  //변수 = 'str' => 오류 
  변수 = '유관순'
  
  //함수의 매개변수나 리턴값에 내가 지정한 값만 받거나 내보내기 가능
  function 가위바위보(str: '가위' | '바위' | '보'){    //가위 또는 바위 또는 보만 입력이 가능하게

  }
  가위바위보('보')

  function 참거짓(num : 1 | 0) : (1 | 0){  //내보낼 return값도 정해줄 수 있음
    return 1 
    //return 2 => 에러
  }
}

console.log(TS07.변수)

