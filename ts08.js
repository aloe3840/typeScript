var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ...파라미터 (무한히 들어올 수 있는 매개변수)
console.log(1, 1, 2, 3, 24, 23, 5); //...
//rest parameter(...) => 몇 개가 입력될 지 정확히 모를 때 배열 형태로 무한히 받을 수 있음
function 함수8() {
    var var8 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var8[_i] = arguments[_i];
    }
    console.log(var8);
}
함수8(1);
함수8(2, 3, 4, 5, 6, 2, 3, 'dddd'); //무한하게 넘길 수 있음
//... : rest 파라미터 (매개변수)
// ... : spread operator (배열/객체 앞에)
var arr1 = [1, 2, 3]; //number[]의 자료형
var arr2 = ['1', '2', '3']; //string[]의 자료형
//unknown, any => 뭐든지 다 가능
//배열을 붙일 땐 ...으로 분해하고 대괄호로 합치기
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
//분해&합체
console.log(arr3);
var _a = ['hello', 300], 변수_1 = _a[0], 변수_2 = _a[1];
var arr08 = ['hello', 300];
var _b = { key1: true, key2: 30 }, key1 = _b.key1, key2 = _b.key2;
var obj08 = { key1: true, key2: 30 };
console.log(arr08[1]);
//<Component1 id:id, pw:pw/>
function Component1(props) {
    console.log(props.id);
}
function Component2(id, pw) {
    console.log(id);
    console.log(pw);
}
