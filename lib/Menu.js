/*메뉴를 정의한다!!*/
class Menu{
	constructor(container, text){ 
		this.container=container;
		this.text=text;
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
		$(this.a).text(this.text);
		
		$(this.container).append(this.a); //dom.appendChild()

	}
}