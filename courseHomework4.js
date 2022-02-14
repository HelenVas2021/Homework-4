//Задача №1

const Row = 10;
const Colum = 10;
let A = new Array(Row);

for (i = 0; i < A.length; i++) {
	A[i] = new Array(Colum);
	for (j = 0; j < A[i].length; j++) {
		A[i][j] = Math.floor(Math.random() * 41 - 20);
	}
}
console.log(A);

var newArray = JSON.parse(JSON.stringify(A));

for (j = A.length - 1; j >= 0; j--) {
	ColumSum = 0;
	for (i = A.length - 1; i >= 0; i--) {
		ColumSum += A[i][j]
	}
	if (ColumSum < 0) {
		for (k = A.length - 1; k >= 0; k--) {

			newArray[k].splice(j, 1);
		}
	}

}
console.log(newArray);

// let max = A[0][0];
// let min = A[0][0];
// for (i = 0; i < A.length; i++) {
// 	for (j = 0; j < A[i].length; j++) {
// 		if (A[i][j] > max) {
// 			max = A[i][j];
// 		}
// 		if (A[i][j] < min) {
// 			min = A[i][j];
// 		}
// 	}

// }
// console.log(max, min);
