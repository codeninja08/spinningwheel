// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');
  const display2 = document.querySelector('.display2');
  const toggle = document.querySelector('.toggle');

  var txt1 = document.getElementById("txt1")
  var txt2 = document.getElementById("txt2")
  var txt3 = document.getElementById("txt3")
  var txt4 = document.getElementById("txt4")
  var txt5 = document.getElementById("txt5")
  var txt6 = document.getElementById("txt6")
  var txt7 = document.getElementById("txt7")
  var txt8 = document.getElementById("txt8")

  txt1.value = "1";
  txt2.value = "2";
  txt3.value = "3";
  txt4.value = "4";
  txt5.value = "5";
  txt6.value = "6";
  txt7.value = "7";
  txt8.value = "8";

  var p1 = 12.5;
  var p2 = 12.5;
  var p3 = 12.5;
  var p4 = 12.5;
  var p5 = 12.5;
  var p6 = 12.5;
  var p7 = 12.5;
  var p8 = 12.5;
  
  let deg = 0;
  let zoneSize = 45; // deg

  // Counter clockwise
 var symbolSegments = {
    1: txt1.value,
    2: txt2.value,
    3: txt3.value,
    4: txt4.value,
    5: txt5.value,
    6: txt6.value,
    7: txt7.value,
    8: txt8.value,
  }

  //key 
  //1: 1-45
  //2: 46-90
  //3: 91-135
  //4: 136-180
  //5: 181-225
  //6: 226-270
  //7: 271-315
  //8: 316-360


  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function getRandom(){
    
    prob1 = (p1).toFixed(4);
    prob2 = (p1 + p2).toFixed(4);
    prob3 = (p1 + p2 + p3).toFixed(4);
    prob4 = (p1 + p2 + p3 + p4).toFixed(4);
    prob5 = (p1 + p2 + p3 + p4 + p5).toFixed(4);
    prob6 = (p1 + p2 + p3 + p4 + p5 + p6).toFixed(4);
    prob7 = (p1 + p2 + p3 + p4 + p5 + p6 + p7).toFixed(4);
    prob8 = (p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8).toFixed(4);

    console.log("prob1: " + prob1);
    console.log("prob2: " + prob2);
    console.log("prob3: " + prob3);
    console.log("prob4: " + prob4);
    console.log("prob5: " + prob5);
    console.log("prob6: " + prob6);
    console.log("prob7: " + prob7);
    console.log("prob8: " + prob8);

    var num=Math.random();

    //display2.innerHTML = num;
    console.log("rdm: "+ num);

    //1
    if(num < prob1) return getRandomIntInclusive(1,45);

    //2
    else if(num < prob2) return getRandomIntInclusive(46,90);

    //3
    else if(num < prob3) return getRandomIntInclusive(91,135);

    //4
    else if(num < prob4) return getRandomIntInclusive(136,180);

    //5
    else if(num < prob5) return getRandomIntInclusive(181,225);

    //6
    else if(num < prob6) return getRandomIntInclusive(226,270);

    //7
    if(num < prob7) return getRandomIntInclusive(271,315);

    //8
    else return getRandomIntInclusive(316,360);
  
  }

  function setLabels(){

    if(document.getElementById("txt1").value != "")
    {
      symbolSegments[1] = document.getElementById("txt1").value
    }

    if(document.getElementById("txt2").value != "")
    {
      symbolSegments[2] = document.getElementById("txt2").value
    }

    if(document.getElementById("txt3").value != "")
    {
      symbolSegments[3] = document.getElementById("txt3").value
    }

    if(document.getElementById("txt4").value != "")
    {
      symbolSegments[4] = document.getElementById("txt4").value
    }

    if(document.getElementById("txt5").value != "")
    {
      symbolSegments[5] = document.getElementById("txt5").value
    }
    
    if(document.getElementById("txt6").value != "")
    {
      symbolSegments[6] = document.getElementById("txt6").value
    }

    if(document.getElementById("txt7").value != "")
    {
      symbolSegments[7] = document.getElementById("txt7").value
    }

    if(document.getElementById("txt8").value != "")
    {
      symbolSegments[8] = document.getElementById("txt8").value
    }
  }

  function setProb(){

    if(document.getElementById("txtProb1").value != "")
    {
      p1 = parseFloat(document.getElementById("txtProb1").value)/100;
    }

    if(document.getElementById("txtProb2").value != "")
    {
      p2 = parseFloat(document.getElementById("txtProb2").value)/100;
    }

    if(document.getElementById("txtProb3").value != "")
    {
      p3 = parseFloat(document.getElementById("txtProb3").value)/100;
    }

    if(document.getElementById("txtProb4").value != "")
    {
      p4 = parseFloat(document.getElementById("txtProb4").value)/100;
    }

    if(document.getElementById("txtProb5").value != "")
    {
      p5 = parseFloat(document.getElementById("txtProb5").value)/100;
    }
    
    if(document.getElementById("txtProb6").value != "")
    {
      p6 = parseFloat(document.getElementById("txtProb6").value)/100;
    }

    if(document.getElementById("txtProb7").value != "")
    {
      p7 = parseFloat(document.getElementById("txtProb7").value)/100;
    }

    if(document.getElementById("txtProb8").value != "")
    {
      p8 = parseFloat(document.getElementById("txtProb8").value)/100;
    }

    console.log("p1: " + p1)
    console.log("p2: " + p2)
    console.log("p3: " + p3)
    console.log("p4: " + p4)
    console.log("p5: " + p5)
    console.log("p6: " + p6)
    console.log("p7: " + p7)
    console.log("p8: " + p8)
    Total = 100;
    calc = Math.floor(Total - p1 - p2 -p3 - p4 - p5 - p6 - p7 -p8);
    if(calc != 99)
    {
      console.log(calc)
      window.alert("Probabilities must add up to 100");
    }

  }

  toggle.addEventListener('click', () => {
    var options = document.getElementById("options")

    if(options.hidden == true)
    {
      options.hidden=false;
    }
    else
    {
      options.hidden=true;
    }
    
  });

  startButton.addEventListener('click', () => {
    setLabels();
    setProb();
    // Reset display
    display.innerHTML = "-";
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    var extraSpins = 25;
    var extra = extraSpins * 360;
    deg = Math.floor(extra + getRandom());
    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
})();
