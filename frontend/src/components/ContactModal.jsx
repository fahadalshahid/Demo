import React, { useState, useEffect } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', acceptedPrivacy: false });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '', acceptedPrivacy: false });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong while submitting.');
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMsg('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={handleClose} aria-label="Close">✕</button>

        {status === 'success' ? (
          <div className="modal__success">
            <div className="modal__success-icon">🔥</div>
            <h2>Thanks voor je bericht!</h2>
            <p>We hebben je bericht ontvangen en komen snel bij je terug. Get ready to get hyped.</p>
            <button className="modal__btn" onClick={handleClose}>Sluiten</button>
          </div>
        ) : (
          <>
            <div className="modal__header">
              <h2>Leave us a message</h2>
              <p>Of bel <a href="tel:+31615337496">+31 6 1533 7496</a></p>
            </div>

            <form className="modal__form" onSubmit={handleSubmit}>
              <div className="modal__field">
                <label htmlFor="name">Voor- en achternaam *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jan de Vries"
                />
              </div>

              <div className="modal__field">
                <label htmlFor="email">E-mail *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jan@bedrijf.nl"
                />
              </div>

              <div className="modal__field">
                <label htmlFor="phone">Telefoonnummer <span className="modal__optional">(Optioneel)</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+31 6 0000 0000"
                />
              </div>

              <div className="modal__field">
                <label htmlFor="message">Bericht *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Vertel ons over jouw project..."
                />
              </div>

              <div className="modal__checkbox">
                <input
                  id="privacy"
                  name="acceptedPrivacy"
                  type="checkbox"
                  checked={form.acceptedPrivacy}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="privacy">
                  Ik accepteer de <a href="#privacy">Privacyvoorwaarden</a> *
                </label>
              </div>

              {status === 'error' && (
                <div className="modal__error">{errorMsg}</div>
              )}

              <button
                type="submit"
                className="modal__btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Verzenden...' : 'Verstuur bericht'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
