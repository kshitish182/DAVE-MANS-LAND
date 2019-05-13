class TextHandler{
	constructor(){
		//meassage to be displayed
		this.message = '';
	}

	renderMessage(){
		let paragraph = document.getElementById('para');
		paragraph.innerHTML = this.message;
	}
}