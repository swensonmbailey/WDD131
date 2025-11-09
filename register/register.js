let numOfParticipants = 1

const participantForm = document.getElementById("participantForm");


function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.

    let total = 0;
    for(i=0; i < feeElements.length; i++){
        total += parseInt(feeElements[i].value);
    }

    return total;
}


participantForm.addEventListener("submit", (event) => {

    submitForm(event);
});

function fillSummary(){

    let adult = document.getElementById("adult_name").value;

    document.getElementById("summary").innerHTML = `
    <h2>Thank you for signing up!</h2>
    <p>${adult}, your children are signed up. Your fees total to $${totalFees()}.</p>
    `;
}

function submitForm(event) {
    event.preventDefault();
    // do the rest of the stuff
    participantForm.classList.add("hide");

    fillSummary();
}

document.getElementById("add").addEventListener("click", ()=>{
    
    let addButton = document.getElementById("add");
    numOfParticipants ++;
    let newParticipant = document.createElement('section');
    newParticipant.classList.add("participant");
    newParticipant.id = "participant" + numOfParticipants;
    newParticipant.innerHTML = `<p>Participant ${numOfParticipants}</p>
                <div class="item">
                <label for="fname"> First Name<span>*</span></label>
                <input id="fname${numOfParticipants}" type="text" name="fname" value="" required />
                </div>
                <div class="item activities">
                <label for="activity">Activity #<span>*</span></label>
                <input id="activity${numOfParticipants}" type="text" name="activity" />
                </div>
                <div class="item">
                <label for="fee">Fee ($)<span>*</span></label>
                <input id="fee${numOfParticipants}" type="number" name="fee" />
                </div>
                <div class="item">
                <label for="date">Desired Date <span>*</span></label>
                <input id="date${numOfParticipants}" type="date" name="date" />
                </div>
                <div class="item">
                <p>Grade</p>
                <select>
                    <option selected value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
                </div>`

    addButton.parentNode.insertBefore(newParticipant, addButton);

});