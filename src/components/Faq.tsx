import { faqs } from '../data'

export default function Faq() {
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="container narrow">
        <header className="section-head">
          <h2 id="faq-title">أسئلة شائعة عن سطحة جدة</h2>
          <p>إجابات سريعة عن رقم السطحة والوصول والنقل بين المدن.</p>
        </header>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
