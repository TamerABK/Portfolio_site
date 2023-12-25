document.addEventListener('DOMContentLoaded',() =>{
    const element=document.getElementById('home');

    const background = ['#8A2BE2','#4A1E9E','#A92BE2','#2D57E2','#1F3D9E'];
    const nb_large= [25,30,40,50];
    const nb_petit= [3,4,5,6];

    const coordinates = {
        x: undefined,
        y: undefined 
    };

    const generateNumbers = () =>{
        w=Math.floor(Math.random()*4);
        h=Math.floor(Math.random()*4);
        bg=Math.floor(Math.random()*4);
        return [w,h,bg];
    }

    const creer_elem_wide = newEle => {
        const [w,h,bg]= generateNumbers();
        newEle.style.width=nb_large[w] + 'px';
        newEle.style.height= nb_petit[h] + 'px';
        newEle.style.backgroundColor= background[bg];
        newEle.classList.add('line','line-wide');

    }

    const creer_elem_long = newEle => {
        const [w,h,bg]= generateNumbers();
        newEle.style.width=nb_petit[w] + 'px';
        newEle.style.height= nb_large[h] + 'px';
        newEle.style.backgroundColor= background[bg];
        newEle.classList.add('line','line-long');
        
    }

    const addElement = () =>{
        const num_type= Math.round(Math.random());
        const newEle= document.createElement('div');

        if (num_type===0){
            creer_elem_wide(newEle);
        }else{
            creer_elem_long(newEle);
        }

        
        newEle.style.left= coordinates.x + 'px';
        newEle.style.top= coordinates.y + 'px';

        element.appendChild(newEle);
    }

    const updateCoordinates = e => {
        if (coordinates.x=== undefined || coordinates.y===undefined){
            coordinates.x=e.x;
            coordinates.y=e.y;
            // console.log(coordinates);
            addElement();
        }
        
        if (Math.abs(coordinates.x-e.x)>50 || Math.abs(coordinates.y-e.y)>50){
            coordinates.x=e.x;
            coordinates.y=e.y;
            // console.log(coordinates);
            addElement();
        }
    }


    element.addEventListener('mousemove', e => {
        updateCoordinates(e);
    });

});