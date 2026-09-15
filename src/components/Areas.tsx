import { jeddahAreas, PHONE_TEL } from '../data'

export default function Areas() {
  return (
    <section id="areas" className="section areas" aria-labelledby="areas-title">
      <div className="container">
        <header className="section-head">
          <h2 id="areas-title">سطحة بكافة أحياء جدة</h2>
          <p> downstream جاهزون لمساعدتك في أي حي — شمال جدة وجنوبها ووسطها.</p>
        </header>
        <ul className="area-cloud">
          {jeddahAreas.map((area) => (
            <li key={area}>
              <a href={`tel:${PHONE_TEL}`}>سطحة {area}</a>
            </li>
          ))}
        </ul>
        <p className="seo-blurb">
          ابحث عن <strong>أقرب سطحة من موقعي</strong> أو <strong>رقم سطحة جدة</strong> — نحن
          الأقرب والأسرع. سطحات هيدروليك وونش لنقل السيارات المعطلة والمصدومة في جدة.
        </p>
      </div>
    </section>
  )
}
