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

// ====== Build sections ======
const main = document.getElementById('main-content');
const footerMount = document.getElementById('footer-mount');

const problems = [
  { icon: 'clock', text: '見積もりや日報など、手作業が多くて時間が足りない' },
  { icon: 'sparkles', text: 'AIって使えそうだけど、何から始めればいいかわからない' },
  { icon: 'search', text: 'ホームページがなかなか検索に引っかからない' },
  { icon: 'chart', text: 'Web広告をやっているが、効果が出ているのかよくわからない' },
  { icon: 'yen', text: '大手のコンサルは高くて手が出ない' },
];

const icons = {
  clock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  sparkles: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 L13.5 9 L19.5 10.5 L13.5 12 L12 18 L10.5 12 L4.5 10.5 L10.5 9 Z"/><path d="M19 17 L19.7 19.3 L22 20 L19.7 20.7 L19 23 L18.3 20.7 L16 20 L18.3 19.3 Z"/></svg>',
  search: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>',
  chart: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="20" x2="21" y2="20"/><rect x="6" y="12" width="3" height="8"/><rect x="11" y="7" width="3" height="13"/><rect x="16" y="14" width="3" height="6"/></svg>',
  yen: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4 L12 12 L18 4"/><line x1="12" y1="12" x2="12" y2="20"/><line x1="7" y1="14" x2="17" y2="14"/><line x1="7" y1="17" x2="17" y2="17"/></svg>',
  shield: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 L20 5 V11 C20 16.5 16.5 20.5 12 22 C7.5 20.5 4 16.5 4 11 V5 Z"/><polyline points="9 12 11 14 15 10"/></svg>',
  build: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3 a1 1 0 0 0 0 1.4 l1.6 1.6 a1 1 0 0 0 1.4 0 l3.77-3.77 a6 6 0 0 1 -7.94 7.94 l-6.91 6.91 a2.12 2.12 0 0 1 -3-3 l6.91-6.91 a6 6 0 0 1 7.94-7.94 z"/></svg>',
  bike: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6 a1 1 0 1 0 0-2 a1 1 0 1 0 0 2"/><path d="M12 17.5 V14 l-3-3 4-3 2 3 h2"/></svg>',
  check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 10 18 20 6"/></svg>',
  pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22 s-7-7-7-13 a7 7 0 0 1 14 0 c0 6 -7 13 -7 13 z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 L12 3 L21 10 V20 a1 1 0 0 1 -1 1 H4 a1 1 0 0 1 -1 -1 Z"/></svg>',
  family: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20 v-1 a5 5 0 0 1 10 0 v1"/><path d="M14 20 v-1 a4 4 0 0 1 7 0 v1"/></svg>',
  birth: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="13"/><circle cx="12" cy="16.5" r=".7" fill="currentColor"/></svg>',
};

main.innerHTML = `
<!-- Problems -->
<section class="problems" id="problems">
  <div class="container">
    <div class="problems-head reveal">
      <div class="section-eyebrow">VOICE FROM 大田区</div>
      <h2 class="section-title">こんなお悩みを、<br /><span class="accent">よく聞きます。</span></h2>
      <p class="problems-lead">
        運送・建築・製造といった現場仕事ほど、AIで一気に効率化できる余地が眠っています。<br />
        まずは「うちだったら何が効率化できるのか」を、私と一緒に整理しましょう。
      </p>
    </div>

    <div class="problems-grid">
      ${problems.map((p, i) => `
        <div class="problem-card reveal d${(i%4)+1}">
          <div class="problem-num">0${i+1}</div>
          <div class="problem-icon">${icons[p.icon]}</div>
          <p class="problem-text">${p.text}</p>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- Services -->
<section class="services" id="services">
  <div class="container">
    <div class="reveal" style="margin-bottom:64px">
      <div class="section-eyebrow">OUR SERVICES</div>
      <h2 class="section-title">「動くもの」まで、<span class="accent">一気通貫</span>で。</h2>
      <p class="section-lead">提案して終わりではなく、実際に現場で使えるところまで作り切ります。AI・SEO・広告まで、必要な範囲だけ組み合わせてご提供します。</p>
    </div>

    <div class="services-grid">
      <div class="service-card main reveal d1">
        <span class="service-badge">MAIN</span>
        <img src="images/service-processing.svg" class="service-illust-sub" alt="" aria-hidden="true" />
        <h3 class="service-name">AI業務効率化</h3>
        <p class="service-desc">日報・見積・メール対応など、毎日の手作業をAIで自動化します。「うちで何が効率化できるか」を一緒に整理するところから始めるので、IT知識がなくても安心して導入できます。</p>
        <a href="#contact" class="service-link">この内容で相談する <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </div>

      <div class="service-card sub reveal d2">
        <img src="images/service-chat.svg" class="service-illust-sub" alt="" aria-hidden="true" />
        <h3 class="service-name" style="font-size:28px">AIコンサルティング</h3>
        <p class="service-desc">「AIって何から始めればいい？」その疑問から一緒に整理します。ChatGPT・Claudeなどのツール選定から、社内での使い方ルール、スタッフへの定着サポートまで、AI導入の全体を設計します。</p>
        <a href="#contact" class="service-link">相談する <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </div>

      <div class="service-card sub reveal d3">
        <img src="images/service-search.svg" class="service-illust-sub" alt="" aria-hidden="true" />
        <h3 class="service-name">SEO / MEO対策</h3>
        <p class="service-desc">「地域名＋業種」で検索した時に上位に出てくる会社を目指します。GoogleマップのMEO対策とサイトのSEO対策をセットで実施。AIを使ったコンテンツ制作で更新コストも抑えます。</p>
        <a href="#contact" class="service-link">相談する <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </div>

      <div class="service-card sub reveal d2">
        <img src="images/service-website.svg" class="service-illust-sub" alt="" aria-hidden="true" />
        <h3 class="service-name">HP・LP制作</h3>
        <p class="service-desc">まだHPがない、または古くなっている会社向けに、AIを活用した制作で低コスト・短納期を実現。スマホ対応・問合せフォームも標準で含みます。</p>
        <a href="#contact" class="service-link">相談する <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </div>

      <div class="service-card sub reveal d3">
        <img src="images/service-marketing.svg" class="service-illust-sub" alt="" aria-hidden="true" />
        <h3 class="service-name">広告運用・マーケ戦略</h3>
        <p class="service-desc">RIZAP・CrossGroupでの28億円規模のマーケ実績をもとに、Google・Meta広告の運用代行や集客戦略を提案。「やってみたけど効果が出ない」という会社こそ、一度見直しましょう。</p>
        <a href="#contact" class="service-link">相談する <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </div>

      <div class="service-card sub reveal d4">
        <img src="images/service-blocks.svg" class="service-illust-sub" alt="" aria-hidden="true" />
        <h3 class="service-name">組み合わせ自由</h3>
        <p class="service-desc">「まず何から始めればいいかわからない」という方に最適です。相談しながら必要なサービスだけ選んでOK。最初の1ステップを一緒に決めましょう。</p>
        <a href="#contact" class="service-link">相談する <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </div>
    </div>
  </div>
