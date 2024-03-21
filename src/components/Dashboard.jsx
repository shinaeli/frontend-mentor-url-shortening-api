import React from 'react'

const Dashboard = () => {
    const boards = [
        {
            id: 1,
            imgLink: 'images/icon-brand-recognition.svg',
            title: 'Brand Recognition',
            text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        },
        {
            id: 2,
            imgLink: 'images/icon-detailed-records.svg',
            title: 'Detailed Records',
            text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
            id: 3,
            imgLink: 'images/icon-fully-customizable.svg',
            title: 'Fully Customizable',
            text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        }
    ];
  return (
    <div className="container">
        <section className="stats">
            <h2 className='poppins-semibold'>Advanced Statistics</h2>
            <p className="poppins-regular">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </section>
        <section className="boards">
            {boards.map(item => {
                const { id, imgLink, title, text } = item;
                return (
                    <section className={`board board-${id}`} key={id}>
                        <img src={imgLink} alt={title} />
                        <h4 className='poppins-semibold'>{title}</h4>
                        <p className='poppins-light'>{text}</p>
                    </section>
                )
            })}
        </section>
    </div>
  )
}

export default Dashboard