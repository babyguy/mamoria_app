// -------------variables-------------

let fichasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let resultado1 = null;
let resultado2 = null;
let aciertos = 0;
let movimientos = 0;
let tiempo = 0;

// -------------array parejas-------------
let numeros = [];

// -------------niveles-------------
const tablero = document.getElementById("tablero");
const nivel_select = document.getElementById("nivel_select");
// cambio de nivel dependiendo del select
nivel_select.addEventListener("change", () => {
  console.log("se hizo clien en el select");
  console.log(nivel_select.value);
  if (nivel_select.value == "1") {
    // array de numeros se resetea
    numeros = [];
    // se asignan las parejas segun el nivel|
    numeros.push(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8);
    // desordenar parejas
    numeros = numeros.sort(() => Math.random() - 0.5);
    console.log(numeros);

    // asignar tiempo de nivel
    tiempo = 0
    tiempo = 45;
    tablero.innerHTML = `
    <h2>Encuentra las parejas</h2>
    
    <table>
          <tr>
            <td><button id="0" onclick="destapar(0)"></button></td>
            <td><button id="1" onclick="destapar(1)"></button></td>
            <td><button id="2" onclick="destapar(2)"></button></td>
            <td><button id="3" onclick="destapar(3)"></button></td>
          </tr>
          <tr>
            <td><button id="4" onclick="destapar(4)"></button></td>
            <td><button id="5" onclick="destapar(5)"></button></td>
            <td><button id="6" onclick="destapar(6)"></button></td>
            <td><button id="7" onclick="destapar(7)"></button></td>
          </tr>
          <tr>
            <td><button id="8" onclick="destapar(8)"></button></td>
            <td><button id="9" onclick="destapar(9)"></button></td>
            <td><button id="10" onclick="destapar(10)"></button></td>
            <td><button id="11" onclick="destapar(11)"></button></td>
          </tr>
          <tr>
            <td><button id="12" onclick="destapar(12)"></button></td>
            <td><button id="13" onclick="destapar(13)"></button></td>
            <td><button id="14" onclick="destapar(14)"></button></td>
            <td><button id="15" onclick="destapar(15)"></button></td>
          </tr>
        </table>
    `;
  } else if (nivel_select.value == "2") {
     // array de numeros se resetea
     numeros = [];
     // se asignan las parejas segun el nivel|
     numeros.push( 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
      10, 10, 11, 11, 12, 12,13, 13, 14, 14, 15, 15, 16, 16,);
     // desordenar parejas
     numeros = numeros.sort(() => Math.random() - 0.5);
     console.log(numeros);
      // asignar tiempo de nivel
     tiempo = 0
     tiempo = 150;
    tablero.innerHTML = `
    <h2>Encuentra las parejas</h2>
    <table>
    <tr>
      <td><button id="0" onclick="destapar(0)"></button></td>
      <td><button id="1" onclick="destapar(1)"></button></td>
      <td><button id="2" onclick="destapar(2)"></button></td>
      <td><button id="3" onclick="destapar(3)"></button></td>
      <td><button id="4" onclick="destapar(4)"></button></td>
      <td><button id="5" onclick="destapar(5)"></button></td>
      <td><button id="6" onclick="destapar(6)"></button></td>
      <td><button id="7" onclick="destapar(7)"></button></td>
    </tr>
    <tr>
      <td><button id="8" onclick="destapar(8)"></button></td>
      <td><button id="9" onclick="destapar(9)"></button></td>
      <td><button id="10" onclick="destapar(10)"></button></td>
      <td><button id="11" onclick="destapar(11)"></button></td>
      <td><button id="12" onclick="destapar(12)"></button></td>
      <td><button id="13" onclick="destapar(13)"></button></td>
      <td><button id="14" onclick="destapar(14)"></button></td>
      <td><button id="15" onclick="destapar(15)"></button></td>

    </tr>
    <tr>
      <td><button id="16" onclick="destapar(16)"></button></td>
      <td><button id="17" onclick="destapar(17)"></button></td>
      <td><button id="18" onclick="destapar(18)"></button></td>
      <td><button id="19" onclick="destapar(19)"></button></td>
      <td><button id="20" onclick="destapar(20)"></button></td>
      <td><button id="21" onclick="destapar(21)"></button></td>
      <td><button id="22" onclick="destapar(22)"></button></td>
      <td><button id="23" onclick="destapar(23)"></button></td>
    </tr>
    <tr>
      <td><button id="24" onclick="destapar(24)"></button></td>
      <td><button id="25" onclick="destapar(25)"></button></td>
      <td><button id="26" onclick="destapar(26)"></button></td>
      <td><button id="27" onclick="destapar(27)"></button></td>
      <td><button id="28" onclick="destapar(28)"></button></td>
      <td><button id="29" onclick="destapar(29)"></button></td>
      <td><button id="30" onclick="destapar(30)"></button></td>
      <td><button id="31" onclick="destapar(31)"></button></td>
    </tr>
    
  </table>
    `;
  } else if (nivel_select.value == "0") {
    tablero.innerHTML = `
    <h2>Encuentra las parejas</h2>
    <br><br>
    <p>
      <h3>Elije un nivel...</h3>
    </p>
    `;
  }
});

