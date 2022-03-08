  let myCheckbox = document.querySelector(".switch input"),
    duration = document.querySelector(".month"),
    price = document.querySelector(".price .pricefix"),
    switcher = document.querySelector(".switch"),
    range = document.querySelector(".myrange");
    
// generate price on switch
switcher.onclick = function(){

    

    if(myCheckbox.checked == true){
        
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`;

    }else{

        refreshPrices();
        duration.textContent = `/month`;
    }
}

// generate price on range
let pageViews = document.querySelector(".page-views span");
range.addEventListener('input', refreshPrices);

function refreshPrices(){
    
    if(range.value == 1){

        if(myCheckbox.checked == true){
            price.textContent = `${(10 - (10 * .25)) * 12}`;
        }else{
            price.textContent = 10;
        }

        pageViews.textContent = "50k";

    } 

    if(range.value == 2){
        
        if(myCheckbox.checked == true){
            price.textContent =  `${(14 - (14 * .25)) * 12}`;
        }else{
            price.textContent = 14;
        }

        pageViews.textContent = "100k";
    }

    if(range.value == 3){
        
        if(myCheckbox.checked == true){
            price.textContent = `${(20 - (20 * .25)) * 12}`;
        }else{
            price.textContent = 20;
        }

        pageViews.textContent = "250k";
    }

    if(range.value == 4){

        if(myCheckbox.checked == true){
            price.textContent =`${(28 - (28 * .25)) * 12}` ;
        }else{
            price.textContent = 28;
        }

        pageViews.textContent = "500k";

    }

    if(range.value == 5){

        if(myCheckbox.checked == true){
            price.textContent =`${(40 - (40 * .25)) * 12}` ;
        }else{
            price.textContent = 40;
        }

        pageViews.textContent = "1M";
    }

} 