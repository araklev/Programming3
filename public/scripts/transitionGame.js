var sec = 300;
function changeView() {
	$("body").empty();
	var direction = {};
	var lastDirection = "down";
	var count = 0;
	var imageCounter = 1;

	$("html").keyup(stop).keydown(charMovement);
	function charMovement(e) {
		direction[e.which] = true;
	}
	function stop(e) {
		delete direction[e.which];
	}


	function anim(e) {
		if ((count += 20) % 200 == 0) {
			imageCounter = imageCounter == 3 ? 0 : (imageCounter + 1);
		}

		for (var i in direction) {
			if (MarioJump.position().left > 0 && i == 65) {
				MarioJump.css("left", (MarioJump.position().left - speedPixel) + "px");
				lastDirection = "left";
				MarioJump.css("background-position", -1800 - 50 * imageCounter + "px 0");

			}

			if (MarioJump.position().left < ($("#fon").width() - MarioJump.width()) && i == 68) {
				MarioJump.css("left", (MarioJump.position().left + speedPixel) + "px");
				lastDirection = "right";
				MarioJump.css("background-position", -600 - 50 * imageCounter + "px 0");
			}
		}
	}


	var fon = $("<div/>").attr("id", "fon").appendTo("body");
	for (var i = 1; i < 11; i++) {
		var erkinq = $("<img/>").attr("src", "images/backFon.png").attr("id", "erkinq" + i).appendTo(fon);
	}
	var time = setInterval(function () {
		var gameTime = $("<div/>").text("TIME: " + sec + " sec.").attr("id", "gameTime").appendTo(fon);
		sec--;
		if (sec == -1) {
			$("body").empty();
		}
	}, 1000);
	var zvuk = $("<div/>").attr("id", "zvuk").text("VOICE").appendTo(fon);
	var onZvuk = $("<button/>").attr("id", "onZvuk").text("ON").appendTo(fon);
	var offZvuk = $("<button/>").attr("id", "offZvuk").text("OFF").appendTo(fon);
	var on = $("#onZvuk");
	var off = $("#offZvuk");
	var marioSong = $("<audio/>").attr("src", "sounds/marioSong.wav").appendTo(fon);
	on.click(function () {
		marioSong[0].play();
	})
	off.click(function () {
		marioSong[0].pause();
	})
	var point = $("<div/>").text("POINT: 0").attr("id", "point").appendTo(fon);
	//kubik
	for (var i = 1; i < 31; i++) {
		var kubik = $("<img/>").attr("src", "images/kubik.png").attr("id", "kubik" + i).appendTo(fon);
	}
	//sekret
	for (var i = 1; i < 31; i++) {
		var sekret = $("<img/>").attr("src", "images/sekret.png").attr("id", "sekret" + i).appendTo(fon);
	}
	var rightQar = $("<img/>").attr("src", "images/rightQar.png").attr("id", "rightQar").appendTo(fon);
	var leftQar = $("<img/>").attr("src", "images/leftQar.png").attr("id", "leftQar").appendTo(fon);
	var erkanXot1 = $("<img/>").attr("src", "images/erkanXot.png").attr("id", "erkanXot1").appendTo(fon);
	var erkanXot2 = $("<img/>").attr("src", "images/erkanXot.png").attr("id", "erkanXot2").appendTo(fon);

	//var kria=$("<img/>").attr("src", "images/kria.png").attr("id", "kria").appendTo(fon);
	var truba1 = $("<img/>").attr("src", "images/poqrTruba.png").attr("id", "truba1").appendTo(fon);
	var truba2 = $("<img/>").attr("src", "images/mijinTruba.png").attr("id", "truba2").appendTo(fon);
	var erkanXot3 = $("<img/>").attr("src", "images/erkanXot.png").attr("id", "erkanXot3").appendTo(fon);
	var erkanXot4 = $("<img/>").attr("src", "images/erkanXot.png").attr("id", "erkanXot4").appendTo(fon);
	var truba3 = $("<img/>").attr("src", "images/mecTruba.png").attr("id", "truba3").appendTo(fon);
	var truba4 = $("<img/>").attr("src", "images/mecTruba.png").attr("id", "truba4").appendTo(fon);
	var menakXot1 = $("<img/>").attr("src", "images/menakXot.png").attr("id", "menakXot1").appendTo(fon);
	var menakXot2 = $("<img/>").attr("src", "images/menakXot.png").attr("id", "menakXot2").appendTo(fon);
	var verch = $("<img/>").attr("src", "images/verch.png").attr("id", "verch").appendTo(fon);
	var sunk1 = new sunkEnemy(790, 2115);
	var sunk2 = new sunkEnemy(790, 3015);
	var sunk3 = new sunkEnemy(790, 3915);
	var sunk4 = new sunkEnemy(403, 5700);
	var sunk5 = new sunkEnemy(403, 5770);
	var sunk6 = new sunkEnemy(790, 6500);
	var sunk7 = new sunkEnemy(790, 6600);
	var sunk8 = new sunkEnemy(790, 7378);
	var sunk9 = new sunkEnemy(790, 7478);
	var sunk10 = new sunkEnemy(790, 7778);
	var sunk11 = new sunkEnemy(790, 7878);
	var sunk12 = new sunkEnemy(790, 8078);
	var sunk13 = new sunkEnemy(790, 8178);
	var kria1 = new kriaEnemy(768, 8378);
	var sunk14 = new sunkEnemy(790, 10410);
	var interval = setInterval(function () {
		moveMario();
		sunk1.moveEnemy();
		/*sunk2.moveEnemy();
		sunk3.moveEnemy();
		sunk4.moveEnemy();
		sunk5.moveEnemy();
		sunk6.moveEnemy();
		sunk7.moveEnemy();
		sunk8.moveEnemy();
		sunk9.moveEnemy();
		sunk10.moveEnemy();
		sunk11.moveEnemy();
		sunk12.moveEnemy();
		sunk13.moveEnemy();
		sunk14.moveEnemy();
		kria1.moveKria();*/


	}, 20);
	var propast1 = $("<img/>").attr("src", "images/propast.png").attr("id", "propast1").appendTo(fon);
	var mah1 = $("<div/>").attr("id", "mah1").appendTo(fon);
	var propast2 = $("<img/>").attr("src", "images/propast.png").attr("id", "propast2").appendTo(fon);
	var mah2 = $("<div/>").attr("id", "mah2").appendTo(fon);
	var propast3 = $("<img/>").attr("src", "images/propast.png").attr("id", "propast3").appendTo(fon);
	var mah3 = $("<div/>").attr("id", "mah3").appendTo(fon);
	var marioPixel = $("<img/>").attr("src", "images/anim1.png").attr("id", "marioPixel").appendTo(fon);
	/*-------------------------------------
	---------------------------------------
	---------------------------------------
	---------------------------------------
	---------------------------------------
	-------------------------------------*/

	var directions = {};
	var MarioJump = $("#marioPixel");
	var hatak = $("<div/>").attr("id", "hatak").appendTo(fon);
	var hatak1 = $("<div/>").attr("id", "hatak1").appendTo(fon);
	var hatak2 = $("<div/>").attr("id", "hatak2").appendTo(fon);
	var hatak3 = $("<div/>").attr("id", "hatak3").appendTo(fon);
	var backFons = [$("#mah1"), $("#mah2"), $("#mah3"), $("#hatak"), $("#hatak1"), $("#hatak2"), $("#hatak3"), $("#sekret1"), $("#sekret2"), $("#kubik1"),
	$("#sekret3"), $("#sekret4"), $("#kubik2"), $("#kubik3"), $("#truba1"), $("#truba2"), $("#truba3"), $("#truba4"), $("#kubik4"), $("#kubik5"),
	$("#kubik6"), $("#kubik7"), $("#kubik8"), $("#kubik9"), $("#kubik10"), $("#kubik11"), $("#kubik12"), $("#kubik13"), $("#kubik14"), $("#kubik15"),
	$("#kubik16"), $("#kubik17"), $("#kubik18"), $("#kubik19"), $("#kubik20"), $("#kubik21"), $("#kubik22"), $("#kubik23"), $("#kubik24"), $("#kubik25"),
	$("#sekret5"), $("#sekret6"), $("#sekret7"), $("#sekret8"), $("#sekret9"), $("#sekret10"), $("#sekret11"), $("#sekret12"), $("#sekret13")];
	var speedX = 4;
	var speedY = 0;
	var gravity = 0.2;
	var jumpState = true;
	var WIDTH_DIFFERENCE = MarioJump.width() / 2 + hatak.width() / 2;
	var HEIGHT_DIFFERENCE = MarioJump.height() / 2 + hatak.height() / 2;
	var MARIO_HOR_CENTER;
	var MARIO_VER_CENTER;

	function sunkEnemy(t, l) {
		this.top = t;
		this.left = l;
		this.speed = 3;
		this.uxxutyun = "left";
		this.enemyImage = $("<img/>").attr("src", "images/sunk.png").attr("class", "sunk").css('top', this.top + 'px').css('left', this.left + 'px')
			.appendTo('#fon');

		this.moveEnemy = function () {


			if (this.uxxutyun == "left") {
				this.left = this.left - this.speed;
				this.enemyImage.css("left", this.left + 'px');
				if (this.left <= 0 || this.left <= backFons[i].position().left + backFons[i].width()) {
					this.uxxutyun = "right";
				}
			}
			else if (this.uxxutyun == "right") {
				this.left = this.left + this.speed;
				this.enemyImage.css("left", this.left + 'px');
				if (this.left >= backFons[i].position().left) {
					this.uxxutyun = "left"
				}
			}
		}


	}

	function kriaEnemy(t, l) {
		this.top = t;
		this.left = l;
		this.speed = 3;
		this.uxxutyunKria = "left";
		this.enemyImage = $("<img/>").attr("src", "images/kria.png").attr("class", "kria").css('top', this.top + 'px').css('left', this.left + 'px')
			.appendTo('#fon');

		this.moveKria = function () {
			if (this.uxxutyunKria == "left") {
				this.left = this.left - this.speed;
				this.enemyImage.css("left", this.left + 'px');
			}
			else if (this.uxxutyunKria == "right") {
				this.left = this.left + this.speed;
				this.enemyImage.css("left", this.left + 'px');
			}
		}
	}




	$("html").keyup(stop).keydown(charMovement);
	function charMovement(e) {
		directions[e.which] = true;
	}

	function stop(e) {
		delete directions[e.which];
	}

	function checkCollision() {

		for (var i in backFons) {

			STATIC_HOR_CENTER = backFons[i].position().left + backFons[i].width() / 2;
			STATIC_VER_CENTER = backFons[i].position().top;

			WIDTH_DIFFERENCE = MarioJump.width() / 2 + backFons[i].width() / 2;

			MARIO_HOR_CENTER = MarioJump.position().left + MarioJump.width() / 2;
			MARIO_VER_CENTER = MarioJump.position().top + MarioJump.height();

			if (Math.abs(MARIO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
				Math.abs(MARIO_VER_CENTER - STATIC_VER_CENTER) <= 5) {
				jumpState = false;
				MarioJump.css("top", backFons[i].position().top - MarioJump.height());
				speedY = 9;
				if (i == 0 || i == 1 || i == 2) {
					$("body").empty();
				}
				break;
			}
			else {
				if (jumpState == false) {
					speedY = 0;
					jumpState = true;
				}
			}
			if (Math.abs(MARIO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE) {
				if (MarioJump.position().top > backFons[i].position().top + backFons[i].height() / 2) {
					if (MarioJump.position().top - backFons[i].position().top <= backFons[i].height()) {
						jumpState = false;
						MarioJump.css("top", MarioJump.position().top + 1.5);
					}
				}

				if (MarioJump.position().top <= backFons[i].position().top + backFons[i].height() / 2) {
					if (backFons[i].position().top - MarioJump.position().top < MarioJump) {
						jumpState = false;
						MarioJump.css("top", MarioJump.position().top + 1.5);
					}
				}
			}

		}
	}

	function moveMario(e) {
		//console.log(i);
		for (var i in directions) {
			if (MarioJump.position().left > 0 && i == 65) {
				MarioJump.css("left", (MarioJump.position().left - speedX) + "px");
				if (MarioJump.position().left >= 700) {
					$("#fon").css("left", ($("#fon").position().left + speedX) + "px");
				}
			}

			if (MarioJump.position().left < ($("#fon").width() - MarioJump.width()) && i == 68) {
				MarioJump.css("left", (MarioJump.position().left + speedX) + "px");
				if (MarioJump.position().left >= 700) {
					$("#fon").css("left", ($("#fon").position().left - speedX) + "px");
				}
			}
			if (MarioJump.position().top > 0 && i == 87 && jumpState == false) {
				jumpState = true;
				MarioJump.css("top", MarioJump.position().top - 6);

			}
		}
		checkCollision();
		jump();
	}

	function jump() {
		if (jumpState) {
			if (speedY > -9) {
				speedY -= gravity;
			}
			MarioJump.css("top", MarioJump.position().top - speedY);
		}
	}



}

