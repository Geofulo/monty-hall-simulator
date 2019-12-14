// import React from "react";

// export default class GameLogic {
// 	private readonly doors = [];

// 	constructor() {
// 		// Create doors randomly
// 		this.initDoors();
// 	}

// 	public initDoors() {
// 		// Select the door with car randomly
// 		let carDoorIndex = Math.floor(Math.random() * (2 - 1));
// 		console.log("carDoorIndex: " + carDoorIndex);

// 		// Create doors arrray
// 		for (let i = 0; i < 3; i++) {
// 			if (i == carDoorIndex) {
// 				this.doors.concat({
// 					item: "Car",
// 					isCar: true
// 				});
// 			} else {
// 				this.doors.concat({
// 					item: "Goat",
// 					isCar: false
// 				});
// 			}
// 		}

// 		console.log("doors: " + this.doors);
// 	}
// }
