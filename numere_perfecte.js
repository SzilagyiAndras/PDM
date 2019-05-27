var i=0; //contor
var sumadivizori=0; 
var numar=0;
 function numerePerfecte(){
	 for(numar=0;numar<10000;numar++){
		 sumadivizori=0;
		 for(i=0;i<=numar/2;i++){
			 if(numar %i==0){
				 sumadivizori+=i;
			 }
		 }
		 if(sumadivizori==numar){
			 postMessage(numar);
		 }
		 
	 }
 }//sfarsit functie
 numerePerfecte();
	
