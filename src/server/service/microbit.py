import sys, os
sys.path.append(os.path.join(os.getcwd(),"src","microbit","service"))

import response

def requestToMicrobit(feed_id, feed_value):
    response.doSomething()

requestToMicrobit(sys.argv[1], sys.argv[2])
