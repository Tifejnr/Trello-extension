localStorage.clear()
let emailValue =[];
let stringedId
let idFinally;
let data;
let lenghtID ;
const apiKey = 'eda71c6538a148f072216a00d82c07e9'
const apiToken = '2ebc1d7d22cebcbb4b31049c25b34b0ccf2211b7e67e864f61b84a90ef9f23b5'
let tifKey = '3871b737b5e006da43d0e48f6d8f68ee';
let tifToken = '28b08cece647e20c80627de1e1c31b1a180d255b6cfaa9437df764c1a48c164a'
let emailEl = document.getElementById("result"); 
let addmailEl = document.getElementById("addmail-error");
let addmailEl2 = document.getElementById("addmail-error2");
let serviceErrorEl = document.getElementById("service-error");
let serviceErrorEl2 = document.getElementById("service-error2");
let submitEl = document.getElementById("submit-el")
let successEl = document.getElementById("success");
let emailEmptyErr = document.getElementById("email-error");
let emailEmptyErr2 = document.getElementById("email-error2");
let sendingProgressEl = document.getElementById("sendin-progress");
let sendingProgressEl2 = document.getElementById("sendin-progress2");
let refreshEl = document.getElementById("btn-reload");
let fetchingBoardsEl = document.getElementById("fetch-progress2");


refreshEl.addEventListener("click", function(){
    window.location.reload();
window.location.reload();
return false;
})

// Getting ALL boards//
function getReady (){ 

    fetchBoard0 ();
    setTimeout(() => {
    
        lenghtIDCheck()
       }, 1500); 
    }

window.onload = getReady;

function lenghtIDCheck(){
    if (lenghtID == '' || lenghtID == null){
        serviceErrorEl.innerHTML = `No Internet Connection`
        serviceErrorEl2.innerHTML =`Refresh and Retry`
        emailEmptyErr.innerHTML =''
        emailEmptyErr2.innerHTML =''
    } 
    else{
        serviceErrorEl.innerHTML = '';
        serviceErrorEl2.innerHTML = '';
        successEl.innerHTML = `Enter email to be added`
    }
}


submitEl.addEventListener("click", function (){
   

    emailValue.push(emailEl.value)
    console.log(emailValue)
   start ()
    
    emailEl.value =''
})
                
//Recategorising   boards//

function addBoard0(){
    fetchBoard0();
    }
    
    function addBoard1(){
        addBoard0()
        fetchBoard1();}
    
    function addBoard2(){
        addBoard1()
        fetchBoard2();};
    
    function addBoard3(){
        addBoard2()
        fetchBoard3();}
    
    function addBoard4(){
        addBoard3()
        fetchBoard4();} 
        
    function addBoard5(){
        addBoard4()
        fetchBoard5();} 
    
    function addBoard6(){
        addBoard5()
        fetchBoard6();}
    
    function addBoard7(){
        addBoard6()
        fetchBoard7();}
    
    function addBoard8(){
        addBoard7()
        fetchBoard8();}

    function addBoard9(){
        addBoard8()
        fetchBoard9();}
        
function addBoard10(){
        addBoard9()
        fetchBoard10();}

function addBoard11(){
        addBoard10()
        fetchBoard11();}

function addBoard12(){
        addBoard11()
        fetchBoard12();}

function addBoard13(){
        addBoard12()
        fetchBoard13();}

function addBoard14(){
        addBoard13()
        fetchBoard14();}

function addBoard15(){
        addBoard14()
        fetchBoard15();}

function addBoard16(){
        addBoard15()
        fetchBoard16();}

function addBoard17(){
        addBoard16()
        fetchBoard17();}

function addBoard18(){
        addBoard17()
        fetchBoard18();}
        
function addBoard19(){
    addBoard18()
    fetchBoard19();}
    
function addBoard20(){
    addBoard19()
    fetchBoard20();}
    
function addBoard21(){
    addBoard20()
    fetchBoard21();}
    
function addBoard22(){
    addBoard21()
    fetchBoard22();}
    
function addBoard23(){
    addBoard22()
    fetchBoard23();}
    
function addBoard24(){
    addBoard23()
    fetchBoard24();}
    
function addBoard25(){
    addBoard24()
    fetchBoard25();}
    
function addBoard26(){
    addBoard25()
    fetchBoard26();}
    
function addBoard27(){
    addBoard26()
    fetchBoard27();}
    
function addBoard28(){
    addBoard27()
    fetchBoard28();}
    
function addBoard29(){
    addBoard28()
    fetchBoard29();}
    