</section>


<!-- Industry AI Tab -->
<section class="industry-tab" id="industry-tab">
  <div class="container">
    <div class="industry-tab-head reveal">
      <div class="section-eyebrow">INDUSTRY × AI</div>
      <h2 class="section-title">業種別 AI 活用メニュー</h2>
      <p class="section-lead">あなたの業種を選んでください。具体的に何が変わるかをご確認いただけます。</p>
    </div>

    <div class="itab-nav reveal">
      <button class="itab-btn active" data-tab="unso">🚛 運送・物流業</button>
      <button class="itab-btn" data-tab="kensetsu">🏗️ 建設・リフォーム業</button>
      <button class="itab-btn" data-tab="shigyo">🏛️ 士業</button>
    </div>

    <div class="itab-panels">

      <div class="itab-panel active" data-panel="unso">
        <div class="itab-kv">
          <div class="itab-kv-left">
            <h3 class="itab-panel-title">運送・物流業の<br />AIで変わること</h3>
            <p class="itab-panel-lead">日報・アルコールチェック・配送管理など、毎日の繰り返し作業を大幅に削減できます。LINEだけで完結するので現場でもすぐ使えます。</p>
            <p class="itab-case">📌 相模石油：配車計画AI化で担当者の16時間/日の作業がほぼゼロに</p>
            <a href="#contact" class="btn btn-primary">運送業の導入を相談する</a>
          </div>
          <div class="itab-kv-right">
            <div class="itab-stat-cards">
              <div class="itab-stat"><span class="itab-stat-num">-80<small>%</small></span><span class="itab-stat-label">日報作成時間</span></div>
              <div class="itab-stat"><span class="itab-stat-num">0<small>件</small></span><span class="itab-stat-label">紙の記録ミス</span></div>
              <div class="itab-stat"><span class="itab-stat-num">-15<small>%</small></span><span class="itab-stat-label">配送コスト</span></div>
            </div>
          </div>
        </div>
        <div class="itab-items">
          <div class="itab-item"><div class="itab-item-tag">日報</div><div class="itab-item-body"><strong>LINEで30秒入力 → 日報・点呼記録を自動生成</strong><br /><span>手書き廃止・スマホだけで完結。IT知識不要。</span></div><div class="itab-item-badge">時間 <b>-80%</b></div></div>
          <div class="itab-item"><div class="itab-item-tag">法令対応</div><div class="itab-item-body"><strong>アルコールチェック記録のデジタル化・法令対応</strong><br /><span>2023年義務化に完全対応。監査リスクをゼロに。</span></div><div class="itab-item-badge">紙管理 <b>ゼロ</b></div></div>
          <div class="itab-item"><div class="itab-item-tag">配送最適化</div><div class="itab-item-body"><strong>AIルート最適化で燃料・配送コストを削減</strong><br /><span>日本郵便の事例では再配達率が20%削減。</span></div><div class="itab-item-badge">コスト <b>-15%</b></div></div>
          <div class="itab-item"><div class="itab-item-tag">仕分け</div><div class="itab-item-body"><strong>画像AIで仕分け・品質チェックを自動化</strong><br /><span>佐川急便の事例では作業時間40%短縮・精度99.5%以上。</span></div><div class="itab-item-badge">作業 <b>-40%</b></div></div>
        </div>
      </div>

      <div class="itab-panel" data-panel="kensetsu">
        <div class="itab-kv">
          <div class="itab-kv-left">
            <h3 class="itab-panel-title">建設・リフォーム業の<br />AIで変わること</h3>
            <p class="itab-panel-lead">写真を撮るだけで報告書が完成。見積書もAIが初稿を作成。現場の安全管理もカメラが自動検知。現場担当者の事務負担を一気に削減します。</p>
            <p class="itab-case">📌 大手建設法人：許認可書類の作成工数を70%削減</p>
            <a href="#contact" class="btn btn-primary">建設業の導入を相談する</a>
          </div>
          <div class="itab-kv-right">
            <div class="itab-stat-cards">
              <div class="itab-stat"><span class="itab-stat-num">1/3<small>以下</small></span><span class="itab-stat-label">書類作成時間</span></div>
              <div class="itab-stat"><span class="itab-stat-num">-70<small>%</small></span><span class="itab-stat-label">許認可書類工数</span></div>
              <div class="itab-stat"><span class="itab-stat-num">即時<small></small></span><span class="itab-stat-label">安全装備検知</span></div>
            </div>
          </div>
        </div>
        <div class="itab-items">
          <div class="itab-item"><div class="itab-item-tag">報告書</div><div class="itab-item-body"><strong>現場写真を送るだけで工事報告書を自動生成</strong><br /><span>スマホで撮影 → LINEで送信 → 報告書PDF完成。</span></div><div class="itab-item-badge">作成時間 <b>1/3以下</b></div></div>
          <div class="itab-item"><div class="itab-item-tag">見積書</div><div class="itab-item-body"><strong>工事内容を入力するだけで見積書ドラフトを自動作成</strong><br /><span>過去データから学習。週数時間の見積作業を大幅削減。</span></div><div class="itab-item-badge">見積工数 <b>大幅削減</b></div></div>
          <div class="itab-item"><div class="itab-item-tag">安全管理</div><div class="itab-item-body"><strong>AIカメラで安全装備の未着用・危険行動を即検知</strong><br /><span>ヒヤリハット記録を自動化。コンプライアンス対応も。</span></div><div class="itab-item-badge">検知 <b>リアルタイム</b></div></div>
          <div class="itab-item"><div class="itab-item-tag">議事録</div><div class="itab-item-body"><strong>打合せの議事録・報告書をAIが自動生成・共有</strong><br /><span>会議後の書き起こし作業がゼロに。</span></div><div class="itab-item-badge">事務作業 <b>削減</b></div></div>
        </div>
      </div>

      <div class="itab-panel" data-panel="shigyo">
        <div class="itab-kv">
          <div class="itab-kv-left">
            <h3 class="itab-panel-title">士業（行政書士・税理士など）の<br />AIで変わること</h3>
            <p class="itab-panel-lead">申請書・補助金書類の初稿作成、定型問い合わせへの自動対応。手を動かすべき仕事に集中できる環境をつくります。</p>
            <p class="itab-case">📌 中小事務所：月400時間 → 50時間（88%削減）</p>
            <a href="#contact" class="btn btn-primary">士業の導入を相談する</a>
          </div>
          <div class="itab-kv-right">
            <div class="itab-stat-cards">
              <div class="itab-stat"><span class="itab-stat-num">-70<small>%</small></span><span class="itab-stat-label">書類作成工数</span></div>
              <div class="itab-stat"><span class="itab-stat-num">30<small>分</small></span><span class="itab-stat-label">事業計画書ドラフト</span></div>
              <div class="itab-stat"><span class="itab-stat-num">24h<small></small></span><span class="itab-stat-label">Bot自動対応</span></div>
            </div>
          </div>
        </div>
        <div class="itab-items">
          <div class="itab-item"><div class="itab-item-tag">申請書</div><div class="itab-item-body"><strong>許認可・補助金申請書のドラフトをAIが自動生成</strong><br /><span>初稿作成の時間を60〜70%削減。確認・修正に集中できる。</span></div><div class="itab-item-badge">書類作成 <b>-70%</b></div></div>
          <div class="itab-item"><div class="itab-item-tag">補助金</div><div class="itab-item-body"><strong>補助金申請の事業計画書ドラフトを30分以内に作成</strong><br /><span>2〜3時間かかっていた作業が30分に短縮。</span></div><div class="itab-item-badge">2〜3時間 → <b>30分</b></div></div>
          <div class="itab-item"><div class="itab-item-tag">問い合わせ</div><div class="itab-item-body"><strong>定型的な問い合わせをチャットBotが24時間自動対応</strong><br /><span>「料金は？」「必要書類は？」を自動回答。電話が減る。</span></div><div class="itab-item-badge">対応時間 <b>大幅削減</b></div></div>
          <div class="itab-item"><div class="itab-item-tag">書類整理</div><div class="itab-item-body"><strong>紙資料・PDFをOCRでデータ化し自動分類・検索</strong><br /><span>書類整理がほぼ自動化。必要な書類がすぐ見つかる。</span></div><div class="itab-item-badge">整理作業 <b>ほぼ自動</b></div></div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Numbers -->
