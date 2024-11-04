function shuffleNumbers() {
    const grid = document.getElementById("grid");
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    
    const gridItems = document.querySelectorAll("#grid div");
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].textContent = numbers[i];
    }
  }