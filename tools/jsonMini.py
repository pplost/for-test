#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import json
import os

path='text/data.json'
with open(path,'r+',encoding='utf-8') as rpoint:
	data=json.load(rpoint)
	
with open(path,'w+',encoding='utf-8') as wpoint:
	json.dump(data,wpoint,ensure_ascii=False)

print('Task Finished!')