function addBoard30(){
    addBoard29()
    fetchBoard30();}

    function addBoard31(){
        addBoard30()
        fetchBoard31();}
        
    function addBoard32(){
        addBoard31()
        fetchBoard32();}
        
    function addBoard33(){
        addBoard32()
        fetchBoard33();}
        
    function addBoard34(){
        addBoard33()
        fetchBoard34();}
        
    function addBoard35(){
        addBoard34()
        fetchBoard35();}
        
    function addBoard36(){
        addBoard35()
        fetchBoard36();}
        
    function addBoard37(){
        addBoard36()
        fetchBoard37();}
        
    function addBoard38(){
        addBoard37()
        fetchBoard38();}
        
    function addBoard39(){
        addBoard38()
        fetchBoard39();}
        
    function addBoard40(){
        addBoard39()
        fetchBoard40();}

    function addBoard41(){
    addBoard40()
    fetchBoard41();}
    
function addBoard42(){
    addBoard41()
    fetchBoard42();}
    
function addBoard43(){
    addBoard42()
    fetchBoard43();}
    
function addBoard44(){
    addBoard43()
    fetchBoard44();}
    
function addBoard45(){
    addBoard44()
    fetchBoard45();}
    
function addBoard46(){
    addBoard45()
    fetchBoard46();}
    
function addBoard47(){
    addBoard46()
    fetchBoard47();}
    
function addBoard48(){
    addBoard47()
    fetchBoard48();}
    
function addBoard49(){
    addBoard48()
    fetchBoard49();}
    
function addBoard50(){
    addBoard49()
    fetchBoard50();}

    function addBoard51(){
        addBoard50()
        fetchBoard51();}
        
    function addBoard52(){
        addBoard51()
        fetchBoard52();}
        
    function addBoard53(){
        addBoard52()
        fetchBoard53();}
        
    function addBoard54(){
        addBoard53()
        fetchBoard54();}
        
    function addBoard55(){
        addBoard54()
        fetchBoard55();}
        
    function addBoard56(){
        addBoard55()
        fetchBoard56();}
        
    function addBoard57(){
        addBoard56()
        fetchBoard57();}
        
    function addBoard58(){
        addBoard57()
        fetchBoard58();}
        
    function addBoard59(){
        addBoard58()
        fetchBoard59();}
        
    function addBoard60(){
        addBoard59()
        fetchBoard60();}

function addBoard61(){
    addBoard60()
    fetchBoard61();}
    
function addBoard62(){
    addBoard61()
    fetchBoard62();}
    
function addBoard63(){
    addBoard62()
    fetchBoard63();}
    
function addBoard64(){
    addBoard63()
    fetchBoard64();}
    
function addBoard65(){
    addBoard64()
    fetchBoard65();}
    
function addBoard66(){
    addBoard65()
    fetchBoard66();}
    
function addBoard67(){
    addBoard66()
    fetchBoard67();}
    
function addBoard68(){
    addBoard67()
    fetchBoard68();}
    
function addBoard69(){
    addBoard68()
    fetchBoard69();}
    
function addBoard70(){
    addBoard69()
    fetchBoard70();}

function addBoard71(){
    addBoard70()
    fetchBoard71();}
    
function addBoard72(){
    addBoard71()
    fetchBoard72();}
    
function addBoard73(){
    addBoard72()
    fetchBoard73();}
    
function addBoard74(){
    addBoard73()
    fetchBoard74();}
    
function addBoard75(){
    addBoard74()
    fetchBoard75();}
    
function addBoard76(){
    addBoard75()
    fetchBoard76();}
    
function addBoard77(){
    addBoard76()
    fetchBoard77();}
    
function addBoard78(){
    addBoard77()
    fetchBoard78();}
    
function addBoard79(){
    addBoard78()
    fetchBoard79();}
    
function addBoard80(){
    addBoard79()
    fetchBoard80();}

function addBoard81(){
    addBoard80()
    fetchBoard81();}
    
function addBoard82(){
    addBoard81()
    fetchBoard82();}
    
function addBoard83(){
    addBoard82()
    fetchBoard83();}
    
function addBoard84(){
    addBoard83()
    fetchBoard84();}
    
function addBoard85(){
    addBoard84()
    fetchBoard85();}
    
function addBoard86(){
    addBoard85()
    fetchBoard86();}
    
function addBoard87(){
    addBoard86()
    fetchBoard87();}
    
function addBoard88(){
    addBoard87()
    fetchBoard88();}
    
function addBoard89(){
    addBoard88()
    fetchBoard89();}
    
function addBoard90(){
    addBoard89()
    fetchBoard90();}
    
function addBoard91(){
    addBoard90()
    fetchBoard91();}
    
function addBoard92(){
    addBoard91()
    fetchBoard92();}
    
function addBoard93(){
    addBoard92()
    fetchBoard93();}
    
function addBoard94(){
    addBoard93()
    fetchBoard94();}
    
function addBoard95(){
    addBoard94()
    fetchBoard95();}
    
function addBoard96(){
    addBoard95()
    fetchBoard96();}
    
function addBoard97(){
    addBoard96()
    fetchBoard97();}
    
function addBoard98(){
    addBoard97()
    fetchBoard98();}
    
function addBoard99(){
    addBoard98()
    fetchBoard99();}
    
function addBoard100(){
    addBoard99()
    fetchBoard100();};
    



