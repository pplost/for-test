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
	
#sortList=["seq","id","name","class","atk","hp","busterCards","artsCards","quickCards","busterHits","artsHits","quickHits","exHits","npHits","busterNP","artsNP","quickNP","exNP","npNP","npCard","busterEff","artsEff","quickEff","npEff","hitedNP","dropStar","starEff","critDamage","attaDamage"]
sortList=["seq","id","name","nickName","class","busterCards","artsCards","quickCards","busterHits","artsHits","quickHits","exHits","npHits","busterNP","artsNP","quickNP","exNP","npNP","npCard","busterEff","artsEff","quickEff","npEff","addNP","hitedNP"]
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

outStr=json.dumps(l,ensure_ascii=False,indent=4)
outStr=outStr.replace('    ','\t')
with open('servants_new.json','w+',encoding='utf-8') as wpoint:
	wpoint.write(outStr)
# with open('servants.json','w+',encoding='utf-8') as wpoint:
	# json.dump(l,wpoint,ensure_ascii=False,indent=4)
		