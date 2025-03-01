

document.getElementById('btn-theme')
    .addEventListener('click', function () {
        let num =Math.floor(Math.random() * 7) + 1 ;
        // 
        console.log(num);
        if (num === 1) {
            document.body.style.backgroundColor = '#7776BC';
        }else if(num===2){
            document.body.style.backgroundColor = '#CDC7E5';
        }else if(num===3){
            document.body.style.backgroundColor = '#FFFBDB';
        }else if(num===4){
            document.body.style.backgroundColor = '#FFEC51';
        }else if(num===5){
            document.body.style.backgroundColor = '#FF674D';
        }else if(num===6){
            document.body.style.backgroundColor = '#985F99';
        }else if(num===7){
            document.body.style.backgroundColor = '#C81D25';
        }
    })

