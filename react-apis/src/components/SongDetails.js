import React from 'react';
import Message from './Message';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

const SongDetails = ({search, lyric, bio}) => {
if(!lyric || !bio) return null;

    return(
        <>
            {lyric.error || lyric.err || lyric.name === "AbortError" ?
            <Message msg={`Error: The song "${search.song}" doesn´t exists`} bgColor="#dc3545" />
            :
            <SongLyric title={search.song} lyrics={lyric.lyrics} />
            }
            {bio.artists ?
            <SongArtist artist={bio.artists[0]} />
            :
            <Message msg={`Error: The artist ${search.artist} doesn´t exists`} bgColor="#dc3545" />            
            }
            
        </>
    );
}
export default SongDetails