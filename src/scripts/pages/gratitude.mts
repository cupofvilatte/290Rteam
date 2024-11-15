
(function initListeners() {
    (document.getElementById("gratitude-submit") as HTMLButtonElement)
        .addEventListener('click', createCloud);


})();


function createCloud() {
    (document.querySelector('textarea') as HTMLTextAreaElement).innerText = '';


}
