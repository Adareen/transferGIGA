
let num=[];
num.length=5;
let max=0;
for(let i=0; i<num.length;i++)
{
    num[i]=Math.ceil(Math.random()*100);
    if(num[i]>max)
    {
        max=num[i];
    }
}
console.log(max);


