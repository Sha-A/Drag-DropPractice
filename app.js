const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const avocado = document.querySelector('.avocado')

item.addEventListener('dragstart',dragStart);
item.addEventListener('dragend',dragEnd);

placeholders.forEach((placeholder)=>{
   placeholder.addEventListener('dragover',dragOver);
    placeholder.addEventListener('dragenter',dragEnter);
    placeholder.addEventListener('dragleave',dragLeave);
    placeholder.addEventListener('drop', dragdrop);
})

function dragStart(event){

    //console.log('Drag Start!');
    event.target.classList.add('hold');
    setTimeout(()=>{event.target.classList.add('hied')},0);
    
}

function dragEnd(event){
    event.target.classList.remove('hold','hied');
    //.className - работает о строкой классов, .classList - с массивом классов
    //console.log('Drag End!');   
}

function dragOver(event){
    event.preventDefault();
    //console.log('dragOver!');
}
function dragEnter(event){
    //console.log('dragEnter!');
    event.target.classList.add('hovered');
}
function dragLeave(event){
    //console.log('dragLeave!');
    event.target.classList.remove('hovered');
    if(event.target.id==='avocado'){avocado.classList.remove('visible');}
}
function dragdrop(event){
    event.target.append(item);
    event.target.classList.remove('hovered');
    //console.log(event.target.id);

    switch (event.target.id) {
        case 'male':
            setTimeout(()=>{alert(`What's up, man!`);},500);
            break;
        case 'female':
            setTimeout(()=>{alert(`Hi, girl!`);},500);
            break;
        case 'avocado':
            setTimeout(()=>{alert(`Avocado? Seriously?`);},500);
            avocado.classList.add('visible');
            break;
            
    
        default:
            break;
    }
    
}
