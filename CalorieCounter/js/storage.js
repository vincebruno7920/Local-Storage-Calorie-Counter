function main() {
    //initialize variables

    //inpKey is the 'food' input
    const inpKey = document.getElementById("inpKey");

    //inpValue is the 'calorie' input
    const inpValue = document.getElementById("inpValue");

    //btnInsert is the 'Add' button
    const btnInsert = document.getElementById("btnInsert");

    //lsOutput is the ID of the div that will display the localStorage output
    const lsOutput = document.getElementById("lsOutput");

    //btnClr is the 'Clear' button
    const btnClr = document.getElementById("btnClr");

    //displayTotal is the ID of the div that will display the total
    const displayTotal = document.getElementById("total");

    //variable to keep total and initialize it to zero
    let total = 0;

    //displays the total as zero before the user inputs anything
    displayTotal.innerHTML = `Total: ${total}`;//backtick, not an apostrophe

    //when the user clicks the 'Add' button...
    btnInsert.onclick = function () {

        //we will create two variables...
        let key = inpKey.value; //food
        let value = inpValue.value; //calories

        //minor validation that only adds user input if fields are filled out
        if (key && value) {

            //sets the names of the previous key & value variables as 'key' and 'value'
            localStorage.setItem(key, value);

            //reloads page
            location.reload();
        }
    };

    //display what's stored in localStorage

    //for loop that utilizes the 'length' of the localStorage which is automatically increased each time
    //the user has a new input
    for (let i = 0; i < localStorage.length; i++) {

        //set the name of the food the user input at storage location (i)
        const key = localStorage.key(i);

        //get the number of calories they typed for that food
        const value = localStorage.getItem(key);

        //input is automatically stored as a string. this takes the user input for calories and turns
        //it into an integer that we can store in the total variable.
        total += parseInt(localStorage.getItem(key));

        //formats the output of user inputs as 'food: number of calories <line break>' in the div
        //that is dedicated for continous display of the localStorage
        lsOutput.innerHTML += `${key}: ${value}<br />`;//backtick

        //displays new total
        displayTotal.innerHTML = `Total: ${total}`;//backtick
    }

    //this lets us give names to objects being stored in the localStorage
    for (let [key, value] of Object.entries(localStorage)) {

        //display in the console log
        console.log(`${key}: ${value}`);//backtick
    }

    //clear button
    btnClr.onclick = function () {

        //clears localStorage
        localStorage.clear();

        //reload the page
        location.reload();
    };
}