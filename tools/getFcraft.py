#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import urllib.request
import re
import json
import os
from collections import OrderedDict


def getServantInfo(id):
	baseUrl="http://fgowiki.com/guide/petdetail/"
	page=getPage(baseUrl+str(id))
	name=getInfo(r'"NAME":"(.*?)"',page,1)
	name=name.encode().decode('unicode_escape')
	name=re.sub(r'・',r'·',name)
	name=re.sub(r'[(〔](.*?)[〕)]',r'(\1)',name)
	return name
	
def getCraftInfo(id):
	baseUrl="http://fgowiki.com/guide/equipdetail/"
	page=getPage(baseUrl+str(id))
	name=getInfo(r'"NAME_CN":"(.*?)"',page,1)
	name=name.encode().decode('unicode_escape')
	name=re.sub(r'・',r'·',name)
	name=re.sub(r'[(〔](.*?)[〕)]',r'(\1)',name)
	desc=getInfo(r'"SKILL_E":"(.*?)"',page,1)
	desc=desc.encode().decode('unicode_escape')
	desc=re.sub(r'・',r'·',desc)
	desc=re.sub(r'[(〔](.*?)[〕)]',r'(\1)',desc)
	l=[name,desc]
	return l
	
def getPage(url):
	try:
		request=urllib.request.Request(url)
		response=urllib.request.urlopen(request)
		page=response.read().decode('utf-8')
		return page
	except (urllib.request.URLError,e):
		print('erro')
		if hasattr(e,'reason'):
			print('reason',e.reason)
			return None
			
def getInfo(regExpress,page,pos):
	pattern=re.compile(regExpress,re.S)
	result=re.search(pattern,page)
	if result:
		return result.group(pos).strip()
	else:
		return None
	
	
with open('text\fcraft.json','r',encoding='utf-8') as rpoint:
	js = json.load(rpoint)
	
with open('text\fcraft-append.json','r',encoding='utf-8') as rpoint:
	jsa = json.load(rpoint)
	
sortList=["id","name","servantID","servant","friendship","desc"]
sortListIn=["0-5","5-6","6-7","7-8","8-9","9-10","total"]

l=[]
for x in jsa:
	flag=True
	for y in js:
		if(x["servantID"]==y["servantID"]):
			d=OrderedDict()
			for z in sortList:
				if(z=="friendship"):
					dIn=OrderedDict()
					for a in sortListIn:
						dIn[a]=y[z][a]
					d[z]=dIn
				else:
					d[z]=y[z]
			flag=False
			l.append(d)
			break
	if (flag):
		print(x["servantID"])
		name=getServantInfo(x["servantID"])
		cftList=getCraftInfo(x["id"])
		d=OrderedDict()
		for y in sortList:
			if(y=="friendship"):
				dIn=OrderedDict()
				for z in sortListIn:
					dIn[z]=x[y][z]
				d[y]=dIn
			elif(y=="servant"):
				d[y]=name
			elif(y=="name"):
				d[y]=cftList[0]
			elif(y=="desc"):
				d[y]=cftList[1]
			else:
				d[y]=x[y]
		l.append(d)
		
outStr=json.dumps(l,ensure_ascii=False,indent=4)
outStr=outStr.replace('    ','\t')
# outStr=re.sub(r'"id": (\d+),',r'"id": "\1",',outStr)
with open('text\fcraft.json','w+',encoding='utf-8') as wpoint:
	wpoint.write(outStr)
