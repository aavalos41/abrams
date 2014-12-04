// JavaScript for menu control


$(document).ready(function() {
	var baseMenuFlag=false; //variable to keep track if menu is open
	
	//scroll
	 $("#baseMenu").niceScroll();
	 $("#subMenu").niceScroll();
	//click or tap hamburger menu
	$("#mobile-menu").click(function(){
		if(baseMenuFlag){
			// Hide the menu
			$('#baseMenu').stop(true, true).animate({'left' : "-160px" });
			$('#subMenu').stop(true, true).animate({'left' : "0px" });
			$('#content').stop(true, true).animate({'left' : "0px" });
			$('#subMenu div').stop(true, true).hide();
			$('#subMenu').stop(true, true).animate({'width' : "0px" });
			//unpause  sliders
			baseMenuFlag=false;
		}else{
			// Show the menu
			$('#baseMenu').stop(true, true).animate({'left' : "0px" });
			$('#subMenu').stop(true, true).animate({'left' : "160px" });
			$('#content').stop(true, true).animate({'left' : "160px" });
			//pause  sliders
			baseMenuFlag=true;
		}
		return false;
	});
	
	//tap
	var selectedMenu="";
	$('.baseMenuItem').click(function(){
			if(selectedMenu!="")invertColor(selectedMenu+"MenuItem");
			console.log($('#slider').length);
		if(selectedMenu==$(this).closest('li').attr('id').substr(0,4)){
			//close submenu
			$('#subMenu').stop(true, true).animate({'width' : "0px" });
			$('#content').stop(true, true).animate({'left' : "160px" });
			selectedMenu="";
		}else{
			selectedMenu=$(this).closest('li').attr('id').substring(0,4);
			console.log(selectedMenu+'SubMenu');
			//pause slider (if not paused before for mobile)
			//reveal the submenu for the selected menu item
			$('#subMenu div').stop(true, true).hide();
			//$('#subMenu').stop(true, true).animate({
			$('#'+selectedMenu+'SubMenu').show();
			invertColor($(this).closest('li').attr('id'));
			//switch styles for selected elements
			//expand submenu area
			$('#subMenu').animate({'width' : "280px" });
		
			$('#content').stop(true, true).animate({'left' : "460px" });
		}
		
/*						$('#subMenu img').attr("src","images/expandedmenu3_02.png");
						$('.tri').animate({right:-20, opacity:"hide"}, 200);
						$('#imprint .tri').animate({right:0, opacity:"show"}, 200);
						// Open the menu
						$('#subMenu').stop(true, true).animate({'left' : "219px" });
						
						$('#content').stop(true, true).animate({'left' : "612px" });*/
				
		});
		$("#content").click(function(){
			if(baseMenuFlag){
				$('#baseMenu').stop(true, true).animate({'left' : "-160px" });
				$('#subMenu').stop(true, true).animate({'left' : "0px" });
				$('#content').stop(true, true).animate({'left' : "0px" });
				$('#subMenu div').stop(true, true).hide();
				$('#subMenu').stop(true, true).animate({'width' : "0px" });
			}else if(selectedMenu!=""){
				$('#subMenu').stop(true, true).animate({'width' : "0px" });
				$('#content').stop(true, true).animate({'left' : "160px" });
			}
		});
	
		$('.offHover').hover(  
			   function(){  
				  $(this).find($( ".onHover" )).stop().fadeTo('slow', 0.8);
				  $(this).find($( ".darkHover" )).stop().fadeTo('slow', 0.9);   
			   },  
			   function(){  
				  $(this).find($( ".onHover" )).stop().fadeTo('slow', 0);  
		 });  
		 
		 function invertColor(id){
			 var fontC=$('#'+id).css("color");
			 var backC=$('#'+id).css("background-color");
			 $('#'+id).css("color",backC);
			 $('#'+id).css("background-color",fontC);
			 console.log("font "+fontC);
			 console.log("back "+backC);
		 }
	
});