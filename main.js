let option1 = document.getElementById('celsius')
let option2 = document.getElementById('Farenheight')
document.getElementById('submit').onclick= function(){
    let temperature = document.getElementById('temp').value
    let answer

    if(option1.checked){
        answer = toCel(temperature)
        answer = answer.toLocaleString(undefined,{style:"unit",unit:"celsius"})
        document.getElementById('answer').innerHTML =`Answer: ${answer} `

    }

    else if(option2.checked){


        answer = toFar(temperature)
        answer= answer.toLocaleString(undefined,{style:"unit",unit:"fahrenheit"})
        document.getElementById('answer').innerHTML =`Answer: ${answer} `

    }

}


function toCel(t){
    return 5/9*(t - 32)
}



function toFar(t){
    return  (t * 9/5) + 32 
}