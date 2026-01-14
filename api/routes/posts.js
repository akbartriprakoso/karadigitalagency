const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const DATA_FILE = path.resolve(__dirname, '../data/posts.json');

function readData(){
  try{ const raw = fs.readFileSync(DATA_FILE, 'utf8'); return JSON.parse(raw); }catch(e){ return []; }
}
function writeData(data){ fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8'); }

// GET /posts
router.get('/', (req, res)=>{
  const posts = readData();
  res.json(posts);
});

// GET /posts/:id
router.get('/:id', (req, res)=>{
  const id = Number(req.params.id);
  const post = readData().find(p=>p.id===id);
  if(!post) return res.status(404).json({error:'Not found'});
  res.json(post);
});

// POST /posts
router.post('/', (req, res)=>{
  const body = req.body || {};
  const posts = readData();
  const id = Date.now();
  const item = Object.assign({id}, body);
  posts.unshift(item);
  writeData(posts);
  res.status(201).json(item);
});

// PUT /posts/:id
router.put('/:id', (req, res)=>{
  const id = Number(req.params.id);
  const body = req.body || {};
  let posts = readData();
  let found = false;
  posts = posts.map(p=>{ if(p.id===id){ found=true; return Object.assign({}, p, body, {id}); } return p; });
  if(!found) return res.status(404).json({error:'Not found'});
  writeData(posts);
  res.json(posts.find(p=>p.id===id));
});

// DELETE /posts/:id
router.delete('/:id', (req, res)=>{
  const id = Number(req.params.id);
  let posts = readData();
  const before = posts.length;
  posts = posts.filter(p=>p.id!==id);
  if(posts.length===before) return res.status(404).json({error:'Not found'});
  writeData(posts);
  res.json({deleted:true});
});

module.exports = router;
