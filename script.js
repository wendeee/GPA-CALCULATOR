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


function calcGpa(){
    let points = 0;
    let courses = {
        courseName :[],
        courseGrade:[],
        creditUnit:[]
    }
    
    
    let numOfCourses = parseInt(prompt("Enter number of courses"));
    
    if(isNaN(numOfCourses)){
        alert("Enter a number");
    }
    
    
    for(i=0; i<numOfCourses; i++){
        courses.courseName.push(prompt("Enter course title\n"));
        courses.courseGrade.push(gradeOutput(prompt("Enter grade(A-F): \n")));
        courses.creditUnit.push(parseInt(prompt("Enter credit unit: \n")));
         

        let gradeUnit = ((courses.courseGrade[i]) * (courses.creditUnit[i]));
        points += gradeUnit;
    }
    
    let sumCredit = 0;
    for(i=0; i<courses.creditUnit.length;i++){
        let creditSum = courses.creditUnit[i];
        sumCredit += creditSum;
    }
    
        alert("your gpa is " + ((points)/(sumCredit))) ;
    return
}

calcGpa();