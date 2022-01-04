let temp1 = 0
let temp2 = 0
basic.forever(function () {
    temp1 = pins.analogReadPin(AnalogPin.P0)
    temp2 = pins.analogReadPin(AnalogPin.P1)
    serial.writeNumbers([temp1, temp2])
    for (let index = 0; index <= 4; index++) {
        let realY = 4 - index
        if (temp1 > (index + 1) * 200) {
            led.plot(0, realY)
        } else {
            led.unplot(0, realY)
        }
    }
    basic.pause(100)
})
