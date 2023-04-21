		function opentab(tabname)
	{
    let tablinks = document.getElementsByClassName('tab-links');
    let tabcontents = document.getElementsByClassName('tab-contents');
    
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");


	if(tabname=='skills')
	{
       document.getElementById(tabname).style.display = "block";
       document.getElementById("experience").style.display = "none";
       document.getElementById("education").style.display = "none";       		
	}
	else if(tabname=='experience')
    {
    	document.getElementById(tabname).style.display = "block";
    	document.getElementById("skills").style.display = "none";  
    	document.getElementById("education").style.display = "none";  
    }
	else
	{
        document.getElementById(tabname).style.display = "block";
        document.getElementById("skills").style.display = "none";  
    	document.getElementById("experience").style.display = "none";  
	}
	

    }


	function openmenu(){
		document.getElementById('sidemenu').style.right="0";
	}
	function closemenu(){
		document.getElementById('sidemenu').style.right="-200px";
	}