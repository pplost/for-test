#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import json
import os
import zhconv


path='../data/data.json'
with open('text/data.json','r+',encoding='utf-8') as rpoint:
	data=json.load(rpoint)
	
formatStr=json.dumps(data,ensure_ascii=False,indent=4)
formatStr=formatStr.replace('    ','\t')
formatStr=zhconv.convert(formatStr,'zh-cn')

minStr=json.dumps(data,ensure_ascii=False,separators=(',',':'))
minStr=zhconv.convert(minStr,'zh-cn')

with open('text/data.json','w+',encoding='utf-8') as wpoint:
	#json.dump(data,wpoint,ensure_ascii=False,indent=4)
	wpoint.write(formatStr)
	
with open(path,'w+',encoding='utf-8') as wpoint:
	#json.dump(data,wpoint,ensure_ascii=False)
	wpoint.write(minStr)
	
	
print('Task Finished!')