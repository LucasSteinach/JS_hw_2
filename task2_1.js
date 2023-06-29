// запуск программы выражением "node <имя файла> <кол-во простых чисел>"

let numbersCount = Number(process.argv[2])

function isPrime(number) {
    let n = Number(number);
    let dividers = Array(1).fill(1);
    let pointer = 2;
    if (n <= 1) {
        return false;
    } else {
        while ((dividers.length < 2) && (pointer <= (n / 2))) {
            if ((n % pointer) == 0) {
                dividers.push(pointer);
                pointer++;
            } else {
                pointer++
            };
        };
        if (dividers.length == 1) {
            return true
        } else {
            return false
        }
    }        
}


function findPrimes (n) {
    const result = Array(1).fill(2);
    if (n < 1) {
        return 'Введено некорректное значение';
    } else if (n == 1) {
        return result;
    } else {
        let pointer = 3;
        while (result.length < n) {
            if (isPrime(pointer)) {
                result.push(pointer);
            }
            pointer++;
        }
        return result;
    }
    
    
}

console.time('prog')
console.log(findPrimes(numbersCount));
console.timeEnd('prog')