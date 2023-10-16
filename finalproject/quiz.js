function checkAnswers() {
    var score = 0;
    var q1Answer = document.querySelector('input[name="q1"]:checked').value;
    var q2Answer = document.querySelector('input[name="q2"]:checked').value;
    
    // Add more variables as per your question count

    if (q1Answer === "c") { score++; }
    if (q2Answer === "a") { score++; }
    
    // Add more condition checks as per your question count

    document.getElementById("result").innerHTML = "You scored " + score + " out of 2!";
}