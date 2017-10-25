#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json
import os


with open('text\掉率.csv','r+') as rpoint:
	lines=rpoint.readlines()

flist=[]
for i in range(len(lines)):
	l=lines[i].split(',')
	#表头4行
	if(i<=3):
		flist.append(l)
	else:
		for x in range(len(l)):
			if(x>0):
				l[x]=l[x].replace("\n","")
				l[x]=l[x].strip()
				if(l[x]==""):
					l[x]=0
				else:
					l[x]=float(l[x])
				l[x]=str(l[x])
		flist.append(l)

print(flist)