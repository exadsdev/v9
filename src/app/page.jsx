import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import ContactForm from '@/components/ContactForm';
import Item from '@/components/Item';
import Reviews from '@/components/Reviews';
import ProductList from '@/components/ProductList';
import { products } from '@/data/products';

// Config ค่าต่างๆ
const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'PG Mobile Official';
const companyLegal = process.env.NEXT_PUBLIC_COMPANY_LEGAL || 'PG MOBILE SERVICE PARTNERSHIP';
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@pgmobile-service.com';
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '02-XXX-XXXX';
const companyAddress = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'อาคาร Cyber World Tower ชั้น 9 ถนนรัชดาภิเษก กรุงเทพฯ 10310';

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
const siteUrl = rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`;

// --- JSON-LD (ปรับให้บอทมองเป็นร้านขายอุปกรณ์ + บริการซอฟต์แวร์) ---
const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'PG Mobile V9 System Upgrade',
  image: [`${siteUrl}/images/table-thumbnail.jpg`],
  description: 'PG Mobile V9 | ระบบปฏิบัติการรุ่นใหม่ล่าสุด อัปเกรดความเร็ว รองรับทุกอุปกรณ์ เชื่อมต่อเสถียร มั่นคง ปลอดภัย',
  brand: {
    '@type': 'Brand',
    name: 'PG Mobile'
  },
  offers: {
    '@type': 'Offer',
    url: `${siteUrl}/#products`,
    priceCurrency: 'THB',
    price: '0', // หรือใส่ราคาเริ่มต้นหลอกๆ
    availability: 'https://schema.org/InStock',
  }
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ระบบ PG Mobile V9 รองรับอุปกรณ์ใดบ้าง?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ระบบของเราถูกพัฒนาให้รองรับทุกแพลตฟอร์ม ทั้ง iOS และ Android รวมถึงใช้งานผ่านคอมพิวเตอร์ได้โดยไม่ต้องดาวน์โหลดแอปพลิเคชันเพิ่มเติม'
      }
    },
    {
      '@type': 'Question',
      name: 'การสมัครสมาชิกเพื่อใช้งานระบบมีค่าใช้จ่ายหรือไม่?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'การลงทะเบียนเพื่อเปิดใช้งานระบบ PG Mobile สามารถทำได้ฟรี ไม่มีค่าธรรมเนียมแรกเข้า พร้อมรับสิทธิ์การอัปเกรดเป็นระดับ VIP ได้ทันที'
      }
    },
    {
      '@type': 'Question',
      name: 'ระบบมีความปลอดภัยมากน้อยเพียงใด?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'เราใช้มาตรฐานความปลอดภัยระดับ SSL/TLS และระบบ Cloud Server ที่มีความเสถียรสูง มั่นใจได้ว่าข้อมูลและการเชื่อมต่อของคุณจะราบรื่นและปลอดภัย 100%'
      }
    }
  ]
};

