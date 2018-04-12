#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
from module.mergePic import mergePic

policyDict = {
    "1": "中立",
    "2": "混沌",
    "3": "秩序",
    "6": "中立",
}
pldict={0:'秩序',1:'中立',2:'混沌'}
personalityDict = {
    "1": "善",
    "2": "恶",
    "4": "狂",
    "5": "中庸",
    "7": "新娘",
    "8": "夏",
}
pndict={0:'善',1:'中庸',2:'恶',3:'狂',4:'新娘',5:'夏'}
path='../data/data.json'
with open(path,'r+',encoding='utf-8') as rpoint:
	jsonDict=json.load(rpoint)
l = [[[] for i in range(3)] for i in range(6)]
i=0
j=0

for x in jsonDict:
	if(x['id']==0):
		continue
		
	if(x['personality']==1 ):
		i=0
	elif (x['personality']==5):
		i=1
	elif (x['personality']==2):
		i=2
	elif (x['personality']==4):
		i=3
	elif (x['personality']==7):
		i=4
	elif (x['personality']==8):
		i=5
		
	if(x['policy']==3):
		j=0
	elif (x['policy']==1 or x['policy']==6):
		j=1
	elif (x['policy']==2):
		j=2
	
	l[i][j].append('./image/'+str(x['id']).zfill(3)+'.jpg')
for i in range(len(l)):
	for j in range(len(l[i])):
		if(len(l[i][j]) > 0):
			fileName = pldict[j] + '·' + pndict[i]
			p = mergePic()
			p.mergeX(l[i][j],'./' + fileName + '.jpg',fileName+':'+str(len(l[i][j])))
		