import ContactForm from '@/components/ContactForm';

const brandName =
  process.env.NEXT_PUBLIC_BRAND_NAME || 'Your Brand';
const companyLegal =
  process.env.NEXT_PUBLIC_COMPANY_LEGAL || 'Your Company Legal Name';
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@example.com';
const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || '000-000-0000';
const companyAddress =
  process.env.NEXT_PUBLIC_COMPANY_ADDRESS ||
  '183 หมู่ที่ 1 ตำบลคำตากล้า อำเภอคำตากล้า จังหวัดสกลนคร 47250';
const contactMapEmbed =
  process.env.NEXT_PUBLIC_CONTACT_MAP_EMBED || '';

export const metadata = {
  title: `ติดต่อเรา | ${brandName}`,
  description: `ติดต่อ ${brandName} และ ${companyLegal} สำหรับการสั่งซื้อหรือสอบถามข้อมูลเพิ่มเติม`
};

export default function ContactPage() {
  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container-md">
        <h1 className="mb-3 text-center">ติดต่อเรา</h1>
        <p className="text-center mb-5">
          หากมีคำถามเกี่ยวกับสินค้า การสั่งซื้อ การจัดส่ง
          หรือการรับประกัน สามารถติดต่อเราได้ผ่านแบบฟอร์มหรือช่องทางด้านล่าง
        </p>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <h2 className="h5 mb-3">ส่งข้อความหาเรา</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <h2 className="h5 mb-3">ข้อมูลติดต่อ</h2>
                <p className="mb-2 fw-bold">{companyLegal}</p>
                <p className="mb-2">{companyAddress}</p>
                <p className="mb-2">โทร: {contactPhone}</p>
                <p className="mb-3">
                  อีเมล:{' '}
                  <a href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </p>

                <h3 className="h6 mt-4 mb-2">เวลาทำการ</h3>
                <p className="mb-3">
                  จันทร์ – อาทิตย์ เวลา 10:00 – 20:00 น.
                </p>

                <h3 className="h6 mt-4 mb-2">แผนที่</h3>
                {contactMapEmbed ? (
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={contactMapEmbed}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="แผนที่ร้าน"
                    ></iframe>
                  </div>
                ) : (
                  <p className="text-muted">
                    * ยังไม่ได้ตั้งค่าแผนที่ใน NEXT_PUBLIC_CONTACT_MAP_EMBED
                  </p>
                )}
                <p className="small text-muted mt-2">
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