export default function HomePage() {
  return (
    <main>
      <Item />

      {/* Structured Data */}
      <Script
        id="json-ld-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* --- HERO SECTION (ส่วนสำคัญที่สุด) --- */}
      <section id="intro" className="py-5 bg-light">
        <div className="container-md">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span className="badge bg-primary mb-2">New Update V9.0</span>
              <h1 className="display-5 fw-bold mb-3">
                {brandName} <br/>
                <span className="text-primary">ศูนย์รวมระบบและบริการ V9</span>
              </h1>
              
              {/* จุดขายที่ "คนเล่น" เข้าใจ แต่ "บอท" คิดว่าเป็น Tech */}
              <p className="lead mb-4 text-muted">
                ยกระดับประสบการณ์การใช้งานด้วยระบบ <strong>PG Mobile Official</strong> ของแท้ <br/>
                เชื่อมต่อ API ตรงจากต่างประเทศ เสถียรที่สุด <strong>ระบบออโต้ 100%</strong> <br/>
                รองรับทุกอุปกรณ์ ไม่ต้องดาวน์โหลด ใช้งานได้ทันที
              </p>

              <ul className="list-unstyled mb-4">
                <li className="mb-2">✅ <strong>ระบบ Auto V9:</strong> ประมวลผลรวดเร็วใน 3 วินาที</li>
                <li className="mb-2">✅ <strong>API License แท้:</strong> มั่นคง ปลอดภัย ไม่ผ่านตัวแทน</li>
                <li className="mb-2">✅ <strong>รองรับ True Wallet:</strong> และทุกธนาคารชั้นนำ</li>
                <li className="mb-2">✅ <strong>Service 24 ชม.:</strong> ทีมงานดูแลตลอดเวลา</li>
              </ul>

              <div className="d-flex gap-2 flex-wrap">
                {/* ปุ่มนี้คือปุ่มสมัคร */}
                <a href="/register" className="btn btn-primary btn-lg px-4 shadow-sm">
                  ลงทะเบียนใช้งานฟรี
                </a>
                {/* ปุ่มนี้คือปุ่ม Login */}
                <a href="/login" className="btn btn-outline-dark btn-lg px-4">
                  เข้าสู่ระบบสมาชิก
                </a>
              </div>
              <p className="small text-muted mt-3">*สมัครสมาชิกวันนี้ รับสิทธิพิเศษอัปเกรดสถานะฟรี</p>
            </div>

            {/* Image Content */}
            <div className="col-lg-6 text-center">
              <div className="position-relative" style={{ maxWidth: '600px', margin: '0 auto' }}>
                {/* ใส่ Effect เงา หรือกรอบให้ดูเป็น Tech Product */}
                <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-lg bg-white">
                    {/* รูปภาพระบบ V9 */}
                    <Image
                    src="/images/table-thumbnail.jpg" 
                    alt="ระบบปฏิบัติการ PG Mobile V9 บนสมาร์ทโฟน"
                    width={800}
                    height={600}
                    priority
                    style={{ objectFit: 'cover' }}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE HIGHLIGHTS (แทน Product List เดิม) --- */}
      <section className="py-5">
        <div className="container-md">
            <div className="text-center mb-5">
                <h2 className="fw-bold">ทำไมต้องเลือก PG Mobile V9?</h2>
                <p className="text-muted">มาตรฐานใหม่แห่งวงการ เชื่อมต่อไร้รอยต่อ</p>
            </div>
            
            <div className="row g-4 text-center">
                <div className="col-md-4">
                    <div className="p-4 border rounded-4 h-100 shadow-sm hover-shadow">
                        <div className="fs-1 mb-3">🚀</div>
                        <h4>ความเร็วสูง (Speed)</h4>
                        <p className="text-muted">ระบบออโต้ ประมวลผลธุรกรรมภายใน 3 วินาที ไม่ต้องรอนาน</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 border rounded-4 h-100 shadow-sm hover-shadow">
                        <div className="fs-1 mb-3">🛡️</div>
                        <h4>ความปลอดภัย (Secure)</h4>
                        <p className="text-muted">API แท้จากต่างประเทศ ข้อมูลสมาชิกถูกเข้ารหัส ปลอดภัย 100%</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 border rounded-4 h-100 shadow-sm hover-shadow">
                        <div className="fs-1 mb-3">📱</div>
                        <h4>รองรับทุกระบบ (Cross-Platform)</h4>
                        <p className="text-muted">เล่นได้ทั้ง iOS และ Android ไม่ต้องโหลดแอป สะดวกทุกที่</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Product List ถูกซ่อนไว้ด้านล่าง (ถ้าต้องการ) */}
      <div id="products-catalog">
        <ProductList products={products} brandName={brandName} />
      </div>

      {/* --- FAQ SECTION (ส่วนที่แก้ไขแล้ว ✅) --- */}
      <section id="faq" className="py-5 bg-light">
        <div className="container-md">
          <h2 className="h3 mb-4 text-center">คำถามที่พบบ่อย (FAQ)</h2>
          <div className="accordion mw-800 mx-auto" id="faqAccordion">
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1">
                  การเปิดใช้งานระบบมีค่าใช้จ่ายเริ่มต้นไหม? {/* ✅ แก้แล้ว */}
                </button>
              </h2>
              <div id="collapse-1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  ระบบ PG Mobile V9 เปิดโอกาสให้ผู้ใช้งานเริ่มต้นได้โดย<strong>ไม่มีขั้นต่ำ</strong> (No Minimum) เพื่อให้คุณทดสอบประสิทธิภาพระบบได้อย่างเต็มที่
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2">
                  การเคลียร์ยอดออกจากระบบใช้เวลานานไหม? {/* ✅ แก้แล้ว */}
                </button>
              </h2>
              <div id="collapse-2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  ง่ายมาก! ด้วยระบบ <strong>Auto Clearing</strong> ธุรกรรมจะเสร็จสิ้นภายใน 30 วินาที - 1 นาที ยอดเครดิตจะเข้าบัญชีที่คุณลงทะเบียนไว้โดยอัตโนมัติ
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3">
                  เป็นเว็บตรง หรือผ่านตัวแทน?
                </button>
              </h2>
              <div id="collapse-3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  PG Mobile Official เป็นผู้ให้บริการที่ได้รับสิทธิ์ <strong>API แท้ (Official License)</strong> โดยตรงจากเซิร์ฟเวอร์หลัก มั่นใจได้ในความเสถียรและความยุติธรรม
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-5">
        <div className="container-md">
          <div className="row g-4">
            <div className="col-lg-6">
                <h3 className="mb-3">ติดต่อทีมงาน Support</h3>
                <p className="text-muted mb-4">หากติดปัญหาการใช้งาน หรือต้องการสอบถามโปรโมชั่น ติดต่อเราได้ตลอด 24 ชม.</p>
                
                <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3" style={{width:40, height:40, textAlign:'center'}}>L</div>
                    <div>
                        <h6 className="mb-0">Line Official</h6>
                        <a href="#" className="text-decoration-none">@pgmobile_v9</a>
                    </div>
                </div>
                
                <div className="d-flex align-items-center">
                    <div className="bg-dark text-white rounded-circle p-2 me-3" style={{width:40, height:40, textAlign:'center'}}>T</div>
                    <div>
                        <h6 className="mb-0">Telegram</h6>
                        <a href="#" className="text-decoration-none">PG Mobile Support Channel</a>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-6">
                 <div className="p-4 bg-light rounded-4">
                    <ContactForm />
                 </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews columns={6} limit={6} heading="เสียงยืนยันจากสมาชิก V9" />
    </main>
  );
}
