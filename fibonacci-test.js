//define first two digits
var sequence = [1,1];
var sequenceOutput = prompt("How many digits of the Fibonacci sequence would you like to see?");
//verify input
if (typeof(sequenceOutput === "number") && sequenceOutput >= 2)
{
  //run program
  for (i = 2;i < sequenceOutput; i++){
    sequence[i] = sequence[i-1] + sequence[i-2];
  }
 //print fibonacci sequence
 document.getElementById("dev").innerHTML = sequence;
}
else if (sequenceOutput === 1)
{
  document.getElementById("dev").innerHTML = sequence[0];
}
else
{
  document.getElementById("dev").innerHTML = sequenceOutput+" is not a valid positive integer.";
  //rerun prompt?
}
