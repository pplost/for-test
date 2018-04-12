#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import urllib.request
import re
import json
import os

class getCraftInf():
	
	def __init__(self):
		self.nameTransDict=self.readNameDict(r'.*?(servantNamesDict).*?')
		self.classTransDict=self.readNameDict(r'.*?(classNamesDict).*?')
		
	def getCraftInfo(self,id):
		l=[]
		baseUrl="http://fgowiki.com/guide/equipdetail/"
		page=self.getPage(baseUrl+str(id))
		name=self.getInfo(r'"NAME_CN":"(.*?)"',page,1)
		name=name.encode().decode('unicode_escape')
		name=re.sub(r'・',r'·',name)
		name=re.sub(r'[(〔](.*?)[〕)]',r'(\1)',name)
		desc=self.getInfo(r'"SKILL_E":"(.*?)"',page,1)
		desc=desc.encode().decode('unicode_escape')
		desc=re.sub(r'・',r'·',desc)
		desc=re.sub(r'[(〔](.*?)[〕)]',r'(\1)',desc)
		l=[name,desc]
		return l
		
	def getPage(self,url):
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
				
	def getInfo(self,regExpress,page,pos):
		pattern=re.compile(regExpress,re.S)
		result=re.search(pattern,page)
		if result:
			return result.group(pos).strip()
		else:
			return None
			
	def readNameDict(self,pattern):
		flag=False
		d={}
		with open('../js/trans-dicts.js','r+',encoding='utf-8') as rpoint:
			lines=rpoint.readlines()
		for line in lines:
			if(flag):
				if(self.getInfo(r'.*?(}).*?',line,1)):
					flag=False
					break
				elif(self.getInfo(r'"(.*?)".*?:.*?"(.*?)"',line,1)):
					d[self.getInfo(r'"(.*?)".*?:.*?"(.*?)"',line,1)]=self.getInfo(r'"(.*?)".*?:.*?"(.*?)"',line,2)
			if(self.getInfo(pattern,line,1)):
				flag=True
		return d
					
	def compareDiff(self,path,data):
		d={}
		with open(path,'r+',encoding='utf-8') as rpoint:
			localData=json.load(rpoint)
		for x in data:
			if ('friendship' in x.keys()):
				if(str(x["id"]) in localData.keys()):
					x["friendship"]["desc"]=re.sub(r'(.*?只有).*?(装备.*?)',r'\1'+self.nameTransDict[str(x["svtId"])]+'('+self.classTransDict[str(x["class"])]+')'+r'\2',localData[str(x["id"])][1])
					x["friendship"]["name"]=localData[str(x["id"])][0]
					d[x["id"]]=[x["friendship"]["name"],x["friendship"]["desc"]]
					print("yes",d[x["id"]])
				else:
					l=self.getCraftInfo(x["friendship"]["id"])
					l[1]=re.sub(r'(.*?只有).*?(装备.*?)',r'\1'+self.nameTransDict[str(x["svtId"])]+'('+self.classTransDict[str(x["class"])]+')'+r'\2',l[1])
					d[x["id"]]=l
					print("no",d[x["id"]])
		craftStr=json.dumps(d,ensure_ascii=False,indent=4)
		craftStr=craftStr.replace('    ','\t')
		with open(path,'w+',encoding='utf-8') as wpoint:
			wpoint.write(craftStr)
		return data
