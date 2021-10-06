





let currentInput = document.getElementById("currentInput");
let answerScreen = document.getElementById("answerScreen");
let eraseBtn = document.getElementById("erase");
let clearBtn = document.getElementById("clear");
let evaluateBtn = document.getElementById("evaluate");
let numBtn = document.getElementsByClassName("num_btn");
let funBtn = document.getElementsByClassName("fun_btn");


// let realTimeScreenValue = [];
let firstNumber = 0;
let secondNumber = 0;
let sum = 0;


function displayFirstClickedNumber() {
    for (const item of numBtn) {
        if (item.addEventListener("click", () => { currentInput.innerText += item.value; }));// return item.value;
    }
}
displayFirstClickedNumber();



function clearAll() {
    clearBtn.addEventListener("click",()=>{
    // realTimeScreenValue = [];
    currentInput.innerText = "";
    answerScreen.innerText = "";
    firstNumber = "";
    secondNumber = "";
    sum = "" ;
    })
}
clearAll();

// (not succed)
// function deleteOneNum(){
//     clearBtn.onclick = ()=>{
//         let bb = new String
//         bb = currentInput.innerText;
//         bb.slice(0,bb.length-1);
//         console.log(bb);
//     }
// }
// deleteOneNum()


for (let i = 0; i < funBtn.length; i++) {
    
    funBtn[i].onclick = ()=>{
        switch (funBtn[i].value) {
            case "+":
                firstNumber = Number(currentInput.innerText);
                currentInput.innerText = " ";
                evaluateBtn.onclick = ()=>{
                secondNumber = Number(currentInput.innerText);
                sum = firstNumber+secondNumber;
                answerScreen.innerText = sum;
                answerScreen.style.color = "white";
                answerScreen.style.fontSize = "xx-large";
                currentInput.style.fontSize = "x-large";
                currentInput.style.color = "grey";
                console.log(sum);
                }
                // realTimeScreenValue.push(Number(currentInput.innerText));
                // currentInput.innerText = "";
                // console.log(realTimeScreenValue);
                // evaluateBtn.addEventListener("click",()=>{
                    
                //     console.log(realTimeScreenValue);
                //     for (let j = 0; j < realTimeScreenValue.length; j++) {
                        
                //         answerScreen.innerText += `${funBtn[i].value}${Number(realTimeScreenValue[j])}${funBtn[i].value}${currentInput.innerText}`;
                //     }
                //     answerScreen.innerText = eval(answerScreen.innerText);


                //     console.log(answerScreen);
                //     currentInput.innerText = "0"
                //     answerScreen.value = 0
                // });
                // if (currentInput.innerText != "") {
                //     realTimeScreenValue.push(currentInput.innerText);

                //     // if (evaluateBtn.addEventListener("click",()=>{})){


                //     // }
                        
                    
                // }
                
                // console.log(realTimeScreenValue);
                // let evale;
                // for (let item of realTimeScreenValue) {
                //     evale += item ;
                // }
                // secondNumber = currentInput.innerText;
                // if (evaluateBtn.onclick = ()=>{}) {
                //     answerScreen.innerText = evale.innerText;
                // }
                
                break;
            case "-":
                firstNumber = Number(currentInput.innerText);
                currentInput.innerText = " ";
                evaluateBtn.onclick = ()=>{
                secondNumber = Number(currentInput.innerText);
                sum = firstNumber-secondNumber;
                answerScreen.innerText = sum;
                answerScreen.style.color = "white";
                answerScreen.style.fontSize = "xx-large";
                currentInput.style.fontSize = "x-large";
                currentInput.style.color = "grey";
                console.log(sum);
                }

                // firstNumber =  currentInput.innerText;
                // console.log(firstNumber);
                // currentInput.innerText = "";
                
                // evaluateBtn.addEventListener("click",()=>{
                //     secondNumber = currentInput.innerText;
                //     // console.log(realTimeScreenValue);
                //     answerScreen.innerText = `${firstNumber}${funBtn[i].value}${secondNumber}`;
                //         // answerScreen.innerText += `${Number(realTimeScreenValue[j])}${funBtn[i].value}${currentInput.innerText}`;
                    
                //     answerScreen.innerText = eval(answerScreen.innerText);
                //     answerScreen.style.color = "white";
                //     answerScreen.style.fontSize = "xx-large";



                //     console.log(answerScreen);
                //     currentInput.innerText = ""
                //     // answerScreen.innerText = 0
                // });
                break;
            case "*":
                firstNumber = Number(currentInput.innerText);
                currentInput.innerText = " ";
                evaluateBtn.onclick = ()=>{
                secondNumber = Number(currentInput.innerText);
                sum = firstNumber*secondNumber;
                answerScreen.innerText = sum;
                answerScreen.style.color = "white";
                answerScreen.style.fontSize = "xx-large";
                currentInput.style.fontSize = "x-large";
                currentInput.style.color = "grey";
                console.log(sum);
                }


                // firstNumber =  currentInput.innerText;
                // console.log(firstNumber);
                // currentInput.innerText = "";
                
                // evaluateBtn.addEventListener("click",()=>{
                //     secondNumber = currentInput.innerText;
                //     // console.log(realTimeScreenValue);
                //     answerScreen.innerText = `${firstNumber}${funBtn[i].value}${secondNumber}`;
                //         // answerScreen.innerText += `${Number(realTimeScreenValue[j])}${funBtn[i].value}${currentInput.innerText}`;
                    
                //     answerScreen.innerText = eval(answerScreen.innerText);


                //     console.log(answerScreen);
                //     currentInput.innerText = "";
                //     // answerScreen.innerText = 0;
                // });
                break;
            case "/":
                firstNumber = Number(currentInput.innerText);
                currentInput.innerText = " ";
                evaluateBtn.onclick = ()=>{
                secondNumber = Number(currentInput.innerText);
                sum = firstNumber/secondNumber;
                answerScreen.innerText = sum;
                answerScreen.style.color = "white";
                answerScreen.style.fontSize = "xx-large";
                currentInput.style.fontSize = "x-large";
                currentInput.style.color = "grey";
                console.log(sum);
                }
                // firstNumber =  currentInput.innerText;
                // console.log(firstNumber);
                // currentInput.innerText = "";
                
                // evaluateBtn.addEventListener("click",()=>{
                //     secondNumber = currentInput.innerText;
                //     // console.log(realTimeScreenValue);
                //     answerScreen.innerText = `${firstNumber}${funBtn[i].value}${secondNumber}`;
                //         // answerScreen.innerText += `${Number(realTimeScreenValue[j])}${funBtn[i].value}${currentInput.innerText}`;
                    
                //     answerScreen.innerText = eval(answerScreen.innerText);


                //     console.log(answerScreen);
                //     currentInput.innerText = "";
                //     // answerScreen.innerText = 0;
                // });
                break;
            case "%":
                firstNumber = Number(currentInput.innerText);
                currentInput.innerText = " ";
                evaluateBtn.onclick = ()=>{
                secondNumber = Number(currentInput.innerText);
                sum = firstNumber*secondNumber/100;
                answerScreen.innerText = sum;
                answerScreen.style.color = "white";
                answerScreen.style.fontSize = "xx-large";
                currentInput.style.fontSize = "x-large";
                currentInput.style.color = "grey";
                console.log(sum);
                }
                // (not succeed)
                // firstNumber =  currentInput.innerText;
                // console.log(firstNumber);
                // currentInput.innerText = "";
                
                // evaluateBtn.addEventListener("click",()=>{
                //     secondNumber = currentInput.innerText;
                //     // console.log(realTimeScreenValue);
                //     answerScreen.innerText = `${firstNumber}${funBtn[i].value}${secondNumber}*100`;
                //         // answerScreen.innerText += `${Number(realTimeScreenValue[j])}${funBtn[i].value}${currentInput.innerText}`;
                    
                //     answerScreen.innerText = eval(answerScreen.innerText);


                //     console.log(answerScreen);
                //     currentInput.innerText = "";
                //     // answerScreen.innerText = 0;
                // });
                break;

        
            
        }
    }
    
}





