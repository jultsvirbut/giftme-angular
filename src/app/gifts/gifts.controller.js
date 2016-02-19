export class GiftsController {
	constructor (giftBox) {
		'ngInject';

		this.GiftBox = giftBox;
		this.activate();
	}

	activate() {
		this.GiftBox.getList()
			.then(giftBoxes => {
				this.giftBoxes = giftBoxes;
			})
	}

}
