document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribeForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      if (email) {
        alert('Thanks for subscribing, ' + email + '!');
        form.reset();
      } else {
        alert('Please enter a valid email.');
      }
    });
  });