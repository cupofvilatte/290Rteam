

function addListItem(container: HTMLElement, word: string) {
    // Add the list item to the container
    container.insertAdjacentHTML('beforeend', listItemTemplate(word));

    // Attach the click event listener to the delete button
    const deleteButton = container.querySelector('li:last-child .delete-btn') as HTMLButtonElement;
    deleteButton.addEventListener('click', (event) => {
        const listItem = (event.currentTarget as HTMLElement).parentElement;
        listItem?.remove(); 
    });
}

function listItemTemplate(word: string): string {
    return `
        <li>
            <span>${word}</span>
            <button class="delete-btn">X</button>
        </li>
    `
}


export { addListItem }