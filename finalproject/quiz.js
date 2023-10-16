function checkAnswers() {
    var score = 0;

    var q1Answer = document.querySelector('input[name="q1"]:checked').value;
    var q2Answer = document.querySelector('input[name="q2"]:checked').value;
    var q3Answer = document.querySelector('input[name="q3"]:checked').value;
    var q4Answer = document.querySelector('input[name="q4"]:checked').value;
    var q5Answer = document.querySelector('input[name="q5"]:checked').value;

    if (q1Answer === "c") { score++; }
    if (q2Answer === "a") { score++; }
    if (q3Answer === "b") { score++; }
    if (q4Answer === "d") { score++; }
    if (q5Answer === "a") { score++; }

    document.getElementById("result").innerHTML = "You scored " + score + " out of 5!";
}
