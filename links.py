#!/usr/local/bin/python3

import glob

gifs = [g.replace('TheGIFFile/', '') for g in glob.glob("/Users/lucas/Dropbox/Public/TheGIFFile/*.gif")]

for gif in gifs:
	print('<a href="https://dl.dropboxusercontent.com/u/9296799/TheGIFFile/' + gif + '">' + gif + '</a><br>')
