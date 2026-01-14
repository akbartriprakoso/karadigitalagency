Kara API — simple Express JSON store

Quick start:

1. From the `api/` folder, install dependencies:

```bash
cd api
npm install
```

2. Run the server:

```bash
npm start
```

Server runs on `http://localhost:3000` by default.

Endpoints:
- `GET /` - API info
- `GET /posts` - list posts
- `GET /posts/:id` - get post
- `POST /posts` - create post (JSON body)
- `PUT /posts/:id` - update post (JSON body)
- `DELETE /posts/:id` - delete post

Data persistence: stored in `api/data/posts.json` (file-based). For production, replace with a database.

CORS: enabled for local development so `cms/index.html` or static site can call it.
