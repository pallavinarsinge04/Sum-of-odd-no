
const numbers = [7,7,1,4,8,0]
let sum = 0
for (let i=0; i<numbers.length; i++)
{
    if(numbers[i] % 2 == 1)
    {
        sum+=numbers[i]
    }
}
console.log(`sum: ${sum}`)