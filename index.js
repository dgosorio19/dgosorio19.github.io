document.addEventListener('DOMContentLoaded', function () {
  const targetDate = new Date('2023-11-25T00:05:00+01:00')
  const currentTime = new Date()
  function handleLinkClick(event) {
    event.preventDefault()
    if (currentTime >= targetDate) {
      window.location.href = event.target.href
    } else {
      alert('Regalo disponible después de las 12:05 AM.')
    }
  }
  const restrictedLink = document.getElementById('restrictedLink')
  restrictedLink.addEventListener('click', handleLinkClick)
})

document.addEventListener('DOMContentLoaded', function () {
  const targetDate = new Date('2023-11-25T00:05:00+01:00')
  const currentTime = new Date()
  function handleLinkClick(event) {
    event.preventDefault()
    if (currentTime >= targetDate) {
      window.location.href = event.target.href
    } else {
      alert('Regalo disponible después de las 12:05 AM.')
    }
  }
  const rrestrictedLink = document.getElementById('rrestrictedLink')
  rrestrictedLink.addEventListener('click', handleLinkClick)
})

document.addEventListener('DOMContentLoaded', function () {
  const targetDate = new Date('2023-11-25T01:00:00+01:00')
  const currentTime = new Date()
  function handleLinkClick(event) {
    event.preventDefault()
    if (currentTime >= targetDate) {
      window.location.href = event.target.href
    } else {
      alert('Regalo disponible después de las 01 AM.')
    }
  }
  const restrictedLinkTwo = document.getElementById('restrictedLinkTwo')

  restrictedLinkTwo.addEventListener('click', handleLinkClick)
})

document.addEventListener('DOMContentLoaded', function () {
  const targetDate = new Date('2023-11-25T01:00:00+01:00')
  const currentTime = new Date()
  function handleLinkClick(event) {
    event.preventDefault()
    if (currentTime >= targetDate) {
      window.location.href = event.target.href
    } else {
      alert('Regalo disponible después de las 01 AM.')
    }
  }
  const rrestrictedLinkTwo = document.getElementById('rrestrictedLinkTwo')

  rrestrictedLinkTwo.addEventListener('click', handleLinkClick)
})

document.addEventListener('DOMContentLoaded', function () {
  const targetDate = new Date('2023-11-25T:08:00+01:00')
  const currentTime = new Date()
  function handleLinkClick(event) {
    event.preventDefault()
    if (currentTime >= targetDate) {
      window.location.href = event.target.href
    } else {
      alert('Regalo disponible después de las 9 AM.')
    }
  }
  const restrictedLinkThree = document.getElementById('restrictedLinkThree')

  restrictedLinkThree.addEventListener('click', handleLinkClick)
})

document.addEventListener('DOMContentLoaded', function () {
  const targetDate = new Date('2023-11-25T10:00:00+01:00')
  const currentTime = new Date()
  function handleLinkClick(event) {
    event.preventDefault()
    if (currentTime >= targetDate) {
      window.location.href = event.target.href
    } else {
      alert('Regalo disponible después de las 10 AM.')
    }
  }
  const restrictedLinkFour = document.getElementById('restrictedLinkFour')

  restrictedLinkFour.addEventListener('click', handleLinkClick)
})

document.addEventListener('DOMContentLoaded', function () {
  const targetDate = new Date('2023-11-25T12:30:00+01:00')
  const currentTime = new Date()
  function handleLinkClick(event) {
    event.preventDefault()
    if (currentTime >= targetDate) {
      window.location.href = event.target.href
    } else {
      alert('Regalo disponible después de las 12:30 AM.')
    }
  }
  const restrictedLinkFive = document.getElementById('restrictedLinkFive')

  restrictedLinkFive.addEventListener('click', handleLinkClick)
})
