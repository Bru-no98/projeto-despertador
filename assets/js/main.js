const relogio = document.getElementById('relogio');
const botao = document.querySelector('button');
botao.addEventListener('click', obterDespertador);

function obterDespertador(){
  const despertador = document.getElementById('despertador').value;
  const [hora, minutos] = despertador.split(':');
  const horario = colocaHoraEmString(hora, minutos);
  rodarRelogio(horario);
}

function rodarRelogio(hrEscolhida){ 
  setInterval(function() {
    const data = new Date();
    const hora = data.toLocaleTimeString( 'pt-BR', {hour12: false});
    relogio.innerHTML = hora;
    if(hrEscolhida === hora) {
      alert('Deu a Hora!')
    }
  }, 1000);
}

function colocaHoraEmString(hora, minutos) {
  const data = new Date();
  data.setHours(hora);
  data.setMinutes(minutos);
  data.setSeconds(0); 
  return data.toLocaleTimeString( 'pt-BR', {hour12: false});
}






