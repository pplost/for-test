function numLenFormat(num,length){
	var s="";
	for(var i=0;i<length;i++){
		s+="0";
	}
	return (s+num).slice(-length);
}