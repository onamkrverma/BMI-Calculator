const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const age = document.querySelector("#age");
const errorMessage = document.querySelector(".error-message");
const clearBtn = document.querySelector(".clear");
const resultData = document.querySelector('.result');
const heading = document.querySelector(".heading");
const progressInner = document.querySelector(".progressInner");
const progressBar = document.querySelector('.progressBar');
const noteBox = document.querySelector('.note-box');
const note = document.querySelector('.note');
const note1 = document.querySelector('.note1');
const note2 = document.querySelector('.note2');


const calculate = () =>{

    // blank form not submit 
    if(age.value == "" || height.value == "" || weight.value == "" ){
        errorMessage.classList.add("active");
        return false;
    }
    errorMessage.classList.remove("active");


    if(age.classList.contains("invalid") || height.classList.contains("invalid")
    || weight.classList.contains("invalid")){
        errorMessage.classList.add("active");
        return;
    }
    errorMessage.classList.remove("active");

    

    


    // calculation formula
    const heightVal = (height.value);
    const weightVal = weight.value;
    let bmi = (weightVal/(heightVal**2));
    let result = Math.round(bmi*100)/100;


    // normal Weight calculation
    let normalWeight1 = Math.round(18.5*(heightVal**2));
    let normalWeight2 = Math.round(25*(heightVal**2));



    note.innerHTML = ' ◆ NOTE'
    note1.innerHTML = " ⇛ Healthy BMI range: 18.5 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup>";
    
    

    if (result<16) {
        condition = '(Severe Thinness)'
        resultData.style.backgroundColor = 'red';
        resultData.style.color = 'white';

        //progressbar edit
        progressInner.style.width = '100%';
        progressInner.style.backgroundColor = 'red';
        progressBar.style.color = 'white';
        progressInner.innerHTML = `${condition}`

        

        note2.innerHTML = ` ◉ Healthy weight for this height: ${normalWeight1} kg - ${normalWeight2} kg`

        // console.log('Severe Thinness'); 
        
    }else if(result>=16 && result<17){
        condition = '(Moderate Thinness)'
        resultData.style.backgroundColor = 'orange';
        progressInner.style.width = '100%';
        progressInner.style.backgroundColor = 'orange';
        progressInner.innerHTML = `${condition}`

        note2.innerHTML = ` ◉ Healthy weight for this height: ${normalWeight1} kg - ${normalWeight2} kg `

        // console.log('Moderate Thinness');

    }else if(result >=17 && result < 18.5){
        condition = '(Mild Thinness)'
        // console.log('Mild Thinness');
        resultData.style.backgroundColor = 'yellow';
        progressInner.style.width = '100%';
        progressInner.style.backgroundColor = 'yellow';
        progressInner.innerHTML = `${condition}`

        note2.innerHTML = ` ◉ Healthy weight for this height: ${normalWeight1} kg - ${normalWeight2} kg `
    
    }else if(result >=18.5 && result < 25){
        condition = '(Normal)'
        resultData.style.backgroundColor = 'lightgreen';
        progressInner.style.width = '100%';
        progressInner.style.backgroundColor = 'lime';
        progressInner.innerHTML = `${condition}`

        note2.innerHTML = ` ◉ Healthy weight for this height: ${normalWeight1} kg - ${normalWeight2} kg <br> 🎉Congratulations for maintaining an healthy weight!`
        

        // console.log('Normal');

    }else if(result >=25 && result < 30){
        condition = '(Overweight)'
        resultData.style.backgroundColor = 'red';
        resultData.style.color = 'white';
        progressInner.style.width = '100%';
        progressInner.style.backgroundColor = 'red';
        progressBar.style.color = 'white';
        progressInner.innerHTML = `${condition}`

        note2.innerHTML = ` ◉ Healthy weight for this height: ${normalWeight1} kg - ${normalWeight2} kg `


        // console.log('Overweight');

    }

    let htmlData = `Your BMI is ${result} kg/m<sup>2</sup>`
        
    document.querySelector(".result").innerHTML = htmlData;




}

// clear form and other details
clearBtn.addEventListener("click", () =>{
    window.location.reload();
    // document.querySelector(".result").style.display = 'none';
    // progressBar.style.display = 'none';
    // noteBox.style.display = 'none';
 
})


// input validation
age.addEventListener('input', (e) =>{
    let ageVal = e.target.value;
    // console.log(ageVal);
    if (!ageVal || isNaN(ageVal) || ageVal<0 ) {
        age.classList.add("invalid");
    }
    else{
        age.classList.remove("invalid");
    }
});
height.addEventListener('input', (e) =>{
    let heightVal = e.target.value;
    // console.log(ageVal);
    if (!heightVal || isNaN(heightVal)|| heightVal<0) {
        height.classList.add("invalid");
    }else{
        height.classList.remove("invalid");
        
    }
});
weight.addEventListener('input', (e) =>{
    let weightVal = e.target.value;
    // console.log(weightVal);
    if (!weightVal || isNaN(weightVal) || weightVal<0) {
        weight.classList.add("invalid");
    }else{
        weight.classList.remove("invalid")
       
    }
});






// Unit convertor
    const unitcalculate = () =>{
    const length = document.querySelector('.length').value;
    const showMessage = document.querySelector('.show-message');

    const itemSelected = document.getElementById('selection');
    const selectedVal = selection.options[itemSelected.selectedIndex].value;
    // console.log(selectedVal);

    // blank form not submit 
    if(length == ""){
        showMessage.classList.add("active2");
        return false;
    }
    showMessage.classList.remove("active2");


    const cmTom = (cm) => {
        let meter = cm/100;
        return meter;
        
    }
    const mTocm = (m) => {
        let centimeter = Math.round(m*100);
        return centimeter;

    }

    const ftTom = (ft) =>{
        let meter = ft/3.28;
        let roundMeter = Math.round(meter*100)/100
        return roundMeter;
    }
    const mToft = (m) =>{
        let feet = m*3.28;
        let roundfeet = Math.round(feet*100)/100
        return roundfeet;
    }

    let unitResult;


    if (selectedVal == 'cm-m') {
        unitResult = cmTom(length);
        document.querySelector(".unitResult").innerHTML = ` = ${unitResult} m` ;
        
    }else if(selectedVal == 'm-cm'){
        unitResult = mTocm(length);
        document.querySelector(".unitResult").innerHTML = ` = ${unitResult} cm` ;

    }else if(selectedVal == 'ft-m'){
        unitResult = ftTom(length);
        document.querySelector(".unitResult").innerHTML = ` = ${unitResult} m` ;
    
    }else if(selectedVal == 'm-ft'){
        unitResult = mToft(length);
        document.querySelector(".unitResult").innerHTML = ` = ${unitResult} ft` ;
    }

}




// humbuger 

const humbuger = document.querySelector(".humburger");
const ulItem = document.querySelector(".ul-item");



humbuger.addEventListener('click', () =>{
    if(ulItem.style.display === "flex"){
        ulItem.style.display = "none";
    }else{
        ulItem.style.display = "flex";
    }

})

