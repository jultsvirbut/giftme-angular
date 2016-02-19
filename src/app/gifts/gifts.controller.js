export class GiftsController {
	constructor (giftBox, toastr) {
		'ngInject';

		this.giftBox = giftBox;
		this.activate();
	}

	activate() {
	    this.giftBox.getList()
	      .then(giftBoxes => {
	        this.giftBoxes = giftBoxes;
	      })
	}

}