//


function addMember0(){
    fetchId0();
    }
    
    function addMember1(){
        addMember0()
        fetchId1();}
    
    function addMember2(){
        addMember1()
        fetchId2();};
    
    function addMember3(){
        addMember2()
        fetchId3();}
    
    function addMember4(){
        addMember3()
        fetchId4();} 
        
    function addMember5(){
        addMember4()
        fetchId5();} 
    
    function addMember6(){
        addMember5()
        fetchId6();}
    
    function addMember7(){
        addMember6()
        fetchId7();}
    
    function addMember8(){
        addMember7()
        fetchId8();}

    function addMember9(){
        addMember8()
        fetchId9();}
        
function addMember10(){
        addMember9()
        fetchId10();}

function addMember11(){
        addMember10()
        fetchId11();}

function addMember12(){
        addMember11()
        fetchId12();}

function addMember13(){
        addMember12()
        fetchId13();}

function addMember14(){
        addMember13()
        fetchId14();}

function addMember15(){
        addMember14()
        fetchId15();}

function addMember16(){
        addMember15()
        fetchId16();}

function addMember17(){
        addMember16()
        fetchId17();}

function addMember18(){
        addMember17()
        fetchId18();}
        
function addMember19(){
    addMember18()
    fetchId19();}
    
function addMember20(){
    addMember19()
    fetchId20();}
    
function addMember21(){
    addMember20()
    fetchId21();}
    
function addMember22(){
    addMember21()
    fetchId22();}
    
function addMember23(){
    addMember22()
    fetchId23();}
    
function addMember24(){
    addMember23()
    fetchId24();}
    
function addMember25(){
    addMember24()
    fetchId25();}
    
function addMember26(){
    addMember25()
    fetchId26();}
    
function addMember27(){
    addMember26()
    fetchId27();}
    
function addMember28(){
    addMember27()
    fetchId28();}
    
function addMember29(){
    addMember28()
    fetchId29();}
    
function addMember30(){
    addMember29()
    fetchId30();}

    function addMember31(){
        addMember30()
        fetchId31();}
        
    function addMember32(){
        addMember31()
        fetchId32();}
        
    function addMember33(){
        addMember32()
        fetchId33();}
        
    function addMember34(){
        addMember33()
        fetchId34();}
        
    function addMember35(){
        addMember34()
        fetchId35();}
        
    function addMember36(){
        addMember35()
        fetchId36();}
        
    function addMember37(){
        addMember36()
        fetchId37();}
        
    function addMember38(){
        addMember37()
        fetchId38();}
        
    function addMember39(){
        addMember38()
        fetchId39();}
        
    function addMember40(){
        addMember39()
        fetchId40();}

    function addMember41(){
    addMember40()
    fetchId41();}
    
function addMember42(){
    addMember41()
    fetchId42();}
    
function addMember43(){
    addMember42()
    fetchId43();}
    
function addMember44(){
    addMember43()
    fetchId44();}
    
function addMember45(){
    addMember44()
    fetchId45();}
    
function addMember46(){
    addMember45()
    fetchId46();}
    
function addMember47(){
    addMember46()
    fetchId47();}
    
function addMember48(){
    addMember47()
    fetchId48();}
    
function addMember49(){
    addMember48()
    fetchId49();}
    
function addMember50(){
    addMember49()
    fetchId50();}

    function addMember51(){
        addMember50()
        fetchId51();}
        
    function addMember52(){
        addMember51()
        fetchId52();}
        
    function addMember53(){
        addMember52()
        fetchId53();}
        
    function addMember54(){
        addMember53()
        fetchId54();}
        
    function addMember55(){
        addMember54()
        fetchId55();}
        
    function addMember56(){
        addMember55()
        fetchId56();}
        
    function addMember57(){
        addMember56()
        fetchId57();}
        
    function addMember58(){
        addMember57()
        fetchId58();}
        
    function addMember59(){
        addMember58()
        fetchId59();}
        
    function addMember60(){
        addMember59()
        fetchId60();}

function addMember61(){
    addMember60()
    fetchId61();}
    
function addMember62(){
    addMember61()
    fetchId62();}
    
function addMember63(){
    addMember62()
    fetchId63();}
    
function addMember64(){
    addMember63()
    fetchId64();}
    
function addMember65(){
    addMember64()
    fetchId65();}
    
function addMember66(){
    addMember65()
    fetchId66();}
    
function addMember67(){
    addMember66()
    fetchId67();}
    
function addMember68(){
    addMember67()
    fetchId68();}
    
function addMember69(){
    addMember68()
    fetchId69();}
    
function addMember70(){
    addMember69()
    fetchId70();}

function addMember71(){
    addMember70()
    fetchId71();}
    
function addMember72(){
    addMember71()
    fetchId72();}
    
function addMember73(){
    addMember72()
    fetchId73();}
    
function addMember74(){
    addMember73()
    fetchId74();}
    
