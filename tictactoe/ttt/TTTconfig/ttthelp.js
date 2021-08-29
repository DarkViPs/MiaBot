const ttthelp = (prefix) => {
    return `
「 \u{1F4AE} Tic Tac Toe \u{1F4AE} 」

BETA, EVITE USAR
    
APENAS PARA GRUPOS
    
_*INICIAR*_
│
├─ Para iniciar digite:
│└「 .ttt [ DIFICULDADE ] 」
└─ *Apenas uma pessoa por vez*
    
_*DIFICULDADE*_
│
├─  easy
│ 
├─  normal
│
├─  hard
│
└─  impossible
    
_*TEMPORIZADOR*_
│
├─  Uma nova partida só poderá
│ser iniciada após um intervalo
│de 4 minutos apartir do início
│da partida anterior
│
└─ A partida terminará 
   automaticamente após 4 minutos
    
_*COMANDOS*_
│
├─  Para marcar digite:
│└「 .coord [ COORDENADA ] 」
│
└─ ❏ Exemplo:
└「   ${prefix}coord a1 
       ----------------------
       🌀1️⃣2️⃣3️⃣
       🅰️❌🔲🔲
       🅱️🔲🔲🔲
       ©️🔲🔲🔲  」
    
_*SEU STATUS*_
│
└─  Para ver seu status digite:
  └「 .tttme 」
    
_*RECOMPENSAS*_
│
├─  EASY
│├ Vitória : +「 25 / 50 」
│└ Derrota : -「 200 / 200 」
│
├─  NORMAL
│├ Vitória : +「 75 / 150 」
│└ Derrota : -「 75 / 150 」
│
├─  HARD
│├ Vitória : +「 200 / 400 」
│└ Derrota : -「 25 / 50 」
│
├─  IMPOSSIBLE
│├ Vitória : +「 1000 / 2000 」
│└ Derrota : -「 0 / 0 」
│
├─  EMPATE
│└「 0 / 0 」
│ 
└─  PARTIDA NÃO FINALIZADA
  └ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp
