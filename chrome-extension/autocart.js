var size = "6.5";
var amount = 1;

function addToCart() {
	var sizesList=document.getElementsByName("skuAndSize")[0];
	function setQuantity() {
		document.getElementsByName("qty")[0].selectedIndex = amount-1;
	}
	function setSizeValue() {
		for (var i=0; i<sizesList.length; i++){
			if(sizesList.options[i].text == size) {
				document.getElementsByName("skuAndSize")[0].selectedIndex = i;
				setQuantity();
			}
		}
	}
	if(sizesList != undefined) {
	    setSizeValue();
	    document.getElementsByClassName("button-container add-to-cart")[0].click();
	} else {
	    setTimeout("addToCart()", 250);
	}
}
setTimeout("addToCart()", 250);
