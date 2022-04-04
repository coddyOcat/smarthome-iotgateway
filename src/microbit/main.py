import sys, os
# import time
import threading

import serial.tools.list_ports

from flask import Flask, jsonify, request
from flask_cors import CORS

sys.path.append(os.path.join(os.getcwd(),"src","microbit","service"))
import requestapi

sys.stdout.reconfigure(encoding='utf-8')

def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = None
    for i in range(0, N):
        port = ports [i]
        strPort = str(port)
        if "USB Serial Device" in strPort:
            splitPort = strPort.split(" ")
            commPort =(splitPort[0])
    return commPort

def connect():
    if getPort():
        ser = serial.Serial(port = getPort(), baudrate = 115200)
        return ser
    return None

def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    if len(splitData) > 1:
        # splitData[0]: field name
        # splitData[1]: value
        requestapi.updateData(splitData[0], splitData[1])

mess = ""
def readSerial():
    bytesToRead = device.inWaiting()
    if( bytesToRead > 0):
        global mess
        mess = mess + device.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(mess[start : end+1])
            if end == len(mess):
                mess = ""
            else:
                mess = mess[end+1 :]

def message(feed_id, feed_value):
    device.write(("!" + feed_id + ":" + str(feed_value) + "#").encode())

def runApi():
    app.run(host='localhost', port=8989, debug=True)

if __name__ == "__main__":

    if connect():
        global app
        app = Flask(__name__)
        CORS(app)

        global device
        device = connect()

        @app.route("/post", methods = ['POST'])
        def post():
            # if request.method == "GET":
            #     return jsonify(recipes)
            if request.method == "POST":
                content = request.get_json()
                print("Nhận: ", content)
                message(content.feed_id, content.feed_value)
                return jsonify("OK")

        httpReponse = threading.Thread(target = runApi)
        httpReponse.start()

        while True:
            readSerial()

    else:
        sys.exit()
