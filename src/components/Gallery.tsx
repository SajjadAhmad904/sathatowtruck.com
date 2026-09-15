import { gallery } from '../data'

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <header className="section-head">
          <h2 id="gallery-title">أسطول سطحاتنا</h2>
          <p>سطحات هيدروليك حديثة جاهزة لنقل سيارتك بأمان واحترافية.</p>
        </header>
        <div className="gallery-grid">
          {gallery.map((img, i) => (
            <figure key={img.src} className={`gallery-item span-${(i % 3) + 1}`}>
              <img src={img.src} alt={img.alt} loading="lazy" width={800} height={600} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
