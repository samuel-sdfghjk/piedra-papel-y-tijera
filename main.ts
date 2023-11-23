let list = 0
input.onGesture(Gesture.Shake, function () {
    list = randint(1, 3)
    if (list == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . # # . .
            # # . # .
            # # . . #
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (list == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (list == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
