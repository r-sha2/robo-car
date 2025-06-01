input.onButtonPressed(Button.A, function () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
    basic.showString("end")
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    basic.clearScreen()
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 100)
    basic.showIcon(IconNames.Giraffe)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    basic.showIcon(IconNames.Rollerskate)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
    basic.pause(1000)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
})
input.onButtonPressed(Button.B, function () {
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
})
loops.everyInterval(500, function () {
	
})