// -------------tiemnpo-------------
function contarTiempo(x,n) {
  mitempo = setInterval(() => {
    if (x == 0) {
      clearInterval(mitempo);
      voltearTarjetas(n);
      window.confirm(`
          Perdiste
          movimientos : ${movimientos}
          tiempo : ${tiempo-x} segundos
        `)
      // alert();
    } else {
      x--;
      console.log('se puede revisar ganador desde aca');
      // si los aciertos son iguales a la cantidad de parejas gana 
      let aciertosGanadores =  numeros.length/2
      if(aciertosGanadores == aciertos){
        clearInterval(mitempo);
        window.confirm(`
          Felicidades Ganaste
          movimientos : ${movimientos}
          tiempo : ${tiempo-x} segundos
        `);
      }
      document.getElementById("tiempo").innerHTML = `tiempo: ${x} segundos`;

      
    }
  }, 1000);
}

// -------------revelar todas las tarjetas-------------
function voltearTarjetas(numTarjetas) {
  for (let i = 0; i <= numTarjetas; i++) {
    document.getElementById(`${i}`).innerHTML = numeros[i];
    document.getElementById(`${i}`).disabled = true;
  }
}

// -------------reiniciar todo-------------
function reset() {
  nivel_select.value = 0;
  location.reload();
}

// -------------revelar tarjeta pareja-------------
function destapar(x) {
  fichasDestapadas++;
  if (fichasDestapadas == 1) {
    // primer ficha
    tarjeta1 = document.getElementById(x);
    tarjeta1.innerHTML = numeros[x];
    tarjeta1.disabled = true;
    // guardar valor
    resultado1 = numeros[x];
    console.log(resultado1);
  } else if (fichasDestapadas == 2) {
    // segunda ficha  destapada
    tarjeta2 = document.getElementById(x);
    tarjeta2.innerHTML = numeros[x];
    tarjeta2.disabled = true;
    // guardar valor
    resultado2 = numeros[x];
    console.log(resultado2);

    if (resultado1 == resultado2) {
      // si als tarjetas despadas son iguales

      // sumar movimientos
      movimientos++;
      console.log("iguales");
      fichasDestapadas = 0;
      aciertos++;
    } else {
      // si las tarjetas destapadas son diferentes

      // sumar movimientos
      movimientos++;
      console.log("no son iguales");
      //   tiempo para que sea visible si no son iguales
      setTimeout(() => {
        // reinicio de tarjetas
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
        fichasDestapadas = 0;
      }, 700);
    }
    // el tiempo empieza a trascurrir despues de finalizar el primer movimiento
    if (movimientos == 1) {
      let cantidad =  numeros.length-1
      console.log(`cantidad = ${cantidad}`);
      contarTiempo(tiempo,cantidad);
    }

    // mostrar movimientos y aciertos
    document.getElementById(
      "movimientos"
    ).innerHTML = `Movimientos: ${movimientos}`;
    document.getElementById("aciertos").innerHTML = `Aciertos: ${aciertos}`;
  }
}

// -------------Ganar-------------
function ganar(x) {
  if (aciertos == x) {
   return 1
  } else {
    return 0
  }
}
