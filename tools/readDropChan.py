import re
import json
import os

def readFile(path):
	with open(path,'r+') as rpoint:
		lines=rpoint.readlines()
		
	titleList=[]
	dpList=[]
	for i in range(len(lines)):
		#读取首行
		if(i==0):
			titleList=lines[i].replace("\n","").split(',')
		else:
			itemList=lines[i].replace("\n","").split(',')
			areaInf={}
			areaInf["name"]=itemList[0]+itemList[1]
			print(areaInf)
			#跳过前2列
			for x in range(2,len(itemList)):
				break;
					
			
readFile('text/dc.csv')