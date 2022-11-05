import React, { useState } from 'react'
import Card from '../../Components/Card';
import { BsFillCloudUploadFill } from 'react-icons/bs'

import './OTTVideo.css'

const initialize = {
  primary__genre: 'Action',
  pricing: 'High price tier (major motion picture)',
}

const OTTVideo = () => {

  const [data, setData] = useState(initialize);
  const [Series, setSeries] = useState(false);
  const [poster, setposter] = useState(false);

  const videoData = [
    {
      id: 1,
      title: 'Upload Series',
      resources: [
        {
          id: 'series__file',
          placeholder: 'Add Series',
          type: 'file'
        },
      ]
    },
    {
      id: 2,
      title: 'Upload Poster',
      resources: [
        {
          id: 'series__poster',
          placeholder: 'Poster',
          type: 'file'
        },
      ]
    },
    {
      id: 3,
      title: 'Basics Series',
      resources: [
        {
          id: 'series__name',
          placeholder: 'Series Name',
          type: 'text'
        },
        {
          id: 'series__description',
          placeholder: 'Series Description',
          type: 'text'
        },
        {
          id: 'primary__genre',
          placeholder: 'Primary Genre',
          type: 'select__box',
          options: [
            'Action',
            'Adventure',
            'Comedy',
            'Crime and mystery',
            'Fantasy',
            'Historical',
            'Horror',
            'Romance',
            'Science fiction'
          ]
        },
      ]
    },
    {
      id: 4,
      title: 'Series Metadata',
      resources: [
        {
          id: 'country__origin',
          placeholder: 'Country Of Origin',
          type: 'text'
        },
        {
          id: 'year__production',
          placeholder: 'Year Of Production',
          type: 'text'
        },
        {
          id: 'budget',
          placeholder: 'Budget/$',
          type: 'number'
        },
        {
          id: 'copyrigth',
          placeholder: 'Copyright',
          type: 'text'
        },
        {
          id: 'secondary_genre',
          placeholder: 'Secondary Genre',
          type: 'text'
        },
        {
          id: 'location',
          placeholder: 'location',
          type: 'text'
        },
        {
          id: 'production__company',
          placeholder: 'Production Company',
          type: 'text'
        },
        {
          id: 'tags',
          placeholder: 'Tags',
          type: 'text'
        },
        {
          id: 'notes',
          placeholder: 'Notes',
          type: 'text'
        },
        {
          id: 'vendor__id',
          placeholder: 'Vednor Id',
          type: 'text'
        },
        {
          id: 'prodiver',
          placeholder: 'Provider',
          type: 'text'
        },
        {
          id: 'pricing',
          placeholder: 'Pricing',
          type: 'select__box',
          options: [
            'High price tier (major motion picture)',
            'Medium price tier (independent new release)',
            'Low price tier (back catalog, SD only, etc)',
            'Custome pricing'
          ]
        }
      ]
    },
  ];

  const addFileHandler = (input) => {
    let files = input.target.files;
    let reader = new FileReader();

    reader.onload = e => {
      if(input.target.id === 'series__poster') {
        setposter(e.target.result);
      }
      if(input.target.id === 'series__file') {
        setSeries(e.target.result);
      }
      setData({...data, [input.target.id]: e.target.result})
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <form 
    className='main__form video' 
    onSubmit={e => {
      e.preventDefault()
      console.log(data)
    }}
  >
    {videoData.map(box => (
      <div className='main__box' key={box?.id}>
        <Card>
          <h2 className='box__title'>{box?.title}</h2>
          <div className='input__group'>
            {box?.resources.map(input => (
              input.type === 'select__box' ? (
                <div className='input__controle' key={input?.id}>
                  <label htmlFor={input?.id}>{input?.placeholder}:</label>
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
                    {/* <label htmlFor={input.id}>{input.placeholder}:</label> */}
                    <label className='add__button' htmlFor={input?.id}><BsFillCloudUploadFill />Upload file</label>
                    <input 
                      id={input.id}
                      type={input.type}
                      required
                      onChange={addFileHandler}
                      />
                    {input.id === 'series__poster' && <div className='file__result'>
                      {poster ? <img className='poster__image' alt='' src={poster} /> : <p>No File!</p>}
                    </div>}
                    {input.id === 'series__file' && <div className='file__result'>
                      {Series ? <video controls className='poster__image' alt='' src={Series} /> : <p>No File!</p>}
                    </div>}
                  </div>
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
    <button className='submit__btn' style={{marginTop: '40px'}} type='submit'>Submit</button>
  </form>
  )
}

export default OTTVideo