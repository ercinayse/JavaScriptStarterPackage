//Write a function takes multiple numbers as parameter and decide which is prime?
let isPrime = function (...numbers) {

    for (let i = 0; i < numbers.length; i++) {

        let prime = true;
        for (let j = 2; j < numbers[i]; j++) {

            if (numbers[i] % j == 0) {
                prime = false;
            }
        }
        if (prime == true) {
            console.log(numbers[i] + " is a prime.")
        }
    }
}

isPrime(2, 4, 5, 7, 15, 13);

//Write function decide whether two numbers are friendly numbers
//Positive divisors for 220 except 220 : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
//Positive divisors for 284 except 284: 1 + 2 + 4 + 71 + 142 = 220
//

let isFriendlyNumber=function (number1,number2)
{
    const sumForNumber1=sumPositiveDivisors(number1);
    const sumForNumber2=sumPositiveDivisors(number2);
    if(sumForNumber1==number2 && sumForNumber2==number1)
    {
        console.log("They are friendly numbers");
    }
  
}

let sumPositiveDivisors=function(number)
{
    let toplam=0;
    for (let i = 1; i < number; i++) {

        if(number%i==0)
        {
            toplam+=i;
        }

    }
    return toplam;
}

isFriendlyNumber(284,220);


//Write function decide a number is perfect number
//a positive integer that is equal to the sum of its proper divisors except
//For 6 :1+2+3=6

let isPerfectNumber=function(number)
{
    if(sumPositiveDivisors(number)==number)
    {
        console.log("It is a perfect number.")
    }
}

isPerfectNumber(6);