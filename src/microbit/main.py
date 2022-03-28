import sys, os

sys.path.append(os.path.join(os.getcwd(),"src","microbit","service"))
import request

sys.stdout.reconfigure(encoding='utf-8')    #for utf-8 encoding
import time
import random
import serial.tools.list_ports

# AIO_FEED_ID = ["fan-1", "fan-mode", "room-light-1", "security-mode"]
# AIO_USERNAME = "minhtu1302"
# AIO_KEY = "aio_ZwIw947m4Oy203LXaGOkbGxAysJt"


# Global Variable
# AUTO_MODE = 1
# MANUAL_MODE = 0
# fan_mode = AUTO_MODE

# client = MQTTClient(AIO_USERNAME, AIO_KEY)
# client.on_connect = connected
# client.on_disconnect = disconnected
# client.on_message = message
# client.on_subscribe = subscribe
# client.connect()
# client.loop_background()
# time.sleep(2)

isMicrobitConnected = False

# config port COM1, COM2, ... (dont care)
if getPort() != " None ":
    ser = serial.Serial( port = getPort() , baudrate = 115200)
    isMicrobitConnected = True

mess = ""

while True:
    if isMicrobitConnected:
        readSerial()
        # time.sleep(1)

# config port COM1, COM2, ... (dont care)
def getPort():
    ports = serial.tools.list_ports.comports()
    N = len( ports )
    commPort = " None "
    for i in range(0, N):
        port = ports [i]
        strPort = str( port )
        if " USB Serial Device " in strPort:
            splitPort = strPort.split(" ")
            commPort =( splitPort [0])
    return commPort

# Read data from microbit
def readSerial():
    bytesToRead = ser.inWaiting()
    if( bytesToRead > 0):
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData( mess[start : end+1] )
            if end == len(mess):
                mess = ""
            else:
                mess = mess[end+1 :]


# Process data from microbit
def processData(data):
    print(data)
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    # print(splitData)
    if len(splitData) > 1:
        # splitData[0]: field name
        # splitData[1]: value

        # to publish message to adafruit
        # client.publish(splitData[0], splitData[1])
        request.updateData(splitData[0], splitData[1])

def message(feed_id, feed_value):
    if isMicrobitConnected:
        ser.write(("!" + feed_id + ":" + str(feed_value) + "#").encode())

# room-light-1 "0" "1"
# fan-mode "0" "1"
# fan-1 "0" "1"
# security-mode
# light-mode

# def connected(client):
#     for feed in AIO_FEED_ID:
#         client.subscribe(feed)
#     print("Kết nối thành công r nha =)))")

# def subscribe(client, userdata, mid, granted_qos):
#     print("subcribe thành công.. .")

# def disconnected(client):
#     print("Ngắt kết nối.. .")
#     sys.exit(1)

# process data from adafruit to gateway
# def message(client, feed_id, payload):
#     # payload is value that adafruit/web/app send to gateway

#     # fan mode: auto or manual
#     ## auto: if hot, fan on, else fan off (do inside microbit, human cannot set the fan speed)
#     ##### In auto mode, microbit will publish the current fanspeed to adafruit
#     ##### and gateway won't hear anything from fanspeed topic from adafruit/web/app (prevent forever loop)

#     ## manual: human can set fan speed through web or app
#     ##### In manual mode, microbit will recieve fanspeed from adafruit/wweb/app
#     global fan_mode
#     print("Nhận dữ liệu từ " + feed_id + ": " + payload)
#     if isMicrobitConnected:
#         if fan_mode == AUTO_MODE and feed_id == "fan-1":
#             # In auto mode, gateway won't hear anything from fanspeed topic from adafruit/web/app
#             pass
#         else:
#             if feed_id == "fan-mode":
#                 # Update fan mode
#                 fan_mode = payload
#             ser.write(("!" + feed_id + ":" + str(payload) + "#").encode())





