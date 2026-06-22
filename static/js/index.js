// Copy BibTeX to clipboard
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".copy-btn");
  const code = document.querySelector(".bibtex code");
  if (!btn || !code) return;

  btn.addEventListener("click", function () {
    const text = code.innerText;
    navigator.clipboard.writeText(text).then(
      function () {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
        setTimeout(function () {
          btn.innerHTML = original;
        }, 1600);
      },
      function () {
        btn.innerHTML = "Copy failed";
      }
    );
  });
});