<section class="numbers" id="numbers">
  <div class="container">
    <div class="numbers-head reveal" style="margin-bottom:56px">
      <div class="section-eyebrow" style="color:rgba(0,191,255,.65)">TRACK RECORD</div>
      <h2 class="section-title" style="color:#fff">数字で見る、<br /><span style="color:#00BFFF">HANEDA AI BASE 代表の実績。</span></h2>
    </div>
    <div class="numbers-grid">
      <div class="number-item reveal d1">
        <div class="number-val">
          <span class="number-count">8</span>
          <span class="number-unit">社</span>
        </div>
        <div class="number-label">支援企業数</div>
        <div class="number-sub">大田区を中心とした<br />中小企業へのAI導入</div>
      </div>
      <div class="number-item reveal d2">
        <div class="number-val">
          <span class="number-count">30</span>
          <span class="number-unit">個</span>
        </div>
        <div class="number-label">AIツール構築数</div>
        <div class="number-sub">業務自動化・チャット・<br />分析ダッシュボードなど</div>
      </div>
      <div class="number-item reveal d3">
        <div class="number-val">
          <span class="number-count">50</span>
          <span class="number-unit">億円+</span>
        </div>
        <div class="number-label">マーケ統括売上実績</div>
        <div class="number-sub">CrossGroup・RIZAP・<br />OrganicGroup累計</div>
      </div>
      <div class="number-item reveal d4">
        <div class="number-val">
          <span class="number-count">10</span>
          <span class="number-unit">年+</span>
        </div>
        <div class="number-label">Web・AI実務経験</div>
        <div class="number-sub">製造・マーケ・EC・<br />AI開発を横断</div>
      </div>
    </div>
  </div>
