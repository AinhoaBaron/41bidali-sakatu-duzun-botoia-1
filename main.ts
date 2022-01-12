radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
    if (true) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # # # .
            `)
    }
    if (true) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(4)
basic.forever(function () {
	
})
