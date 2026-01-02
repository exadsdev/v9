'use client'; // 👈 สำคัญมาก! ต้องมีบรรทัดนี้

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ⚠️ ใส่ลิงก์ปลายทางของคุณตรงนี้
const DESTINATION_URL = "https://line.me/ti/p/@yourlineid"; 

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  // ใช้ useEffect เพื่อเปลี่ยน Title แทน next/head
  useEffect(() => {
    document.title = "เข้าสู่ระบบ V9 System | PG Mobile Official";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // จำลองการโหลด 1.5 วินาที
    setTimeout(() => {
      window.location.href = DESTINATION_URL;
    }, 1500);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4 p-md-5">
          
          <div className="text-center mb-4">
            <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                 style={{ width: '60px', height: '60px', fontSize: '24px' }}>
              V9
            </div>
            <h2 className="fw-bold text-dark">System Login</h2>
            <p className="text-muted small">เข้าสู่ระบบจัดการ PG Mobile V9</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary">เบอร์โทรศัพท์ / User ID</label>
              <input 
                type="text" 
                className="form-control form-control-lg bg-light fs-6" 
                placeholder="กรอกเบอร์โทรศัพท์"
                required 
              />
            </div>

            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary">รหัสผ่าน (Password)</label>
              <input 
                type="password" 
                className="form-control form-control-lg bg-light fs-6" 
                placeholder="••••••••"
                required 
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100 fw-bold mb-3 shadow-sm"
              disabled={loading}
            >
              {loading ? (
                <span>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  กำลังเชื่อมต่อ V9 Server...
                </span>
              ) : (
                'เข้าสู่ระบบ (Connect)'
              )}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="small text-muted mb-2">ยังไม่มีบัญชีผู้ใช้งาน?</p>
            <Link href="/register" className="text-decoration-none fw-bold text-primary">
              ลงทะเบียนใช้งานฟรี
            </Link>
          </div>
          
          <div className="text-center mt-3">
             <Link href="/" className="text-muted small text-decoration-none">
               &larr; กลับหน้าหลัก
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
}