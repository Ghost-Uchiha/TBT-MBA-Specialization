const questions = [
	{ question: "Do you have good communication skills ?", value: ["Marketing","HR"] },
	{ question: "Are you an innovative thinker ?", value: ["Marketing"] },
	{ question: "Are you good with huge data/numbers ?", value: ["Finance"] },
	{ question: "Are you willing to learn the basics of the specialisation before joining that specialisation ?", value: ["Finance"] },
	{ question: "Do you make any effort necessary to accomplish the task?", value: ["Marketing"] },
	{ question: "Are you good at conducting reasearch on the internet ?", value: ["Marketing"] },
	{ question: "Are you comfortable working with teams ? Are you a team player ?", value: ["Marketing","HR"] },
	{ question: "Do you love coaching others ? Do you love training others ?", value: ["HR"] },
	{ question: "Do you remain cool under pressure ?", value: ["Finance"] },
	{ question: "Can you use predictive analysis ? Can you use logic and connect the dots between events ?", value: ["Finance"] },
	{ question: "Are you good at critical/analytical thinking ?", value: ["Finance","Operations","IT"] },
	{ question: "Are you good at event organisation/management ?", value: ["HR"] },
	{ question: "Are you good at monitoring and supervision ?", value: ["HR","Operations","IT"] },
	{ question: "Are you a good planner ?", value: ["Operations","IT"] },
	{ question: "Do you easily adapt to the situations at hand ?", value: ["Operations","IT"] },
	{ question: "Are you good with time management ?", value: ["Operations"] },
	{ question: "Are you computer literate ?", value: ["IT"] },
	{ question: "Do you have good leadership skills ?", value: ["Finance","Operations","IT","HR","Marketing"] },
	{ question: "Do you take quick decisions ?", value: ["Finance","Operations","IT","HR","Marketing"] },
	{ question: "Do you have an entrepreneurial spirit ? Do you like to take initiatives ?", value: ["Finance","Operations","IT","HR","Marketing"] }

  ];
  
  
  const categories = [
	{ name: "Marketing", description: "A Marketing MBA is a specialized graduate degree that focuses on developing expertise in marketing strategy, consumer behaviour, market research, and brand management. This program combines core business principles with specialized marketing courses to equip individuals with the knowledge and skills necessary to navigate the dynamic world of marketing. A Marketing MBA curriculum typically covers areas such as marketing analytics, digital marketing, product development, and marketing communications. Graduates of a Marketing MBA program often pursue careers in advertising, brand management, market research, or marketing consulting. This degree prepares professionals to create effective marketing strategies, build strong brands, and drive business growth in today's competitive marketplaces.", image: "image/Marketing.jpg" },
	{ name: "Finance", description: "A Finance MBA is a specialized graduate degree that equips individuals with the knowledge and skills needed to excel in the field of finance. It combines the principles of business administration with a deep understanding of financial analysis, investment management, and risk assessment. A Finance MBA program typically covers a wide range of topics such as	financial planning, corporate finance, derivatives, and portfolio management. Graduates of a Finance MBA program often pursue careers in investment banking, corporate finance,financial consulting, or asset management. This degree provides a solid foundation for professionals seeking to make strategic financial decisions and drive organizational success in today&#39;s complex financial landscape.", image: "image/Finance.jpg" },
	{ name: "Operations", description: "An Operations MBA is a specialized graduate degree that focuses on the management and optimization of business operations. This program combines core business principles with specialized coursework in operations management, supply chain management, logistics,process improvement, and project management. An Operations MBA equips individuals with the knowledge and skills necessary to streamline processes, increase efficiency, and maximize productivity within organizations. Graduates of an Operations MBA program often pursue careers as operations managers, supply chain analysts, project managers, or consultants. This degree prepares professionals to effectively manage resources, drive operational excellence, and contribute to the overall success of organizations in today&#39;s fast-paced and competitive business environment.", image: "image/operations.jpg" },
	{ name: "IT", description: "An IT MBA, or Information Technology MBA, is a specialized graduate degree that focuses on the intersection of business and technology. This program combines core business administration principles with specialized coursework in areas such as IT strategy, data analytics, cybersecurity, project management, and digital transformation. An IT MBA equips individuals with the knowledge and skills needed to lead and manage IT initiatives within organizations. Graduates of an IT MBA program often pursue careers as IT managers, technology consultants, data analysts, or business analysts. This degree prepares professionals to bridge the gap between technology and business objectives, leverage emerging technologies, and drive innovation and digital strategies in today&#39;s technology-driven business landscape.", image: "image/IT.jpg" },
	{ name: "HR", description: "An HR MBA, or Human Resources MBA, is a specialized graduate degree designed to develop professionals with advanced knowledge and skills in human resource management. This program focuses on the strategic aspects of HR, including talent acquisition, employee development, performance management, compensation and benefits, and organizational behaviour. HR MBAs blend business administration principles with specialized HR courses to equip individuals with the expertise necessary to navigate the complexities of managing human capital in organizations. Graduates of an HR MBA program often pursue careers as HR managers, talent acquisition specialists, training and development managers, or HR consultants. This degree prepares professionals to effectively lead and support the people management function within organizations and drive employee engagement and organizational success.", image: "image/HR.jpg" },

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
        document.getElementById('main-header').innerHTML = "ENTER YOUR EMAIL AND PHONE NUMBER TO SEE THE RESULT  ";
        document.getElementById('detail').innerHTML = "";
		document.getElementById('body').style.removeProperty('overflow')
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
		document.getElementById('guide').classList.add('hidden')
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
        alert("Please enter your phone number and email to see the results.");
        return;
    }

    if (!isValidEmail(gmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    addPhoneNumber(ph);
    addEmail(gmail);
	displayResults()
}
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("ph").addEventListener("focus", showDropdownph);
document.getElementById("ph").addEventListener("blur", showDropdownph);

})
	function showDropdownph() {
		const input = document.getElementById("ph");
    const dropdown = document.getElementById("previousPhoneNumbers");
	if (input.value.trim() !== "") {
		dropdown.style.display = "block";
	} else {
		dropdown.style.display = "none";
	}
}
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("gmail").addEventListener("focus", showDropdownemail);
document.getElementById("gmail").addEventListener("blur", showDropdownemail);

})
	function showDropdownemail() {
		const input = document.getElementById("gmail");
    const dropdown = document.getElementById("previousEmails");
		if (input.value.trim() !== "") {
			dropdown.style.display = "block";
		} else {
			dropdown.style.display = "none";
		}
	
		
}
function addPhoneNumber(number) {
    let phoneNumbers = getPhoneNumbers();

    // Check if the number already exists
    if (phoneNumbers.includes(number)) {
        return; // Don't add the number again
    }

    phoneNumbers.push(number);

    const selectPhone = document.getElementById("previousPhoneNumbers");
    const option = document.createElement("option");
    option.text = number;
    selectPhone.add(option);

    // Store the phone numbers in localStorage
    localStorage.setItem("phoneNumbers", JSON.stringify(phoneNumbers));
}

