import requests as req

def updateData(url, data):
    port = "http://localhost:8080/api"
    res = req.post(port+url)
    if res.status_code == 200:
        print("Success!")
    elif res.status_code == 404:
        print("Not found!")
    else:
        print("Unknown!")
