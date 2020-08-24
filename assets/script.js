//// create arrays for all lowercase, upercase, numeric, and special characters & a variable for the password string

let caseArray=[];
let lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numericChar=["1","2","3","4","5","6","7","8","9","0"];
let specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// creating a function for generating the password
function generatePassword() {

    let passwordString="";

    // declaring boolean variables, asking user for input
    let useLowerCase=confirm("Do you want to include lowercase characters?");
    let useUpperCase=confirm("Do you want to include uppercase characters?");
    let useNumeric=confirm("Do you want to include numeric characters?");
    let useSpecial=confirm("Do you want to include special characters?");

    //running loop to check if all variables are false. If so, user is prompted to select again
    while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
        alert("Please select one type of character");
        useLowerCase=confirm("Do you want to include lowercase characters?");
        useUpperCase=confirm("Do you want to include uppercase characters?");
        useNumeric=confirm("Do you want to include numeric characters?");
        useSpecial=confirm("Do you want to include special characters?");
    }

    // while loop to check for password length. If number less than 8 or over 128, or if input is a string or NaN, user is asked for input again

    let passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
        alert("Please choose a number that is more than 8 and less than 128 characters");
        passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    } 

    //console.log(passwordLength.length);
    //// if character type is selected, the array name is stored into a group array

    if (useLowerCase==true){
        caseArray.push(lowerCaseChar);
    
    }
    if (useUpperCase==true){
        caseArray.push(upperCaseChar)
    
    }
    if (useNumeric==true){
        caseArray.push(numericChar)
        
    }
    if (useSpecial==true){
        caseArray.push(specialChar)
    }

    //// a loop is run for the length of the password

    for(let i=0;i<passwordLength;i++){

        let randomCharArrayNum;
        let selectedCharArray;
        let randomCharNum;
        let randomChar;

        //// a random number is generated for the group array (length of group array)
        
        randomCharArrayNum= parseInt(Math.floor(Math.random()*caseArray.length)); //random number based on length of case array
        
        //// a random number is generated for the character array (length of character array)

        selectedCharArray=caseArray[randomCharArrayNum]; //variable that stores selected array from case array
        
        //console.log("The array has " + caseArray.length + " entries"); //testing length of caseArray
        //console.log(randomCharArrayNum); //testing random number generated based on length of caseArray

        randomCharNum=Math.floor(Math.random()*selectedCharArray.length);// variable that stores random number based on length of selected array

        // console.log("The selected Array is the " + selectedCharArray); //testing array chosen
        // console.log("The selected random index is " + randomCharNum); //testing random number generation based on chosen array length 

        randomChar=selectedCharArray[randomCharNum];
        //console.log(randomChar);
        // console.log("Your random character array num is " + randomCharArrayNum + " and your random character number is " + randomCharNum);

        // now, need to accumulate the string
        passwordString+=randomChar;
        //return passwordString;
        
    }
    //console.log("Your password is " + passwordString);
    //alert("Your password is " + passwordString);
    passwordEntry.textContent=passwordString;    
}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
let generateButton=document.getElementById("generateButton");
let passwordEntry=document.getElementById("passwordEntry");
generateButton.onclick = generatePassword;