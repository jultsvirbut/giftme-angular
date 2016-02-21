export class GiftBoxService {
  constructor ($q) {
    'ngInject';

    this.$q = $q;
    this.boxes = [
        { enName: 'GiftMe Colours',
          section: '<a href="#large_boxes">Large</a>',
          imageUrl: "../../assets/images/1.jpg",
          price:450000,
          productNames:['notebook', 'ball', 'cuptogo', 'coloring'] },
        { enName: 'GiftMe Cheers',
          section: '<a href="#large_boxes">Large</a>',
          imageUrl: "../../assets/images/2.jpg",
          price:450000,
          productNames:['honey', 'cookie', 'wine', 'spices'] },  
        { enName: 'GiftMe Smells',
          section: '<a href="#large_boxes">Large</a>',
          imageUrl: '../../assets/images/3.jpg',
          price:450000,
          productNames:['tea', 'honey', 'cookie', 'syrup'] },
        { enName: 'GiftMe Tea',
          section: '<a href="#medium_boxes">Medium</a>',
          imageUrl: "../../assets/images/4.jpg",
          price:250000,
          productNames:['cupwhite', 'honey', 'tea'] },
        { enName: 'GiftMe Profit',
          section: '<a href="#medium_boxes">Medium</a>',
          imageUrl: "../../assets/images/5.jpg",
          price:300000,
          productNames:['cupwhite', 'notebook', 'cardholder'] },
        { enName: 'GiftMe Relax',
          section: '<a href="#medium_boxes">Medium</a>',
          imageUrl: "../../assets/images/6.jpg",
          price:250000,
          productNames:['tea', 'ball', 'sleepmask'] },
        { enName: 'GiftMe Sweet',
          section: '<a href="#small_boxes">Small</a>',
          imageUrl: "../../assets/images/7.jpg",
          price:59000,
          productNames:['sweet'] },          
        { enName: 'GiftMe Pin',
          section: '<a href="#small_boxes">Small</a>',
          imageUrl: "../../assets/images/8.jpg",
          price:79000,
          productNames:['toy'] }, 
        { enName: 'GiftMe Light',
          section: '<a href="#small_boxes">Small</a>',
          imageUrl: "../../assets/images/9.jpg",
          price:109000,
          productNames:['candle'] }    

    ];
  }

  getList() {
    return this.$q.when(this.boxes);
  }
}

