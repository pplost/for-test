#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json
import os
from collections import OrderedDict

with open('servants.json','r',encoding='utf-8') as rpoint:
	js = json.load(rpoint)
	
with open('servants-append.json','r',encoding='utf-8') as rpoint:
	jsa = json.load(rpoint)
	
sortList=["seq","id","name","class","atk","hp","busterCards","artsCards","quickCards","busterHits","artsHits","quickHits","exHits","npHits","busterNP","artsNP","quickNP","exNP","npNP","npCard","busterEff","artsEff","quickEff","npEff","hitedNP","dropStar","starEff","critDamage","attaDamage"]

l=[]

for x in js:
	for y in jsa:
		if(x["id"]==y["id"]):
			d=OrderedDict()
			for z in sortList:
				if(z in x.keys()):
					d[z]=x[z]
				else:
					d[z]=y[z]
			l.append(d)
			break 

str='[\n'
for x in l:	
	str+='\t{\n'
	for y in x:
		str+='\t\t"'+y+'": "'+x[y]+'",\n'
	str=str[0:-2]
	str+='\n\t},\n'
str=str[0:-2]
str+='\n]'

with open('servants.json','w+',encoding='utf-8') as wpoint:
	wpoint.write(str)
		