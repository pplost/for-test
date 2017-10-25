function numLenFormat(num,length){
	let s="";
	for(let i=0;i<length;i++){
		s+="0";
	}
	return (s+num).slice(-length);
}