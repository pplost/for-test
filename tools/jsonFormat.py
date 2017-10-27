#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import json
import os

path='text/data.json'
with open(path,'r+',encoding='utf-8') as rpoint:
	data=json.load(rpoint)
	
outStr=json.dumps(data,ensure_ascii=False,indent=4)
outStr=outStr.replace('    ','\t')

with open(path,'w+',encoding='utf-8') as wpoint:
	#json.dump(data,wpoint,ensure_ascii=False,indent=4)
	wpoint.write(outStr)
	
print('Task Finished!')