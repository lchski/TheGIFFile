#!/usr/local/bin/python3

import glob, json

path = '/Users/lucas/Dropbox/Public/TheGIFFile/'

gifs = [g.replace(path, '') for g in glob.glob(path + '*.gif')]

with open('app/data/gifs.json', 'w') as jsonfile:
	json.dump(gifs, jsonfile)
