const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
*Perfil de jogo* 🕹️

❖ Nome: ${pushname} 

➣ Vitórias: ${userWins} 🎊
➣ Derrotas: ${userDefeats} 💥
➣ Empates : ${userTies} 🌀
➣ Pontos : ${userPoints} ✨
    `
}

exports.tttme = tttme
