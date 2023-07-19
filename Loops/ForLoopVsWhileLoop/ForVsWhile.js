//For Loop
//Print numbers from 1 to 100 which are divisible by 3

// for (let i = 1 ; i <= 10 ; i++)
// {
//     if(i % 3 ==0)
//     {
//         console.log(`${i}`);
//     }
// }

//While Loop
//Print one single number separately (for ex: 123456 as 1   2   3   4   5   6)

let num = 5647822212345695

while (num > 0)
{
    console.log(num % 10)
    num = parseInt(num / 10)
}