function addMember75(){
    addMember74()
    fetchId75();}
    
function addMember76(){
    addMember75()
    fetchId76();}
    
function addMember77(){
    addMember76()
    fetchId77();}
    
function addMember78(){
    addMember77()
    fetchId78();}
    
function addMember79(){
    addMember78()
    fetchId79();}
    
function addMember80(){
    addMember79()
    fetchId80();}

function addMember81(){
    addMember80()
    fetchId81();}
    
function addMember82(){
    addMember81()
    fetchId82();}
    
function addMember83(){
    addMember82()
    fetchId83();}
    
function addMember84(){
    addMember83()
    fetchId84();}
    
function addMember85(){
    addMember84()
    fetchId85();}
    
function addMember86(){
    addMember85()
    fetchId86();}
    
function addMember87(){
    addMember86()
    fetchId87();}
    
function addMember88(){
    addMember87()
    fetchId88();}
    
function addMember89(){
    addMember88()
    fetchId89();}
    
function addMember90(){
    addMember89()
    fetchId90();}
    
function addMember91(){
    addMember90()
    fetchId91();}
    
function addMember92(){
    addMember91()
    fetchId92();}
    
function addMember93(){
    addMember92()
    fetchId93();}
    
function addMember94(){
    addMember93()
    fetchId94();}
    
function addMember95(){
    addMember94()
    fetchId95();}
    
function addMember96(){
    addMember95()
    fetchId96();}
    
function addMember97(){
    addMember96()
    fetchId97();}
    
function addMember98(){
    addMember97()
    fetchId98();}
    
function addMember99(){
    addMember98()
    fetchId99();}
    
function addMember100(){
    addMember99()
    fetchId100();};


//Recategorise each member ID to fit LenghtID//


function displayBoardFetched (){
   fetchingBoardsEl.innerHTML =`Fetching Boards 1- ${seriaNo} ...`
   successEl.innerHTML = `Duration: ${durationFetching}secs `
   emailEmptyErr.innerHTML =''
   emailEmptyErr2.innerHTML =''
   serviceErrorEl.innerHTML = ''
   serviceErrorEl2.innerHTML =''
   sendingProgressEl2.innerHTML =''
   sendingProgressEl.innerHTML =''
   addmailEl.innerHTML =''
   addmailEl2.innerHTML =''  
}

//Fetching Each Board ID//

async function fetchBoard0(){
    seriaNo = 1
   
    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`        
    )
   
    
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)
    

    eachArray = (data[0])
     console.log(eachArray)

    idFinally = (eachArray.id)
     stringedId0 = idFinally
    console.log(stringedId0)

    return stringedId0 , lenghtID

}

// array 2
async function fetchBoard1(){
    seriaNo = 2;

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[1])
     console.log(eachArray)
    displayBoardFetched ()
    

    idFinally = (eachArray.id)
     stringedId1 = idFinally
    console.log(stringedId1)
   
    return stringedId1 , lenghtID

}

//Id3

async function fetchBoard2(){
    seriaNo = 3;

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[2])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
       stringedId2 = idFinally
    console.log(stringedId2)
   
    return stringedId2 , lenghtID

}

//id4//

async function fetchBoard3(){
    seriaNo = 4;

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[3])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
       stringedId3 = idFinally
    console.log(stringedId3)
   
    return stringedId3 , lenghtID

}

async function fetchBoard4(){

    seriaNo = 5;
    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[4])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
      stringedId4 = idFinally
    console.log(stringedId4)

    return stringedId4 , lenghtID

}

async function fetchBoard5(){

    seriaNo = 6;
    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[5])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
      stringedId5 = idFinally
    console.log(stringedId5)
   
    return stringedId5 , lenghtID

}

async function fetchBoard6(){

    seriaNo = 7;
    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[6])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
      stringedId6 = idFinally
    console.log(stringedId6)
   
    return stringedId6 , lenghtID

}

async function fetchBoard7(){
    seriaNo = 8;

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[7])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
      stringedId7 = idFinally
    console.log(stringedId7)
   
    return stringedId7 , lenghtID

}

async function fetchBoard8(){
    seriaNo = 9;

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[8])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
     stringedId8 = idFinally
    console.log(stringedId8)
   
    return stringedId8 , lenghtID

}

async function fetchBoard9(){
    seriaNo = 10;

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[9])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
      stringedId9 = idFinally
    console.log(stringedId9)
   
    return stringedId9 , lenghtID

}

async function fetchBoard10(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[10])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
      stringedId10 = idFinally
    console.log(stringedId10)
   
    return stringedId10 , lenghtID

}

async function fetchBoard11(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[11])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
     stringedId11 = idFinally
    console.log(stringedId11)
   
    return stringedId11 , lenghtID

}

async function fetchBoard12(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[12])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
     stringedId12 = idFinally
    console.log(stringedId12)
   
    return stringedId12 , lenghtID

}

async function fetchBoard13(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[13])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
     stringedId13 = idFinally
    console.log(stringedId13)
   
    return stringedId13 , lenghtID

}

async function fetchBoard14(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`     
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[14])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
     stringedId14 = idFinally
    console.log(stringedId14)
   
    return stringedId14 , lenghtID

}

