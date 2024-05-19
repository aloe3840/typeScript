//변수에 대입될 수 있는 값을 미리 정해놓는다
//Literal types
var TS07;
(function (TS07) {
    //변수 = 'str' => 오류 
    TS07.변수 = '유관순';
    //함수의 매개변수나 리턴값에 내가 지정한 값만 받거나 내보내기 가능
    function 가위바위보(str) {
    }
    가위바위보('보');
    function 참거짓(num) {
        return 1;
        //return 2 => 에러
    }
})(TS07 || (TS07 = {}));
console.log(TS07.변수);
