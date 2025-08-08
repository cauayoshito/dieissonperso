console.log("🔑 API KEY:", process.env.YOUTUBE_API_KEY);

export async function getPlaylistVideos(playlistId) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const baseUrl = `https://www.googleapis.com/youtube/v3/playlistItems`;

  const res = await fetch(
    `${baseUrl}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
  );

  const data = await res.json();

  if (!data.items) {
    console.error("Erro ao carregar playlist:", data);
    return [];
  }

  return data.items.map((item) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails?.medium?.url,
    videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
  }));
}
