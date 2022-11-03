import React, { useState } from 'react'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import Card from '../../Components/Card'
import { AiFillDelete } from 'react-icons/ai'

import './OTTImage.css'

const OTTImage = () => {

  const [data, setData] = useState({
    image__title: "",
    images: []
  });

  const addFileHandler = (input) => {
    let files = input.target.files;
    let reader = new FileReader();

    reader.onload = e => {
      setData({...data, images: [...data.images, {
        id: Math.random(),
        src: e.target.result
      }]})
    };
    reader.readAsDataURL(files[0]);
  };

  const deleteImage = (id) => {
    const updateImages = data.images.filter(img => img.id !== id);
    setData({...data, images: updateImages})
    console.log(updateImages)
  }

  return (
    <div className='ott__image__page'>
      <div className="images">
        {data.images.map((img, i) => (
          <div key={i} className='image__card'>
            <img src={img.src} alt="" />
            <button onClick={() => deleteImage(img.id)}><AiFillDelete /></button>
          </div>
        ))}
      </div>
      <form 
        className='main__form' 
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <Card>
          <div className='input__group'>
            <div className='input__controle'>
              <label htmlFor='image__title'>Image Title:</label>
              <input 
                id='image__title'
                type='text'
                onChange={(e) => setData({...data, image__title: e.target.value})}
                value={data.image__title || ''}
                required
              />
            </div>
            <div className='input__controle input__file__controle'>
              <label 
                className='add__button' 
                htmlFor='image__file'
              >
                <BsFillCloudUploadFill />Upload image
              </label>
              <input 
                id='image__file'
                type='file'
                required
                onChange={addFileHandler}
                style={{display: 'none'}}
              />
            </div>
          </div>
        </Card>
        <button className='submit__btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default OTTImage