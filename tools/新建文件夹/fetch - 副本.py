#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import urllib.request
import re
import os
import random
import time
from time import sleep
import json
from collections import OrderedDict

def dropSameListEle(inList):
	outList=[]
	for x in inList:
		if x not in outList and x != '':
			outList.append(x)
	return outList
	
	
class FWIKI:

	#初始化，传入起始页码,截止页码
	def __init__(self):
		self.baseUrl="http://fgowiki.com/guide/petdetail/"

	#抓取页面
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
				
	#提取信息
	def getInf(self,regExpress,page,pos):
		pattern=re.compile(regExpress,re.S)
		result=re.search(pattern,page)
		if result:
			result = result.group(pos).strip()
			result = re.sub(r'・',r'·',result)
			result = re.sub(r'〔(.*?)〕',r'(\1)',result)
			result = re.sub(r'（(.*?)）',r'(\1)',result)
			return result
		else:
			return None
					
f=FWIKI()
whiteList=[83,149,151,152,168]
startPage=1
endPage=182

skillList=[]
pSkillList=[]
NPList=[]
nameDict=OrderedDict()

while startPage<=endPage:
	try:
		if startPage in whiteList:
			startPage = startPage + 1
			continue

		url=f.baseUrl+str(startPage)
		page=f.getPage(url)
		page=page.encode().decode('unicode_escape')
		
		name=f.getInf(r'"NAME":"(.*?)"',page,1)
		nameDict[startPage]=name
		
		skill=f.getInf(r'"SKILL_R1":"(.*?)"',page,1)
		skillList.append(skill)
		skill=f.getInf(r'"SKILL_R2":"(.*?)"',page,1)
		skillList.append(skill)
		skill=f.getInf(r'"SKILL_R3":"(.*?)"',page,1)
		skillList.append(skill)
		
		np=	f.getInf(r'"T_NAME":"(.*?)"',page,1)
		np = re.sub(r'\(.*?\)','',np)
		NPList.append(np)
		
		pSkill=f.getInf(r'"CSKILL_R1":"(.*?)"',page,1)
		pSkillList.append(pSkill)
		pSkill=f.getInf(r'"CSKILL_R2":"(.*?)"',page,1)
		pSkillList.append(pSkill)
		pSkill=f.getInf(r'"CSKILL_R3":"(.*?)"',page,1)
		pSkillList.append(pSkill)
		pSkill=f.getInf(r'"CSKILL_R4":"(.*?)"',page,1)
		pSkillList.append(pSkill)
		
		print(str(startPage))
		if startPage <= endPage:
			sleep(random.uniform(3,5))
		startPage = startPage + 1
	except Exception as e:
		print('Error:',e)
		if startPage<=endPage:
			sleep(random.uniform(2,3))
	
NPList=dropSameListEle(NPList)
skillList=dropSameListEle(skillList)
pSkillList=dropSameListEle(pSkillList)


lines='var servantsDict = {\n'
for x in nameDict:
	lines+='\t"'+str(x)+'" : "'+nameDict[x]+'",\n'
lines+='};\n\n\n\n'

lines+='var noblePhantasmsDict = {\n'
for x in NPList:
	lines+='\t"" : "'+str(x)+'",\n'
lines+='};\n\n\n\n'

lines+='var skillsDict = {\n'
for x in skillList:
	lines+='\t"" : "'+str(x)+'",\n'
lines+='};\n\n\n\n'

lines+='var passiveSkillsDict = {\n'
for x in pSkillList:
	lines+='\t"" : "'+str(x)+'",\n'
lines+='};\n\n\n\n'

with open('servants_new.json','w+',encoding='utf-8') as wpoint:
	wpoint.write(lines)

print('Task is finished!')