</section>

<!-- Profit -->
<section class="profit" id="profit">
  <div class="container">
    <div class="profit-head reveal">
      <div class="section-eyebrow">OUR APPROACH</div>
      <h2 class="section-title">「削る」と「増やす」で、<br /><span class="accent">利益を最大化</span>する。</h2>
      <p class="section-lead">HANEDA AI BASEが大切にする2つのアプローチ。コスト削減で手残りを増やし、マーケティングで売上を伸ばす——この両輪から、あなたの会社の利益を底上げします。</p>
    </div>

    <div class="profit-grid">

      <div class="profit-card cost reveal d1">
        <div class="profit-card-label">APPROACH 01</div>
        <div class="profit-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
        </div>
        <h3 class="profit-title">コスト・工数を削って、<br />手残りを増やす</h3>
        <p class="profit-desc">AIで日報・見積書・報告書などの手作業を自動化。ツール費用・外注費・人件費の無駄を見直して、売上を変えずに利益だけを増やします。</p>
        <ul class="profit-items">
          <li>日報・見積書・報告書の自動生成</li>
          <li>重複ツールの整理・コスト最適化</li>
          <li>業務自動化で残業時間を削減</li>
        </ul>
      </div>

      <div class="profit-card sales reveal d2">
        <div class="profit-card-label">APPROACH 02</div>
        <div class="profit-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <h3 class="profit-title">集客・転換率を改善して、<br />売上を伸ばす</h3>
        <p class="profit-desc">MEO・SEO・広告でお客様が来る仕組みを作り、HPやLPの改善で問い合わせを増やします。集客から成約まで、マーケティング全体を一緒に設計します。</p>
        <ul class="profit-items">
          <li>MEO・SEOで地域検索の上位表示</li>
          <li>HP・LP改善で問い合わせ・予約を増加</li>
          <li>Google・Meta広告で費用対効果を最大化</li>
        </ul>
      </div>

    </div>

    <div class="profit-subsidy reveal">
      <div class="profit-subsidy-body">
        <div class="profit-subsidy-label">SUBSIDY SUPPORT</div>
        <h3 class="profit-subsidy-title">補助金・助成金を活用して、<br />実質負担を大幅に削減</h3>
        <p class="profit-subsidy-desc">IT導入補助金・小規模事業者持続化補助金など、大田区の中小企業が使える補助金・助成金の選定から申請書作成まで一緒にサポートします。うまく活用すれば、導入費が実質ほぼゼロになるケースも。</p>
      </div>
      <div class="profit-subsidy-stat">
        <div class="profit-subsidy-num">75<span class="profit-subsidy-num-unit">%</span></div>
        <div class="profit-subsidy-caption">IT導入補助金<br />最大補助率</div>
      </div>
    </div>

  </div>
</section>

<!-- Benefits -->
<section class="benefits" id="benefits">
  <div class="container">
    <div class="benefits-head reveal">
      <div class="section-eyebrow">WHY HANEDA AI BASE</div>
      <h2 class="section-title">なぜ、<span class="accent">HANEDA AI BASE</span>が<br />選ばれるのか。</h2>
      <p class="section-lead">大手コンサルにも、フリーランスにもない。<br />「近くて、安くて、ちゃんと動かす」がHANEDA AI BASEの立ち位置です。</p>
    </div>

    <div class="benefits-grid">
      <div class="benefit-card reveal d1">
        <span class="benefit-num">REASON 01</span>
        <div class="benefit-icon">${icons.shield}</div>
        <h3 class="benefit-name">企業に依頼するより10分の1のコストに抑えられる</h3>
        <p class="benefit-desc">個人事業スタイルだからこそ、大手コンサルの10分の1の費用で対応可能。料金は押しつけず、対話の中で一緒に決めていきます。</p>
        <img src="images/benefit-deal.svg" class="benefit-illust" alt="" aria-hidden="true" />
        <span class="benefit-tag">予算ベースで相談OK</span>
      </div>

      <div class="benefit-card reveal d2">
        <span class="benefit-num">REASON 02</span>
        <div class="benefit-icon">${icons.build}</div>
        <h3 class="benefit-name">相談・提案・実装まで、<br />全部やる</h3>
        <p class="benefit-desc">提案資料を作って終わり、ではありません。AIで動くツールも、HPも、広告運用も、実際に「動くもの」まで一緒に作ります。</p>
        <img src="images/benefit-cowork.svg" class="benefit-illust" alt="" aria-hidden="true" />
        <span class="benefit-tag">伴走型で実装まで</span>
      </div>

      <div class="benefit-card reveal d3">
        <span class="benefit-num">REASON 03</span>
        <div class="benefit-icon">${icons.bike}</div>
        <h3 class="benefit-name">住まいが大田区。<br />だからすぐそこにいる</h3>
        <p class="benefit-desc">電話やメールだけのやり取りではなく、必要なら自転車で会いに行きます。糀谷・雑色・大鳥居エリアなら15分圏内。</p>
        <img src="images/problem-worktime.svg" class="benefit-illust" alt="" aria-hidden="true" />
        <span class="benefit-tag">対面・直接対応</span>
      </div>

    </div>
  </div>
