const convert=()=>{
    let result = document.getElementById('Fahrenheit').value;
    let process = (5/9) * (result-32);
    document.getElementById('h1').textContent=process;
    }
    