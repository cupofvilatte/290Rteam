document.addEventListener('DOMContentLoaded', () => {
    // Populate Header
    const header = document.querySelector('header') as HTMLElement;
    if (header) {
      header.innerHTML = `
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/quiz.html">Quiz</a></li>
            <li><a href="/recipe-page.html">Recipes</a></li>
            <li><a href="/gratitude.html">Gratitude</a></li>
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
  