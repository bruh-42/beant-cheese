input.onPinPressed(TouchPin.P0, function () {
    basic.showString("achievement unlocked P.I.N new item unlocked check inventory ")
})
radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index < 9999998989898988; index++) {
        radio.sendValue("8", 9)
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . .
            . # # . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # . # .
            . . # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # . . #
            # . # . #
            . # # . #
            . . . # #
            # # # # #
            `)
        basic.showLeds(`
            # . . . .
            . # # . .
            . # . # .
            . . # # .
            . . . . #
            `)
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # # .
            # . # . #
            # . . # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # #
            . # # . .
            . # . # #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . # # .
            . . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    music.changeTempoBy(4.754894564898949e+29)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        . # # # .
        # . . # #
        . # # . #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.setTransmitPower(3)
    radio.sendNumber(1852)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 1500000000)
        basic.showLeds(`
            # # . . #
            # . # # .
            . # . # .
            # . # # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("C5 B A A G F E E ", 166)
})
basic.showString("BEAN")
basic.forever(function () {
    if (input.temperature() == 0) {
        basic.showString("new item unlocked achievement unlocked")
        radio.sendValue("kinda cold", 1)
    }
})
