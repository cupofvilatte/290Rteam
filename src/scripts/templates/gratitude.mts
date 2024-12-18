

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
    `;
}

function leafsvg(): string {
    // <!-- <?xml version="1.0" encoding="iso-8859-1"?>
    // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> -->
    // <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    return `
    <svg class="leaf" height="800px" width="800px" version="1.1" id="_x36_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 512 512"  xml:space="preserve">
    <g>
        <path class="leaf-border" d="M468.903,47.342C336.918-12.07,187.521,3.632,91.484,99.676
            c-92.44,92.437-110.422,234.285-58.68,362.459c-8.942,8.786-17.178,16.931-24.382,24.139c-5.956,5.956,0,0,0,0l21.549,21.549
            c1.979-1.978,0,0,0,0c7.204-7.207,15.35-15.44,24.135-24.385c128.171,51.745,270.019,33.76,362.456-58.677
            C512.606,328.717,528.315,179.32,468.903,47.342z"/>
        <g>
            <g>
                <path class="leaf-area" d="M91.484,87.261C-4.567,183.305-20.269,332.703,39.15,464.681L468.903,34.927
                    C336.918-24.485,187.521-8.783,91.484,87.261z"/>
                <path class="leaf-area" d="M416.562,412.346C320.517,508.39,171.121,524.1,39.15,464.681L468.903,34.927
                    C528.315,166.906,512.606,316.302,416.562,412.346z"/>
            </g>
            <path class="leaf-stem" d="M21.55,503.831c3.222-2.022,3.222-2.022,8.421-8.422C133.412,391.961,415.405,92.723,424.751,79.08
                C411.1,88.418,111.862,370.419,8.422,473.86C2.466,479.816,0,482.273,0,482.273L21.55,503.831z"/>
            <path class="leaf-stem" d="M271.579,240.382c0,0,0,0,0-9.469c0-42.596-8.168-162.277-10.196-167.004
                c-2.044,4.727-10.203,124.408-10.203,167.004c-0.008,9.469-0.008,9.469-0.008,9.469H271.579z"/>
            <path class="leaf-stem" d="M163.215,348.746c0,0,0,0,0-9.469c0-42.597-8.167-162.277-10.203-167.004
                c-2.044,4.727-10.204,124.414-10.204,167.004c0,9.469,0,9.469,0,9.469H163.215z"/>
            <path class="leaf-stem" d="M265.259,234.062c0,0,0,0,9.469,0c42.596,0,162.277,8.16,167.004,10.204
                c-4.727,2.044-124.408,10.204-167.004,10.204c-9.469,0-9.469,0-9.469,0V234.062z"/>
            <path class="leaf-stem" d="M156.895,342.426c0,0,0,0,9.469,0c42.589,0,162.277,8.167,167.004,10.203
                c-4.728,2.044-124.415,10.204-167.004,10.204c-9.469,0.007-9.469,0.007-9.469,0.007V342.426z"/>
        </g>
    </g>
    </svg>`;
}


export { addListItem, leafsvg }