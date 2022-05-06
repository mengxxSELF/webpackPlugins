function pokerGame() {
  let lastCount = 3 + 5 + 7
  const pokerMap = new Map([
    [0, 3],
    [1, 5],
    [2, 7],
  ])

  return ({ role, line, count }) => {
    if (lastCount === 0) {
      return role + '牙签已被拿完，请重新开始'
    }
    if (lastCount === 1) {
      return role + 'lose'
    }
    if (pokerMap.get(line) == 0) {
      return role + '当前行已没有牙签，请换行拿取'
    }

    const nowC = pokerMap.get(line) - count

    lastCount = lastCount - count

    pokerMap.set(line, nowC)

    if (lastCount === 0) {
      return role + 'lose'
    } else {
      return role + '已成功拿取'
    }
  }
}

const play = pokerGame()

console.log(play({ role: 'a', line: 0, count: 1 }))
console.log(play({ role: 'b', line: 1, count: 4 }))
console.log(play({ role: 'a', line: 0, count: 2 }))
console.log(play({ role: 'b', line: 2, count: 7 }))
console.log(play({ role: 'a', line: 1, count: 5 }))
