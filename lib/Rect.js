//사각셀을 정의한다!!
class Rect{
	constructor(container,width,height,bg){
		this.container=container;
		this.width=width;
		this.height=height;
		this.bg=bg;

		this.div=document.createElement("div");	
		$(this.div).css({
			width:this.width,
			height:this.height,
			backgroundColor:this.bg,
			border:"1px solid dodgerblue",
			float:"left"	,
			opacity:1				
		});
		
		//현재 셀에 마우스 이벤트 적용하기!!
		/*
		this.div.addEventListener("mouseover", function(){
			this.style.background="yellow";		
		});
		*/
		$(this.div).on("mouseover", function(){
			//$(this).css("background","pink");
			$(this).animate({
				opacity:0
			});

		});

		this.container.append(this.div);

	}

}


