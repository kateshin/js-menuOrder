// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText, appendage, print) {
  // attempt 1:
  // if (questionText === "Would you like fajitas?" && prompt(questionText) === "yes"){
  //   order = order + "fajitas";
  // }
  // else if (questionText === "Would you like fajitas?" && prompt(questionText) === "no"){
  // }
  // else{
  //
  // attempt 2:
  // var theirChoice= prompt(questionText);
  // if (print === yes){
  //   order= order + theirChoice + appendage + ", ";
  // }
  order= order + prompt(questionText)+ appendage + ", ";
  console.log(order);
}
  // your code goes here

// call the QUESTION function with the order options
question("What kind of meat? Chicken, beef, or tofu." , "");
question("What kind of rice? Brown or white." , " rice")
// question("Would you like fajitas?" , " fajitas")
question("What kind of bean? Black or pinto." , " bean")

function question2(questionText, type){
  var answer = prompt(questionText); // we are defining new variable and calling it "answer"
  if (answer === "yes"){
    order = order + type + ",";
  }
  else{}
}

question2("Would you like fajitas?", "fajitas") // fajitas is type

// output their order
document.write("<p>You ordered: " + order + "<p>");
