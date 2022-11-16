var button = document.getElementsByTagName('button')[0];


button.addEventListener('click', ()=>{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    console.log("WORK");
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'Flag.css';
    head.appendChild(link);

})
