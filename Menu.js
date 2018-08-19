/*메뉴를 정의한다!!*/
class Menu{
	constructor(container){ 
		this.container=container;
		this.a=document.createElement("a");
		$(this.a).css("display","block");
		$(this.a).css("background","#000").css("color","#fff");
		$(this.a).css({
			float:"left",
			padding:"16px 0px",
			width:"20%",
			textDecoration:"none",
			textAlign:"center"
		});

		$(this.container).append(this.a); //dom.appendChild()

	}
}