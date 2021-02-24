/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'blue'

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const travelerCard = document.querySelector(".traveler")
const imgTag = travelerCard.querySelector('img')
imgTag.src = traveler.photo
imgTag.alt = traveler.name

const nameTag = travelerCard.querySelector('h2')
nameTag.textContent = traveler.name

const nicknameTag = travelerCard.querySelector('em')
nicknameTag.textContent = traveler.nickname

/***** Deliverable 4 *****/
const ulTag = document.querySelector('body ul')
traveler.animalSightings.forEach(function(sighting) {
    const liTag = document.createElement('li')
    liTag.dataset.id = `${sighting.id}`
    liTag.innerHTML = `
        <p>${sighting.description}</p>
        <img src="${sighting.photo}" alt="${sighting.species}"/>
        <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>`

    ulTag.append(liTag)
})

/***** Deliverable 5 *****/

const badSighting = document.querySelector("[data-id='3']")
badSighting.remove()
