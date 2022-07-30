// 1. Используя рекурсию, напишите функция, которая возвращает массив,
//  содержащий повторения числового аргумента. 
//  Если аргумент times отрицательный, верните пустой массив.



function replicate(number, times){
	if (times <= 0) {
        return [];
    };
	return [number].concat(replicate(number, times - 1));
}

console.log(replicate(154, 3));

console.log(replicate(65, -2));

console.log(replicate(45, 0));


// 2. Напишите функцию specialMultiply, которая принимает два параметра.

// Если функции переданы оба параметра, она должна вернуть их произведение.

// Если функции передается только один параметр, она должна возвращать функцию, которой позже можно передать другой параметр для возврата произведение.


function specialMultiply(x, y){
    if (arguments.length == 2) {
        return x*y;
    } else {
        return function(y) {
            return x*y;
        };
    };
};

    console.log(specialMultiply(5, 6)); // 12
    console.log(specialMultiply(5)(6)); // 12
    console.log(specialMultiply(5));


// 3.    Напишите функцию guessingGame, которая принимает один параметр - это количества попыток игры. 

//     Внутри нее рандомно генерируется число от 0 до 10 и она должна возвращать другую функцию, которая принимает параметр предположение в виде числа.
    
    
    
//     Если число больше случайного числа, то верните строку "Your guess is too high!".
//     Если число меньше случайного числа, то верните строку "Your guess is too low!".
//     Если число равно случайному числу, то верните строку "You got it!"
//     Если угадали число и продолжают предполагать, то верните строку "You know the answer. What do you want from me?".
//     Если превысили количество попыток угадать число, то верните строку "No more guesses the answer was 0! Please start a new game".



function guessingGame(tries){  //кол-во попыток
	let counter = 0;
	let number = Math.floor(Math.random() * 11); //рандомное число
    console.log(number);
    let end = false;
	return function(guess) {    //предполагаемое число.
        counter++;
        if (counter >= tries) {
            return 'No more guesses the answer was' + ' ' + number + '!  Please start a new game';
        } 
        else if (end && counter < tries)
            return "You know the answer. What do you want from me?";   
        else if (guess === number) {
            end = true;
            return "You got it!"; 
        }        
        else if (guess > number) {
            // console.log(end);
            return "Your guess is too high!";
        }
            
        else if (guess < number) {
            // console.log(end);
            return "Your guess is too low!";
        };
    };
};
let game = guessingGame(8);
console.log(game(1)); 
console.log(game(5));
console.log(game(2)); 
console.log(game(8));
console.log(game(3)); 
console.log(game(0));
console.log(game(4));
console.log(game(3));




