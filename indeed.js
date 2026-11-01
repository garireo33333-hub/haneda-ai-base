// ====== Header scroll state ======
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 30) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ====== Nav toggle ======
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
navToggle?.addEventListener('click', () => {
  siteNav.classList.toggle('open');
  navToggle.classList.toggle('open');
});
siteNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  siteNav.classList.remove('open');
  navToggle.classList.remove('open');
}));

// ====== Scroll reveal ======
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ====== Form ======
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successBox = document.getElementById('formSuccess');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;
  form.querySelectorAll('[data-field]').forEach(group => {
    const input = group.querySelector('input,textarea');
    const v = input.value.trim();
    let ok = v.length > 0;
    if (input.type === 'email' && ok) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!ok) { group.classList.add('invalid'); valid = false; }
    else group.classList.remove('invalid');
  });
  const agree = document.getElementById('agree');
  if (!agree.checked) { valid = false; agree.parentElement.style.color = '#E63946'; }
  else agree.parentElement.style.color = '';

  if (!valid) return;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '送信中...';

  // GAS: 自動返信メール + Sheets記録（fire-and-forget）
  const gasParams = new URLSearchParams({
    name: form.querySelector('[name="name"]').value.trim(),
    company: form.querySelector('[name="company"]').value.trim(),
    phone: form.querySelector('[name="phone"]').value.trim(),
    email: form.querySelector('[name="email"]').value.trim(),
    message: '[Indeed LP] ' + form.querySelector('[name="message"]').value.trim(),
  });
  fetch(`https://script.google.com/macros/s/AKfycbzdNw-a-wPNQijc8-Jh6EbwrDiQDLtzReVTTYCU2InZYVbiQt-1BvTohOxOevOBjjxAew/exec?${gasParams}`, {
    method: 'GET',
    mode: 'no-cors',
  }).catch(() => {});

  const data = new FormData(form);
  data.append('access_key', '50a823fd-d266-44b6-8cfe-99cccfb22496');
  data.append('subject', '【Indeed相談】HANEDA AI BASE Indeedページより');
  data.append('from_name', 'HANEDA AI BASE フォーム');

  fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
    .then(res => res.json())
    .then(json => {
      if (json.success) {
        form.querySelectorAll('.form-row, .form-group, .form-check, .btn-submit').forEach(el => el.style.display = 'none');
        successBox.classList.add('show');
      } else {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '送信する';
        alert('送信に失敗しました。お手数ですが、しばらくしてから再度お試しください。');
      }
    })
    .catch(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '送信する';
      alert('送信に失敗しました。ネットワーク接続をご確認ください。');
    });
});

// Live clear of invalid state
form?.querySelectorAll('[data-field] input, [data-field] textarea').forEach(input => {
  input.addEventListener('input', () => {
    input.closest('[data-field]').classList.remove('invalid');
  });
});

