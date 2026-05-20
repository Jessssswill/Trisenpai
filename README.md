# Trisenpai

> Programming bootcamp landing page, built when I founded a peer-led bootcamp
> at BINUS Software Engineering, semester 2.

**Live Demo:** [trisenpai.vercel.app](https://trisenpai.vercel.app)

## 🎯 About

Trisenpai is a programming bootcamp I started in July 2025 with two friends.
The goal was simple: bantu adek tingkat yang struggling dengan basic algorithm 
dan programming dasar (C language).

This repo contains the landing page, where prospective students can learn about
the bootcamp, register, and access learning modules after login.

Background: aku notice banyak temen yang struggle di mata kuliah Algorithm &
Programming. Materi kampus sometimes terlalu cepat untuk yang baru kenal coding.
Trisenpai filling that gap dengan peer-to-peer teaching style.

## ✨ Features

- Cinematic intro animation (Three.js + Typed.js)
- Multi-page landing dengan smooth navigation
- Mobile-responsive design
- Demo login system (localStorage-based)
- Learning modules page (post-login)
- Materi (content) page per module

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN), Custom CSS |
| Scripting | Vanilla JavaScript |
| 3D Graphics | Three.js (r128) |
| Text Animation | Typed.js |
| Deployment | Vercel |

## 🏗️ Architecture

Multi-page static website. Tiap page punya HTML file tersendiri (index, isi,
login, modul, materi, profile). Pilihan ini intentional karena:

1. Landing page primary purpose is content delivery, SPA overkill
2. Faster initial load (no JS bundle hydration)
3. Easier to deploy as static hosting

Authentication adalah **demo-only** menggunakan localStorage. Untuk production,
aku akan implement proper backend dengan JWT (sudah aku lakukan di project
SplitIt).

## 🚀 Local Development

```bash
# Clone the repo
git clone https://github.com/Jesssssswill/Trisenpai.git
cd Trisenpai

# Open with any static server
python -m http.server 8000
# atau pakai VS Code Live Server extension
# atau npx serve .

# Buka di browser
http://localhost:8000
```

## 📸 Screenshots

> Will add screenshots soon. Live demo available at trisenpai.vercel.app.

## 🎓 What I Learned

- **Multi-page architecture decisions**: kapan SPA overkill, kapan worth it
- **CDN-based development trade-offs**: fast iteration vs production bundle size
- **Three.js basic concepts**: scene, camera, renderer, materials
- **Coordinating with teammates**: git workflow ber-tiga di satu repo
- **Teaching != knowing**: ngajar adek tingkat memaksa aku lebih dalam paham 
  algoritma yang sebelumnya aku take for granted

## 🚧 Status

Landing page: **completed**.  
Bootcamp itself: **ongoing**, batch berikutnya rencana Q1 2026.

## 📝 Notes

- Authentication system is **demo-only** (localStorage, not production-grade)
- Tailwind via CDN, for production would migrate to PostCSS build for tree-shaking
- C++ folder removed from repo (was unrelated coursework files)

---

Made with care by [Jessen William](https://github.com/Jesssssswill)