async function fetchBoard15(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[15])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId15 = idFinally
    console.log(stringedId15)
   
    return stringedId15 , lenghtID

}

async function fetchBoard16(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[16])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId16 = idFinally
    console.log(stringedId16)
   
    return stringedId16 , lenghtID

}

async function fetchBoard17(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[17])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId17 = idFinally
    console.log(stringedId17)
   
    return stringedId17 , lenghtID

}

async function fetchBoard18(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[18])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId18 = idFinally
    console.log(stringedId18)
   
    return stringedId18 , lenghtID

}

async function fetchBoard19(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[19])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId19 = idFinally
    console.log(stringedId19)
   
    return stringedId19 , lenghtID

}

async function fetchBoard20(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[20])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId20 = idFinally
    console.log(stringedId20)
   
    return stringedId20 , lenghtID

}

async function fetchBoard21(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[21])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId21 = idFinally
    console.log(stringedId21)
   
    return stringedId21 , lenghtID

}

async function fetchBoard22(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[22])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId22 = idFinally
    console.log(stringedId22)
   
    return stringedId22 , lenghtID

}

async function fetchBoard23(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[23])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId23 = idFinally
    console.log(stringedId23)
   
    return stringedId23 , lenghtID

}

async function fetchBoard24(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[24])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId24 = idFinally
    console.log(stringedId24)
   
    return stringedId24 , lenghtID

}

async function fetchBoard25(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[25])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId25 = idFinally
    console.log(stringedId25)
   
    return stringedId25 , lenghtID

}

async function fetchBoard26(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[26])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId26 = idFinally
    console.log(stringedId26)
   
    return stringedId26 , lenghtID

}

async function fetchBoard27(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[27])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId27 = idFinally
    console.log(stringedId27)
   
    return stringedId27 , lenghtID

}

async function fetchBoard28(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[28])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId28 = idFinally
    console.log(stringedId28)
   
    return stringedId28 , lenghtID

}

async function fetchBoard29(){


    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[29])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId29 = idFinally
    console.log(stringedId29)
   
    return stringedId29 , lenghtID

}

async function fetchBoard30(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[30])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId30 = idFinally
    console.log(stringedId30)
   
    return stringedId30 , lenghtID

}

async function fetchBoard31(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[31])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId31 = idFinally
    console.log(stringedId31)
   
    return stringedId31 , lenghtID

}

async function fetchBoard32(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[32])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId32 = idFinally
    console.log(stringedId32)
   
    return stringedId32 , lenghtID

}

async function fetchBoard33(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[33])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId33 = idFinally
    console.log(stringedId33)
   
    return stringedId33 , lenghtID

}

async function fetchBoard34(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[34])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId34 = idFinally
    console.log(stringedId34)
   
    return stringedId34 , lenghtID

}
async function fetchBoard35(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[35])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId35 = idFinally
    console.log(stringedId35)
   
    return stringedId35 , lenghtID

}

async function fetchBoard36(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[36])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId36 = idFinally
    console.log(stringedId36)
   
    return stringedId36 , lenghtID

}

async function fetchBoard37(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[37])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId37 = idFinally
    console.log(stringedId37)
   
    return stringedId37 , lenghtID

}

async function fetchBoard38(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[38])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId38 = idFinally
    console.log(stringedId38)
   
    return stringedId38 , lenghtID
}

async function fetchBoard39(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
        
    )
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[39])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId39 = idFinally
    console.log(stringedId39)
   
    return stringedId39 , lenghtID

}

async function fetchBoard40(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[40])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId40 = idFinally
    console.log(stringedId40)
   
    return stringedId40 , lenghtID
}

async function fetchBoard41(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[41])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId41 = idFinally
    console.log(stringedId41)
   
    return stringedId41 , lenghtID
}

async function fetchBoard42(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[42])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId42 = idFinally
    console.log(stringedId42)
   
    return stringedId42 , lenghtID
}

async function fetchBoard43(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[43])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId43 = idFinally
    console.log(stringedId43)
   
    return stringedId43 , lenghtID
}

async function fetchBoard44(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[44])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId44 = idFinally
    console.log(stringedId44)
   
    return stringedId44 , lenghtID
}

async function fetchBoard45(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[45])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId45 = idFinally
    console.log(stringedId45)
   
    return stringedId45 , lenghtID
}

async function fetchBoard46(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[46])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId46 = idFinally
    console.log(stringedId46)
   
    return stringedId46 , lenghtID
}

async function fetchBoard47(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[47])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId47 = idFinally
    console.log(stringedId47)
   
    return stringedId47 , lenghtID
}

