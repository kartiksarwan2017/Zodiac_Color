const zodiac = document.getElementById('zodiac');

const body = document.body;

// console.log(body);

const changeBackground = () => {

    // console.log(zodiac.value);

    switch(zodiac.value){

        case "aries": 
           body.style.backgroundColor = "#fc0303";
           break;

        case "tarus": 
           body.style.backgroundColor = "#03fc6f";
           break;
        
           case "gemini": 
           body.style.backgroundColor = "#fce514";
           break;
           
           case "cancer": 
           body.style.backgroundColor = "#fffcf7";
           break;

           case "leo": 
           body.style.backgroundColor = "#0390fc";
           break;

           case "virgo": 
           body.style.backgroundColor = "#fcf003";
           break;

           case "libra": 
           body.style.backgroundColor = "#03b1fc";
           break;

           case "scorpio": 
           body.style.backgroundColor = "#fcad03";
           break;

           case "sagittarius": 
           body.style.backgroundColor = "#0313fc";
           break;

           case "aquarius": 
           body.style.backgroundColor = "#4e03fc";
           break;

           case "capricorn": 
           body.style.backgroundColor = "#a903fc";
           break;

           case "pisces": 
           body.style.backgroundColor = "#fc03a9";
           break;

           default:
            body.style.backgroundColor = "#fff";
            break;

    }
};