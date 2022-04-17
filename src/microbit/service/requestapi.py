import requests as req
import json

def updateData(deviceName, dataValue):
    port = "https://smarthome-server-deloy.herokuapp.com/api"
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

def getData():
    port = "https://smarthome-server-deloy.herokuapp.com/api"
    headers = {'content-type': 'application/json'}
    res = req.get(port+"/microbit/getData", headers = headers)

    if res.status_code == 200:
        data = res.json()
        return [data["field_name"], data["value"]]
    elif res.status_code == 404:
        return None
    else:
        return None
