#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json
import os
import zhconv



with open('data.json','r',encoding='utf-8') as rpoint:
	lines=rpoint.read()
	
	
lines=zhconv.convert(lines,'zh-cn')

with open('data.json','w',encoding='utf-8') as wpoint:
	wpoint.write(lines)
	
print('over')