input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < 19; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("D D F - D D F - ", 130)
    music.playMelody("D D F - D D F - ", 200)
    music.playMelody("D D F - D D F - ", 250)
    music.playMelody("D D F - D D F - ", 315)
    for (let index = 0; index < 2; index++) {
        music.playMelody("D D F - D D F - ", 400)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("D D F - D D F - ", 500)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("D D F - D D F - ", 600)
    }
    music.playMelody("F F E E G G G G ", 500)
    music.stopAllSounds()
})
basic.forever(function () {
	
})
