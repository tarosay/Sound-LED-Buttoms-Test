input.onButtonPressed(Button.A, function () {
    music.playMelody("G F G A D F E D ", 500)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("E B C5 A B G A F ", 500)
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
