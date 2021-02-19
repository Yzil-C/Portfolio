function sleep(ms) 
{
    return new Promise
    (
        resolve => setTimeout(resolve, ms)
    );
}



async function fillCircles()
{
    var firstCircle = document.getElementById("firstCircle");
    var secondCircle = document.getElementById("secondCircle");
    var thirdCircle = document.getElementById("thirdCircle");
    var fourthCircle = document.getElementById("fourthCircle");

    var firstText = document.getElementById("firstText");
    var secondText = document.getElementById("secondText");
    var thirdText = document.getElementById("thirdText");
    var fourthText = document.getElementById("fourthText");

    var sCircle = document.getElementById("SCircle");
    var oCircle = document.getElementById("OCircle");
    var pCircle = document.getElementById("PCircle");
    var hCircle = document.getElementById("HCircle");
    var iCircle = document.getElementById("ICircle");
    var aCircle = document.getElementById("ACircle");
    
    var sText = document.getElementById("SText");
    var oText = document.getElementById("OText");
    var pText = document.getElementById("PText");
    var hText = document.getElementById("HText");
    var iText = document.getElementById("IText");
    var aText = document.getElementById("AText");




    var toWrite = ["#","A","!","/",";","!","*","µ","$","Q","I","(","5","M","Q","0","1","E","C","£","µ","#","M","C","B","G"]
    var index = 1
    for(var cpt = 0; cpt<=83; cpt++)
    {
        var newClassName = "c100 p" + cpt +" big";
        firstCircle.className = newClassName;
        firstText.innerHTML = toWrite[cpt%25];
        await sleep(10);
    }
    firstText.innerHTML = "Y";
    index++;
    for(var cpt = 0; cpt<=83; cpt++)
    {
        var newClassName = "c100 p" + cpt +" big";
        secondCircle.className = newClassName;
        secondText.innerHTML = toWrite[cpt%25];
        await sleep(10);
    }
    secondText.innerHTML = "N";
    index++;
    for(var cpt = 0; cpt<=83; cpt++)
    {
        var newClassName = "c100 p" + cpt +" big";
        thirdCircle.className = newClassName;
        thirdText.innerHTML = toWrite[cpt%25];
        await sleep(10);
    }
    thirdText.innerHTML = "O";
    index++;
    for(var cpt = 0; cpt<=83; cpt++)
    {
        var newClassName = "c100 p" + cpt +" big";
        fourthCircle.className = newClassName;
        fourthText.innerHTML = toWrite[cpt%25];
        await sleep(10);
    }
    fourthText.innerHTML = "V";
    
    sCircle.className = "c100 p17 big";
    sText.innerHTML = "S";

    await sleep(500);

    oCircle.className = "c100 p17 big";
    oText.innerHTML = "O";

    await sleep(500);

    pCircle.className = "c100 p17 big";
    pText.innerHTML = "P";

    await sleep(500);

    hCircle.className = "c100 p17 big";
    hText.innerHTML = "H";

    await sleep(500);

    iCircle.className = "c100 p17 big";
    iText.innerHTML = "I";

    await sleep(500);

    aCircle.className = "c100 p17 big";
    aText.innerHTML = "A";

    await sleep(500);

}
