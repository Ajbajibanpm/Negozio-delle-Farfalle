<script>
  document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, null, ' '); // Rimuove il # dall'URL
  });
</script>