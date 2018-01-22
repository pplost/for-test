#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import re
import json
import os

itemDict={
	"剑之辉石":"6001",
	"弓之辉石":"6002",
	"枪之辉石":"6003",
	"骑之辉石":"6004",
	"术之辉石":"6005",
	"杀之辉石":"6006",
	"狂之辉石":"6007",
	"剑之魔石":"6101",
	"弓之魔石":"6102",
	"枪之魔石":"6103",
	"骑之魔石":"6104",
	"术之魔石":"6105",
	"杀之魔石":"6106",
	"狂之魔石":"6107",
	"剑之秘石":"6201",
	"弓之秘石":"6202",
	"枪之秘石":"6203",
	"骑之秘石":"6204",
	"术之秘石":"6205",
	"杀之秘石":"6206",
	"狂之秘石":"6207",
	"羽毛":"6501",
	"核桃":"6502",
	"井盖":"6503",
	"煤灰":"6505",
	"逆鳞":"6506",
	"爪子":"6507",
	"鬼灯":"6508",
	"蛇玉":"6509",
	"齿轮":"6510",
	"书页":"6511",
	"龙牙":"6512",
	"蹄铁":"6513",
	"血瓶":"6514",
	"八连":"6515",
	"凶骨":"6516",
	"心脏":"6517",
	"树根":"6518",
	"幼角":"6519",
	"血泪":"6520",
	"黑脂":"6521",
	"愚锁":"6522",
	"神灯":"6523",
	"勋章":"6524",
	"甲虫":"6525",
	"贝壳":"6526",
	"毒针":"6527",
	"原毛":"6528",
	"胆石":"6529",
	"髄液":"6530",
	"神酒":"6531",
	"勾玉":"6532",
	"剑阶银棋":"7001",
	"弓阶银棋":"7002",
	"枪阶银棋":"7003",
	"骑阶银棋":"7004",
	"术阶银棋":"7005",
	"杀阶银棋":"7006",
	"狂阶银棋":"7007",
	"剑阶金像":"7101",
	"弓阶金像":"7102",
	"枪阶金像":"7103",
	"骑阶金像":"7104",
	"术阶金像":"7105",
	"杀阶金像":"7106",
	"狂阶金像":"7107"
}
def readFile(path,headLine,readLine,flag):
	with open(path,'r+',encoding='utf-8') as rpoint:
		lines=rpoint.readlines()
	tlist=[]
	outList=[]
	#行数
	for i in range(readLine):
		l=lines[i].split(',')
		#表头行数
		if(i<headLine):
			for x in l:
				x=x.replace("\n","").strip()
			tlist.append(l)
		else:
			for x in range(len(l)):
				if(x>0):
					l[x]=l[x].replace("\n","").strip()
					if(l[x]==""):
						if(flag):
							l[x]=0
						else:
							l[x]=9999
					else:
						l[x]=float(l[x])
					a=[]
					#区域-关卡
					a.append((tlist[0][x]+":"+tlist[1][x]).replace("\n","").strip())
					#AP
					a.append(int(float(tlist[2][x].replace("\n","").strip())))
					#样本数
					a.append(int(float(tlist[3][x].replace("\n","").strip())))
					#数值
					a.append(float(l[x]))
					l[x]=a
			#只取前10
			b=sorted(l[1:], key=lambda x:x[3],reverse=flag)[:10]
			for x in range(len(b)):
				if(b[-1][3]<0.1 or b[-1][3]==9999):
					b.pop()
				else:
					break
			b.insert(0,l[0])
			outList.append(b)
			print(b)
	#插入结晶
	outList.append(["6999",["活动","不定",0,"不定"],["棱镜商店","$",0,"$"]])
	return outList

def listFormat(l1,l2):
	d={}
	for x in range(len(l1)):
		dIn={}
		dIn["dropChance"]=l1[x][1:]
		dIn["ApEfficiency"]=l2[x][1:]
		d[l1[x][0]]=dIn
	return d
	
#表头4行，可能会有变动
#只需70行，会有变动
#掉率为倒序true，ap为正序false
l1=readFile('text/掉率.csv',4,71,True)
l2=readFile('text/AP效率.csv',4,71,False)
d=listFormat(l1,l2)
outStr=json.dumps(d,ensure_ascii=False,separators=(',',':'))
with open('drop_chance.json','w+',encoding='utf-8') as wpoint:
	wpoint.write(outStr)