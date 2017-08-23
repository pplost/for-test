#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import urllib.request
import re
import json
import os
from collections import OrderedDict


def getServantInfo(id):
	baseUrl="http://fgowiki.com/guide/petdetail/"
	page=(baseUrl+str(id))
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
	
	
with open('fcraft.json','r',encoding='utf-8') as rpoint:
	js = json.load(rpoint)
	
with open('fcraft-append.json','r',encoding='utf-8') as rpoint:
	jsa = json.load(rpoint)
	
sortList=["id","name","servantID","servant","friendship","desc"]
sortListIn=["0-5","5-6","6-7","7-8","8-9","9-10","total"]

i=len(js)
j=len(jsa)
l=[]

print(i,j)

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
	if flag:
		print(x["servantID"],x["id"])
		#name=getServantInfo(y["servantID"])
		#cftList=getServantInfo(y["id"])

print(l)
		
	