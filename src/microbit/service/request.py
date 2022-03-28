import requests as req
import json

def updateData(deviceName, dataValue):
    port = "http://localhost:8080/api"
    data = {"deviceName": deviceName, "dataValue": dataValue}
    headers = {'content-type': 'application/json'}

    res = req.post(port+"/microbit/updateData", data = json.dumps(data), headers = headers)

    if res.status_code == 200:
        print("Success!")
    elif res.status_code == 404:
        print("Not found!")
    else:
        print("Unknown!")

# updateData("fan-1", "0")
