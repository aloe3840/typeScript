//type을 저장 (type alias)
//함수 타입 적용
var 함수09 = function (str) {
    return 10;
}; //str을 받고 number타입을 return해줘야함. 안 하면 오류
var num = 함수09('안녕');
//클래스 타입 (클래스: 변수랑 함수를 주제에 맞게 뭉쳐놓은 것)
var Person = /** @class */ (function () {
    //특별한 메서드 (처음 생성할 때 사용되는 생성자)
    function Person(name, age, job) {
        //매개변수로 받은 것을 멤버변수에 백업 (생성자의 역할)
        this.name = name;
        this.age = age;
        this.job = job;
    }
    //메서드(클래스 안에 있는 함수)
    Person.prototype.소개함수 = function () {
        console.log(this.name, "는(은)", this.job, "이다");
    };
    return Person;
}());
var 짱구아빠 = new Person('신형만', 40, '회사원'); //new생성자()
var 짱구 = new Person('짱구', 7, '유치원생'); //new constructor()
console.log(짱구아빠.소개함수());
console.log(짱구.소개함수());
