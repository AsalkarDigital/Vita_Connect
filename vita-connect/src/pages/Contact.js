import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { areas } from '../data/areas';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../utils/constants';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const init = { name: '', phone: '', whatsapp: '', sameAsPhone: true, category: '', area: '', experience: '', description: '' };

const Contact = () => {
  const [form, setForm] = useState(init);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const ref = useScrollAnimation();

  useEffect(() => { 
    document.title = 'Join as Service Provider — VitaConnect'; 
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit number';
    if (!form.sameAsPhone && form.whatsapp && !/^\d{10}$/.test(form.whatsapp.trim())) e.whatsapp = 'Enter valid 10-digit number';
    if (!form.category) e.category = 'Select a category';
    if (!form.area) e.area = 'Select an area';
    if (!form.description.trim()) e.description = 'Description is required';
    else if (form.description.trim().length < 20) e.description = 'At least 20 characters required';
    return e;
  };

  const handleChange = (ev) => {
    const { name, value, type, checked } = ev.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((p) => { const c = { ...p }; delete c[name]; return c; });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    try {
      const prev = JSON.parse(localStorage.getItem('vc-applications') || '[]');
      prev.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem('vc-applications', JSON.stringify(prev));
    } catch {} // eslint-disable-line
    setSubmitted(true);
    setForm(init);
    setErrors({});
  };

  const faqs = [
    { q: 'Is listing free?', a: 'Yes! Currently, listing on VitaConnect is completely free for all service providers.' },
    { q: 'How do I get listed?', a: 'Fill the form on this page with your details. Our team will review and add you within 24 hours.' },
    { q: 'Can I update my details later?', a: 'Yes, contact us via WhatsApp and we\'ll update your profile promptly.' },
    { q: 'Do I need to pay for leads?', a: 'No. Customers contact you directly via WhatsApp. We don\'t charge per lead.' },
  ];

  return (
    <div className="page-enter" ref={ref}>
      <section className="vc-contact-header">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb mb-0" style={{ fontSize: '0.85rem' }}>
              <li className="breadcrumb-item"><Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link></li>
              <li className="breadcrumb-item active" style={{ color: 'var(--primary)' }}>Contact</li>
            </ol>
          </nav>
          <h1 style={{ fontWeight: 700 }}>Join VitaConnect</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Fill this form and we'll get back to you within 24 hours</p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: 36, background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="row g-5">
            {/* Form */}
            <div className="col-lg-7 fade-in-up">
              {submitted ? (
                <div className="text-center py-5" style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '52px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <i className="bi bi-check-circle-fill" style={{ fontSize: '2.5rem', color: '#28A745' }}></i>
                  </div>
                  <h3 style={{ fontWeight: 700 }}>Application Submitted!</h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: 420, margin: '0 auto' }}>
                    Thank you! We'll review your application and contact you within 24 hours.
                  </p>
                  <button className="btn btn-primary-custom btn-animate mt-3" onClick={() => setSubmitted(false)}>Submit Another</button>
                </div>
              ) : (
                <form className="vc-contact-form" onSubmit={handleSubmit} noValidate
                  style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                  <h4 className="mb-4" style={{ fontWeight: 600 }}>
                    <i className="bi bi-person-plus me-2" style={{ color: 'var(--primary)' }}></i>
                    Service Provider Application
                  </h4>

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label vc-form-label">Full Name *</label>
                    <input type="text" id="name" name="name" className={`form-control vc-form-input ${errors.name ? 'is-invalid' : ''}`} placeholder="e.g. Ramesh Patil" value={form.name} onChange={handleChange} />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label vc-form-label">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" className={`form-control vc-form-input ${errors.phone ? 'is-invalid' : ''}`} placeholder="e.g. 9876543210" maxLength={10} value={form.phone} onChange={handleChange} />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>

                  <div className="mb-3">
                    <div className="form-check mb-2">
                      <input type="checkbox" id="sameAsPhone" name="sameAsPhone" className="form-check-input" checked={form.sameAsPhone} onChange={handleChange} style={{ borderColor: 'var(--primary)' }} />
                      <label htmlFor="sameAsPhone" className="form-check-label" style={{ fontSize: '0.88rem' }}>WhatsApp number same as phone</label>
                    </div>
                    {!form.sameAsPhone && (
                      <>
                        <input type="tel" name="whatsapp" className={`form-control vc-form-input ${errors.whatsapp ? 'is-invalid' : ''}`} placeholder="WhatsApp number" maxLength={10} value={form.whatsapp} onChange={handleChange} />
                        {errors.whatsapp && <div className="invalid-feedback">{errors.whatsapp}</div>}
                      </>
                    )}
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="category" className="form-label vc-form-label">Service Category *</label>
                      <select id="category" name="category" className={`form-select vc-form-input ${errors.category ? 'is-invalid' : ''}`} value={form.category} onChange={handleChange}>
                        <option value="">Select Category</option>
                        {categories.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
                      </select>
                      {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="area" className="form-label vc-form-label">Area / Location *</label>
                      <select id="area" name="area" className={`form-select vc-form-input ${errors.area ? 'is-invalid' : ''}`} value={form.area} onChange={handleChange}>
                        <option value="">Select Area</option>
                        {areas.map((a) => <option key={a.id} value={a.name}>{a.name}</option>)}
                      </select>
                      {errors.area && <div className="invalid-feedback">{errors.area}</div>}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="experience" className="form-label vc-form-label">Experience</label>
                    <input type="text" id="experience" name="experience" className="form-control vc-form-input" placeholder="e.g. 5 years" value={form.experience} onChange={handleChange} />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="description" className="form-label vc-form-label">Description of Services *</label>
                    <textarea id="description" name="description" className={`form-control vc-form-input ${errors.description ? 'is-invalid' : ''}`} rows={4} placeholder="Describe the services you offer (min 20 characters)" value={form.description} onChange={handleChange}></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                    <small style={{ color: 'var(--text-muted)' }}>{form.description.length}/20 characters minimum</small>
                  </div>

                  <button type="submit" className="btn btn-primary-custom btn-lg btn-animate w-100">
                    <i className="bi bi-send me-2"></i>Submit Application
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-5 fade-in-up">
              {/* Benefits */}
              <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px', marginBottom: 20, boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                <h5 style={{ fontWeight: 600, marginBottom: 18 }}>
                  <i className="bi bi-check-circle-fill me-2" style={{ color: '#28A745' }}></i>Why Join VitaConnect?
                </h5>
                <ul className="vc-benefits-list">
                  <li><i className="bi bi-check2-circle"></i> Free listing — no hidden charges</li>
                  <li><i className="bi bi-check2-circle"></i> Direct customer leads via WhatsApp</li>
                  <li><i className="bi bi-check2-circle"></i> Increase your online visibility</li>
                  <li><i className="bi bi-check2-circle"></i> Verified badge for trusted providers</li>
                  <li><i className="bi bi-check2-circle"></i> Featured listing options coming soon</li>
                </ul>
              </div>

              {/* Contact Cards */}
              <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px', marginBottom: 20, boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                <h5 style={{ fontWeight: 600, marginBottom: 18 }}>
                  <i className="bi bi-headset me-2" style={{ color: 'var(--primary)' }}></i>Direct Contact
                </h5>
                <div className="d-flex flex-column gap-12">
                  <a href={generateWhatsAppLink(CONTACT_PHONE, 'Hi! I want to list my service on VitaConnect.')} target="_blank" rel="noopener noreferrer"
                    className="d-flex align-items-center gap-3 p-3" style={{ background: '#E8F5E9', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', marginBottom: 12, border: '1px solid #C8E6C9' }}>
                    <i className="bi bi-whatsapp" style={{ fontSize: '1.4rem', color: 'var(--whatsapp)' }}></i>
                    <div><strong style={{ fontSize: '0.88rem' }}>WhatsApp</strong><br /><span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>+91 9766761763</span></div>
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`}
                    className="d-flex align-items-center gap-3 p-3" style={{ background: 'var(--primary-light)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', border: '1px solid #FFD6C4' }}>
                    <i className="bi bi-envelope" style={{ fontSize: '1.4rem', color: 'var(--primary)' }}></i>
                    <div><strong style={{ fontSize: '0.88rem' }}>Email</strong><br /><span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{CONTACT_EMAIL}</span></div>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                <h5 style={{ fontWeight: 600, marginBottom: 18 }}>
                  <i className="bi bi-question-circle me-2" style={{ color: 'var(--accent)' }}></i>FAQs
                </h5>
                <div className="vc-faq-list">
                  {faqs.map((faq, i) => (
                    <div key={i} className="vc-faq-item">
                      <button className="vc-faq-question" onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}>
                        <span>{faq.q}</span>
                        <i className={`bi ${faqOpen === i ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                      </button>
                      <div className={`vc-faq-answer ${faqOpen === i ? 'open' : ''}`}>
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;