async function fetchBoard48(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[48])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId48 = idFinally
    console.log(stringedId48)
   
    return stringedId48 , lenghtID
}

async function fetchBoard49(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[49])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId49 = idFinally
    console.log(stringedId49)
   
    return stringedId49 , lenghtID
}

async function fetchBoard50(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[50])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId50 = idFinally
    console.log(stringedId50)
   
    return stringedId50 , lenghtID
}

async function fetchBoard51(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[51])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId51 = idFinally
    console.log(stringedId51)
   
    return stringedId51 , lenghtID
}

async function fetchBoard52(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[52])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId52 = idFinally
    console.log(stringedId52)
   
    return stringedId52 , lenghtID
}

async function fetchBoard53(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[53])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId53 = idFinally
    console.log(stringedId53)
   
    return stringedId53 , lenghtID
}

async function fetchBoard54(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[54])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId54 = idFinally
    console.log(stringedId54)
   
    return stringedId54 , lenghtID
}

async function fetchBoard55(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[55])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId55 = idFinally
    console.log(stringedId55)
   
    return stringedId55 , lenghtID
}

async function fetchBoard56(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[56])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId56 = idFinally
    console.log(stringedId56)
   
    return stringedId56 , lenghtID
}

async function fetchBoard57(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[57])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId57 = idFinally
    console.log(stringedId57)
   
    return stringedId57 , lenghtID
}

async function fetchBoard58(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[58])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId58 = idFinally
    console.log(stringedId58)
   
    return stringedId58 , lenghtID
}

async function fetchBoard59(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[59])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId59 = idFinally
    console.log(stringedId59)
   
    return stringedId59 , lenghtID
}

async function fetchBoard60(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[60])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId60 = idFinally
    console.log(stringedId60)
   
    return stringedId60 , lenghtID
}

async function fetchBoard61(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[61])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId61 = idFinally
    console.log(stringedId61)
   
    return stringedId61 , lenghtID
}

async function fetchBoard62(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[62])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId62 = idFinally
    console.log(stringedId62)
   
    return stringedId62 , lenghtID
}

async function fetchBoard63(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[63])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId63 = idFinally
    console.log(stringedId63)
   
    return stringedId63 , lenghtID
}

async function fetchBoard64(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[64])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId64 = idFinally
    console.log(stringedId64)
   
    return stringedId64 , lenghtID
}

async function fetchBoard65(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[65])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId65 = idFinally
    console.log(stringedId65)
   
    return stringedId65 , lenghtID
}

async function fetchBoard66(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[66])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId66 = idFinally
    console.log(stringedId66)
   
    return stringedId66 , lenghtID
}

async function fetchBoard67(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[67])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId67 = idFinally
    console.log(stringedId67)
   
    return stringedId67 , lenghtID
}

async function fetchBoard68(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[68])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId68 = idFinally
    console.log(stringedId68)
   
    return stringedId68 , lenghtID
}

async function fetchBoard69(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[69])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId69 = idFinally
    console.log(stringedId69)
   
    return stringedId69 , lenghtID
}

async function fetchBoard70(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[70])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId70 = idFinally
    console.log(stringedId70)
   
    return stringedId70 , lenghtID
}


async function fetchBoard71(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[71])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId71 = idFinally
    console.log(stringedId71)
   
    return stringedId71 , lenghtID
}

async function fetchBoard72(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[72])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId72 = idFinally
    console.log(stringedId72)
   
    return stringedId72 , lenghtID
}

async function fetchBoard73(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[73])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId73 = idFinally
    console.log(stringedId73)
   
    return stringedId73 , lenghtID
}

async function fetchBoard74(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[74])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId74 = idFinally
    console.log(stringedId74)
   
    return stringedId74 , lenghtID
}

async function fetchBoard75(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[75])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId75 = idFinally
    console.log(stringedId75)
   
    return stringedId75 , lenghtID
}

async function fetchBoard76(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[76])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId76 = idFinally
    console.log(stringedId76)
   
    return stringedId76 , lenghtID
}

async function fetchBoard77(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[77])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId77 = idFinally
    console.log(stringedId77)
   
    return stringedId77 , lenghtID
}

async function fetchBoard78(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[78])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId78 = idFinally
    console.log(stringedId78)
   
    return stringedId78 , lenghtID
}

async function fetchBoard79(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[79])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId79 = idFinally
    console.log(stringedId79)
   
    return stringedId79 , lenghtID
}

async function fetchBoard80(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[80])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId80 = idFinally
    console.log(stringedId80)
   
    return stringedId80 , lenghtID
}

async function fetchBoard81(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[81])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId81 = idFinally
    console.log(stringedId81)
   
    return stringedId81 , lenghtID
}

async function fetchBoard82(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[82])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId82 = idFinally
    console.log(stringedId82)
   
    return stringedId82 , lenghtID
}

