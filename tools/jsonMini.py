#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import json
import os
import zhconv


path='../data/data.json'
with open('text/data.json','r+',encoding='utf-8') as rpoint:
	data=json.load(rpoint)
	
outStr=json.dumps(data,ensure_ascii=False,separators=(',',':'))
outStr=zhconv.convert(outStr,'zh-cn')

with open(path,'w+',encoding='utf-8') as wpoint:
	#json.dump(data,wpoint,ensure_ascii=False)
	wpoint.write(outStr)
	
print('Task Finished!')