const box = document.getElementsByName('categoria');

const produtos = document.getElementsByClassName('produtos');

function check(){

    const selecionado = [];

    for (let i = 0; i < box.length; i++){

        

        if (box[i].checked){

            selecionado.push(box[i].dataset.categoria);

            }
        }

        if (selecionado.includes("todos")){

            for (let k = 0; k < produtos.length; k++){

                produtos[k].hidden = false;
            }
        }else{

            for (let j = 0; j < produtos.length; j++){

                    const categoriaP = produtos[j].dataset.categoria;

                     if (selecionado.length === 0 || selecionado.includes(categoriaP)){

                        produtos[j].hidden = false;
                    }else {
                        produtos[j].hidden = true;
                    }
                            
                    }

                   
        }

}