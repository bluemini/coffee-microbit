let realY = 0
let temp1 = 0
let temp2 = 0
let dir = 0
let pinin = 0
function plot (col: number, value: number) {
    for (let index = 0; index <= 4; index++) {
        realY = 4 - index
        if (value > (index + 1) * 170) {
            led.plot(col, realY)
        } else {
            led.unplot(col, realY)
        }
    }
}
basic.forever(function () {
    temp1 = pins.analogReadPin(AnalogPin.P0)
    temp2 = pins.analogReadPin(AnalogPin.P1)
    dir = input.acceleration(Dimension.X)
    pinin = pins.digitalReadPin(DigitalPin.P8)
    serial.writeNumbers([temp1, temp2, dir])
    plot(0, temp1)
    plot(1, temp2)
    plot(2, dir)
    basic.pause(100)
})
