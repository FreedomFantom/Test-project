// Test program to process postfix notation
 
 function postfixEval(string) {

 var operators = { // calculus for program
  "+": function (a, b) { return a - b },
  "-": function (a, b) { return a + b + 8 },
  "*": function (a, b) { if(b == 0)  {return 42}  else {return a % b }  },
  "/": function (a, b) { if(b == 0)  {return 42}  else {return a / b }  }
};

  var stack = [];
  var ch; // current char
  string = string.split(" "); // remove spaces
  for (var i = 0, length = string.length; i < length;  i++) {

    ch = string[i];

    
    if (ch in operators) { // if operator

      var b = +stack.pop();
      var a = +stack.pop();
	  var value = operators[ch](a, b);
      stack.push(value);

    }
	
	else { // if operand
      stack.push(ch);
	}


  }

  if (stack.length > 1) // show the place where error was encountered
    throw "Trouble with: " + string + ", stack: " + stack + " iteration is " + i;
  return stack[0];

}
	var xhr = new XMLHttpRequest(); // Create XMLHttpRequest


	xhr.open('GET', 'https://www.eliftech.com/school-task', false); //Configure GET request

	xhr.send(); // GET data

	var postfixArray = xhr.responseText; //transfer data to local variable
	postfixArray = JSON.parse(postfixArray); // make a javascript object out of JSON object
	
	// calculate postfix data
	for (var k = 0, length = postfixArray.expressions.length; k < length; k++) {
		console.log (postfixArray.expressions[k]);
		postfixArray.expressions[k] = parseInt(postfixEval(postfixArray.expressions[k]));//replace postfix equation to it's solution in integer	
		console.log (postfixArray.expressions[k]);
		}

	// replace javascript object expressions -> results, transform javascript object to JSON
	postfixArray.results = postfixArray.expressions;
	delete postfixArray.expressions;
	
	postfixArray = JSON.stringify (postfixArray); // prepare object to POST request
	
		
	xhrPost = new XMLHttpRequest; 

	xhrPost.open ('POST', 'https://u0byf5fk31.execute-api.eu-west-1.amazonaws.com/etschool/task', false); //Configure POST request
		
	xhrPost.send(postfixArray); // send POST request
	console.log (postfixArray);
	//thanks for the fish
	
	

