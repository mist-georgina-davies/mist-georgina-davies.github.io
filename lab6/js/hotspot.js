$(function() {
    $("map area").click(function() {
        $('#myModal').modal("show");
        
        switch ($(this).attr("id")) {
            case "baseline":
                $("#feedback").css("color", "green");
                $("#feedback").html("This is the baseline of the tennis court. Servers must stay behind this baseline when they make contact with the serve, but they can step over or back behind it at any point after.");
                break;

            case "net":
                $("#feedback").css("color", "green");
                $("#feedback").html("This is the net. If after a serve the ball hits the net and bounces into the correct service box, it is a service let. The serve is retaken.");
                break;

            case "leftservicebox":
                $("#feedback").css("color", "green");
                $("#feedback").html("This is the left service box. The left service box in tennis is the designated area where a server aims to land the ball on the opponent's side during a serve from the deuce court (even points");
                break;

            case "rightservicebox":
                $("#feedback").css("color", "green");
                $("#feedback").html("This is the right service box. The right service box in tennis is the designated area where a server aims to land the ball on the opponent's side during a serve from the ad court (odd points).");
                break;

            case "singlessideline":
                $("#feedback").css("color", "green");
                $("#feedback").html("This is the singles sideline. The singles sideline in tennis marks the width boundary for singles play.");
                break;

            case "doublessideline":
                $("#feedback").css("color", "green");
                $("#feedback").html("This is the doubles sideline. The doubles sideline in tennis marks the width boundary for doubles play.");
                break;

            case "serviceline":
                $("#feedback").css("color", "green");
                $("#feedback").html("This is the service line. The service line in tennis divides the court into forecourt and backcourt, dictating where the ball must land during a serve for fair and consistent gameplay.");
                break;

            case "doublesalley":
                $("#feedback").css("color", "green");
                $("#feedback").html("This is the doubles alley. The doubles alley in tennis is the area between the singles and doubles sidelines, used only in doubles play to widen the court for the additional players.");
                break;

         
        }
    })
});