function contar() {
  let inicio = document.getElementById('txtInicio')
  let fim = document.getElementById('txtFim')
  let passo = document.getElementById('txtPasso')
  let result = document.getElementById('result')
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert('[ERRO] Faltam dados!')
  } else {
    result.innerHTML = 'Contando... <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
      alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        result.innerHTML += `${c}➡`
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        result.innerHTML += `${c}➡`
      }
    }
    result.innerHTML += `🏁`
  }
}
