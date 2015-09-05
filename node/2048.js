var game,startBtn;
window.onload=function () {
	var container=document.getElementById('div2048');
	startBtn=document.getElementById('start');
	startBtn.onclick=function () {
		this.style.display='none';
		game=game||new my2048(container);
		debugger;
		game.init();
	}
}



function my2048 (container) {
	this.container=container;
	this.titles=new Array(16);
}
my2048.prototype = {
	init:function () {
		for (var i = 0; i < this.titles.length; i++) {
			var tile=this.newTile(0);
			tile.setAttribute('index',i);
			this.container.appendChild(tile);
			this.titles[i]=title;
		};
		this.randomTile();
		this.randomTile();
	},
	newTile:function(val){
		var tile=document.createElement('div');
		tile.className='tile tile'+val;
		tile.setAttribute('val',val);
		tile.innerHTML=val>0?val:'';
		return tile;
	},
	randomTile:function(){
		
	}
};