</section>

<!-- Flow -->
<section class="flow" id="flow">
  <div class="container">
    <div class="flow-head reveal">
      <div class="section-eyebrow">HOW WE WORK</div>
      <h2 class="section-title">相談から<span class="accent">稼働</span>まで、<br />4ステップで進めます。</h2>
      <p class="section-lead">「まず何をすれば？」——その整理から一緒に始めます。難しい契約や前払いは一切なし、話しながら進めていきましょう。</p>
    </div>
    <div class="flow-grid">

      <div class="flow-step reveal d1">
        <span class="flow-step-num">STEP 01</span>
        <div class="flow-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <h3 class="flow-step-title">ヒアリング</h3>
        <p class="flow-step-desc">現状の作業フローやお困りごとをじっくりお聞きします。売り込みは一切なし。「何が変えられるか」を一緒に整理するところから始めます。</p>
        <span class="flow-step-tag">完全無料</span>
      </div>

      <div class="flow-arrow" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </div>

      <div class="flow-step reveal d2">
        <span class="flow-step-num">STEP 02</span>
        <div class="flow-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <h3 class="flow-step-title">設計</h3>
        <p class="flow-step-desc">ヒアリング内容をもとに、最適なアプローチと概算費用をご提示。「うちでいうとどういうこと？」がわかる言葉でお伝えします。</p>
        <span class="flow-step-tag">最短1日でご提案</span>
      </div>

      <div class="flow-arrow" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </div>

      <div class="flow-step reveal d3">
        <span class="flow-step-num">STEP 03</span>
        <div class="flow-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/></svg>
        </div>
        <h3 class="flow-step-title">開発</h3>
        <p class="flow-step-desc">承認後、実際に動くものを作ります。AIツール・HP・広告設定まで、提案で終わらず「稼働する状態」まで完成させます。</p>
      </div>

      <div class="flow-arrow" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </div>

      <div class="flow-step reveal d4">
        <span class="flow-step-num">STEP 04</span>
        <div class="flow-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 L20 5 V11 C20 16.5 16.5 20.5 12 22 C7.5 20.5 4 16.5 4 11 V5 Z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <h3 class="flow-step-title">運用</h3>
        <p class="flow-step-desc">納品後もLINEやメールでの質問対応・改善提案を継続。現場に定着するまで、ずっと伴走します。</p>
      </div>

    </div>
  </div>
</section>