async function fetchBoard83(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[83])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId83 = idFinally
    console.log(stringedId83)
   
    return stringedId83 , lenghtID
}

async function fetchBoard84(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[84])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId84 = idFinally
    console.log(stringedId84)
   
    return stringedId84 , lenghtID
}
async function fetchBoard85(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[85])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId85 = idFinally
    console.log(stringedId85)
   
    return stringedId85 , lenghtID
}

async function fetchBoard86(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[86])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId86 = idFinally
    console.log(stringedId86)
   
    return stringedId86 , lenghtID
}

async function fetchBoard87(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[87])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId87 = idFinally
    console.log(stringedId87)
   
    return stringedId87 , lenghtID
}

async function fetchBoard88(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[88])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId88 = idFinally
    console.log(stringedId88)
   
    return stringedId88 , lenghtID
}

async function fetchBoard89(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[89])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId89 = idFinally
    console.log(stringedId89)
   
    return stringedId89 , lenghtID
}

async function fetchBoard90(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[90])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId90 = idFinally
    console.log(stringedId90)
   
    return stringedId90 , lenghtID
}

async function fetchBoard91(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[91])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId91 = idFinally
    console.log(stringedId91)
   
    return stringedId91 , lenghtID
}

async function fetchBoard92(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[92])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId92 = idFinally
    console.log(stringedId92)
   
    return stringedId92 , lenghtID
}

async function fetchBoard93(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[93])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId93 = idFinally
    console.log(stringedId93)
   
    return stringedId93 , lenghtID
}

async function fetchBoard94(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[94])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId94 = idFinally
    console.log(stringedId94)
   
    return stringedId94 , lenghtID
}

async function fetchBoard95(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[95])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId95 = idFinally
    console.log(stringedId95)
   
    return stringedId95 , lenghtID
}

async function fetchBoard96(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[96])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId96 = idFinally
    console.log(stringedId96)
   
    return stringedId96 , lenghtID
}

async function fetchBoard97(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[97])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId97 = idFinally
    console.log(stringedId97)
   
    return stringedId97 , lenghtID
}

async function fetchBoard98(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[98])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId98 = idFinally
    console.log(stringedId98)
   
    return stringedId98 , lenghtID
}

async function fetchBoard99(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
    lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[99])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId99 = idFinally
    console.log(stringedId99)
   
    return stringedId99 , lenghtID
}

async function fetchBoard100(){

    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
  
     data = await response.json()
     lenghtID = (data.length) -1
     durationFetching = seriaNo * 0.88
    console.log(lenghtID)

    eachArray = (data[100])
     console.log(eachArray)
    displayBoardFetched ()

    idFinally = (eachArray.id)
    stringedId100 = idFinally
    console.log(stringedId100)
   
    return stringedId100 , lenghtID
}

function errorMessage(){

    if (errorMes2 == null || errorMes ==null){
        fetchingBoardsEl.innerHTML =''
        addmailEl.innerHTML = ''
        addmailEl2.innerHTML = ''
        emailEmptyErr.innerHTML =''
        emailEmptyErr2.innerHTML =''
        serviceErrorEl.innerHTML = ''
        serviceErrorEl2.innerHTML =''
        sendingProgressEl2.innerHTML =''
        sendingProgressEl.innerHTML =''
       
    }
    else{
    emailEmptyErr.innerHTML =''
  emailEmptyErr2.innerHTML =''
  serviceErrorEl.innerHTML = ''
  serviceErrorEl2.innerHTML =''
  sendingProgressEl2.innerHTML =''
  sendingProgressEl.innerHTML =''
  fetchingBoardsEl.innerHTML =''
  addmailEl.innerHTML = `<p> ${errorMes2} : ${errorMes} </p>`
  addmailEl2.innerHTML =`  <p>Refresh and Retry</p> `};
  
  
}

function fetchIDProgress (){

    if (errorMes) {
        sendingProgressEl.innerHTML =''  
        successEl.innerHTML = ''
        fetchingBoardsEl.innerHTML =''
    }
    else
    sendingProgressEl.innerHTML =`Adding email to all ${seriaNo} Boards ... `
    fetchingBoardsEl.innerHTML =''
    successEl.innerHTML = ''
}

function successMess (){
    setTimeout(() => {
        if (errorMes) {
            sendingProgressEl.innerHTML =''  
            successEl.innerHTML = ''
            fetchingBoardsEl.innerHTML =''
        }
        else
        sendingProgressEl2.innerHTML =`Email Successfully Added to Boards`;
        sendingProgressEl.innerHTML ='' 
        fetchingBoardsEl.innerHTML = ''
        successEl.innerHTML = ''

        
    }, 4000);
}


// Adding Members to each ID Fetched//

