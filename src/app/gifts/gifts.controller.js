export class GiftsController {
	constructor (giftBox, toastr) {
		'ngInject';

		this.title = 'Hello, Holi Cow';
		this.inputTitle = 'Default';
		this.giftBox = giftBox.getList();
		this.classAnimation = '';
		this.toastr = toastr;
	}


	showToastr() {
		this.toastr.info('First toast');
	}

}
