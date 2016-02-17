export class GiftsController {
	constructor (giftsProducts, toastr) {
		'ngInject';

		this.title = 'Hello, Holi Cow';
		this.inputTitle = 'Default';
		this.giftProducts = giftsProducts.getList();
		this.classAnimation = '';
		this.toastr = toastr;
	}


	showToastr() {
		this.toastr.info('First toast');
	}

}
