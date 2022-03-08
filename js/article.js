document.getElementById("btn").addEventListener('click',function(){
    document.querySelector(".share").style.display='flex';
    document.getElementById("btnClose").style.display='inline-block';
    document.getElementById("btn").style.display='none';
});

function init(){
    document.querySelector(".share").style.display='none';
    document.getElementById("btn").style.display='inline-block';
    document.getElementById("btnClose").style.display='none';
};

document.getElementById("btnClose").addEventListener('click',init);
document.getElementById("btnClose1").addEventListener('click',init);


