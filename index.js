const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//const batteryBatches = [4, 5, 6, 7, 9];

const totalBatteries = batteryBatches.reduce((accumulator, current) => accumulator + current, 0);