<!-- Cases -->
<section class="cases" id="cases">
  <div class="container">
    <div class="cases-head reveal">
      <div class="lead-block">
        <div class="section-eyebrow">CASES & VOICES</div>
        <h2 class="section-title">導入事例・<span class="accent">お客様の声</span></h2>
        <p class="section-lead" style="margin-bottom:0">現職でのAI支援実績から、一部をご紹介します。<br />運送・建築・製造など、現場仕事の会社への導入事例です。</p>
      </div>
      <a href="#contact" class="btn btn-outline">無料相談はこちら</a>
    </div>

    <div class="cases-grid">
      <div class="case-card reveal d1">
        <div class="case-meta">
          <span class="case-chip">運送業</span>
          <span class="case-chip">従業員30名</span>
        </div>
        <h3 class="case-title">日報のAI自動生成・音声入力化</h3>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-label">日報作成時間</span>
            <span class="case-stat-value">30分 → 5分</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-label">月間削減時間</span>
            <span class="case-stat-value">約50時間</span>
          </div>
        </div>
        <blockquote class="case-quote">「うちみたいな小さい運送屋がAIなんて、と思ってたんですよ。でも実際やってみたら2週間で現場が回り始めて。日報の残業がほぼなくなりました。」</blockquote>
        <div class="case-who">代表取締役（50代）</div>
      </div>

      <div class="case-card reveal d2">
        <div class="case-meta">
          <span class="case-chip">建築業</span>
          <span class="case-chip">従業員10名</span>
        </div>
        <h3 class="case-title">AI見積書ドラフト生成・MEO対策</h3>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-label">見積書作成時間</span>
            <span class="case-stat-value">半日 → 1時間以内</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-label">月間問い合わせ</span>
            <span class="case-stat-value">＋5件</span>
          </div>
        </div>
        <blockquote class="case-quote">「見積もりが速くなったら、お客さんの反応が変わりましたね。『早いね』って言ってもらえるようになって、競合より先に出せるようになった。」</blockquote>
        <div class="case-who">現場監督（40代）</div>
      </div>

      <div class="case-card reveal d3">
        <div class="case-meta">
          <span class="case-chip">製造業</span>
          <span class="case-chip">従業員20名</span>
        </div>
        <h3 class="case-title">取引先向け報告書の自動生成</h3>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-label">報告書作成時間</span>
            <span class="case-stat-value">月20時間 → 3時間</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-label">残業削減</span>
            <span class="case-stat-value">月30時間</span>
          </div>
        </div>
        <blockquote class="case-quote">「AIって大企業のもんだと思ってたんで。でも『うちの規模だからこそ効果が出やすい』って言われて、やってみたら本当にそうでした。今月は定時で帰れる日が増えましたよ（笑）」</blockquote>
        <div class="case-who">代表（60代）</div>
      </div>

      <div class="case-card reveal d1">
        <div class="case-meta">
          <span class="case-chip">小売業</span>
          <span class="case-chip">従業員6名</span>
        </div>
        <h3 class="case-title">Google・Meta広告の運用改善</h3>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-label">広告費用対効果（ROAS）</span>
            <span class="case-stat-value">1.8倍 → 4.2倍</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-label">月間EC売上</span>
            <span class="case-stat-value">+68%</span>
          </div>
        </div>
        <blockquote class="case-quote">「自分でやってみたが全然効果が出なくて。数字を見ながら一緒に直してもらったら、1ヶ月で売上が変わりました。広告ってこんなに変わるもんなんですね。」</blockquote>
        <div class="case-who">代表（40代）</div>
      </div>

      <div class="case-card reveal d2">
        <div class="case-meta">
          <span class="case-chip">整骨院</span>
          <span class="case-chip">従業員3名</span>
        </div>
        <h3 class="case-title">HP新規制作・Googleマップ連携</h3>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-label">Web経由の新規予約</span>
            <span class="case-stat-value">月0件 → 月11件</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-label">制作〜公開</span>
            <span class="case-stat-value">10日間</span>
          </div>
        </div>
        <blockquote class="case-quote">「ホームページって高いんでしょ、と思ってたら想像の半分以下の費用で作ってもらえた。しかも早かった。ネットから予約が入るようになって、口コミだけの時代が終わった感じです。」</blockquote>
        <div class="case-who">院長（50代）</div>
      </div>

      <div class="case-card reveal d3">
        <div class="case-meta">
          <span class="case-chip">飲食業</span>
          <span class="case-chip">従業員18名</span>
        </div>
        <h3 class="case-title">ChatGPT活用研修・SNS運用自動化</h3>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-label">SNS投稿作成時間</span>
            <span class="case-stat-value">週3時間 → 30分</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-label">スタッフ定着</span>
            <span class="case-stat-value">研修1回で全員活用</span>
          </div>
        </div>
        <blockquote class="case-quote">「ITが苦手なスタッフばかりで心配だったんですが、実際に触れながら教えてもらったら2時間で使いこなしてました。難しく考えすぎてたんだなと。」</blockquote>
        <div class="case-who">店舗マネージャー（30代）</div>
      </div>
    </div>

    <div class="cases-note reveal">
      ${icons.info}
      <span>掲載の事例は現職でのAI支援実績をもとに、ご本人の了承を得て掲載しています。</span>
    </div>
  </div>
</section>

