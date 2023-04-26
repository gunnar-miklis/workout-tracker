document.addEventListener('DOMContentLoaded', () => {
  const timerDisplay = document.getElementById('timer')
  const timerControlButton = document.getElementById('timer-control-button')

  let timeInSeconds = localStorage.getItem('timeInSeconds')
  let timerInterval = null

  const updateTimer = () => {
    timeInSeconds++
    let seconds = timeInSeconds % 60
    let minutes = parseInt(timeInSeconds / 60 % 60)
    let hours = parseInt(timeInSeconds / 60 / 60)

    let secondsStr = '' + seconds > 9 ? seconds : '0' + seconds
    let minutesStr = '' + minutes > 9 ? minutes : '0' + minutes
    let hoursStr = '' + hours > 9 ? hours : '0' + hours
    timerDisplay.innerText = `${hoursStr}:${minutesStr}:${secondsStr}`
  }

  timerInterval = setInterval(() => {
    updateTimer()
  }, 1000)

  let isPaused = false

  timerControlButton.addEventListener('click', () => {
    if (isPaused) {
      timerInterval = setInterval(() => {
        updateTimer()
      }, 1000)
      isPaused = false
      timerControlButton.innerText = 'II'
    } else {
      clearInterval(timerInterval)
      isPaused = true
      timerControlButton.innerText = '▷'
    }
  })

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('timeInSeconds', timeInSeconds);
  });
})