function addEmail(email) {
    let emails = getEmails();

    // Check if the email already exists
    if (emails.includes(email)) {
        return; // Don't add the email again
    }

    emails.push(email);

    const selectEmail = document.getElementById("previousEmails");
    const option = document.createElement("option");
    option.text = email;
    selectEmail.add(option);

    // Store the emails in localStorage
    localStorage.setItem("emails", JSON.stringify(emails));
}


function loadPreviousValues() {
    const phoneNumbers = getPhoneNumbers();
    const emails = getEmails();

    const selectPhone = document.getElementById("previousPhoneNumbers");
    const selectEmail = document.getElementById("previousEmails");

    // Clear previous options
    selectPhone.innerHTML = "";
    selectEmail.innerHTML = "";

    phoneNumbers.forEach((number) => {
        const option = document.createElement("option");
        option.text = number;
        selectPhone.add(option);
    });

    emails.forEach((email) => {
        const option = document.createElement("option");
        option.text = email;
        selectEmail.add(option);
    });
}


function getPhoneNumbers() {
    const phoneNumbers = localStorage.getItem("phoneNumbers");
    return phoneNumbers ? JSON.parse(phoneNumbers) : [];
}

function getEmails() {
    const emails = localStorage.getItem("emails");
    return emails ? JSON.parse(emails) : [];
}

function isValidEmail(email) {
    // Add your email validation logic here
    // This is a basic email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function fillPhoneNumber() {
    const selectPhone = document.getElementById("previousPhoneNumbers");
    const phoneNumberInput = document.getElementById("ph");
    const selectedPhoneNumber = selectPhone.options[selectPhone.selectedIndex].text;
    phoneNumberInput.value = selectedPhoneNumber;
}

function fillEmail() {
    const selectEmail = document.getElementById("previousEmails");
    const emailInput = document.getElementById("gmail");
    const selectedEmail = selectEmail.options[selectEmail.selectedIndex].text;
    emailInput.value = selectedEmail;
}

// Call the function to load previous values when the page loads
window.addEventListener("load", loadPreviousValues);

// Add event listeners to the dropdown menus
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("previousPhoneNumbers").addEventListener("change", fillPhoneNumber);
	document.getElementById("previousEmails").addEventListener("change", fillEmail);
  });
  

function restrictPhoneNumberInput(event) {
	const charCode = event.which ? event.which : event.keyCode;
	
    // Allow only numerical digits (0-9)
    if (charCode < 48 || charCode > 57) {
		event.preventDefault();
    }
}





function displayResults() {
	const maxScores = [];
	let maxScore = 0;
  
	// Find the maximum score
	for (const letter in counts) {
	  if (counts[letter] > maxScore) {
		maxScore = counts[letter];
	  }
	}
  
	// Find letters with the maximum score
	for (const letter in counts) {
	  if (counts[letter] === maxScore) {
		maxScores.push(letter);
	  }
	}
  
	const resultsContainer = document.getElementById('results-container');
  
	if (maxScores.length > 0) {
	  // Display results for each letter with the maximum score
	  maxScores.forEach((letter) => {
		const category = categories.find((cat) => cat.name === letter);
  
		if (category) {
		  const resultElement = document.createElement("div");
		  resultElement.className = "result-item";
		  resultElement.innerHTML = `
			<img src="${category.image}" alt="${category.description}">
			<h3>${category.name}</h3>
			<p>${category.description}</p>
		  `;
		  resultsContainer.appendChild(resultElement);
		}
	  });
	} else {
	  const resultElement = document.createElement("div");
	  resultElement.className = "result-item";
	  resultElement.textContent = "No valid letters entered.";
	  resultsContainer.appendChild(resultElement);
	}
  
	// Modify styles and hide/show elements if needed
	document.getElementById("heading").innerHTML = "";
	document.getElementById("main-header").innerHTML = "WHAT SUITS YOU...";
	document.getElementById("hid").classList.add("hidden");
	document.getElementById("container").style.height = "560px";
	document.getElementById('guide').classList.remove('hidden')
	  
 
	const resultDivs = document.querySelectorAll("#results-container > div");
	resultDivs.forEach((div) => {
	  div.style.backgroundColor = "transparent";
	  div.style.borderRadius = "10px";
	  
	  div.style.textAlign = "center";
	  div.style.width = "300px";
	});
  }
  
  
  



  
    
 
	 