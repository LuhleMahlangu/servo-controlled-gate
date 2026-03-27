input.onButtonPressed(Button.A, function () {
    // Servo LEFT = gate closes
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.showString("<")
})
input.onButtonPressed(Button.B, function () {
    // Servo RIGHT = gate opens
    pins.servoWritePin(AnalogPin.P0, 90)
    basic.showString(">")
})
input.onGesture(Gesture.Shake, function () {
    // Reset to middle
    pins.servoWritePin(AnalogPin.P0, 45)
    basic.showIcon(IconNames.Target)
})
