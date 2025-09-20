const copyBtn = document.getElementById("copy-btn");
const passwordContainer = document.getElementById("password");
const range = document.getElementById("range");
const lengthSpan = document.getElementById("password-length")
const UppercaseChoice = document.getElementById("Uppercase");
const LowercaseChoice = document.getElementById("Lowercase");
const numbersChoice = document.getElementById("Numbers");
const symbolsChoice = document.getElementById("symbols");
const genBtn = document.getElementById("generate-btn");
const strengthSpan = document.getElementById("strength")
const progress = document.getElementById("progress")

copyBtn.addEventListener("click", ()=> {
    passwordContainer.select()
    navigator.clipboard.writeText(passwordContainer.value)
})

range.addEventListener('mousemove', () => {
    lengthSpan.textContent = range.value;
})

genBtn.addEventListener("click", ()=> {
    let choices = [UppercaseChoice.checked, LowercaseChoice.checked, numbersChoice.checked, symbolsChoice.checked];
    let password = generate(choices);
    showPassword(password , choices);
})

const Upper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const Lower = 'qwertyuiopasdfghjklzxcvbnm';
const nums = '1234567890';
const symbols = '!@#$%^&*()_+?/><\\{}:[].,;'
const elements = [Upper, Lower, nums ,symbols ]

function generate(choices) {
    let passwordElements = [];
    
    for(let i = 0; i < choices.length; i++ ) {
        if (choices[i]) passwordElements.push(elements[i]);

    }
    let length = range.value;
    let password = '';
    for(let i = 0 ; i < length ; i++) {
        let elementIndex = Math.floor((passwordElements.length)*Math.random() );
        let charIndex = Math.floor((passwordElements[elementIndex].length)*Math.random());
        password += passwordElements[elementIndex][charIndex];
    }
    return password;
}

function showPassword(password, choices) {
    let strengthIndicator = choices.filter((choice) => choice).length ;
    passwordContainer.value = password;
    switch(strengthIndicator) {
        case 1:
            strengthSpan.textContent = 'weak';
            progress.style.width = '25%';
            progress.style.backgroundColor = '#f9837f';
            break
        case 2: 
            strengthSpan.textContent = 'medium';
            progress.style.width = '50%';
            progress.style.backgroundColor = '#fdd28e';
            break
        case 3: 
            strengthSpan.textContent = 'strong';
            progress.style.width = '75%';
            progress.style.backgroundColor = '#6ad58f';
            break
        case 4: 
            strengthSpan.textContent = 'strong';
            progress.style.width = '100%';
            progress.style.backgroundColor = '#6ad58f';
            break;
        
    }
}