async function fetchId0(){

    seriaNo = 1
    const response = await fetch(`https://api.trello.com/1/boards/${stringedId0}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   
    if(stringedId0 == null) {
        console.log("Damn, Network")
    }
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId1(){
    seriaNo = 2
    

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId1}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )
    
if(stringedId1 == null) {
    console.log("Damn, Network")
}

    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}


async function fetchId2(){
    seriaNo = 3
    const response = await fetch(`https://api.trello.com/1/boards/${stringedId2}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                  email:`${emailValue}`
                
    })}
    )
    if(stringedId2 == null) {
        console.log("Damn, Network")
    }
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}


async function fetchId3(){
    seriaNo = 4
    const response = await fetch(`https://api.trello.com/1/boards/${stringedId3}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
    if(stringedId3 == null) {
        console.log("Damn, Network")
    }

    const data = await response.json()
    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    console.log(errorMes)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId4(){

    seriaNo = 5
    const response = await fetch(`https://api.trello.com/1/boards/${stringedId4}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
    if(stringedId4 == null) {
        console.log("Damn, Network")
    }
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId5(){
    seriaNo = 6
    const response = await fetch(`https://api.trello.com/1/boards/${stringedId5}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    if(stringedId5 == null) {
        console.log("Damn, Network")
    }
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId6(){
    seriaNo = 7
    const response = await fetch(`https://api.trello.com/1/boards/${stringedId6}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
    if(stringedId6 == null) {
        console.log("Damn, Network")
    } 
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId7(){
    seriaNo = 8
    const response = await fetch(`https://api.trello.com/1/boards/${stringedId7}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
    if(stringedId7 == null) {
        console.log("Damn, Network")
    }
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId8(){
    if(stringedId8 == null) {
        console.log("Damn, Network")
    }
    seriaNo = 9
    const response = await fetch(`https://api.trello.com/1/boards/${stringedId8}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
   
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId9(){
    seriaNo = 10
    const response = await fetch(`https://api.trello.com/1/boards/${stringedId9}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId10(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId10}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId11(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId11}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId12(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId12}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId13(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId13}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId14(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId14}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId15(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId15}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}


async function fetchId16(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId16}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId17(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId17}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId18(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId18}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId19(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId19}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId20(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId20}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId21(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId21}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId22(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId22}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId23(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId23}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId24(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId24}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId25(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId25}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId26(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId26}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId27(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId27}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId28(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId28}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId29(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId29}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId30(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId30}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId31(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId31}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId32(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId32}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId33(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId33}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId34(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId34}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId35(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId35}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId36(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId36}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId37(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId37}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId38(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId38}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId39(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId39}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId40(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId40}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId41(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId41}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId42(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId42}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId43(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId43}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId44(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId44}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId45(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId45}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId46(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId46}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId47(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId47}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId48(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId48}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId49(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId49}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId50(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId50}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId51(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId51}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId52(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId52}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId53(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId53}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId54(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId54}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId55(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId55}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId56(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId56}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId57(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId57}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId58(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId58}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId59(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId59}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId60(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId60}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId61(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId61}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId62(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId62}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId63(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId63}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId64(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId64}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId65(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId65}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId66(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId66}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId67(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId67}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId68(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId68}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId69(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId69}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId70(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId70}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId71(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId71}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId72(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId72}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId73(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId73}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId74(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId74}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId75(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId75}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId76(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId76}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}
async function fetchId77(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId77}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId78(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId78}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId79(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId79}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId80(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId80}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId81(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId81}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId82(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId82}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId83(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId83}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId84(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId84}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId85(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId85}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId86(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId86}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId87(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId87}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId88(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId88}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId89(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId89}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId90(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId90}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId91(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId91}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId92(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId92}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId93(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId93}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId94(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId94}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId95(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId95}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId96(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId96}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId97(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId97}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId98(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId98}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId99(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId99}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}

async function fetchId100(){

    const response = await fetch(`https://api.trello.com/1/boards/${stringedId100}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )  
    const data = await response.json()

    console.log(data)
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    fetchIDProgress ()
    successMess ()
    return data;
}


window.onunhandledrejection = event => {
   
    serviceErrorEl.innerHTML =`Network was Interrupted`;
    serviceErrorEl2.innerHTML=  `Refresh and Retry`
    fetchingBoardsEl.innerHTML = ''
    emailEmptyErr.innerHTML =''
    emailEmptyErr2.innerHTML =''
    successEl.innerHTML = ''
    sendingProgressEl.innerHTML =''
    sendingProgressEl2.innerHTML =''
  
  };
  
  window.onerror = function(message, source, lineNumber, colno, error) {
    console.warn(`UNHANDLED ERROR: ${error.stack}`);
  };


