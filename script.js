const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
c1.style.display = 'block'
c1.style.padding = '20px'
c1.style.height = 'auto'


function show(ctname){
    ctname.style.height = '0';ctname.style.padding = '0'
    document.querySelector('.container').style.margin = '60px auto'
    setTimeout(function(){document.querySelector('.container').style.margin = '0 auto'},400)
    ctname.style.display = 'block'
    if (ctname === c1){
        c2.style.display = 'none'
        c3.style.display = 'none'
        
    }
    else if (ctname === c2){
        c1.style.display = 'none'
        c3.style.display = 'none'
    }
    else if(ctname === c3){
        c2.style.display = 'none'
        c1.style.display = 'none'
    }
    setTimeout(function(){ctname.style.height = 'auto';ctname.style.padding = '20px'},400)
}
