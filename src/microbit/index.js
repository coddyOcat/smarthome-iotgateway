function DHT11 () {
    // To get temperature and humid value from DHT11 sensor
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    false
    )
    humid = dht11_dht22.readData(dataType.humidity)
    temp = dht11_dht22.readData(dataType.temperature)

    // LCD is a screen circuit to print something
    // NPNLCD.show_string("Do am: " + ("" + str(humid)) + " ", 0, 0)
    // NPNLCD.show_string("Nhiet do: " + ("" + str(temp)) + " ", 0, 1)

    // send message from microbit to adafruit
    serial.writeString("!temperature-1:" + temp + "#")
    basic.pause(10)
    serial.writeString("!humidity-1:" + humid + "#")
}

const MANUAL_MODE = 0
const AUTO_MODE = 1
// check if the fan is manual or auto mode
function FAN () {
    if (fan_mode == AUTO_MODE) {
        if (temp < 27.5) {

            // if last fan speed != current fan speed, send message to adafruit (minimize data flow)
            if (fan_speed != 30) {
                fan_speed = 30

                // send message from microbit to gateway
                // gateway will send it to adafruit
                serial.writeString("!fan-1:" + fan_speed + "#")
            }
            // turn on fan with max speed
            PWM(30)
        } else {
            if(fan_speed != 0){
                fan_speed = 0;
                serial.writeString("!fan-1:" + fan_speed + "#")
            }
            // turn off fan
            PWM(0)
        }
    } else if (fan_mode == MANUAL_MODE) {
    	PWM(fan_speed)
    }
}


// PWM is a circuit that controll fan speed
function PWM (speed: number) {
    if (speed >= 1) {
        // P8 is direction of fan, xuoi hoac nguoc chieu kim dong ho
        pins.digitalWritePin(DigitalPin.P8, 1)
        // P9 is speed
        pins.analogWritePin(AnalogPin.P9, speed * 10)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 1)
        // to stop fan, set it to 1 (not 0)
        pins.analogWritePin(AnalogPin.P9, 1)
    }
}


// check gas level
function GAS() {
    let last_gas_level = gas_level
    gas_level = pins.analogReadPin(AnalogPin.P4)
    if(gas_level != last_gas_level) serial.writeString("!gas-1:" + gas_level + "#")
}


// check if door is open
function DOOR() {
    let last_door_state = door_state
    door_state = NPNBitKit.ButtonDoorOpen(DigitalPin.P7)
    if (door_state != last_door_state){
        if(door_state == true) serial.writeString("!door-1:1#")
        else serial.writeString("!door-1:0#")
    }
}


// check if (gas is high || door is open in security mode) then alert Ring Ring Ring
function BUZZER(){
    let cond1 = (gas_level > 700)
    let cond2 = (door_state == true && security_mode == 1)
    if(cond1 || cond2){
        pins.analogWritePin(AnalogPin.P6, 1000)
        // Send text to adafruit about what problem
        if(cond1) serial.writeString("!warning:gas leaking#")
        if(cond2) serial.writeString("!warning:thief#")
    }
    else{
        pins.analogWritePin(AnalogPin.P6, 1)
    }
}



function LED(){
    // Stair light using light register
    let light_register

    // Their will be 2 LEDs:
    // Stair led: auto led, send the led status to adafruit into "stair-light" feed
    // Room led: manually control by adafruit/web/app from "room-light" feed
    // ///////////////////////////////////////
    // This function is for stair led

    // have done in python, but haven't test in js
}


// check the message from gateway to microbit
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    // read unitl seeing # (# will not be read)
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    // cmd may be like this "!fan-1:20"

    // cmd = "fan-1:20"
    cmd = cmd.slice(1)
    NPNLCD.ShowString(cmd, 0, 0)

    splitdata = cmd.split(":")
    name = splitdata[0]         // name = "fan-1"
    value = "" + splitdata[1]   // value = "20"

    // LCD is a screen circuit to print something
    // NPNLCD.show_string("name: " + str(name) + " ", 0, 0)
    NPNLCD.ShowString("value: " + value + " ", 0, 1)


    if (name == "room-light-1") {
        // it's for room led (manually control by web/app)
        pins.digitalWritePin(DigitalPin.P3, 1 - parseInt(value))    //turn on or off light
    } else if (name == "security-mode") {
        security_mode = parseInt(value)
    } else if (name == "fan-mode") {
        fan_mode = parseInt(value)  // convert str -> int
    } else if (name == "fan-1") {
        fan_speed = parseInt(value)
    }
})

// makecode.org force to use global variable
let door_state = false
let gas_level = 0
let security_mode = 0
let value = ""
let name = ""
let splitdata: string[] = []
let fan_speed = 0
let fan_mode = 0
let temp = 0
let humid = 0
let cmd = ""

// setup LCD screen
NPNLCD.LcdInit()


// loop forever, may be modify in the fulture
basic.forever(function () {
    DHT11()
    FAN()
    GAS()
    DOOR()
    BUZZER()
    basic.pause(6000)
})
