var count1=0;
    var count2=0;
    var count=0;
	function myFunction() {
		var random1=Math.floor(Math.random()*100+1);
		var random2=Math.floor(Math.random()*100+1);
		if(random1%2==0)
		{
		 count1++;
		 document.getElementById('p1score').textContent=count1;
		 document.getElementById("leftcircle").children[count].style.backgroundColor='green';
		}
		else
		{
         document.getElementById("leftcircle").children[count].style.backgroundColor='red';
		}
		if(random2%2==0)
		{
		 count2++;
		 document.getElementById('p2score').textContent=count2;
		 document.getElementById("rightcircle").children[count].style.backgroundColor='green';
		}
		else
		{
		document.getElementById("rightcircle").children[count].style.backgroundColor='red';
		}
        count++;

        if(count==5)
        {
        	if(count1>count2)
        	document.getElementById('wait').textContent="Player1 win the match";
            if(count1<count2)
            document.getElementById('wait').textContent="Player2 win the match";
            if(count1 == count2)
            document.getElementById('wait').textContent="Match Draw";
        }
	}