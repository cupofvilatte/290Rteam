document.addEventListener('DOMContentLoaded', () => {
    // Populate Header
    const header = document.querySelector('header') as HTMLElement;
    if (header) {
      header.innerHTML = `
        <nav>
          <ul>
            <li><a href="/thanksgiving/index">Home</a></li>
            <li><a href="/thanksgiving/quiz">Quiz</a></li>
            <li><a href="/thanksgiving/recipe-page">Recipes</a></li>
            <li><a href="/thanksgiving/gratitude">Gratitude</a></li>
          </ul>
        </nav>
      `;
    }
  
    // Populate Footer
    const footer = document.querySelector('footer') as HTMLElement;
    if (footer) {
      footer.innerHTML = `
        <p>© 2024 Deno Thanksgiving Celebration. All rights reserved.</p>
      `;
    }
  });
  