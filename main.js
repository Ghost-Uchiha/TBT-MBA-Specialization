const questions = [
	{ question: "Do you have good communication skills ?", value: ["Marketing","HR"] },
	{ question: "Are you an innovative thinker ?", value: ["Marketing"] },
	{ question: "Are you good with huge Data/numbers ?", value: ["Finance"] },
	{ question: "Are you willing to learn the basics of the specialisation before joining that specialisation ?", value: ["Finance"] },
	{ question: "Do you make any effort necessary to accomplish the task?", value: ["Marketing"] },
	{ question: "Are you good with reasearch on the internet ?", value: ["Marketing"] },
	{ question: "Are you comfortable working with teams ? /Are you a team player ?", value: ["Marketing","HR"] },
	{ question: "Do you love coachng others ? Do you love training others ?", value: ["HR"] },
	{ question: "Do you remain cool under pressure ?", value: ["Finance"] },
	{ question: "Can you use predictive analysis ? /Can you use logic and connect the dots between events ?", value: ["Finance"] },
	{ question: "Are you good at critical/analytical thinking ?", value: ["Finance","Operations","IT"] },
	{ question: "Are you good at even organisation ?", value: ["HR"] },
	{ question: "Are you good at monitoring and supervision ?", value: ["HR","Operations","IT"] },
	{ question: "Are you a good planner ?", value: ["Operations","IT"] },
	{ question: "Do you easily adapt to the situations at hand ?", value: ["Operations","IT"] },
	{ question: "Are you good with time management ?", value: ["Operations"] },
	{ question: "Are you computer literate ?", value: ["IT"] },
	{ question: "Do you have good leadership skills ?", value: ["Finance","Operations","IT","HR","Marketing"] },
	{ question: "Do you take quick decisions ?", value: ["Finance","Operations","IT","HR","Marketing"] },
	{ question: "Do you have an entrepreneurial spirit ?/ Do you like to take initiatives ?", value: ["Finance","Operations","IT","HR","Marketing"] }

  ];
  
  
  const categories = [
	{ name: "Marketing", description: "Marketers are responsible for planning, creating, and executing marketing campaigns to expand their company’s reach and potential customer pipeline. A marketing job description should include the necessary qualifications, responsibilities, and skills required for success in the role.'", image: "image/Marketing.jpeg" },
	{ name: "Finance", description: "Coordinate and execute financial transactions and activities, such as bill payment, invoicing, payroll, etc. Assist in the audit process by providing information and data as requested. Complete administrative tasks, such as filling out paperwork and filing records.", image: "image/Finance.jpeg" },
	{ name: "Operations", description: "Operations Managers oversee operational activities at every level of an organization. Their duties include hiring and training employees and managing quality assurance programs. An operations manager also strategizes process improvements to ensure everyone completes their tasks on schedule.", image: "image/operations.jpeg" },
	{ name: "IT", description: "An IT position generally involves managing and storing data using computers, software, databases, networks, and servers. As an IT professional, you may write programs, maintain networks, analyze systems, and provide technical support.", image: "image/IT.jpeg" },
	{ name: "HR", description: "A Human Resources (HR) Officer is responsible for managing every aspect of the employment process, including orientation and training new staff members. They also assist with payroll management, so employees receive their paychecks on time.", image: "image/HR.jpg" },

];
  
  const counts = { Marketing: 0, HR : 0 , Finance: 0, Operations: 0, IT: 0};
  
  var currentQuestionIndex = 0;
  var currentQuestion = questions[currentQuestionIndex];
  
  
  var resultsElement = document.getElementById("result");
  var score = 0; // initialize score variable to 0
  var falsecount = 0
 function changeQuestion(answer) {
    if (answer === "Agree") {
        currentQuestion.value.forEach((value) => {
            counts[value] += 100;
        });
    } else if (answer === "Maybe") {
        currentQuestion.value.forEach((value) => {
            counts[value] += 50;
        });
    } else {
        falsecount++;
    }

    currentQuestionIndex++;
    const countsEle = document.getElementById('count');
    countsEle.innerHTML = "";
    Object.entries(counts).forEach(([category, count]) => {
        const countEle = document.createElement("p");
        countEle.textContent = `${category} : ${count}`;
        countsEle.appendChild(countEle);
    });

    if (currentQuestionIndex >= questions.length) {
        document.getElementById('question').innerHTML = "";
        number.textContent = "";
        document.getElementById('main-header').innerHTML = "ENTER YOUR EMAIL AND PHONE NUMBER FOR SEE THE RESULT  ";
        document.getElementById('detail').innerHTML = "";
        // Get all elements with the class name 'hide-button'
var buttons = document.getElementsByClassName('bt');

// Iterate over the buttons and hide them
for (var i = 0; i < buttons.length; i++) {
  buttons[i].style.display = 'none';
}


        
        document.getElementById('container').style.height = "300px";
        document.getElementById('container').style.backgroundColor = "transparent";
        document.getElementById('hid').classList.remove('hidden');
		document.getElementById('heading').classList.add('hidden')
        document.getElementById('count').classList.add('hidden');
        document.getElementById('req').style.border = "1px solid #000";
        document.getElementById('req').style.borderRadius = "10px";
    }

    currentQuestion = questions[currentQuestionIndex];
    document.getElementById('number').innerHTML = `${currentQuestionIndex + 1} of ${questions.length}`;
   document.getElementById('question').innerHTML = currentQuestion.question;
}

  
  
  
  
  function display() {
	
    const ph = document.getElementById("ph").value.trim();
    const gmail = document.getElementById("gmail").value.trim();
    
    if (ph === "" || gmail === "") {
        alert("Please enter your name and Email to see the results.");
        return;
    }
	
	if (!isValidEmail(gmail)) {
		alert("Please enter a valid Email address.");
		return;
	}
		displayResults()
	
    
    
}

function isValidEmail(email) {
	// Regular expression to validate the email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
function restrictPhoneNumberInput(event) {
    const charCode = event.which ? event.which : event.keyCode;

    // Allow only numerical digits (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  
function displayResults() {
	let maxScore = 0;
	let maxLetter = '';
	for (const letter in counts) {
	  if (counts[letter] > maxScore) {
		maxScore = counts[letter];
		maxLetter = letter;
	  }
	}
  
	const category = categories.find((cat) => cat.name === maxLetter);
  
	const resultsContainer = document.getElementById('results-container');
	
	if (category) {
	  const resultElement = document.createElement("div");
	  resultElement.className = "result-item";
	  resultElement.innerHTML = `
		<img src="${category.image}" alt="${category.description}">
		<h3>${category.name}</h3>
		<p>${category.description}</p>
	  `;
	  resultsContainer.appendChild(resultElement);
	} else {
	  const resultElement = document.createElement("div");
	  resultElement.className = "result-item";
	  resultElement.textContent = "Invalid letter entered.";
	  resultsContainer.appendChild(resultElement);
	}
  
	// Modify styles and hide/show elements if needed
	document.getElementById("heading").innerHTML = "";
	document.getElementById("main-header").innerHTML = "WHAT SUITS YOU...";
	document.getElementById("count").style.display = "none";
	document.getElementById("hid").classList.add("hidden");
	document.getElementById("container").style.height = "560px";
  
	const resultDivs = document.querySelectorAll("#results-container > div");
	resultDivs.forEach((div) => {
	  div.style.backgroundColor = "transparent";
	  div.style.borderRadius = "10px";
	  div.style.padding = "1rem";
	  div.style.textAlign = "center";
	  div.style.width = "300px";
	});
  }
  
  
    
 
	 