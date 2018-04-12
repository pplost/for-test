#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import requests
import os

BASE_URL = 'http://file.fgowiki.fgowiki.com/fgo/head/'
WHITE_LIST = []
MAX_ID = 204

if not os.path.exists('image'):  
    os.makedirs('image')
images=[]
for root, dirs, files in os.walk('image'):     
    for f in files :
        images.append(f)
		
for id in range(1,MAX_ID + 1):
	if(id in WHITE_LIST):
		continue
	file_name = str(id).zfill(3) + ".jpg"
	if(file_name in images):
		continue
	file_name = "image/" + file_name
	img= BASE_URL + str(id).zfill(3) + ".jpg"
	try:  
		pic = requests.get(img,timeout=3)
	except requests.exceptions.ConnectionError:
		print(file_name,':当前图片无法下载')  
		continue
	print(file_name)
	with open(file_name,'wb+') as wpoint:
		wpoint.write(pic.content)