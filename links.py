#!/usr/local/bin/python3

import glob, json

gifs = [g.replace('TheGIFFile/', '') for g in glob.glob("/Users/lucas/Dropbox/Public/TheGIFFile/*.gif")]

print(json.dumps(gifs))
