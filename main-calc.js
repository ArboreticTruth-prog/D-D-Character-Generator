/*roll 7 sets of 4d6 keep the highest 3 of the d6 per set and drop the lowest set of 4d6*/
function roll_four_d_six (){
    /*Rolls 4 "D6" dice, then sorts and takes the highest 3 and adds them together.*/
    const die_six = []
    for (i = 0; i < 4; i++){
        die_six[i] = Math.floor((Math.random() * 6) +1)
    }
    die_six.sort()
    die_six.shift()
    var sum = 0
    for (let i = 0; i<die_six.length; i++){
            sum += die_six[i];
        }
    return sum
    }

function roll_seven_sets(){
    let setOne = roll_four_d_six();
    let setTwo = roll_four_d_six();
    let setThree = roll_four_d_six();
    let setFour = roll_four_d_six();
    let setFive = roll_four_d_six();
    let setSix = roll_four_d_six();
    let setSeven = roll_four_d_six();
    const sets = [setOne, setTwo, setThree, setFour, setFive, setSix, setSeven]
    sets.sort()
    sets.shift()
    document.querySelector("p").innerText = sets
    
    
}
