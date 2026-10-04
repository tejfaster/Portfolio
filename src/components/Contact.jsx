import {
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div
        className="contact__background"
        aria-hidden="true"
      />

      <div
        className="contact__overlay"
        aria-hidden="true"
      />

      <div className="contact__content">
        <div className="contact__card">
          <div
            className="contact__card-glow"
            aria-hidden="true"
          />

          <div className="contact__icon">
            <Send
              size={34}
              strokeWidth={1.5}
            />
          </div>

          <div className="contact__main">
            <span className="contact__eyebrow">
              NEXT CHAPTER
            </span>

            <h2 className="contact__title">
              Let’s build something meaningful
              <br />
              together.
            </h2>

            <p className="contact__description">
              I’m open to Pflichtpraktikum and
              working-student opportunities in Data
              Engineering, Data Science and AI.
              <br />
              Let’s connect and create real impact
              with data.
            </p>

            <div className="contact__actions">
              <a
                href="#projects"
                className="contact__button contact__button--primary"
              >
                <span>View my projects</span>

                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                />
              </a>

              <a
                href="/resume/Tej_Pratap_Master_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                <FileText
                  size={19}
                  strokeWidth={1.7}
                />

                <span>See my resume</span>
              </a>

              <a
                href="mailto:tej.pratap1227@gmail.com"
                className="contact__button"
              >
                <Mail
                  size={19}
                  strokeWidth={1.7}
                />

                <span>Get in touch</span>
              </a>
            </div>
          </div>

          <div
            className="contact__art"
            aria-hidden="true"
          >
            <span className="contact__art-note">
              New challenges.
              <br />
              Real impact.
              <br />
              Let’s connect.
            </span>

            <span className="contact__art-arrow">
              ↘
            </span>
          </div>
        </div>

        <footer className="contact__footer">
          <div className="contact__copyright">
            © 2026 Tej Pratap — Data · AI · Analytics
            Engineering
          </div>

          <div className="contact__links">
            <a
              href="mailto:tej.pratap1227@gmail.com"
              className="contact__link"
            >
              <Mail
                size={20}
                strokeWidth={1.7}
              />

              <span>
                tej.pratap1227@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/tej-pratap-25527a185/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__social-icon">
                in
              </span>

              <span>
                linkedin.com/in/tej-pratap-25527a185
              </span>
            </a>

            <a
              href="https://github.com/tejfaster"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__social-icon contact__social-icon--github">
                GH
              </span>

              <span>
                github.com/tejfaster
              </span>
            </a>

            <span className="contact__link">
              <MapPin
                size={20}
                strokeWidth={1.7}
              />

              <span>Munich, Germany</span>
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;