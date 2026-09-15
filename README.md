# 💗 Birthday Love Website

Website ulang tahun romantis yang siap di-upload ke GitHub Pages.

## Struktur folder

```text
birthday-love-website/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── images/
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   ├── photo3.jpg
    │   ├── photo4.jpg
    │   ├── photo5.jpg
    │   ├── photo6.jpg
    │   └── video-poster.jpg
    ├── music/
    │   └── song.mp3
    └── videos/
        └── our-video.mp4
```

## Cara memasukkan foto, lagu, dan video

1. Masukkan 6 foto kalian ke `assets/images/`.
2. Beri nama:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`
   - `photo5.jpg`
   - `photo6.jpg`
3. Masukkan lagu ke `assets/music/song.mp3`.
4. Masukkan video ke `assets/videos/our-video.mp4`.
5. Opsional: masukkan thumbnail video sebagai `assets/images/video-poster.jpg`.

## Upload ke GitHub

1. Buat repository baru di GitHub, misalnya `birthday-love`.
2. Upload seluruh isi folder ini.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Klik **Save**.
7. Tunggu beberapa menit. GitHub akan memberikan alamat website.

## Catatan

Website ini tidak memakai backend, jadi cocok untuk GitHub Pages.
Semua foto, lagu, dan video dibaca dari folder `assets`.
