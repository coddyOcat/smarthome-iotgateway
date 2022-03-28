import sys, os
sys.path.append(os.path.join(os.getcwd(),"src","microbit"))

import main

def requestToMicrobit(feed_id, feed_value):
    main.message(feed_id, feed_value)

requestToMicrobit(sys.argv[1], sys.argv[2])
