#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import urllib.request
import re
import json
import os

def wikiSupple(minStr):
	skillsPathDict=readNameDict("(var skillsPath)")
	jo=json.loads(minStr)
	newJo={}
	for x in jo:
		svt={}
		if ("friendship" in x):
			fsDict={}
			fsDict["id"]=x["friendship"]["id"]
			fsDict["id"]=x["friendship"]["rank"]
			svt["friendship"]=fsDict
		if ("noblePhantasm" in x):
			npList=[]
			i=0
			for y in x["noblePhantasm"]:
				npDict={}
				npDict["name"]=x["noblePhantasm"][i]["name"]
				npDict["ruby"]=x["noblePhantasm"][i]["ruby"]
				npDict["rank"]=x["noblePhantasm"][i]["rank"]
				npDict["type"]=x["noblePhantasm"][i]["type"]
				npDict["hits"]=x["noblePhantasm"][i]["hits"]
				npDict["color"]=x["noblePhantasm"][i]["color"]
				npList.append(npDict)
				i+=1
			svt["noblePhantasm"]=npList
		newJo[x["id"]]=svt
		
	print(newJo)
		
		

def readNameDict(pattern):
	flag=False
	d={}
	with open('../js/trans-wiki.js','r+',encoding='utf-8') as rpoint:
		lines=rpoint.readlines()
	for line in lines:
		if(flag):
			if(getInfo(r'.*?(}).*?',line,1)):
				flag=False
				break
			elif(getInfo(r'"(.*?)".*?:.*?"(.*?)"',line,1)):
				d[getInfo(r'"(.*?)".*?:.*?"(.*?)"',line,1)]=getInfo(r'"(.*?)".*?:.*?"(.*?)"',line,2)
		if(getInfo(pattern,line,1)):
			flag=True
	return d
	
def getInfo(regExpress,page,pos):
	pattern=re.compile(regExpress,re.S)
	result=re.search(pattern,page)
	if result:
		return result.group(pos).strip()
	else:
		return None
		
with open('text/data.json','r+',encoding='utf-8') as rpoint:
	minStr=rpoint.read()
wikiSupple(minStr)