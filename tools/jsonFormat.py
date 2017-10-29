#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import json
import os
import zhconv
import urllib.request
import re
from getCraft import getCraftInf


path='../data/data.json'
with open('text/data.json','r+',encoding='utf-8') as rpoint:
	data=json.load(rpoint)
	
#更新礼装信息
g=getCraftInf()
data=g.compareDiff("text/craft.json",data)

#格式化
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