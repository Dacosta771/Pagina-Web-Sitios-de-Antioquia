let containers = document.getElementsByClassName('foto');
let client_height = document.documentElement.clientHeight;

function desplegar() {
    let element_style = window.getComputedStyle(this);
    let element_height = element_style.getPropertyValue('height');
    let height_str = element_height.replace('px', '');
    let height_number = parseInt(height_str, 10);
    let condition = client_height/11;
    let elementHeight = this.getAttribute('height');

    if(height_number == Math.floor(condition)) {
        this.style.height = '85vh';
        this.querySelector('#parrafo').className = 'parrafo_desplegado';
    } else {
        this.style.height = 'calc(100vh/11)';
        this.querySelector('#parrafo').className = 'parrafo_replegado';
    }
}


for(var i = 0; i < containers.length; i++) {
    containers[i].addEventListener('click', desplegar);
}
