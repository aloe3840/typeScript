var objVar = { age: 33, height: 172.2 }; //객체의 각 요소값에 숫자만 넣으려면
//클래스
var MyCalss = /** @class */ (function () {
    function MyCalss(매개변수) {
        this.멤버변수 = 매개변수;
    }
    return MyCalss;
}());
//constructor => 생성자 (클래스를 객체화 하는 순간 발동되는 함수)
var 객체1 = new MyCalss('str1');
var 객체2 = new MyCalss('str2'); // 자료형 맞춰주기 
