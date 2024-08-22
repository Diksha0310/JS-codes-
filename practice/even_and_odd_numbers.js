// check wheter the number is odd or even

let number = 3;

if(number%2==0)
{
    console.log(`${number} is even`)
}
else
{
    console.log(`${number} is odd`)
}


// check wheter given year is leap year or not

let givenYear = 2020;

if((givenYear%400 == 0) && (givenYear%4==0) || (givenYear%100 != 0))
{
    console.log(`${givenYear} is leap year`);
}
else
{
    console.log(`${givenYear} is not a leap year`);
}