<!-- Profile -->
<section class="profile" id="profile">
  <div class="container">
    <div style="margin-bottom:56px;max-width:680px" class="reveal">
      <div class="section-eyebrow" style="color:#7DD8FF">REPRESENTATIVE</div>
      <h2 class="section-title">大田区に住む、<br /><span style="color:#00BFFF">あなたの会社のAI担当。</span></h2>
      <p class="section-lead">大手企業で身につけた知見を、地元の中小企業に還元したい。<br />そんな思いで、個人事業スタイルの事業を立ち上げました。</p>
    </div>

    <div class="profile-inner">
      <aside class="profile-card reveal d1">
        <div class="profile-portrait"><img src="images/profile.jpg" alt="三反﨑 港人" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" /></div>
        <div class="profile-name-block">
          <div class="profile-role">代表 / Founder</div>
          <h3 class="profile-name">三反﨑 港人<small>HANEDA AI BASE 代表</small></h3>
        </div>
        <div class="profile-facts">
          <div class="profile-fact">${icons.pin}<span>大田区南蒲田3-15-29 在住</span></div>
          <div class="profile-fact">${icons.birth}<span>1996年生まれ　満29歳</span></div>
          <div class="profile-fact">${icons.family}<span>4人家族（娘2人）</span></div>
          <div class="profile-fact">${icons.home}<span>糀谷・雑色・大鳥居エリア対応</span></div>
        </div>
        <div class="profile-quote">
          「大田区に家を建て、子どもたちと暮らすこの街の会社を、もっと強くしたい。AIという新しい力で、地元の会社が変わっていく姿を一緒に作りたい。そんな思いでこの事業を始めました。」
        </div>
      </aside>

      <div class="timeline">
        <div class="timeline-item reveal d1">
          <div class="timeline-period">学歴</div>
          <h4 class="timeline-title">福井工業高等専門学校</h4>
          <div class="timeline-org">工学系の基礎を実践ベースで習得</div>
        </div>
        <div class="timeline-item reveal d2">
          <div class="timeline-period">2017年</div>
          <h4 class="timeline-title">株式会社SUBARU</h4>
          <div class="timeline-org">自動車エンジンの研究開発</div>
          <p class="timeline-desc">大手メーカーの開発現場で、品質と数字に向き合う仕事を経験。ものづくりの現場感覚を養う。</p>
        </div>
        <div class="timeline-item reveal d3">
          <div class="timeline-period">2019年</div>
          <h4 class="timeline-title">CrossGroup株式会社</h4>
          <div class="timeline-org">マーケティング事業部 部長</div>
          <p class="timeline-desc">投資教育Webコンテンツのマーケを統括。SEO・LP・アフィリエイト等を一気通貫で運用。</p>
          <span class="timeline-highlight">★ 統括売上 28億円</span>
        </div>
        <div class="timeline-item reveal d2">
          <div class="timeline-period">2023年</div>
          <h4 class="timeline-title">株式会社RIZAP</h4>
          <div class="timeline-org">デジタル広告 事業責任者</div>
          <p class="timeline-desc">RIZAP / Chocozap 両事業の Web 広告を担当。大規模予算での運用と検証を経験。</p>
          <span class="timeline-highlight">★ 統括売上 7億円</span>
        </div>
        <div class="timeline-item reveal d3">
          <div class="timeline-period">現在</div>
          <h4 class="timeline-title">OrganicGroup株式会社</h4>
          <div class="timeline-org">ECモール / CRM / 新規事業 / AIDX事業 責任者</div>
          <p class="timeline-desc">複数事業を横断し、AIを使った業務改革（AIDX）を実践。本業で培ったノウハウを、大田区の中小企業に還元します。</p>
          <span class="timeline-highlight">★ 統括売上 20億円</span>
          <span class="timeline-highlight">★ 支援企業数 8社</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq" id="faq">
  <div class="container">
    <div class="faq-head reveal">
      <div class="section-eyebrow">FAQ</div>
      <h2 class="section-title">よくある<span class="accent">ご質問</span></h2>
      <p class="section-lead">気になることがあれば、まずは無料相談でお気軽にどうぞ。</p>
    </div>
    <div class="faq-list">

      <details class="faq-item reveal">
        <summary>
          <span class="faq-q-text">費用はどれくらいかかりますか？</span>
          <span class="faq-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </summary>
        <p class="faq-answer">ご要望やご予算によって異なりますが、目安としてAIツール構築は5万円〜、HP制作は10万円〜、月額サポートは3万円〜でご対応しています。まずは無料相談でご要望をお聞きし、一緒に決めていきましょう。IT導入補助金を活用できれば、実質半額以下になるケースもあります。</p>
      </details>

      <details class="faq-item reveal">
        <summary>
          <span class="faq-q-text">IT知識がなくても大丈夫ですか？</span>
          <span class="faq-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </summary>
        <p class="faq-answer">まったく問題ありません。「パソコンは苦手」「スマホだけで仕事している」という経営者の方にも多くご利用いただいています。専門用語は使わず、実際に触りながら説明するので、わからないことはその場で解決できます。</p>
      </details>

      <details class="faq-item reveal">
        <summary>
          <span class="faq-q-text">個人事業スタイルとのことですが、対応の質は大丈夫ですか？</span>
          <span class="faq-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </summary>
        <p class="faq-answer">対応はすべて代表が直接行います。「担当が変わって毎回説明し直し」ということがなく、一貫したサポートが受けられます。個人事業スタイルだからこそ固定費を抑えた低価格でご提供でき、本業でのAIDX実務経験をそのままお届けします。</p>
      </details>

      <details class="faq-item reveal">
        <summary>
          <span class="faq-q-text">相談から実装まで、どれくらいの期間がかかりますか？</span>
          <span class="faq-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </summary>
        <p class="faq-answer">内容によりますが、AIツールは1〜3週間、HP制作は2〜4週間が目安です。「まず小さく試したい」という方には、1週間で動くプロトタイプをお見せする形でスタートすることもできます。</p>
      </details>

      <details class="faq-item reveal">
        <summary>
          <span class="faq-q-text">まずは相談だけでも大丈夫ですか？</span>
          <span class="faq-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </summary>
        <p class="faq-answer">もちろんです。「話を聞いてみたかっただけ」でも大歓迎です。相談は完全無料で、その場で契約を求めることは一切ありません。「うちで何が効率化できるか」だけでも整理できれば、それだけで価値があると思っています。</p>
      </details>

      <details class="faq-item reveal">
        <summary>
          <span class="faq-q-text">大田区外でも対応していただけますか？</span>
          <span class="faq-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </summary>
        <p class="faq-answer">現在は大田区内のみを対応エリアとしています。特に糀谷・雑色・大鳥居エリアを中心に活動しており、直接お会いしてヒアリング・ご提案をすることを何より大切にしているためです。「顔を見て話したい」「現場を見てから考えたい」という思いが強く、オンラインのみでの支援は行っていません。エリア外の方はご容赦ください。</p>
      </details>

    </div>
  </div>
</section>

