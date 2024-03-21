import React, { useState } from 'react'
import { shortenedLinks } from '../shortenedLinks';
import CopyButton from './utils/CopyButton';

const Form = () => {
  const [allShortenedLinks, setAllShortenedLinks] = useState(shortenedLinks);
  const [userLink, setUserLink] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


 async function fetchData(testUrl) {
    const urlShortener = 'https://url-shortener-service.p.rapidapi.com/shorten';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'd50411d0e4msh51bf292c757e445p175059jsn72dec55f6ac3',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
        body: new URLSearchParams({
            url: testUrl
        })
    };

    try {
            const response = await fetch(urlShortener, options);
            const result = await response.json();
            if(!result) {
                throw new Error('Cannot shorten link');
            }
            console.log(result["result_url"]);
            let objectedLink = {
                id: Math.random(),
                link: testUrl,
                shortened: result["result_url"]
            };
            setAllShortenedLinks(prev => [objectedLink, ...prev]);
        } catch(error) {
            console.error(error.message);
            setErrorMessage(error.message);
        }
    }

const handleSubmit = e => {
    e.preventDefault();
    if((userLink !== "") && (userLink.slice(0,8) === 'https://')) {
        fetchData(userLink);
        setUserLink('');
    } else if((userLink !== "")  && (userLink.includes('https//') === false)) {
        setErrorMessage('Please add a valid link.');
    } else {
        setErrorMessage('Please add a link.');
    }
  }

  return (
    <div className="container">
        <form>
            <section className="form-container">
                <input className="poppins-regular" type="text" placeholder='Shorten a link here...' value={userLink} onChange={e => setUserLink(e.target.value)} />
                <button className="poppins-semibold" type="submit" onClick={handleSubmit}>Shorten It!</button>
                {errorMessage && <p className="error poppins-light-italics">{errorMessage}</p>}
            </section>
        </form>
        {allShortenedLinks.length >= 1 && (
            allShortenedLinks.map(item => {
                const { id, link, shortened } = item;
                return (
                    <div className="short-link-list" key={id}>
                        <p className="poppins-semibold">{link}</p>
                        <section>
                            <p className="poppins-semibold">{shortened}</p>
                            <CopyButton />
                        </section>
                    </div>
                )
            })
        )}
    </div>
  )
}

export default Form