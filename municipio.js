let derecha = document.getElementById('derecho');
let izquierda = document.getElementById('izquierdo');

function corre_slider_derecha() {
    let mi_ul = document.getElementById('ul_slider');
    let estilo_ul = mi_ul.currentStyle || window.getComputedStyle(mi_ul);
    let desplazamiento_pixeles = estilo_ul.marginLeft;
    let desplazamiento_str = desplazamiento_pixeles.replace('px', '');
    let desplazamiento_number = parseInt(desplazamiento_str, 10);
    let desplazamiento_entero = Math.ceil(Math.abs(desplazamiento_number/1503.8));
    let despl = (desplazamiento_entero*100).toString();
    let despl_porcen = '-' + despl + '%';

    array_desplazamientos = ['-0%', '-100%', '-200%', '-300%', '-400%', '-500%', '-600%', '-700%', '-800%', '-900%'];
    for(var i = 0; i < array_desplazamientos.length; i++) {
        if(despl_porcen == array_desplazamientos[i]) {
            mi_ul.style.marginLeft = array_desplazamientos[i+1];
        } else if (despl_porcen == array_desplazamientos[9]) {
            mi_ul.style.marginLeft = '0%';
        }
    }
}

function corre_slider_izquierda() {
    let mi_ul = document.getElementById('ul_slider');
    let estilo_ul = mi_ul.currentStyle || window.getComputedStyle(mi_ul);
    let desplazamiento_pixeles = estilo_ul.marginLeft;
    let desplazamiento_str = desplazamiento_pixeles.replace('px', '');
    let desplazamiento_number = parseInt(desplazamiento_str, 10);
    let desplazamiento_entero = Math.ceil(Math.abs(desplazamiento_number/1503.8));
    let despl = (desplazamiento_entero*100).toString();
    let despl_porcen = '-' + despl + '%';

    array_desplazamientos = ['-0%', '-100%', '-200%', '-300%', '-400%', '-500%', '-600%', '-700%', '-800%', '-900%'];
    for(var i = 0; i < array_desplazamientos.length; i++) {
        if(despl_porcen == array_desplazamientos[i]) {
            mi_ul.style.marginLeft = array_desplazamientos[i-1];
        } else if (despl_porcen == array_desplazamientos[0]) {
            mi_ul.style.marginLeft = '-900%';
        }
    }
}

derecha.addEventListener('click', corre_slider_derecha);
izquierda.addEventListener('click', corre_slider_izquierda);