<!-- Contact -->
<section class="contact" id="contact">
  <div class="container">
    <div class="contact-inner">
      <div class="contact-info reveal">
        <div class="section-eyebrow">CONTACT</div>
        <h2 class="section-title">まずは気軽に、<br /><span class="accent">話してみてください。</span></h2>
        <p class="section-lead">売り込みは一切しません。あなたの会社に合った方法を、一緒に考えるところから始めます。</p>

        <div class="contact-perks">
          <div class="contact-perk">${icons.check}<span>初回相談は <strong>完全無料</strong>（オンライン・対面どちらもOK）</span></div>
          <div class="contact-perk">${icons.check}<span>強引な営業や、不要なサービスの押し売りは一切しません</span></div>
          <div class="contact-perk">${icons.check}<span>費用は <strong>対話の中で一緒に決めて</strong> いきます</span></div>
          <div class="contact-perk">${icons.check}<span>大田区内は、自転車で訪問可能</span></div>
        </div>

        <div class="contact-meta">
          <div class="contact-meta-row"><span>対応エリア</span><span>大田区（糀谷・雑色・大鳥居 ほか）</span></div>
          <div class="contact-meta-row"><span>対応時間</span><span>平日 19:00〜 / 土日終日</span></div>
          <div class="contact-meta-row"><span>初回相談</span><span>無料 / 約60分</span></div>
          <div class="contact-meta-row"><span>返信目安</span><span>原則24時間以内</span></div>
        </div>
      </div>

      <a href="https://line.me/ti/p/K5vraowyPS" target="_blank" rel="noopener" class="line-form-banner reveal d1">
        <span class="line-form-icon">
          <svg width="26" height="26" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true"><path d="M24 4C12.95 4 4 12.27 4 22.45c0 5.49 2.67 10.39 6.87 13.73-.3 1.11-1.1 4.03-1.26 4.66-.2.79.29 1.59 1.08 1.59.18 0 .36-.05.53-.14 0 0 5.03-2.97 7.09-4.19.87.13 1.76.2 2.69.2 11.05 0 20-8.27 20-18.45S35.05 4 24 4z"/></svg>
        </span>
        <span class="line-form-text">
          <span class="line-form-title">LINEで相談する</span>
          <span class="line-form-sub">LINEのほうが早く返信できます</span>
        </span>
        <svg class="line-form-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>

      <div class="line-form-divider"><span>または、フォームでのお問い合わせ</span></div>

      <form class="contact-form reveal d1" id="contactForm" novalidate>
        <div class="form-row">
          <div class="form-group">
            <label>会社名 <span class="opt">任意</span></label>
            <input type="text" name="company" placeholder="株式会社◯◯" />
          </div>
          <div class="form-group" data-field>
            <label>お名前 <span class="req">必須</span></label>
            <input type="text" name="name" required placeholder="山田 太郎" />
            <span class="error">お名前を入力してください</span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group" data-field>
            <label>電話番号 <span class="req">必須</span></label>
            <input type="tel" name="phone" required placeholder="03-1234-5678" />
            <span class="error">電話番号を入力してください</span>
          </div>
          <div class="form-group" data-field>
            <label>メールアドレス <span class="req">必須</span></label>
            <input type="email" name="email" required placeholder="example@company.co.jp" />
            <span class="error">正しいメールアドレスを入力してください</span>
          </div>
        </div>

        <div class="form-group" data-field>
          <label>ご相談内容 <span class="req">必須</span></label>
          <textarea name="message" required placeholder="例：日報のまとめに毎日2時間かかっていて、AIで効率化したい。何から始められるか相談したい。"></textarea>
          <span class="error">ご相談内容を入力してください</span>
        </div>

        <label class="form-check">
          <input type="checkbox" id="agree" required />
          <span>個人情報の取り扱いに同意する（押し売り・営業電話などは一切いたしません）</span>
        </label>

        <button type="submit" class="btn btn-primary btn-submit" id="submitBtn">
          無料で相談を申し込む
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>

        <div class="form-success" id="formSuccess">
          <div class="form-success-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 10 18 20 6"/></svg>
          </div>
          <h3>送信ありがとうございます</h3>
          <p>24時間以内に、ご記入いただいたメールアドレス宛にご連絡いたします。<br />お急ぎの場合は、お電話でもご対応いたしますのでお気軽にお知らせください。</p>
        </div>
      </form>
    </div>
  </div>
</section>
`;

footerMount.innerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="images/logo-footer.png" alt="HANEDA AI BASE" class="footer-logo" />
        <p class="footer-tag">東京都大田区の中小企業のための、AI活用パートナー。糀谷・雑色・大鳥居エリアを中心に、地元密着でサポートしています。</p>
      </div>
      <div class="footer-col">
        <h4>SERVICES</h4>
        <ul>
          <li><a href="#services">AI業務効率化</a></li>
          <li><a href="#services">AIコンサルティング</a></li>
          <li><a href="#services">SEO / MEO対策</a></li>
          <li><a href="#services">HP・LP制作</a></li>
          <li><a href="#services">広告運用・マーケ戦略</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>COMPANY</h4>
        <ul>
          <li><a href="#benefits">導入メリット</a></li>
          <li><a href="#cases">実績</a></li>
          <li><a href="#profile">代表紹介</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2026 HANEDA AI BASE. All rights reserved.</div>
      <div class="footer-area">
        ${icons.pin}<span>東京都大田区南蒲田 / 糀谷・雑色・大鳥居エリア対応</span>
      </div>
    </div>
  </div>
</footer>
`;

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
    message: form.querySelector('[name="message"]').value.trim(),
  });
  fetch(`https://script.google.com/macros/s/AKfycbzdNw-a-wPNQijc8-Jh6EbwrDiQDLtzReVTTYCU2InZYVbiQt-1BvTohOxOevOBjjxAew/exec?${gasParams}`, {
    method: 'GET',
    mode: 'no-cors',
  }).catch(() => {});

  const data = new FormData(form);
  data.append('access_key', '50a823fd-d266-44b6-8cfe-99cccfb22496');
  data.append('subject', '【お問い合わせ】HANEDA AI BASE ホームページより');
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

// ====== Industry tab ======
document.querySelectorAll('.itab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.tab;
    document.querySelectorAll('.itab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.itab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`.itab-panel[data-panel="${key}"]`).classList.add('active');
  });
});
