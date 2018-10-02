$(document).ready(function() {
    MainMenu();
    function MainMenu() {
        var all = $("<div/>").attr("id", "backFon").appendTo("body");
        var backImage = $("<img/>").attr("src", "images/grass.png").attr("id", "backImage").appendTo(all);
        var inText = $("<div/>").attr("class", "inText").text("SUPER MARIO BROS. CROSSOVER").appendTo(all);
        var loveMario = $("<div/>").attr("class", "startGame").text("DO YOU LOVE MARIO?").appendTo(all);
        var startGame = $("<button/>").attr("id", "start").text("PLAY IT!").appendTo(all);
        $("#start").css({
            "position": "absolute",
            "top": "310px",
            "left": "363px",
            "font-size": "30px"
        })
        var mario = $("<img/>").attr("src", "images/mario.png").attr("class", "mario").appendTo(all);
        for (var i = 1; i < 5; i++) {
            var knopka = $("<div/>").attr("id", "knopka" + i).appendTo(all);
        }
        var control = $("<button/>").text("OPTIONS").attr("id", "control").appendTo(all);
        var timeoutGame = $("#start")
        var timeoutControl = $("#control")
        var clickSound = $("<audio/>").attr("src", "sounds/click.wav").appendTo("body");
       
        timeoutGame.click(function() {
            changeView();
            clickSound[0].play();
        });

        timeoutControl.click(function() {
            Control();
            clickSound[0].play();
        })
    }

    function Control() {
        $("body").empty();
        var controlFon = $("<div/>").attr("id", "controlFon").appendTo("body");
        var strelkaUp = $("<img/>").attr("src", "images/W.png").attr("id", "strelkaUp").appendTo(controlFon);
        var strelkaLeft = $("<img/>").attr("src", "images/A.png").attr("id", "strelkaLeft").appendTo(controlFon);
        var strelkaRight = $("<img/>").attr("src", "images/D.png").attr("id", "strelkaRight").appendTo(controlFon);
        var controlUp = $("<div/>").attr("id", "controlUp").text("JUMP").appendTo(controlFon);
        var controlLeft = $("<div/>").attr("id", "controlLeft").text("GO LEFT").appendTo(controlFon);
        var controlRight = $("<div/>").attr("id", "controlRight").text("GO RIGHT").appendTo(controlFon);
        var coinControl = $("<img/>").attr("src", "images/coinControl.png").attr("id", "coinControl").appendTo(controlFon);
        var coinText = $("<div/>").attr("id", "coinText").text("COLLECT THE COINTS AND GET POINTS").appendTo(controlFon);
        var kriaControl = $("<img/>").attr("src", "images/kriaControl.png").attr("id", "kriaControl").appendTo(controlFon);
        var sunkControl = $("<img/>").attr("src", "images/sunkControl.png").attr("id", "sunkControl").appendTo(controlFon);
        var enemyText = $("<div/>").attr("id", "enemyText").text("KILL, BUT BEWARE OF THEM").appendTo(controlFon);

        function backToMenu() {
            MainMenu();
        }

        var backMenu = $("<button/>").attr("id", "backMenu").text("BACK TO MENU").appendTo(controlFon);
        var timeoutbackMenu = $("#backMenu");
        var clickSound = $("<audio/>").attr("src", "sounds/click.wav").appendTo("body");
        timeoutbackMenu.click(function() {
            
                MainMenu();
                clickSound[0].play();
            
        })
    }
});