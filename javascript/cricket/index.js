  var count=0;
    var c11=0,c22=0;
    var totalscore1=0;
    var totalscore2=0;
    var wicket=0;
	function myFunction() {
		var random1=Math.floor(Math.random()*6+1);
		var random2=Math.floor(Math.random()*6+1);
	
		if(count<5)
		{
			if(random1==5)
			{
			wicket++;
			document.getElementById("leftcircle").children[c11++].innerHTML="w ";
		    }
		    else
		    {
	 	    totalscore1+=random1;
			document.getElementById('p1score').textContent=totalscore1;
			document.getElementById("leftcircle").children[c11++].innerHTML=random1;
		    }
		    if(wicket==2)
			{	count=4;
		      wicket=0;
		    }
		    if(count==4)
		    {
		    	wicket=0;
		    	document.getElementById('btn').textContent="Throw ball B";
		    }
	    }
	   if(count>=5 && count<10)
	   {
	   	   document.getElementById('btn').textContent="Throw ball B";
	   	   if(random2==5)
	   	   	{ wicket++;
			  document.getElementById("rightcircle").children[c22++].innerHTML="w ";
		    }
		    else
		    {
	   	     totalscore2+=random2;
			 document.getElementById('p2score').textContent=totalscore2;
			 document.getElementById("rightcircle").children[c22++].innerHTML=random2;
			}
			if(wicket==2)
			{	count=10;
		      
		    }
	    }

        count++;
        if(count==10 || wicket==2)
        {
        	if(totalscore1>totalscore2)
        	document.getElementById('wait').innerHTML="Player 1 win the match";
            else if(totalscore1<totalscore2)
            document.getElementById('wait').innerHTML="Player 2 win the match";
            else if(totalscore1==totalscore2)
            document.getElementById('wait').innerHTML="Match Draw";
	        else
	        {

	        }
        }
	}