let brightness = 0
let level = 0
input.onButtonPressed(Button.A, function () {
    brightness = input.lightLevel()
    if (brightness < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    level = input.lightLevel()
    basic.showNumber(level)
})
