'use client'; // 👈 สำคัญมาก! ต้องมีบรรทัดนี้

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ⚠️ ใส่ลิงก์ปลายทางของคุณตรงนี้
const REGISTER_DESTINATION_URL = "https://line.me/ti/p/@yourlineid";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  // ใช้ useEffect เพื่อเปลี่ยน Title แทน next/head
  useEffect(() => {
    document.title = "ลงทะเบียนสมาชิกใหม่ | PG Mobile V9";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // จำลองการตรวจสอบสิทธิ์
    setTimeout(() => {
      window.location.href = REGISTER_DESTINATION_URL;
    }, 1500);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-white py-5">
      <div className="container" style={{ maxWidth: '500px' }}>
        
        <div className="text-center mb-5">
          <h1 className="fw-bold display-6 mb-2">สร้างบัญชี V9 ใหม่</h1>
          <p className="text-muted">กรอกข้อมูลเพื่อเปิดใช้งานระบบ PG Mobile Official</p>
        </div>

        <div className="card shadow-sm border rounded-4 overflow-hidden">
          <div className="card-header bg-light p-3 border-bottom">
            <small className="fw-bold text-uppercase text-primary letter-spacing-1">แบบฟอร์มลงทะเบียน</small>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">เบอร์โทรศัพท์ (Phone Number) <span className="text-danger">*</span></label>
                  <input type="tel" className="form-control" placeholder="08x-xxx-xxxx" required />
                </div>
                
                <div className="col-12">
                  <label className="form-label">ตั้งรหัสผ่าน (Create Password) <span className="text-danger">*</span></label>
                  <input type="password" className="form-control" placeholder="อย่างน้อย 6 ตัวอักษร" required />
                </div>

                <div className="col-12">
                  <label className="form-label">ยืนยันรหัสผ่าน (Confirm Password) <span className="text-danger">*</span></label>
                  <input type="password" className="form-control" placeholder="กรอกรหัสผ่านอีกครั้ง" required />
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label small text-muted" htmlFor="terms">
                      ฉันยอมรับ <Link href="/terms" className="text-dark fw-bold">เงื่อนไขการใช้งาน</Link> และ <Link href="/privacy" className="text-dark fw-bold">นโยบายความเป็นส่วนตัว</Link>
                    </label>
                  </div>
                </div>

                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-success btn-lg w-100 fw-bold shadow-sm" disabled={loading}>
                    {loading ? 'กำลังตรวจสอบสิทธิ์...' : 'ยืนยันการลงทะเบียน (Register)'}
                  </button>
                  <p className="text-center mt-2 small text-muted">
                    *ระบบจะพาคุณไปยังเจ้าหน้าที่เพื่อยืนยันตัวตนขั้นสุดท้าย
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-muted">มีบัญชีอยู่แล้ว? <Link href="/login" className="text-primary fw-bold">เข้าสู่ระบบที่นี่</Link></p>
        </div>

      </div>
    </div>
  );
}