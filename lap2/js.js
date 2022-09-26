var Student = {
    name : "le huy hoang",
    age : "20",
    address: "ninh binh",
    Subject: [
        {
            subject_name : "javaScript",
            point: "10"
        }
    ]
}
document.getElementById("student_name").innerHTML = Student.name;
document.getElementById("student_age").innerHTML = Student.age;
document.getElementById("student_address").innerHTML = Student.address;
document.getElementById("student_subject").innerHTML = Student.Subject[0].subject_name;
document.getElementById("student_point").innerHTML = Student.Subject[0].point;


add_subject = function (){
    var subject_name = document.getElementById("subject_name").value;
    document.getElementById("student_subject").innerHTML = subject_name;
    var point = document.getElementById("subject_point").value;
   

    if (document.getElementById("subject_point").value == 0) {
        const point_number = document.getElementById("set_point_number").value;
        var tong = 0;
        var list = document.getElementById("point_avg");
        for (let index = 1; index <= point_number; index++) {
           var number = Number(list.children[index].value);
            console.log(typeof number);
            tong += number;
            
        }
        var avg = tong / point_number;
        document.getElementById("student_point").innerHTML = avg;
    }

    else{
        document.getElementById("student_point").innerHTML = point;
    }
}

point_number = function(){
    document.getElementById("title").innerText = "nhập điểm";
    const point_number = document.getElementById("set_point_number").value;
    var list = document.getElementById("point_avg");
    for (let index = 1; index <= point_number; index++) {
        const point = document.createElement("input");
        const br = document.createElement("br")
        for (let index = 1; index <= point_number; index++) {
           list.insertBefore(point,list.children[index]);
        }
    }
}

change_address = function(){
    var list = document.getElementById("address");
    if (list.childElementCount <= 2) {
        const input = document.createElement("input");
        list.insertBefore(input,list.children[1]);
        
    }
    else{
        document.getElementById("student_address").innerHTML = list.children[1].value
        list.removeChild(list.children[1]);
    }
}

//--------------------------- bai 3

 function student_2(name,age,address){
    this.name = name;
    this.age = age;
    this.address = address;
    this.Subject= [
        {
            subject_name : "jS",
            point: "9"
        }
    ]
    }
    
var student_1 = new student_2 ("vu long vu","18","ha noi");
document.getElementById("student_name_2").innerHTML = student_1.name;
document.getElementById("student_age_2").innerHTML = student_1.age;
document.getElementById("student_address_2").innerHTML = student_1.address;
document.getElementById("student_subject_2").innerHTML = student_1.Subject[0].subject_name;
document.getElementById("student_point_2").innerHTML = student_1.Subject[0].point;

add_subject_2 = function(){
    var subject_name =  document.getElementById("subject_name_2").value;
    document.getElementById("student_subject_2").innerHTML = subject_name;
    var student_point = document.getElementById("subject_point_2").value
    document.getElementById("student_point_2").innerHTML = student_point;
}
//  ---------------------bai 4
class person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;

    }
}
 
 show_inf = function(){
 var person_1_name = document.getElementById("name_1").value;
 var person_1_age = document.getElementById("age_1").value;
 var person_1_address = document.getElementById("address_1").value;
 var person_2_name = document.getElementById("name_2").value;
 var person_2_age = document.getElementById("age_2").value;
 var person_2_address = document.getElementById("address_2").value;

 var person_1 = new person (person_1_name,person_1_age,person_1_address);
 var person_2 = new person (person_2_name,person_2_age,person_2_address);
  
    
    document.getElementById("show_name_1").innerHTML =person_1.name;
    document.getElementById("show_age_1").innerHTML = person_1.age;
    document.getElementById("show_address_1").innerHTML = person_1.address;
    document.getElementById("show_name_2").innerHTML = person_2.name;
    document.getElementById("show_age_2").innerHTML = person_2.age;
    document.getElementById("show_address_2").innerHTML = person_2.address;
 }
