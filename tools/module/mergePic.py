#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
from PIL import Image,ImageFont,ImageDraw

class mergePic():
	#单张图片参数，间隔，列数
	def __init__(self,img_height=140,img_width=128,interval=10,col_num=7):
		self.IMG_HEIGHT = img_height
		self.IMG_WIDTH = img_width
		self.INTERVAL = interval
		self.COL_NUM = col_num
		
	def mergeX(self,fileList,newImg,text=''):
		#没有文件，退出
		if(len(fileList) < 1):
			return
		if(text == ''):
			ftHeight = 0
		else:
			ft = ImageFont.truetype('msyh.ttf', 36)
			ftWidth,ftHeight = ft.getsize(text)
			ftHeight = int(ftHeight * 1.5)
		#初始化图片坐标
		leftPos = 0
		topPos = 0 + ftHeight
		#图片数量只够一行	
		if(len(fileList) < self.COL_NUM):
			width = len(fileList) * (self.IMG_WIDTH + self.INTERVAL) - self.INTERVAL
		else:
			width = self.COL_NUM * (self.IMG_WIDTH + self.INTERVAL) - self.INTERVAL
		#图片宽度小于标题文字宽度
		if(width < ftWidth):
			leftPos=int((ftWidth-width)/2)
			width = ftWidth
		if(len(fileList) % self.COL_NUM > 0):
			height = (int(len(fileList) / self.COL_NUM) + 1) * (self.IMG_HEIGHT + self.INTERVAL) - self.INTERVAL + ftHeight
		else:
			height = (len(fileList) / self.COL_NUM) * (self.IMG_HEIGHT + self.INTERVAL) - self.INTERVAL + ftHeight
		img = Image.new('RGB', (int(width), int(height)),(255,255,255))
		
		for i in range(len(fileList)):
			img.paste(Image.open(fileList[i]), (leftPos,topPos))
			if((i + 1) % self.COL_NUM == 0):
				leftPos = 0
				topPos = topPos + self.IMG_HEIGHT + self.INTERVAL
			else:
				leftPos = leftPos + self.IMG_WIDTH + self.INTERVAL
		if(text != ''):
			draw = ImageDraw.Draw(img)
			draw.text((int((width-ftWidth)/2), int(ftHeight/8)), text, font=ft, fill=(255, 0, 0))
		img.save(newImg,quality = 100)
			
			
fileList=[]
for root, dirs, files in os.walk('../image'):     
	for file in files:
		fileList.append(os.path.join(root, file))
p = mergePic()
p.mergeX(fileList,'../000.jpg','哈哈哈')