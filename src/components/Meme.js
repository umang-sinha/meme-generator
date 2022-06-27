import { useState, useEffect } from 'react';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    imgUrl: 'https://i.imgflip.com/26hg.jpg',
  });
  const [memesData, setMemesData] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((memesData) => setMemesData(memesData.data.memes));
  }, []);

  function getMemeUrl() {
    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: memesData[Math.floor(Math.random() * memesData.length) + 1].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className='meme-form'>
        <input
          type='text'
          name='topText'
          id='topText'
          placeholder='Shut up'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          name='bottomText'
          id='bottomText'
          placeholder='and take my money'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button type='button' onClick={getMemeUrl} id='submitBtn'>
          Get a new meme🌄
        </button>
      </form>
      <div className='imageContainer'>
        <img className='meme-img' src={meme.imgUrl} alt='Funny meme' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}