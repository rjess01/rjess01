let characterOneName="Boomer";
let characterOnePoints=100;

let characterTwoName="pikachu";
let characterTwoPoints=100;


function displayCharacter(){
    document.getElementById("info-c2").innerHTML=`<p><b>Name:</b> ${characterTwoName}</p>
                                                  <p><b>Points:</b> ${characterTwoPoints}</p>`;
}

displayCharacter();

function attack(){
    document.getElementById("console").innerHTML=`<p>Attacking...</p>`;
    //discount points from the character
    var newPoints=characterTwoPoints-20;
    //condition statment
    if(newPoints<0){
        document.getElementById("console").innerHTML=`<p>GAME OVER SIMP</p>`;
        document.getElementById("btn-attack2").style.display="none";
    }else
    //update variables
    characterTwoPoints=newPoints;
    //update display
    displayCharacter();
}

//Character 2



function displayCharacter2(){
    document.getElementById("info-c1").innerHTML=`<p><b>Name:</b> ${characterOneName}</p>
                                                  <p><b>Points:</b> ${characterOnePoints}</p>`;
}

displayCharacter2();


function attack2(){
    document.getElementById("console").innerHTML=`<p>Attacking...</p>`;
    //discount points from the character
    var newPoints=characterOnePoints-20;
    //condition statment
    if(newPoints<0){
        document.getElementById("console").innerHTML=`<p>GAME OVER SIMP</p>`;
        document.getElementById("btn-attack").style.display="none";
    }else
    //update variables
    characterOnePoints=newPoints;
    //update display
    displayCharacter2();
}


