import { useRef, useState } from "react"
import styles from "./styles.module.css"
const SRC = "https://v16-webapp.tiktok.com/1cb03b1510d388a9e65fa44d114695f2/62c65e0f/video/tos/useast2a/tos-useast2a-ve-0068c003/444d29e46b394c6d9904b03c7dd1d861/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=3572&amp;bt=1786&amp;btag=80000&amp;cs=0&amp;ds=3&amp;ft=eXd.6HmzMyq8Z7_YMwe2NSB6yl7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=Zzo2OWRlNDo5OGU6NDZkNUBpM2w2ZWQ6ZjY0ZDMzNzczM0A0MV8yX15jNV8xX2FeMC8uYSNxLzYycjRncDNgLS1kMTZzcw%3D%3D&amp;l=2022070622154201018905301617DB03AF" 

export default function VideoPlayer() {
    const [playing, setPlaying] = useState(false)
    const video = useRef();
    const handlePlay = () => {
        if (playing) {
            video.current.pause()
        }else{

            video.current.play()
        }
        setPlaying(!playing)
    }

   
    return (
        <div>
            <video
                autoPlay
                muted
                className={styles.video}
                src={SRC}
                controls={false}
                ref={video}
            />
            <button
                className={styles.player}
                onClick={handlePlay}
            />
        </div>

    )
} 