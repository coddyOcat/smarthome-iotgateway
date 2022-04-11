import sys, os

sys.path.append(os.path.join(os.getcwd(),"src","microbit","service"))
import requestapi

sys.stdout.reconfigure(encoding='utf-8')
import serial.tools.list_ports
from difflib import SequenceMatcher

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

mess = ""
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


FEED_LIST = ["temperature-1", "humidity-1", "gas-1", "door-1", "fan-1", "room-light-1"]

# Process data from microbit
def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    # print(splitData)
    if len(splitData) > 1:
        # splitData[0]: field name
        # splitData[1]: value
        for feed_name in FEED_LIST:
            if SequenceMatcher(None, feed_name, splitData[0]).ratio() >= 0.8:
                splitData[0] = feed_name
                break
        print("Send To Server: \"", splitData[0], " : ", splitData[1], "\"")
        requestapi.updateData(splitData[0], splitData[1])

def message(feed_id, feed_value):
    if isMicrobitConnected:
        print("Get From Server: \"", feed_id, " : ", feed_value, "\"")
        ser.write(("!" + feed_id + ":" + str(feed_value) + "#").encode())

if __name__ == "__main__":
    isMicrobitConnected = False

    # config port COM1, COM2, ... (dont care)
    if getPort() != " None ":
        ser = serial.Serial( port = getPort() , baudrate = 115200)
        isMicrobitConnected = True

    while True:
        if isMicrobitConnected:
            readSerial()
            data = requestapi.getData()
            if data:
                message(data[0], data[1])
