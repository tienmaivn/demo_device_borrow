import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-device-borrow',
	templateUrl: './device-borrow.component.html',
	styleUrls: ['./device-borrow.component.css']
})
export class DeviceBorrowComponent implements OnInit {

	// datas list
	arrDevices = [
		{ id: 1, name: 'iPhone X', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true },
		{ id: 2, name: 'iPhone 7', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: false },
		{ id: 3, name: 'Galaxy S9', osv: 'Android 7.2', manu: 'Samsung Inc', memorized: true },
		{ id: 4, name: 'iPad pro', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true },
		{ id: 5, name: 'Iphone 7 Plus', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: false },
		{ id: 6, name: 'Iphone 8 Plus', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true }
	];

	constructor() { }

	ngOnInit() {
	}

}
