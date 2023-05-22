let x = document.getElementsByTagName("input")
x[0].addEventListener("focus",function(){
    this.style.borderColor = 'hsl(259, 100%, 65%)'
})
x[0].addEventListener("blur",function(){
    this.style.borderColor = ''
})
x[1].addEventListener("focus",function(){
    this.style.borderColor = 'hsl(259, 100%, 65%)'
})
x[1].addEventListener("blur",function(){
    this.style.borderColor = ''
})
x[2].addEventListener("focus",function(){
    this.style.borderColor = 'hsl(259, 100%, 65%)'
})
x[2].addEventListener("blur",function(){
    this.style.borderColor = ''
})
//reset function
function reset(element){
    for(let i = 0;i<x.length;i++){
        x[i].style.borderColor = "hsl(0, 0%, 86%)";
        const label = document.querySelector(`label[for=${x[i].id}]`)
        label.style.color = "hsl(0, 1%, 44%)"
        x[i].nextElementSibling.style.display = "none"
    }
    d.innerHTML = "- -"
    m.innerHTML = "- -"
    y.innerHTML = "- -"
}
//declaration
let carry = 0;  
let d = document.getElementById("day")
let m = document.getElementById("month")
let y = document.getElementById("year")
//function for calculating the day
function calculate_day(){
    if(new Date().getDate() >= parseInt(day.value)  ){
        d.innerText = new Date().getDate() - parseInt(day.value)
    }
    else{
        carry++; 
        d.innerText = new Date().getDate()+30 - parseInt(day.value);
    }
}
//function for calculating the month
function calculate_month(){
    if((new Date().getMonth()+1-carry) >= parseInt(month.value)){
        m.innerText = (new Date().getMonth()+1-carry) - parseInt(month.value)
        carry = 0;
    }
    else{
        m.innerText = (new Date().getMonth()+1-carry+12) - parseInt(month.value)
    }
}
//function for calculating the year
function calculate_year(){
    if(carry){
        y.innerText = (new Date().getFullYear()-carry) - parseInt(year.value)
        carry = 0;
    }
    else{
        y.innerText = new Date().getFullYear() - parseInt(year.value)
    }
}


//getting button
let a = document.getElementById("button")
//getting inputs of day, month, year.
let day = document.getElementsByTagName("input")[0]
let month = document.getElementsByTagName("input")[1]
let year = document.getElementsByTagName("input")[2]
a.addEventListener('click',()=>{
    reset()
    if(day.value == '' | month.value == '' | year.value == ''){
        // reset()
        for(i = 0;i<x.length;i++){
            if(x[i].value == ""){
                x[i].style.borderColor = "hsl(0, 100%, 67%)";
                const label = document.querySelector(`label[for=${x[i].id}]`)
                label.style.color = "hsl(0, 100%, 67%)"
                x[i].nextElementSibling.innerHTML = "This field is required";
                x[i].nextElementSibling.style.display = "block";
            }
        }
    }
    else if(isNaN(day.value) | isNaN(month.value) | isNaN(year.value)){
        // reset()
        for(i = 0;i<x.length;i++){
            if(isNaN(x[i].value)){
                x[i].style.borderColor = "hsl(0, 100%, 67%)";
                const label = document.querySelector(`label[for=${x[i].id}]`)
                label.style.color = "hsl(0, 100%, 67%)"
                x[i].nextElementSibling.innerHTML = "Invalid input";
                x[i].nextElementSibling.style.display = "block";
            }
        }        
    }
    else if(day.value > 30 || day.value == 0 || (month.value == 2 & day.value > 29)){
        // reset()
        day.style.borderColor = "hsl(0, 100%, 67%)";
        const label = document.querySelector(`label[for=${day.id}]`)
        label.style.color = "hsl(0, 100%, 67%)"
        day.nextElementSibling.innerHTML = "Must be a valid date";
        day.nextElementSibling.style.display = "block";
    }
    else if(month.value > 12 || month.value == 0){
        // reset()
        month.style.borderColor = "hsl(0, 100%, 67%)";
        const label = document.querySelector(`label[for=${month.id}]`)
        label.style.color = "hsl(0, 100%, 67%)"
        month.nextElementSibling.innerHTML = "Must be a valid month";
        month.nextElementSibling.style.display = "block";
    }
    else if(year.value > new Date().getFullYear()){
        // reset()
        year.style.borderColor = "hsl(0, 100%, 67%)";
        const label = document.querySelector(`label[for=${year.id}]`)
        label.style.color = "hsl(0, 100%, 67%)"
        year.nextElementSibling.innerHTML = "Must be a valid year";
        year.nextElementSibling.style.display = "block";
    }
    else{
        calculate_day()
        calculate_month()
        calculate_year()
    }
}
)
