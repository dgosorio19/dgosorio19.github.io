document.addEventListener('DOMContentLoaded', function () {
  // Define the target date and time (November 23, 2023, 2:35 AM CET)
  const targetDate = new Date('2023-11-25T10:00:00+01:00') // Adjusted for CET (Central European Time)

  // Get the current date and time
  const currentTime = new Date()

  // Function to handle link click
  function handleLinkClick(event) {
    // Prevent default behavior of the link
    event.preventDefault()

    // Check if the current time is after the target time
    if (currentTime >= targetDate) {
      // If allowed, navigate to the link's href
      window.location.href = event.target.href
    } else {
      // If not allowed, display a message or perform another action
      alert('Regalo disponible despues de las 10 AM.')
    }
  }

  // Get the link element
  const restrictedLink = document.getElementById('restrictedLink')

  // Attach an event listener to the link
  restrictedLink.addEventListener('click', handleLinkClick)
})

document.addEventListener('DOMContentLoaded', function () {
  // Define the target date and time (November 23, 2023, 2:35 AM CET)
  const targetDate = new Date('2023-11-25T10:00:00+01:00') // Adjusted for CET (Central European Time)

  // Get the current date and time
  const currentTime = new Date()

  // Function to handle link click
  function handleLinkClick(event) {
    // Prevent default behavior of the link
    event.preventDefault()

    // Check if the current time is after the target time
    if (currentTime >= targetDate) {
      // If allowed, navigate to the link's href
      window.location.href = event.target.href
    } else {
      // If not allowed, display a message or perform another action
      alert('Regalo disponible despues de las 11 AM.')
    }
  }

  // Get the link element
  const restrictedLinkTwo = document.getElementById('restrictedLinkTwo')

  // Attach an event listener to the link
  restrictedLinkTwo.addEventListener('click', handleLinkClick)
})

// mama: Cholas,Giftcard papa: ?? diego: Irepelusa Alejandro: Lente,??
