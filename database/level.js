const fs = require('fs')
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))

        // PEGA O XP
        const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        // PEGA MSGS
        const getLevelingMsg = (sender) => {
          let position = false
          Object.keys(_level).forEach((i) => {
          if (_level[i].id === sender) {
              position = i
              }
          })
          if (position !== false) {
              return _level[position].msg
           }
       }
        
        // PEGA O LEVEL
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        // PEGA O ID
        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        // ADICIONA XP
        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        // CONTA AS MSGS
        const addLevelingMsg = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
              if (_level[i].id === sender) {
              position = i
              }
           })
           if (position !== false) {
             _level[position].msg += amount
             fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
           }
        }

        // ADICIONA O LEVEL
        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        // ADICIONA O ID
        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, msg: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
// Exporta os consts para index.js
module.exports = {
    getLevelingXp,
    getLevelingMsg,
	getLevelingLevel,
    getLevelingId,
    addLevelingXp,
    addLevelingMsg,
    addLevelingLevel,
    addLevelingId,
}