// function displaySecondClickedNumber() {
//     for (const item of numBtn) {
//         if (item.addEventListener("click",()=>{currentInput.innerText += item.value;}))return item.value;
//     }
// }
// const clickedNumTwo = displaySecondClickedNumber;




// function names() {
//     for (let item of funBtn) {
//         item.addEventListener("click", () => {
//             switch (item) {
//                 case "+":
//                     clickedNumOne = "";
//                     break;
//                 case "-":
//                     currentInput = "";
//                     break;
//                 case "*":
//                     currentInput = "";
//                     break;
//                 case "/":
//                     currentInput = "";
//                     break;
//                 case "%":
//                     currentInput = "";
//                     break;
//             }
//         })
//     }
// }
// names();






// funBtn.forEach((operator)=>{
//     operator.addEventListener("click",()=>{
//         switch (operator) {
//             case "+":
//                 console.log("bbb");
//                 break;
//         }
//     })
// })




// for (let i = 0; i < funBtn.length; i++) {
//     funBtn[i].addEventListener("click",()=>{
//         switch (funBtn[i]) {
//             case "+":
//                 console.log("jjj");
//                 break;
//         }
//     })
// }





// for (let i = 0; i < funBtn.length; i++) {
//     funBtn[i].addEventListener("click", () => {
//         switch (funBtn[i]) {
//             case "+":
//                 console.log("hhh");
                
//             case "-":
//                 return one - two;
//             case "*":
//                 return one * two;
//             case "/":
//                 return one / two;
//             case "%":
//                 return one / two * 100;
//         }
//     })

// }

//////////////////////////////////////////////////////////////////////////////////////////


