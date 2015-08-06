var sequence[0] = 1;
var sequenceOutput = prompt("How many digits of the Fibonacci sequence would you like to see?");
//test input is a valid
if (typeof sequenceOutput === "number" && sequenceOutput >= 1)
{
  //run program
  for (i = 1, i++, i<=sequenceOutput){
    sequence = sequence[i] + sequence[i-1];
}
else
{
  console.log(sequence+" is not valid.");
  //rerun prompt
}
