import './style.css';

const barbers = [
  { name: 'Makas Atölyesi', area: 'Kadıköy, İstanbul', rating: '4.9', time: 'Bugün 14:30', color: 'sand' },
  { name: 'Klasik Kesim', area: 'Beşiktaş, İstanbul', rating: '4.8', time: 'Bugün 16:00', color: 'blue' },
  { name: 'Sakal & Stil', area: 'Üsküdar, İstanbul', rating: '4.7', time: 'Yarın 10:00', color: 'green' },
];

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="brand" href="#"><span class="brand-mark">✂</span> Berber<span>Yanımda</span></a>
    <button class="ghost-button">Berber misin? <span>İşletmeni ekle →</span></button>
  </header>
  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">YAKININDAKİ BERBERLER</p>
        <h1>İyi bir kesim,<br /><em>iyi hissettirir.</em></h1>
        <p class="hero-text">Bölgenin en iyi berberlerini keşfet, hizmetleri incele ve sana uygun saati hemen ayırt.</p>
        <div class="search-box"><span>⌖</span><input value="Kadıköy, İstanbul" aria-label="Konum ara" /><button>Berber bul</button></div>
        <p class="trust">✦  Güvenilir berberler  ·  ◷  Kolay randevu  ·  ♡  Gerçek yorumlar</p>
      </div>
      <div class="hero-art"><div class="circle circle-one"></div><div class="circle circle-two"></div><div class="scissors">✂</div><div class="art-label">STİLİNİ<br /><strong>YAKALA</strong></div></div>
    </section>
    <section class="nearby"><div class="section-heading"><div><p class="eyebrow">BUGÜN İÇİN</p><h2>Yakınındaki favoriler</h2></div><a href="#">Tümünü gör →</a></div><div class="cards">${barbers.map((barber) => `<article class="card"><div class="card-image ${barber.color}"><span>✂</span><small>İstanbul</small></div><div class="card-content"><div class="card-title"><h3>${barber.name}</h3><span>★ ${barber.rating}</span></div><p>${barber.area}</p><div class="card-footer"><span class="available">● ${barber.time}</span><button class="book" data-name="${barber.name}">Randevu al</button></div></div></article>`).join('')}</div></section>
  </main>
  <footer>BerberYanımda <span>•</span> Tarzına yakın, sana yakın.</footer>
`;

document.querySelectorAll('.book').forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'Seçildi ✓';
    button.classList.add('selected');
    document.querySelector('.search-box input').value = `${button.dataset.name} için randevu`;
  });
});
