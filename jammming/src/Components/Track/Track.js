import { useState } from "react";

const trackData = {
    title: 'The MOCK Song(Ft. The Beatles)',
    artist: 'MockArtist',
    album: 'The Mockers'
}

function Track({trackData}) {
    //
    return (
        <div>
            <h5>{trackData.title}</h5>
            <p>{trackData.artist}</p>
            <p>{trackData.album}</p>
        </div>
    );
};

export default Track;