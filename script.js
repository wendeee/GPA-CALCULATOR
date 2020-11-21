window.onload = function(){
    let button = document.getElementById("button2");
    button.onclick = calcGpa;
};

function gradeOutput(grade){
    if(grade.toLowerCase()=="a"){
        return 5;
    }else if(grade.toLowerCase()=="b"){
        return 4;
    }else if(grade.toLowerCase()=="c"){
        return 3;
    }else if(grade.toLowerCase()=="d"){
        return 2;
    }else if(grade.toLowerCase()=="e"){
        return 1;
    }else if(grade.toLowerCase()=="f"){
        return 0;
    }
}

try{
    function calcGpa(){
        let points = 0;
        let courses = {
            courseName :[],
            courseGrade:[],
            creditUnit:[]
        }
        let numOfCourses = parseInt(prompt("Enter number of courses"));
        for(i=0; i<numOfCourses; i++){
            courses.courseName.push(prompt("Enter course title\n"));
            courses.courseGrade.push(gradeOutput(prompt("Enter grade(A-F): \n")));
            courses.creditUnit.push(parseInt(prompt("Enter credit unit: \n")));
            if(isNaN(numOfCourses)) throw "Enter a valid number";
            
            
            let gradeUnit = ((courses.courseGrade[i]) * (courses.creditUnit[i]));
            points += gradeUnit;
        }
        let sumCredit = 0;
        for(i=0; i<courses.creditUnit.length;i++){
            let creditSum = courses.creditUnit[i];
            sumCredit += creditSum;
    
           } 
        
        let cgpa = parseFloat(points / sumCredit).toFixed(2);

        let element = document.getElementById("txt2");
        element.innerHTML = "Your CGPA is " + cgpa;
        element.animate([
            {transform: "translateY(-20%)"},
        ], {duration: 1000}
        );
        
     }
}    
catch(err){
    alert(err);
}
