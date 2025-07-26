Git
-- Thay đổi commit message: git commit --amend hoặc git commit --amend -m "message" (để ko vào chế độ INSERT)
1. gõ i để vào chế độ INSERT
2. sửa commit message
3. bấm esc để thoát insert
4. gõ :wq --> write and quit
5. chạy lại git log để kiểm tra

-- Đưa từ vùng staging về working directory: git restore --staged <file(path dẫn đến file, ko phải file name)>
-- Đưa từ vùng repository về working directory (uncommit): git reset HEAD~1 (undo 1 commit)
1. chạy lại git status để kiểm tra trạng thái các file thay đổi

-- Branch = nhánh
luôn tạo branch riêng, tránh làm trên local bị conflict code
1. git branch <tên nhánh>
2. git checkout <tên nhánh>
hoặc
git checkout -b <tên nhánh>

-- gitignore = GitIgnore = Bỏ qua
.gitignore file

-- Kiến thức bổ sung: checkout về một revision bất kì
1. git log để xem danh sách commit
2. git checkout <revision>
ex: git checkout 070745d6c000d2a90740dcf97ee5db3f9418cc1f

Javascript
-- Convention = quy tắc đặt tên biến
-- Dấu Backtick
-- Object = đối tượng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng số
- Khai báo, sử dụng, gán lại, thực hành
let/const <tên object> = {
<thuộc tính>: <giá trị>,
};

ex:
let student = {
name: "Alex",
age: 20,
role: "QA",
address: {
 number: 2,
 street: "Hong Bang"
},
class: "K16",
isLearingPW: true
};

console.log(`Student name: ${student["name"]}`);
console.log(`Student street: ${student["address"]["street"]}`);

-- Logical operator:
&&: cả 2 vế của mệnh đề đều đúng
||: 1 trong 2 vế đúng
!: đảo ngược lại giá trị của mệnh đề

-- Array: mảng, để lưu trữ dữ liệu cùng kiểu trong 1 biến duy nhất, phần tử lưu theo thứ tự index và bắt đầu từ 0
ex:
let student1 = "Han"
let student2 = "Chan"
let student3 = "Min"
let studentArr = ["Han", "Chan", "Min", false, 5, { student: {age: 18}}];

const count = studentArr.length;
console.log(count);

- tìm số index của phần tử trong mảng
console.log(studentArr.indexOf("Chan"));

- truy xuất đến phần tử trong mảng (index trong mảng)
console.log(studentArr[0]);

-- function: hàm, thực hiện nhiệm vụ cụ thể, được sử dụng lại nhiều lần, có input và output

ex: 
function helloWorld() {
console.log("Hello World")
};
helloWorld();

ex:
function printStudentName(studentName) {
console.log(`Ten hoc vien: ${studentName}`)
};

printStudentName("Chan");

ex: Viết hàm tính tổng
function calculate(a, b) {
const sum = a + b;
return sum;
};

const total = calculate(5, 6);
console.log(total);

Kiến thức bổ sung để làm bài: object với const
-- khi dùng const (hằng số), thì giá trị sẽ không thay đổi được, object cũng vậy, nếu thay cả object bằng 1 object mới sẽ lỗi, nhưng chỉ thay đổi các thuộc tính của object thì hợp lệ
ex:
const student = {“name”: “alex”, “age”: 20}
student.name = “Nagi”; // Hợp lệ

Kiến thức bổ sung để làm bài: thêm thuộc tính vào Object
-- Để thêm thuộc tính mới vào object, chúng ta chỉ cần dùng dấu . hoặc ngoặc vuông [] để định nghĩa thuộc tính mới
ex:
let bike = {
make: 'Yamaha',
model: 'YZF-R3'
};

bike.color = “Blue”;
bike[“price new”] = 100;

console.log(bike);
{make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}

Kiến thức bổ sung để làm bài: xóa thuộc tính của Object
-- Để xóa thuộc tính của object, chúng ta dùng hàm delete
ex:
let employee = {
name: 'Le Van C',
age: 30,
department: 'HR'
};

delete employee.age;
console.log(employee);

Kết quả:
{name: 'Le Van C', department: 'HR'}

Kiến thức bổ sung để làm bài: hàm push
-- Để thêm phần tử vào mảng, ta dùng hàm push
ex:
const arr = [1,2];
arr.push(3);

console.log(arr);

// Kết quả in ra
[1, 2, 3]