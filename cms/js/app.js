// Kara CMS - simple static CMS using localStorage
(function(){
  const STORAGE_KEY = 'kara_posts_v1';
  const sample = [
    {id:1,title:'Tips Konten Instagram yang Meningkatkan Engagement',date:'2026-01-15',excerpt:'Pelajari strategi pembuatan konten singkat agar engagement meningkat.',slug:'tips-konten-instagram',content:'Konten lengkap...'},
    {id:2,title:'Maksimalkan Video Pendek untuk Branding',date:'2026-01-10',excerpt:'Gunakan format video singkat yang tepat untuk meningkatkan jangkauan.',slug:'video-pendek-branding',content:'Konten lengkap...'}
  ];

  function $(s){return document.querySelector(s)}
  function $all(s){return document.querySelectorAll(s)}

  let posts = [];
  let editingId = null;

  function load(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      posts = raw ? JSON.parse(raw) : sample.slice();
    }catch(e){posts = sample.slice();}
  }

  function save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }

  function renderList(){
    const el = $('#postsList');
    if(!el) return;
    if(posts.length===0){ el.innerHTML = '<p>Tidak ada post.</p>'; return; }
    el.innerHTML = posts.map(p=>`
      <div class="post-item">
        <h3>${escapeHtml(p.title)}</h3>
        <div class="meta">${p.date || ''} • <code>${p.slug||''}</code></div>
        <p>${escapeHtml(p.excerpt||'')}</p>
        <div class="post-actions">
          <button data-id="${p.id}" class="edit">Edit</button>
          <button data-id="${p.id}" class="delete">Hapus</button>
        </div>
      </div>
    `).join('');
  }

  function escapeHtml(s){ return (s||'').replace(/[&<>\"]/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c])); }

  function showEditor(newPost){
    $('#editor').classList.remove('hidden');
    $('#dashboard').classList.add('hidden');
    $('#loginSection').classList.add('hidden');
    $('#editorTitle').textContent = newPost? 'Tambah Post' : 'Edit Post';
    if(newPost){ editingId = null; $('#title').value=''; $('#date').value=''; $('#excerpt').value=''; $('#slug').value=''; $('#content').value=''; }
  }

  function hideEditor(){
    $('#editor').classList.add('hidden');
    $('#dashboard').classList.remove('hidden');
  }

  function initEvents(){
    $('#btnLogin').addEventListener('click', function(){
      const v = $('#adminPassword').value.trim();
      if(v==='admin'){
        $('#loginSection').classList.add('hidden');
        $('#dashboard').classList.remove('hidden');
        renderList();
      }else alert('Kata sandi salah (demo: admin)');
    });

    $('#btnAdd').addEventListener('click', ()=>{ editingId = null; showEditor(true); });

    $('#postForm').addEventListener('submit', function(e){
      e.preventDefault();
      const title = $('#title').value.trim();
      if(!title){ alert('Judul wajib diisi'); return; }
      const item = { id: editingId||Date.now(), title, date: $('#date').value || new Date().toISOString().substr(0,10), excerpt: $('#excerpt').value, slug: $('#slug').value || title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''), content: $('#content').value };
      if(editingId){ posts = posts.map(p=> p.id===editingId? item : p); }
      else posts.unshift(item);
      save();
      renderList();
      hideEditor();
    });

    $('#btnCancel').addEventListener('click', function(){ hideEditor(); });

    $('#postsList').addEventListener('click', function(e){
      const id = Number(e.target.getAttribute('data-id'));
      if(e.target.classList.contains('edit')){
        const p = posts.find(x=>x.id===id); if(!p) return; editingId = p.id; $('#title').value=p.title; $('#date').value=p.date; $('#excerpt').value=p.excerpt; $('#slug').value=p.slug; $('#content').value=p.content; showEditor(false);
      }
      if(e.target.classList.contains('delete')){
        if(!confirm('Hapus post ini?')) return; posts = posts.filter(x=>x.id!==id); save(); renderList();
      }
    });

    $('#btnExport').addEventListener('click', function(){
      const blob = new Blob([JSON.stringify(posts, null, 2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'kara-posts.json'; a.click(); URL.revokeObjectURL(url);
    });

    $('#importFile').addEventListener('change', function(e){
      const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.onload = function(){ try{ const data = JSON.parse(r.result); if(Array.isArray(data)){ posts = data; save(); renderList(); alert('Import berhasil'); } else alert('Format JSON tidak valid'); }catch(err){ alert('Gagal membaca file: '+err); } }; r.readAsText(f);
    });
  }

  // startup
  load();
  initEvents();
  // show login by default
})();
