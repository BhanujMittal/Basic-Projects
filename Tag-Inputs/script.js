const tagContainer = document.querySelector('.tag-container')
const input = document.querySelector('input')
const tags = [];

// function to create new Tag
function createTag() {
    const div = document.createElement('div')
    tagContainer.prepend(div)
    const pre = document.createElement('pre')
    const span = document.createElement('span')
    div.setAttribute('class', 'tag')
    span.setAttribute('class', 'tag-content')
    span.innerHTML = input.value
    pre.setAttribute('data-item', input.value)
    pre.innerHTML = "&times;"
    div.appendChild(span)
    span.appendChild(pre)
    pre.addEventListener('click', () => {
        tagContainer.removeChild(div)
    })
    return div;
}

// Everytime user press Enter key
input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        tags.unshift(input.value)
        createTag();
        input.value = ''
    }
})
