function updateDimensions() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Change les dimensions d'une div pour aligner du text
   var divWidth= document.getElementById('introDiv').offsetWidth;
    document.getElementById('intoDiv').style.width= divWidth + 'px';
    
    document.getElementById('socials').style.width= divWidth + 'px';
    // Change les dimensions du img avatar

    updateAvatar(width,height);
    
    
}

function updateAvatar(w,h){

    if (w>1200 && h>675){
        document.getElementById('avatar').style.width= 593+'px';
        document.getElementById('avatar').style.height=597+'px';
        
    }else if(w<600){
        document.getElementById('avatar').style.width= 342+'px';
        document.getElementById('avatar').style.height=345+'px';
    }else{
        document.getElementById('avatar').style.width= 456+'px';
        document.getElementById('avatar').style.height=459+'px';
    }
}

updateDimensions();


window.addEventListener('resize', function () {
    
    updateDimensions();
})



























