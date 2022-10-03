function editElement(element, match, replacer) {
    const content = element.textContent;
    const matcher = new RegExp(match, 'g')
    const editer = content.replace(matcher, replacer)
    element.textContent = editer;
}