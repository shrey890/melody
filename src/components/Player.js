import { faPlay, faAngleLeft,faPause, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null)

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)

        }
    };
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({ ...songInfo, currentTime: current, duration })
    }
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo , currentTime:e.target.value})
    }

    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    })
    return (
        <div className="player">
            <div className="time-control">
                <p>{ getTime(songInfo.currentTime) }</p>
                <input
                    min={ 0 }
                    max={ songInfo.duration }
                    value={ songInfo.currentTime }
                    onChange={ dragHandler }
                    type="range" />
                <p>{ getTime(songInfo.duration) }</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon size='2x' className='skip-back' icon={ faAngleLeft } />
                <FontAwesomeIcon onClick={ playSongHandler } size='2x' className='play' icon={isPlaying ?  faPause : faPlay } />
                <FontAwesomeIcon size='2x' className='skip-forward' icon={ faAngleRight } />
            </div>
            <audio
                onLoadedMetadata={ timeUpdateHandler }
                onTimeUpdate={ timeUpdateHandler }
                ref={ audioRef } src={ currentSong.audio }></audio>
        </div>
    )
}

export default Player
