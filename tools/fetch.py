#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import urllib.request
import re
import os
import random
import time
from time import sleep
import json

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
			return result.group(pos).strip()
		else:
			return None
					
f=FWIKI()
whiteList=[83,149,151,152,168]
startPage=112
endPage=188
lines=None
seq=0
with open('servants.json','r+',encoding='utf-8') as rpoint:
	lines=rpoint.read()
if lines=="":
	lines="[\n"
else:
	js_s=json.loads(lines)
	seq=len(js_s)
	lines=lines[:-2]+",\n"
	
with open('servants.json','w+',encoding='utf-8') as wpoint:
	wpoint.write(lines)
	
while startPage<=endPage:
	try:
		if startPage in whiteList:
			startPage = startPage + 1
			continue
		seq+=1
		url=f.baseUrl+str(startPage)
		page=f.getPage(url)
		name=f.getInf(r'"NAME":"(.*?)"',page,1)
		name=name.encode().decode('unicode_escape')
		name=re.sub(r'・',r'·',name)
		name=re.sub(r'〔(.*?)〕',r'(\1)',name)
		name=re.sub(r'（(.*?)）',r'(\1)',name)
		clss=f.getInf(r'"CLASS":"(.*?)"',page,1)
		hp=BusterNp=f.getInf(r'"LVMAX4_HP":"(\d+)"',page,1)
		atk=f.getInf(r'"LVMAX4_ATK":"(\d+)"',page,1)
		BusterNp=f.getInf(r'"TdPointB":"(.*?)%(.*?)"',page,1)
		ArtsNp=f.getInf(r'"TdPointA":"(.*?)%(.*?)"',page,1)
		QuickNp=f.getInf(r'"TdPointQ":"(.*?)%(.*?)"',page,1)
		EXNp=f.getInf(r'"TdPointEx":"(.*?)%(.*?)"',page,1)
		npNp=f.getInf(r'"InitiativeNp":"(.*?)%(.*?)"',page,1)
		BusterCard=f.getInf(r'"CARD_BUSTER":"(\d+)"',page,1)
		ArtsCard=f.getInf(r'"CARD_ARTS":"(\d+)"',page,1)
		QuickCard=f.getInf(r'"CARD_QUICK":"(\d+)"',page,1)
		BusterHit=f.getInf(r'"BusHit":"(\d+)"',page,1)
		ArtsHit=f.getInf(r'"ArtHit":"(\d+)"',page,1)
		QuickHit=f.getInf(r'"QuiHit":"(\d+)"',page,1)
		EXHit=f.getInf(r'"EXHit":"(\d+)"',page,1)
		HitedNP=f.getInf(r'"Passive":"(\d*\.?\d+)%"',page,1)
		dropStar=f.getInf(r'"Crit":"(\d*\.?\d+)%"',page,1)
		addNP=f.getInf(r'\u8d4b\u4e88\u81ea\u8eab\u6bcf\u56de\u5408NP\u83b7\u5f97\u72b6\u6001.*?(\d*\.?\d+)%',page,1)
		if(addNP ==None):
			addNP=0
		BusterEff=f.getInf(r'Buster\\u5361.{1,60}(\\uff08|\()(\d*\.?\d+)%(\\uff09|\))',page,2)
		if BusterEff==None:
			BusterEff='0'
		ArtsEff=f.getInf(r'Arts\\u5361.{1,60}(\\uff08|\()(\d*\.?\d+)%(\\uff09|\))',page,2)
		if ArtsEff==None:
			ArtsEff='0'
		QuickEff=f.getInf(r'Quick\\u5361.{1,60}(\\uff08|\()(\d*\.?\d+)%(\\uff09|\))',page,2)
		if QuickEff==None:
			QuickEff='0'
		NPEff=f.getInf(r'[NP,np].{1,60}(\\uff08|\()(\d*\.?\d+)%(\\uff09|\))',page,2)
		if NPEff==None:
			NPEff='0'
		CritEff=f.getInf(r'[NP,np].{1,60}(\\uff08|\()(\d*\.?\d+)%(\\uff09|\))',page,2)
		if NPEff==None:
			NPEff='0'
		StarEff=f.getInf(r'\\u661f\\u661f\\u53d1\\u751f\\u7387\\u63d0\\u5347(\\uff08|\()(\d*\.?\d+)%(\\uff09|\))',page,2)
		if StarEff==None:
			StarEff='0'
		CritDamage=f.getInf(r'\\u66b4\\u51fb\\u5a01\\u529b\\u63d0\\u5347(\\uff08|\()(\d*\.?\d+)%(\\uff09|\))',page,2)
		if CritDamage==None:
			CritDamage='0'
		attaDamage=f.getInf(r'\\u7ed9\\u81ea\\u5df1\\u8d4b\\u4e88\\u4f24\\u5bb3\\u63d0\\u5347\\u72b6\\u6001(\\uff08|\()(\d+)(\\uff09|\))',page,2)
		if attaDamage==None:
			attaDamage='0'
		if(startPage==108):
		#大帝np率分强化前后
			lines='\t{\n\t\t"seq": "'+str(seq)+'",\n\t\t"id": "'+str(startPage)+'",\n\t\t"name": "'+name+' (强化前)'+'",\n\t\t"class": "'+str(clss)+'",\n\t\t"atk": "'+atk+'",\n\t\t"hp": "'+hp+'",\n\t\t"busterCards": "'+str(BusterCard)+'",\n\t\t"artsCards": "'+str(ArtsCard)+'",\n\t\t"quickCards": "'+str(QuickCard)+'",\n\t\t"busterHits": "'+str(BusterHit)+'",\n\t\t"artsHits": "'+str(ArtsHit)+'",\n\t\t"quickHits": "'+str(QuickHit)+'",\n\t\t"exHits": "'+str(EXHit)+'",\n\t\t"busterNP": "'+str(BusterNp)+'",\n\t\t"artsNP": "'+str(ArtsNp)+'",\n\t\t"quickNP": "'+str(QuickNp)+'",\n\t\t"exNP": "'+str(EXNp)+'",\n\t\t"npNP": "'+str(npNp)+'",\n\t\t"busterEff": "'+str(BusterEff)+'",\n\t\t"artsEff": "'+str(ArtsEff)+'",\n\t\t"quickEff": "'+str(QuickEff)+'",\n\t\t"npEff": "'+str(NPEff)+'",\n\t\t"hitedNP": "'+str(HitedNP)+'",\n\t\t"addNP": "'+str(addNP)+'",\n\t\t"dropStar": "'+str(dropStar)+'",\n\t\t"starEff": "'+str(StarEff)+'",\n\t\t"critDamage": "'+str(CritDamage)+'",\n\t\t"attaDamage": "'+str(attaDamage)+'"\n\t},\n'	
			seq+=1
			lines+='\t{\n\t\t"seq": "'+str(seq)+'",\n\t\t"id": "'+str(startPage)+'",\n\t\t"name": "'+name+' (强化后)'+'",\n\t\t"class": "'+str(clss)+'",\n\t\t"atk": "'+atk+'",\n\t\t"hp": "'+hp+'",\n\t\t"busterCards": "'+str(BusterCard)+'",\n\t\t"artsCards": "'+str(ArtsCard)+'",\n\t\t"quickCards": "'+str(QuickCard)+'",\n\t\t"busterHits": "'+str(BusterHit)+'",\n\t\t"artsHits": "'+str(ArtsHit)+'",\n\t\t"quickHits": "'+str(QuickHit)+'",\n\t\t"exHits": "'+str(EXHit)+'",\n\t\t"busterNP": "'+'0.86'+'",\n\t\t"artsNP": "'+'0.86'+'",\n\t\t"quickNP": "'+'0.86'+'",\n\t\t"exNP": "'+'0.86'+'",\n\t\t"npNP": "'+'0.86'+'",\n\t\t"busterEff": "'+str(BusterEff)+'",\n\t\t"artsEff": "'+str(ArtsEff)+'",\n\t\t"quickEff": "'+str(QuickEff)+'",\n\t\t"npEff": "'+str(NPEff)+'",\n\t\t"hitedNP": "'+str(HitedNP)+'",\n\t\t"addNP": "'+str(addNP)+'",\n\t\t"dropStar": "'+str(dropStar)+'",\n\t\t"starEff": "'+str(StarEff)+'",\n\t\t"critDamage": "'+str(CritDamage)+'",\n\t\t"attaDamage": "'+str(attaDamage)+'"\n\t},\n'
		elif(startPage==81):
		#杰基尔有2个
			lines='\t{\n\t\t"seq": "'+str(seq)+'",\n\t\t"id": "'+str(startPage)+'",\n\t\t"name": "'+name+' (杰基尔)'+'",\n\t\t"class": "'+str(clss)+'",\n\t\t"atk": "'+atk+'",\n\t\t"hp": "'+hp+'",\n\t\t"busterCards": "'+str(BusterCard)+'",\n\t\t"artsCards": "'+str(ArtsCard)+'",\n\t\t"quickCards": "'+str(QuickCard)+'",\n\t\t"busterHits": "'+str(BusterHit)+'",\n\t\t"artsHits": "'+str(ArtsHit)+'",\n\t\t"quickHits": "'+str(QuickHit)+'",\n\t\t"exHits": "'+str(EXHit)+'",\n\t\t"busterNP": "'+str(BusterNp)+'",\n\t\t"artsNP": "'+str(ArtsNp)+'",\n\t\t"quickNP": "'+str(QuickNp)+'",\n\t\t"exNP": "'+str(EXNp)+'",\n\t\t"npNP": "'+str(npNp)+'",\n\t\t"busterEff": "'+str(BusterEff)+'",\n\t\t"artsEff": "'+str(ArtsEff)+'",\n\t\t"quickEff": "'+str(QuickEff)+'",\n\t\t"npEff": "'+str(NPEff)+'",\n\t\t"hitedNP": "'+str(HitedNP)+'",\n\t\t"addNP": "'+str(addNP)+'",\n\t\t"dropStar": "'+str(dropStar)+'",\n\t\t"starEff": "'+str(StarEff)+'",\n\t\t"critDamage": "'+str(CritDamage)+'",\n\t\t"attaDamage": "'+str(attaDamage)+'"\n\t},\n'	
			seq+=1
			lines+='\t{\n\t\t"seq": "'+str(seq)+'",\n\t\t"id": "'+str(startPage)+'",\n\t\t"name": "'+name+' (海德)'+'",\n\t\t"class": "'+'Berserker'+'",\n\t\t"atk": "'+str(7551)+'",\n\t\t"hp": "'+str(8592)+'",\n\t\t"busterCards": "'+str(BusterCard)+'",\n\t\t"artsCards": "'+str(ArtsCard)+'",\n\t\t"quickCards": "'+str(QuickCard)+'",\n\t\t"busterHits": "'+str(BusterHit)+'",\n\t\t"artsHits": "'+str(ArtsHit)+'",\n\t\t"quickHits": "'+str(QuickHit)+'",\n\t\t"exHits": "'+str(EXHit)+'",\n\t\t"busterNP": "'+'1.02'+'",\n\t\t"artsNP": "'+'1.02'+'",\n\t\t"quickNP": "'+'1.02'+'",\n\t\t"exNP": "'+'1.02'+'",\n\t\t"npNP": "'+'1.02'+'",\n\t\t"busterEff": "'+str(10)+'",\n\t\t"artsEff": "'+str(ArtsEff)+'",\n\t\t"quickEff": "'+str(QuickEff)+'",\n\t\t"npEff": "'+str(NPEff)+'",\n\t\t"hitedNP": "'+str(5)+'",\n\t\t"addNP": "'+str(addNP)+'",\n\t\t"dropStar": "'+str(5)+'",\n\t\t"starEff": "'+str(0)+'",\n\t\t"critDamage": "'+str(CritDamage)+'",\n\t\t"attaDamage": "'+str(attaDamage)+'"\n\t},\n'
		elif(startPage==90):
		#嫁王EX为5
			lines='\t{\n\t\t"seq": "'+str(seq)+'",\n\t\t"id": "'+str(startPage)+'",\n\t\t"name": "'+name+'",\n\t\t"class": "'+str(clss)+'",\n\t\t"atk": "'+atk+'",\n\t\t"hp": "'+hp+'",\n\t\t"busterCards": "'+str(BusterCard)+'",\n\t\t"artsCards": "'+str(ArtsCard)+'",\n\t\t"quickCards": "'+str(QuickCard)+'",\n\t\t"busterHits": "'+str(BusterHit)+'",\n\t\t"artsHits": "'+str(ArtsHit)+'",\n\t\t"quickHits": "'+str(QuickHit)+'",\n\t\t"exHits": "'+str(5)+'",\n\t\t"busterNP": "'+str(BusterNp)+'",\n\t\t"artsNP": "'+str(ArtsNp)+'",\n\t\t"quickNP": "'+str(QuickNp)+'",\n\t\t"exNP": "'+str(EXNp)+'",\n\t\t"npNP": "'+str(npNp)+'",\n\t\t"busterEff": "'+str(BusterEff)+'",\n\t\t"artsEff": "'+str(ArtsEff)+'",\n\t\t"quickEff": "'+str(QuickEff)+'",\n\t\t"npEff": "'+str(NPEff)+'",\n\t\t"hitedNP": "'+str(HitedNP)+'",\n\t\t"addNP": "'+str(addNP)+'",\n\t\t"dropStar": "'+str(dropStar)+'",\n\t\t"starEff": "'+str(StarEff)+'",\n\t\t"critDamage": "'+str(CritDamage)+'",\n\t\t"attaDamage": "'+str(attaDamage)+'"\n\t},\n'
		else:
			lines='\t{\n\t\t"seq": "'+str(seq)+'",\n\t\t"id": "'+str(startPage)+'",\n\t\t"name": "'+name+'",\n\t\t"class": "'+str(clss)+'",\n\t\t"atk": "'+atk+'",\n\t\t"hp": "'+hp+'",\n\t\t"busterCards": "'+str(BusterCard)+'",\n\t\t"artsCards": "'+str(ArtsCard)+'",\n\t\t"quickCards": "'+str(QuickCard)+'",\n\t\t"busterHits": "'+str(BusterHit)+'",\n\t\t"artsHits": "'+str(ArtsHit)+'",\n\t\t"quickHits": "'+str(QuickHit)+'",\n\t\t"exHits": "'+str(EXHit)+'",\n\t\t"busterNP": "'+str(BusterNp)+'",\n\t\t"artsNP": "'+str(ArtsNp)+'",\n\t\t"quickNP": "'+str(QuickNp)+'",\n\t\t"exNP": "'+str(EXNp)+'",\n\t\t"npNP": "'+str(npNp)+'",\n\t\t"busterEff": "'+str(BusterEff)+'",\n\t\t"artsEff": "'+str(ArtsEff)+'",\n\t\t"quickEff": "'+str(QuickEff)+'",\n\t\t"npEff": "'+str(NPEff)+'",\n\t\t"hitedNP": "'+str(HitedNP)+'",\n\t\t"addNP": "'+str(addNP)+'",\n\t\t"dropStar": "'+str(dropStar)+'",\n\t\t"starEff": "'+str(StarEff)+'",\n\t\t"critDamage": "'+str(CritDamage)+'",\n\t\t"attaDamage": "'+str(attaDamage)+'"\n\t},\n'
			
			
		if(startPage==endPage):
			lines=lines[:-2]+"\n]"
		with open('servants.json','a+',encoding='utf-8') as wpoint:
			wpoint.write(lines)
		print(str(startPage))
		if startPage <= endPage:
			sleep(random.uniform(3,5))
		startPage = startPage + 1
	except Exception as e:
		print('Error:',e)
		if startPage<=endPage:
			sleep(random.uniform(3,5))

print('Task is finished!')
