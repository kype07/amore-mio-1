document.addEventListener('DOMContentLoaded', () => {
    const tracks = [
        { src: 'media/Piccola Stella.mp3', title: 'Piccola Stella', artist: 'ULTIMO' },
        { src: 'media/Ermal Meta - Piccola Anima ft. Elisa (Official Video).mp3', title: 'Piccola Anima', artist: 'Ermal Meta' },
        { src: 'media/ALFA - bellissimissima.mp3', title: 'Bellissimissima', artist: 'ALFA' },
        { src: 'media/ALFA - Vai! (Testo _ Lyrics Video 4K) - Sanremo 2024.mp3', title: 'Vai!', artist: 'ALFA' },
        { src: "media/Coez - La Musica Non C'è (Video Ufficiale).mp3", title: "La Musica Non C'è", artist: 'coez' },
        { src: 'media/Coldplay - Viva la Vida (Lyrics).mp3', title: 'Viva la Vida', artist: 'Coldplay' },
        { src: 'media/David Kushner - Daylight (Lyrics).mp3', title: 'Daylight', artist: 'David Kushner' },
        { src: 'media/Emanuele Aloia _ Girasoli _ TikTokMusic.mp3', title: 'Girasoli', artist: 'Emanuele Aloia' },
        { src: 'media/Ligabue - Certe notti (Official Video).mp3', title: 'Certe Notti', artist: 'Ligabue' },
        { src: 'media/Måneskin - TIMEZONE (Lyrics_Testo).mp3', title: 'TIMEZONE', artist: 'Måneskin' },
        { src: 'media/Måneskin - THE LONELIEST (Official Audio with lyrics).mp3', title: 'THE LONELIEST', artist: 'Måneskin' },
        { src: 'media/Pinguini Tattici Nucleari - Giovani Wannabe (Testo_Lyrics).mp3', title: 'Giovani Wannabe', artist: 'Pinguini tattici nucleari' },
        { src: 'media/Vasco Rossi - Albachiara.mp3', title: 'Albachiara', artist: 'Vasco Rossi' },
        { src: 'media/Ultimo - Quel filo che ci unisce (Lyrics video).MP3', title: 'quel filo che ci unisce', artist: 'Ultimo' },
        { src: 'media/Il più grande spettacolo dopo il big bang - JovanottiMP3', title: 'Il più grande spettacolo dopo il big bang', artist: 'Jovanotti' },
        { src: 'media/Michele Bravi - Il Diario Degli Errori (Sanremo 2017).mp3', title: 'Il Diario Degli Errori', artist: 'Michele Bravi' },
        { src: "media/Max Gazzè - La Vita Com'è.mp3", title: "La Vita Com'è", artist: "Max Gazzè" },
        { src: "media/Mannarino _ Me so'mbriacato.mp3", title: "Me so'mbriacato", artist: "Mannarino" },
        { src: "media/ALFA - il filo rosso.mp3", title: "il filo rosso", artist: "ALFA" },
        
    ];

    let currentTrackIndex = 0;
    const progress = document.getElementById("progress");
    const song = document.getElementById("song");
    const ctrlIcon = document.getElementById("ctrlIcon");
    const songTitle = document.getElementById("song-title");
    const songArtist = document.getElementById("song-artist");
    const sideMenu = document.getElementById("side-menu");
    const playlist = document.getElementById("playlist");
    const currentTimeElem = document.getElementById("current-time");
    const durationElem = document.getElementById("duration");

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    song.addEventListener('loadedmetadata', () => {
        progress.max = song.duration;
        durationElem.textContent = formatTime(song.duration);
    });

    song.addEventListener('timeupdate', () => {
        progress.value = song.currentTime;
        currentTimeElem.textContent = formatTime(song.currentTime);
    });

    song.addEventListener('ended', nextSong);

    function playPause() {
        if (ctrlIcon.classList.contains("fa-pause")) {
            song.pause();
            ctrlIcon.classList.remove("fa-pause");
            ctrlIcon.classList.add("fa-play");
        } else {
            song.play();
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");
        }
    }

    progress.addEventListener('input', () => {
        song.currentTime = progress.value;
    });

    function loadTrack(index) {
        const track = tracks[index];
        song.src = track.src;
        songTitle.textContent = track.title;
        songArtist.textContent = track.artist;
        song.load();
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }

    function prevSong() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
    }

    function nextSong() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
    }

    function toggleMenu() {
        sideMenu.classList.toggle('active');
    }

    function selectSong(index) {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        toggleMenu();
    }

    function renderPlaylist() {
        tracks.forEach((track, index) => {
            const li = document.createElement('li');
            li.textContent = `${track.title} - ${track.artist}`;
            li.onclick = () => selectSong(index);
            playlist.appendChild(li);
        });
    }

    function goToIndex() {
        window.location.href = 'index.html';
    }

    renderPlaylist();
    loadTrack(currentTrackIndex); // Load the first track initially
});
