
const a = 10;
const b = "M";

// 3 hàm
function sum(a, b) {
    // kiểm tra
    if (typeof a !== "number" || typeof b !== "number") return -1;
    // xử lý
    const result = a + b;
    // kết quả
    return result;
}

console.log(sum(a, b));

//2
// biến có thể là 1 hàm, bolend, mảng
// tên biến thì có dấu =
// trong object dùng dấu :
const myChildren = ["Kien", "Lan"];
const running = function (){
    return "variable running";
};
const myInfo = {
    name: "Hiep",
    age: 20,
    isStatus: true,
    Street: {
        name: "Hà Nội",
        address: "Yen Hoa",
    },
    running: function (){
        return "object running";
    }
};
console.log (running());
console.log(myInfo.running());
console.log(myInfo.name);
console.log(myInfo);