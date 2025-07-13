const loveLetter = document.getElementById('loveLetter');
const openLetter = document.getElementById('openLetter');

loveLetter.addEventListener('click', () => {
  loveLetter.style.display = 'none';
  openLetter.style.display = 'block';
});