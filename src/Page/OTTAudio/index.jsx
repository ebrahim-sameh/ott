import React, { useState } from 'react'
import Card from '../../Components/Card';
import { BsFillCloudUploadFill } from 'react-icons/bs'

import './OTTAudio.css'

const initialize = {
  audio__language: 'En',
  explicit__content: 'No Explicit',
  compilation__image: 'Yes',
  compilation__video: 'Yes',
  primary__image__genre: "Alternatives",
  primary__video__genre: "Alternatives",
  explicit__image__content: 'No Explicit',
  explicit__video__content: 'No Explicit',
  stores: []
}

const OTTAudio = () => {

  const [data, setData] = useState(initialize);
  const [audio, setAudio] = useState(false);
  const [image, setImage] = useState(false);
  const [video, setVideo] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const audioData = [
    {
      id: 1,
      title: 'Upload Audio',
      resources: [
        {
          id: 'track__file',
          placeholder: 'Add Track',
          type: 'file'
        },
      ]
    },
    {
      id: 2,
      title: 'Audio Metadata',
      resources: [
        {
          id: 'track__name',
          placeholder: 'Trak Name',
          type: 'text'
        },
        {
          id: 'track__version',
          placeholder: 'Track version',
          type: 'text'
        },
        {
          id: 'track__number',
          placeholder: 'Trak Number',
          type: 'number'
        },
        {
          id: 'artist__name',
          placeholder: 'Artist Name',
          type: 'text'
        },
        {
          id: 'ISRC__Codes',
          placeholder: 'ISRC Codes',
          type: 'text'
        },
        {
          id: 'explicit__content',
          placeholder: 'Explicit Content',
          type: 'select__box',
          options: [
            'No Explicit',
            'Explicit',
            'Cleaned Version'
          ]
        },
        {
          id: 'audio__language',
          placeholder: 'Audio Language',
          type: 'select__box',
          options: [
            'En',
            'Ar'
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Upload Image',
      resources: [
        {
          id: 'image__file',
          placeholder: 'Add Image',
          type: 'file'
        },
      ]
    },
    {
      id: 4,
      title: 'Image Details',
      resources: [
        {
          id: 'image__language',
          placeholder: 'Language',
          type: 'select__box',
          options: [
            'En',
            'Ar'
          ]
        },
        {
          id: 'image__name',
          placeholder: 'image/Single/EP Title',
          type: 'text'
        },
        {
          id: 'image__version',
          placeholder: 'image version',
          type: 'text'
        },
        {
          id: 'compilation__image',
          placeholder: 'Compilation Image',
          type: 'select__box',
          options: [
            'Yes',
            'No'
          ]
        },
        {
          id: 'artist__image__name',
          placeholder: 'Artist Name',
          type: 'text'
        },
        {
          id: 'primary__image__genre',
          placeholder: 'primary Genre',
          type: 'select__box',
          options: [
            'Alternative',
            'Anime',
            'Blues'
          ]
        },
        {
          id: 'composition__image__copyright',
          placeholder: 'Composition Copyright',
          type: 'text'
        },
        {
          id: 'sound__recording__copyright',
          placeholder: 'Sound Recording Copyright',
          type: 'text'
        },
        {
          id: 'record__label__name',
          placeholder: 'Record Label Name',
          type: 'text'
        },
        {
          id: 'originally__released',
          placeholder: 'Originally Released',
          type: 'date'
        },
        {
          id: 'image__pre__order__date',
          placeholder: 'Pre Order Date',
          type: 'date'
        },
        {
          id: 'image__salse__start__date',
          placeholder: 'Salse Start Date',
          type: 'date'
        },
        {
          id: 'explicit__image__content',
          placeholder: 'Explicit Content',
          type: 'select__box',
          options: [
            'No Explicit',
            'Explicit',
            'Cleaned Version'
          ]
        },
      ]
    },
    {
      id: 5,
      title: 'Upload Video',
      resources: [
        {
          id: 'video__file',
          placeholder: 'Add Video',
          type: 'file'
        },
      ]
    },
    {
      id: 6,
      title: 'Video Details',
      resources: [
        {
          id: 'video__language',
          placeholder: 'Language',
          type: 'select__box',
          options: [
            'En',
            'Ar'
          ]
        },
        {
          id: 'video__name',
          placeholder: 'Album/Single/EP Title',
          type: 'text'
        },
        {
          id: 'video__version',
          placeholder: 'Album version',
          type: 'text'
        },
        {
          id: 'compilation__video',
          placeholder: 'Compilation Video',
          type: 'select__box',
          options: [
            'Yes',
            'No'
          ]
        },
        {
          id: 'artist__video__name',
          placeholder: 'Artist Name',
          type: 'text'
        },
        {
          id: 'primary__video__genre',
          placeholder: 'primary Genre',
          type: 'select__box',
          options: [
            'Alternative',
            'Anime',
            'Blues'
          ]
        },
        {
          id: 'composition__video__copyright',
          placeholder: 'Composition Copyright',
          type: 'text'
        },
        {
          id: 'video__recording__copyright',
          placeholder: 'Video Recording Copyright',
          type: 'text'
        },
        {
          id: 'video__label__name',
          placeholder: 'Video Label Name',
          type: 'text'
        },
        {
          id: 'originally__video__released',
          placeholder: 'Originally Released',
          type: 'date'
        },
        {
          id: 'video__pre__order__date',
          placeholder: 'Pre Order Date',
          type: 'date'
        },
        {
          id: 'video__salse__start__date',
          placeholder: 'Salse Start Date',
          type: 'date'
        },
        {
          id: 'explicit__video__content',
          placeholder: 'Explicit Content',
          type: 'select__box',
          options: [
            'No Explicit',
            'Explicit',
            'Cleaned Version'
          ]
        },
      ]
    }
  ];

  const stories = [
    {
      value: 'rn_direct',
      text: 'RN Direct',
      img: 'https://www.routenote.com/rn/img/icon7.png'
    },
    {
      value: 'iTunes__&__Apple Music',
      text: 'iTunes & Apple Music',
      img: 'https://www.routenote.com/rn/img/icon1.png'
    },
    {
      value: 'amazon',
      text: 'Amazon',
      img: 'https://www.routenote.com/rn/img/Amazon_Store_Icon.png'
    },
    {
      value: 'eMUSIC',
      text: 'eMUSIC',
      img: 'https://www.routenote.com/rn/img/icon3.png'
    },
    {
      value: 'Spotify',
      text: 'Spotify',
      img: 'https://www.routenote.com/rn/img/icon4.png'
    },
    {
      value: 'youTube__music',
      text: 'YouTube Music',
      img: 'https://www.routenote.com/rn/img/youtube-music-manage-stores-icon.png'
    },
    {
      value: 'anghami',
      text: 'Anghami',
      img: 'https://www.routenote.com/rn/img/anghami.png'
    },
    {
      value: 'deezer',
      text: 'Deezer',
      img: 'https://www.routenote.com/rn/img/icon16.png'
    },
    {
      value: 'WiMp/Tidal',
      text: 'WiMp/Tidal',
      img: 'https://www.routenote.com/rn/img/wimp.png'
    },
    {
      value: 'Claro-musica',
      text: 'Claro-musica',
      img: 'https://www.routenote.com/rn/img/claro.png'
    },
    {
      value: 'Nuuday',
      text: 'Nuuday',
      img: 'https://www.routenote.com/rn/img/nuuday_manage_store.png'
    },
    {
      value: 'SoundCloud',
      text: 'SoundCloud',
      img: 'https://www.routenote.com/rn/img/soundcloud-logo_360.png'
    },
    {
      value: 'Gracenote',
      text: 'Gracenote',
      img: 'https://www.routenote.com/rn/img/Gracenote_logo.png'
    },
    {
      value: 'Kanjian',
      text: 'Kanjian',
      img: 'https://www.routenote.com/rn/img/kanjianlogo.png'
    },
    {
      value: 'Pandora',
      text: 'Pandora',
      img: 'https://www.routenote.com/rn/img/pandora-icon.png'
    },
    {
      value: 'Napster',
      text: 'Napster',
      img: 'https://www.routenote.com/rn/img/Napster_Manage_Stores.png'
    },
    {
      value: 'Melon',
      text: 'Melon',
      img: 'https://www.routenote.com/rn/img/Melonicon.jpg'
    },
    {
      value: 'iHeartRadio',
      text: 'iHeartRadio',
      img: 'https://www.routenote.com/rn/img/rn_iHeartRadio.png'
    },
    {
      value: '7Digital',
      text: '7Digital',
      img: 'https://www.routenote.com/rn/img/7Digital.png'
    },
    {
      value: 'Saavn',
      text: 'Saavn',
      img: 'https://www.routenote.com/rn/img/Jiosaavn_ManageStores.jpg'
    },
    {
      value: 'Bugs!',
      text: 'Bugs!',
      img: 'https://www.routenote.com/rn/img/Bugs_ManageStores.png'
    },
    {
      value: 'Facebook',
      text: 'Facebook',
      img: 'https://www.routenote.com/rn/img/FaceInsta_ManageStores.png'
    },
    {
      value: 'VIBE',
      text: 'VIBE',
      img: 'https://www.routenote.com/rn/img/vibe-manage-stores.png'
    },
    {
      value: 'Netease',
      text: 'Netease',
      img: 'https://www.routenote.com/rn/img/NetEaseManageStores.png'
    },
    {
      value: 'Tencent',
      text: 'Tencent',
      img: 'https://www.routenote.com/rn/img/Tencent_ManageStores.jpg'
    },
    {
      value: 'AWA',
      text: 'AWA',
      img: 'https://www.routenote.com/rn/img/AWA_ManageStores.jpg'
    },
    {
      value: 'TikTok',
      text: 'TikTok',
      img: 'https://www.routenote.com/rn/img/tiktok-manage-logo.png'
    },
    {
      value: 'Kuack Media',
      text: 'Kuack Media',
      img: 'https://www.routenote.com/rn/img/Bugs_ManageStores.png'
    },
    {
      value: 'Qobuz',
      text: 'Qobuz',
      img: 'https://www.routenote.com/rn/img/Qobuz_ManageStores.jpg'
    },
    {
      value: 'FLO',
      text: 'FLO',
      img: 'https://www.routenote.com/rn/img/Flo-manage.png'
    },
    {
      value: 'KKBOX',
      text: 'KKBOX',
      img: 'https://www.routenote.com/rn/img/kkbox-manage-stores.png'
    },
    {
      value: 'Zing MP3',
      text: 'Zing MP3',
      img: 'https://www.routenote.com/rn/img/zing-manage-stores.png'
    },
    {
      value: 'Joox',
      text: 'Joox',
      img: 'https://www.routenote.com/rn/img/joox-manage-stores.png'
    },
    {
      value: 'Hungama',
      text: 'Hungama',
      img: 'https://www.routenote.com/rn/img/hungama-manage-stores.png'
    },
    {
      value: 'YouTube',
      text: 'YouTube',
      img: 'https://www.routenote.com/rn/img/youtube-icon.png'
    },
  ];

  const addFileHandler = (input) => {
    let files = input.target.files;
    let reader = new FileReader();

    reader.onload = e => {
      if(input.target.id === 'track__file') {
        setAudio(e.target.result);
      }
      if(input.target.id === 'image__file') {
        setImage(e.target.result);
      }
      if(input.target.id === 'video__file') {
        setVideo(e.target.result);
      }
      setData({...data, [input.target.id]: e.target.result})
    };
    reader.readAsDataURL(files[0]);
  };

  const selectBox = e => {
    setSelectAll(false)
    if(e.target.checked) {
      setData({...data, stores: [...data.stores, e.target.value]})
    }else {
      const arr = data.stores.filter(i => i !== e.target.value)
      setData({...data, stores: arr})
    }
  };

  const selectAllHanderl = e => {
    const arr = [];
    if(e.target.checked) {
      setData({...data, stores: []})
      stories.map(story => {
        arr.push(story.value)
      })
      setSelectAll(true)
    }else {
      setSelectAll(false)
      setData({...data, stores: []})
    }
    setData({...data, stores: arr})
  }


  return (
    <form 
      className='main__form' 
      onSubmit={e => {
        e.preventDefault()
        console.log(data)
      }}
    >
      {audioData.map(box => (
        <div className='main__box' key={box.id}>
          <Card>
            <h2 className='box__title'>{box.title}</h2>
            <div className='input__group'>
              {box.resources.map(input => (
                input.type === 'select__box' ? (
                  <div className='input__controle' key={input.id}>
                    <label htmlFor={input.id}>{input.placeholder}:</label>
                    <select 
                      defaultValue={input?.options[0]} 
                      onChange={(e) => setData({...data, [input.id]: e.target.value})}
                    >
                      {input?.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                ) :
                input.type === 'file' ? (
                  <React.Fragment key={input.id}>
                    <div className='input__controle input__file__controle'>
                      <label htmlFor={input.id}>{input.placeholder}:</label>
                      <label className='add__button' htmlFor={input.id}><BsFillCloudUploadFill />Upload file</label>
                      <input 
                        id={input.id}
                        type={input.type}
                        required
                        onChange={addFileHandler}
                        />
                    </div>
                    {input.id === 'track__file' && <div className='file__result'>
                      {audio ? <audio controls src={audio} /> : <p>No File!</p>}
                    </div>}
                    {input.id === 'image__file' && <div className='file__result'>
                      {image ? <img className='poster__image' alt='' src={image} /> : <p>No File!</p>}
                    </div>}
                    {input.id === 'video__file' && <div className='file__result'>
                      {video ? <video className='poster__image' alt='' src={video} /> : <p>No File!</p>}
                    </div>}
                  </React.Fragment>
                )
                : (
                  <div className='input__controle' key={input.id}>
                    <label htmlFor={input.id}>{input.placeholder}:</label>
                    <input 
                      id={input.id}
                      type={input.type}
                      onChange={(e) => setData({...data, [input.id]: e.target.value})}
                      value={data[input.id] || ''}
                      required
                    />
                  </div>
                )
              ))}
            </div>
          </Card>
        </div>
      ))}
      <Card>
        <h2 className='checkbox__title'>Choose Your Stores
          <div>
            <label htmlFor='select__all'>Select All</label>
            <input 
              id='select__all'
              type='checkbox'
              onChange={selectAllHanderl}
              value='select__all'
              checked={selectAll}
            />
          </div>
        </h2>
        <div className='checkbox__inputs__group'>
          {stories.map(input => (
            <div className='checkbox' key={input.value}>
              <label htmlFor={input.value}>
                <img src={input.img} alt={'platform__image'} />
                {input.text}
              </label>
              <input 
                id={input.value}
                type='checkbox'
                value={input.value}
                onChange={selectBox}
                checked={data.stores.includes(input.value)}
              />
            </div>
          ))}
        </div>
      </Card>
      <button className='submit__btn' style={{marginTop: '40px'}} type='submit'>Submit</button>
    </form>
  )
}

export default OTTAudio